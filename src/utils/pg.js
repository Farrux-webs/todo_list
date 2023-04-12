const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://postgres:Martinelli_11@localhost:5432/exam3",
}); 

const fetchOne = async (SQL, ...values) => {
  const client = await pool.connect();

  try {
    const {rows: [row]} = await client.query(SQL, values.length ? values : null);

    return row;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.release();
  }
};

const fetch = async (Sql, ...values) => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(Sql, values.length ? values : null);

    return rows;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.release();
  }
};

module.exports = {
  fetchOne,
  fetch,
};
