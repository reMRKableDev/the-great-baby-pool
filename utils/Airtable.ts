import { Constants } from "./constants";

const { AIRTABLE_URL, BEARER, JSON_TYPE } = Constants;

export const fetchAirtableData = async () => {
  try {
    const response = await fetch(AIRTABLE_URL, {
      headers: {
        Authorization: BEARER,
        "Content-Type": JSON_TYPE,
        Accept: JSON_TYPE,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Airtable: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong while fetching data from Airtable");
  }
};
