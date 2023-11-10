-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Deposit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" BIGINT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Deposit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Deposit" ("amount", "createdAt", "id", "paymentMethod", "updatedAt", "userId") SELECT "amount", "createdAt", "id", "paymentMethod", "updatedAt", "userId" FROM "Deposit";
DROP TABLE "Deposit";
ALTER TABLE "new_Deposit" RENAME TO "Deposit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
