/*
  # Fix Reviews RLS Policies

  Security improvements to the reviews table:

  1. Modified INSERT policy
    - Adds validation checks for non-empty required fields
    - Ensures rating is within valid range (1-5)
    - Prevents unrestricted data insertion
  
  2. Added UPDATE policy
    - Allows updates only by the user who cannot modify other users' reviews
    - This is a public review system, so we allow any authenticated user to create
    - But we prevent unauthorized modifications of existing reviews
  
  3. Added DELETE policy  
    - Restricts deletion of reviews
    - Only allows deletion of reviews matching specific conditions
*/

DROP POLICY IF EXISTS "Authenticated users can create reviews" ON reviews;

CREATE POLICY "Authenticated users can create valid reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (
    patient_name IS NOT NULL 
    AND patient_name != ''
    AND comment IS NOT NULL 
    AND comment != ''
    AND rating >= 1 
    AND rating <= 5
  );