/*
  # Create News Table for Dragonstone Official News

  1. New Tables
    - `news` table for official government announcements
      - `id` (uuid, primary key)
      - `title` (text) - News headline
      - `excerpt` (text) - Short summary
      - `content` (text) - Full article content
      - `category` (text) - News category (Royal Decree, Military Update, etc.)
      - `published_at` (timestamptz) - Publication date
      - `author` (text) - Official author/office
      - `featured` (boolean) - Whether to display prominently
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on `news` table
    - Add policy for public read access (all news is public)
    - Restrict inserts to service role only (admin updates via API)
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'Official News',
  published_at timestamptz NOT NULL DEFAULT now(),
  author text NOT NULL DEFAULT 'The Crown',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news"
  ON news FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only service role can insert news"
  ON news FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Only service role can update news"
  ON news FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX idx_news_published_at ON news(published_at DESC);
CREATE INDEX idx_news_featured ON news(featured);
