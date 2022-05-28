import type { Response } from "express";
import type { PrivateRequest } from "../types";
import Stream from "../entities/stream";
import paginate from "../services/paginate";

export default async function streams(req: PrivateRequest, res: Response) {
  const { limit, offset } = paginate(req);
  const streams = await Stream.findAll({
    order: [
      ["rating", "desc"],
      ["createdAt", "asc"],
    ],
    limit,
    offset,
  });

  res.json({ data: { streams } });
}
