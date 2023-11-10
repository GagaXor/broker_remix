-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_App" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sitename" TEXT,
    "btcwallet" TEXT NOT NULL DEFAULT 'bc1qr0dpwqwunqlwdyuwqagr8k6vety73fpupw6ctz',
    "ethWallet" TEXT,
    "usdtWallet" TEXT,
    "bitcoinCashWallet" TEXT,
    "email" TEXT DEFAULT 'admin@coin-stocks.com',
    "passwordHash" TEXT
);
INSERT INTO "new_App" ("bitcoinCashWallet", "btcwallet", "email", "ethWallet", "id", "passwordHash", "sitename", "usdtWallet") SELECT "bitcoinCashWallet", "btcwallet", "email", "ethWallet", "id", "passwordHash", "sitename", "usdtWallet" FROM "App";
DROP TABLE "App";
ALTER TABLE "new_App" RENAME TO "App";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
