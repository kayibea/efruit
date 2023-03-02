import { Response, Request } from "express";

import { getRandomNumber as rn, arrayShuffle } from "../utils/util";
import * as fruitService from "../services/fruitService";

export const getFruits = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 5;
  const fruits = await fruitService.getFruits();

  const randIndex = rn(0, fruits.length - 1);
  const randomFruits = fruits.slice(randIndex, randIndex + limit);

  res.status(200).json(arrayShuffle(randomFruits));
};
