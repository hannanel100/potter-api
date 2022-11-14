import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/prisma";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const quotes = await prisma.potter_quote.findMany();
  // get a random quote from the database
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return res.status(200).json(randomQuote);
};
export default handler;
