import { NextApiRequest, NextApiResponse } from "next";
import { Constants } from "../../utils/constants";
import { fetchAirtableData } from "../../utils/airtable";

const {
  HTTP_STATUS_OK,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
} = Constants;

export default async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const tableRecords = await fetchAirtableData();

    if (!tableRecords) {
      return res.status(HTTP_STATUS_NOT_FOUND).json({
        msg: `Failed to fetch records from Airtable with status code: ${HTTP_STATUS_NOT_FOUND}`,
      });
    }

    return res.status(HTTP_STATUS_OK).json(tableRecords);
  } catch (error) {
    return res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
      msg: `Failed to connect to Airtable API with status code: ${HTTP_STATUS_INTERNAL_SERVER_ERROR} `,
    });
  }
};
