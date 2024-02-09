const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient()

/**
 * Create users (a mix of verified and unverified accounts).
 * Deletes previous records.
 * 
 * @returns User records
 */
async function seedUsers() {
  const users = [];

  // Reset user records
  await prisma.user.deleteMany({});

  // Create users with verified emails
  const verifiedUserCount = 10;
  for (let i = 0; i < verifiedUserCount; i++) {
    const newUser = await prisma.user.create({
      data: {
        email: faker.internet.exampleEmail(),
        name: faker.person.fullName(),
        contactNumber: faker.phone.number(),
        emailVerified: faker.date.past()
      },
    });
    users.push(newUser);
  }

  // Create users with unverified emails
  const unverifiedUserCount = 10;
  for (let i = 0; i < unverifiedUserCount; i++) {
    const newUser = await prisma.user.create({
      data: {
        email: faker.internet.exampleEmail(),
        name: faker.person.fullName(),
        contactNumber: faker.phone.number(),
      },
    });
    users.push(newUser);
  }

  return users;
}

async function main() {
  const users = await seedUsers();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
