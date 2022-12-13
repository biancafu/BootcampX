SELECT students.name as student, avg(assignment_submissions.duration) as average_assignment_duration, avg(assignments.duration)
FROM assignment_submissions 
JOIN students ON students.id = student_id
JOIN assignments ON assignment_id = assignments.id
WHERE students.end_date IS NULL 
GROUP BY students.name
HAVING avg(assignments.duration) > avg(assignment_submissions.duration)
ORDER BY avg(assignment_submissions.duration) ASC;
