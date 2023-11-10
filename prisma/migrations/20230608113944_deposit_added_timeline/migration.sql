/*
  Warnings:

  - Added the required column `updatedAt` to the `Deposit` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Deposit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" BIGINT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Deposit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Deposit" ("amount", "id", "paymentMethod", "userId") SELECT "amount", "id", "paymentMethod", "userId" FROM "Deposit";
DROP TABLE "Deposit";
ALTER TABLE "new_Deposit" RENAME TO "Deposit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
