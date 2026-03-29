import { prisma } from "../lib/prisma.js";
import type { Request, Response } from "express";

export const selectedQuestions = async (req: Request, res: Response) => {
  const questionObject = await prisma.$queryRaw`
  SELECT question, answer, lat, lng FROM "Question"
  ORDER BY RANDOM()
  LIMIT 10
`;

  return res.json(questionObject);
};
