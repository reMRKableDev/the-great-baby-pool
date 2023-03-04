export namespace Constants {
  export const WEBSITE_URL = `${process.env.URL}/api/records`;

  export const AIRTABLE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`;
  export const BEARER = `Bearer ${process.env.AIRTABLE_API_KEY}`;
  export const JSON_TYPE = "application/json";

  export const HTTP_STATUS_OK = 200;
  export const HTTP_STATUS_NOT_FOUND = 404;
  export const HTTP_STATUS_UNPROCESSABLE_ENTITY = 422;
  export const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
}
