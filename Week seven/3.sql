WITH FirstExam AS (
  SELECT student_id, subject, score AS first_score
  FROM Scores
  WHERE (student_id, subject, exam_date) IN (
    SELECT student_id, subject, MIN(exam_date)
    FROM Scores
    GROUP BY student_id, subject
  )
),
LastExam AS (
  SELECT student_id, subject, score AS latest_score
  FROM Scores
  WHERE (student_id, subject, exam_date) IN (
    SELECT student_id, subject, MAX(exam_date)
    FROM Scores
    GROUP BY student_id, subject
  )
)
SELECT 
  f.student_id,
  f.subject,
  f.first_score,
  l.latest_score
FROM FirstExam f
JOIN LastExam l
  ON f.student_id = l.student_id AND f.subject = l.subject
WHERE l.latest_score > f.first_score
ORDER BY f.student_id, f.subject;