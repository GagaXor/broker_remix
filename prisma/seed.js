import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "viktordragan344@gmail.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });



  const hashedPassword = await bcrypt.hash("lawson17", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.app.create({
    data: {
      btc : "bc1qr0dpwqwunqlwdyuwqagr8k6vety73fpupw6ctz",
      adminEmail: "admin@coin-stocks.com",
      supportEmail: "support@coin-stocks.com"
    },
  })

   console.log(`Database has been seeded. 🌱`);
 }

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
