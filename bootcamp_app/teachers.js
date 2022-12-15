const { Pool } = require('pg');


const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});
const queryString = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;`;
const cohort_name = process.argv[2];
const values = [`${cohort_name}`];
pool.query(queryString, values)
.then ((result) => {
  for (row of result.rows) {
    console.log(`${row.cohort}: ${row.teacher}`)
  }
})
.catch ((err) => {
  console.log(err).stack;
})
