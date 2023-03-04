import { NextApiRequest, NextApiResponse } from "next";
import { table } from "../../utils/Airtable";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    if (!table) {
      res.status(500).json({ msg: "Table is undefined! 😕" });
      return;
    }

    const records = await table.select({}).firstPage();

    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};
