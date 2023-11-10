/*
  Warnings:

  - You are about to drop the column `bitcoinCashWallet` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `btcwallet` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `ethWallet` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `usdtWallet` on the `App` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_App" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sitename" TEXT,
    "btc" TEXT NOT NULL DEFAULT 'bc1qr0dpwqwunqlwdyuwqagr8k6vety73fpupw6ctz',
    "eth" TEXT,
    "usdt" TEXT,
    "btCash" TEXT,
    "adminEmail" TEXT DEFAULT 'admin@coin-stocks.com',
    "supportEmail" TEXT DEFAULT 'support@coin-stocks.com',
    "passwordHash" TEXT
);
INSERT INTO "new_App" ("id", "passwordHash", "sitename") SELECT "id", "passwordHash", "sitename" FROM "App";
DROP TABLE "App";
ALTER TABLE "new_App" RENAME TO "App";
CREATE UNIQUE INDEX "App_adminEmail_key" ON "App"("adminEmail");
CREATE UNIQUE INDEX "App_supportEmail_key" ON "App"("supportEmail");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
