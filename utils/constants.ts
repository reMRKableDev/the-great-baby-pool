export namespace Constants {
  export const WEBSITE_URL = `${process.env.URL}/api/records`;

  export const AIRTABLE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`;
  export const BEARER = `Bearer ${process.env.AIRTABLE_API_KEY}`;
  export const JSON_TYPE = "application/json";

  export const HTTP_STATUS_OK = 200;
  export const HTTP_STATUS_NOT_FOUND = 404;
  export const HTTP_STATUS_UNPROCESSABLE_ENTITY = 422;
  export const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

  export const BG_GREEN = "#ABC485";
  export const BG_YELLOW = "#FCF0BD";
  export const HOVER_BORDER_GREEN = "#749E35";
  export const HOVER_BORDER_YELLOW = "#F7CE25";
  export const HOVER_BG_AND_BORDER_GREEN = "#455E1F";
  export const HOVER_BG_AND_BORDER_YELLOW = "#DEB921";
}
