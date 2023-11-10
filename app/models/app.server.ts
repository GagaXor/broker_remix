import { prisma } from "~/db.server";

export function getAppDetails() {
  return prisma.app.findMany({
    select: { btc: true },
  });
}

