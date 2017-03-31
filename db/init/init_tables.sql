  CREATE TABLE IF NOT EXISTS ideas (
    id SERIAL PRIMARY KEY,
    idea text NOT NULL,
    date_id int,
  );

  CREATE TABLE IF NOT EXISTS date (
    id SERIAL PRIMARY KEY,
    table_date CONVERT(VARCHAR(15), GETDATE(),10),
  )
