import type { User, Deposit } from "@prisma/client";

import { prisma } from "~/db.server";

export function getDeposit({
  id,
  userId,
}: Pick<Deposit, "id"> & {
  userId: User["id"];
}) {
  return prisma.deposit.findFirst({
    select: { id: true, amount: true, paymentMethod: true },
    where: { id, userId },
  });
}

export function getDepositListItems({ userId }: { userId: User["id"] }) {
  return prisma.deposit.findMany({
    where: { userId },
    select: { id: true,  paymentMethod: true, createdAt: true, amount: true, status: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createDeposit(
  amount : number,
  paymentMethod: string,
  userId : string,
) {
  return prisma.deposit.create({
    data: {
      amount,
      paymentMethod,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteDeposit({
  id,
  userId,
}: Pick<Deposit, "id"> & { userId: User["id"] }) {
  return prisma.deposit.deleteMany({
    where: { id, userId },
  });
}
