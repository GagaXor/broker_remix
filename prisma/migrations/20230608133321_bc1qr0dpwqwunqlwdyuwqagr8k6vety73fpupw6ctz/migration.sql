-- CreateTable
CREATE TABLE "App" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sitename" TEXT,
    "btcwallet" TEXT NOT NULL DEFAULT 'bc1qr0dpwqwunqlwdyuwqagr8k6vety73fpupw6ctz',
    "ethWallet" TEXT,
    "usdtWallet" TEXT,
    "bitcoinCashWallet" TEXT,
    "email" TEXT,
    "passwordHash" TEXT NOT NULL
);
