/*
  # Create reviews and testimonials table

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key)
      - `patient_name` (text) - Name of the patient leaving review
      - `rating` (integer) - Rating from 1-5
      - `comment` (text) - Review text
      - `video_url` (text, optional) - URL to video testimonial
      - `is_featured` (boolean) - Whether to feature on homepage
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public read access (reviews are public)
    - Add policy for authenticated users to create reviews
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  video_url text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can create reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (true);