SELECT cohorts.name as cohort, count(assignment_submissions.*) as total_submissions 
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
GROUP BY cohorts.name
ORDER BY count(students.cohort_id) DESC ;