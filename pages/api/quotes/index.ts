import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/prisma";
type QueryConfig = {
  take?: number;
  skip?: number;
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const limit = req.query.limit;
  const limitStr = Array.isArray(limit) ? limit[0] : limit;
  const skip = req.query.skip;
  const skipStr = Array.isArray(skip) ? skip[0] : skip;

  const queryConfig: QueryConfig = {};
  if (limitStr) {
    const take = parseInt(limitStr);
    if (isNaN(take)) {
      res.status(400).json({ message: "limit must be a number" });
      return;
    }
    queryConfig.take = take;
  }
  if (skipStr) {
    const skip = parseInt(skipStr);
    if (isNaN(skip)) {
      res.status(400).json({ message: "skip must be a number" });
      return;
    }
    queryConfig.skip = skip;
  }

  const quotes = await prisma.potter_quote.findMany(queryConfig);
  return res.status(200).json(quotes);
};

export default handler;
