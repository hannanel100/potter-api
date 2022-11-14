import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const person = req.query.person;
  const personStr = Array.isArray(person) ? person[0] : person;
  if (!personStr) {
    res.status(400).json({ message: "person is required" });
    return;
  }
  const quotes = await prisma.potter_quote.findMany({
    where: {
      person: {
        contains: personStr,
      },
    },
  });
  return res.status(200).json(quotes);
};

export default handler;
