import { neon } from '@neondatabase/serverless';

// Initialize Neon client
export const sql = neon(process.env.DATABASE_URL!);

// Initialize the subscribers table if it doesn't exist
export async function initDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS subscribers (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255),
      source VARCHAR(100) DEFAULT 'website',
      subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      confirmed BOOLEAN DEFAULT FALSE,
      confirmed_at TIMESTAMP WITH TIME ZONE,
      unsubscribed BOOLEAN DEFAULT FALSE,
      unsubscribed_at TIMESTAMP WITH TIME ZONE,
      ip_address VARCHAR(45),
      user_agent TEXT
    )
  `;
  
  // Create index for faster lookups
  await sql`
    CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email)
  `;
}

// Add a new subscriber
export async function addSubscriber({
  email,
  name,
  source = 'website',
  ipAddress,
  userAgent,
}: {
  email: string;
  name?: string;
  source?: string;
  ipAddress?: string;
  userAgent?: string;
}) {
  const result = await sql`
    INSERT INTO subscribers (email, name, source, ip_address, user_agent)
    VALUES (${email}, ${name || null}, ${source}, ${ipAddress || null}, ${userAgent || null})
    ON CONFLICT (email) 
    DO UPDATE SET 
      name = COALESCE(EXCLUDED.name, subscribers.name),
      unsubscribed = FALSE,
      unsubscribed_at = NULL
    RETURNING id, email, name, subscribed_at
  `;
  return result[0];
}

// Get all active subscribers
export async function getActiveSubscribers() {
  return await sql`
    SELECT id, email, name, subscribed_at, source
    FROM subscribers 
    WHERE unsubscribed = FALSE
    ORDER BY subscribed_at DESC
  `;
}

// Get subscriber count
export async function getSubscriberCount() {
  const result = await sql`
    SELECT COUNT(*) as count FROM subscribers WHERE unsubscribed = FALSE
  `;
  return parseInt(result[0].count as string, 10);
}

// Unsubscribe
export async function unsubscribe(email: string) {
  return await sql`
    UPDATE subscribers 
    SET unsubscribed = TRUE, unsubscribed_at = CURRENT_TIMESTAMP
    WHERE email = ${email}
    RETURNING id, email
  `;
}
