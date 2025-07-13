SELECT
  CASE
  WHEN  A + C <= B OR A + B <= C OR B + C <= A THEN 'Not A Triangle'
  WHEN A = B AND B = C THEN 'Equilateral'
  WHEN A = B OR B = C OR A = C THEN 'Isosceles'
  ELSE 'Scalene'
  END AS TriangleType
FROM TRIANGLES;
