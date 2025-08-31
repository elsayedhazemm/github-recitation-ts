// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import { fibonacci } from "./fib";

interface FibParams {
  num: string; // Express route params are strings
}

export default function fibRoute(req: Request<FibParams>, res: Response): void {
  const numStr = req.params.num;          // typed string
  const n = Number.parseInt(numStr, 10);  // typed number

  if (!Number.isFinite(n) || n < 0) {
    res.send(`fibonacci(${numStr}) is undefined`);
    return;
  }

  const fibN: number = fibonacci(n);      // typed number
  res.send(`fibonacci(${n}) is ${fibN}`);
}

