import Airtable from "airtable";

function createTable() {
  let table;

  Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  if (
    process.env.AIRTABLE_BASE_ID !== undefined &&
    process.env.AIRTABLE_TABLE_NAME !== undefined
  ) {
    const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

    table = base(process.env.AIRTABLE_TABLE_NAME);
  } else {
    console.error("AIRTABLE_BASE_ID or AIRTABLE_TABLE_NAME is undefined");
  }

  return table;
}

const table = createTable();

export { table };
