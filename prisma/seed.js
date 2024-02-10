const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient()

const unverified = 10;
const verified = 5;
const userCount = unverified + verified;

// Listing count
const variantA = 10;
const variantB = 14;
const variantC = 12;
const variantD = 9;

async function main() {
  // Reset
  await prisma.address.deleteMany();
  await prisma.price.deleteMany();
  await prisma.rating.deleteMany();
  await prisma.listing.deleteMany();
  await prisma.user.deleteMany();

  const users = [];
  // Create users with verified emails
  for (let i = 0; i < verified; i++) {
    const newUser = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        contactNumber: faker.phone.number(),
        email: faker.internet.exampleEmail(),
        emailVerified: faker.date.past()
      },
    });
    users.push(newUser);
  }
  // Create users with unverified emails
  for (let i = 0; i < unverified; i++) {
    const newUser = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        contactNumber: faker.phone.number(),
        email: faker.internet.exampleEmail(),
      },
    });
    users.push(newUser);
  }

  // Listing Variant A
  // With deposit
  // Without available date
  // No rating
  // One (1) pricing
  for (let i = 0; i < variantA; i++) {
    // Choose random user
    const userIndex = Math.floor(Math.random() * userCount);
    const user = users[userIndex];

    await prisma.listing.create({
      data: {
        deposit: faker.commerce.price({ min: 1_000, max: 10_000 }),
        description: faker.lorem.paragraph(),
        beds: faker.number.int({ min: 1, max: 15 }),
        baths: faker.number.int({ min: 1, max: 10 }),
        area: faker.number.float({ min: 20.0, max: 200.0, fractionDigits: 1 }),
        prices: {
          create: {
            value: faker.commerce.price({ min: 2_000, max: 100_000 })
          }
        },
        address: {
          create: {
            addressLine: faker.location.streetAddress({ useFullAddress: true }),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
          }
        },
        user: {
          connect: {
            id: user.id,
          }
        },
      }
    });
  }
  // Listing Variant B
  // Without deposit
  // With available date
  // One (1) rating
  // Two (2) pricings
  for (let i = 0; i < variantB; i++) {
    // Choose random user
    const userIndex = Math.floor(Math.random() * userCount);
    const user = users[userIndex];

    const endDate = faker.date.past();
    const startDate = faker.date.past({ refDate: endDate });

    await prisma.listing.create({
      data: {
        description: faker.lorem.paragraph(),
        beds: faker.number.int({ min: 1, max: 15 }),
        baths: faker.number.int({ min: 1, max: 10 }),
        area: faker.number.float({ min: 20.0, max: 200.0, fractionDigits: 1 }),
        availableDate: faker.date.soon(),
        prices: {
          createMany: {
            data: [
              {
                value: faker.commerce.price({ min: 2_000, max: 100_000 }),
                isCurrent: false,
                startDate: startDate,
                endDate: endDate,
              },
              {
                value: faker.commerce.price({ min: 2_000, max: 100_000 }),
                startDate: endDate,
              },
            ]
          }
        },
        ratings: {
          create: {
            value: faker.number.int({ min: 1, max: 5 })
          }
        },
        address: {
          create: {
            addressLine: faker.location.streetAddress({ useFullAddress: true }),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
          }
        },
        user: {
          connect: {
            id: user.id,
          }
        },
      }
    });
  }
  // Listing Variant C
  // Without deposit
  // Without available date
  // Two (2) ratings
  // Three (3) pricings
  for (let i = 0; i < variantC; i++) {
    // Choose random user
    const userIndex = Math.floor(Math.random() * userCount);
    const user = users[userIndex];

    const endDateA = faker.date.past();
    const startDateA = faker.date.past({ refDate: endDateA });

    const endDateB = faker.date.past();
    const startDateB = faker.date.past({ refDate: endDateB });

    await prisma.listing.create({
      data: {
        description: faker.lorem.paragraph(),
        beds: faker.number.int({ min: 1, max: 15 }),
        baths: faker.number.int({ min: 1, max: 10 }),
        area: faker.number.float({ min: 20.0, max: 200.0, fractionDigits: 1 }),
        prices: {
          createMany: {
            data: [
              {
                value: faker.commerce.price({ min: 2_000, max: 100_000 }),
                isCurrent: false,
                startDate: startDateB,
                endDate: endDateB,
              },
              {
                value: faker.commerce.price({ min: 2_000, max: 100_000 }),
                isCurrent: false,
                startDate: startDateA,
                endDate: endDateA,
              },
              {
                value: faker.commerce.price({ min: 2_000, max: 100_000 }),
                startDate: endDateA,
              },
            ]
          }
        },
        ratings: {
          createMany: {
            data: [
              { value: faker.number.int({ min: 1, max: 5 }) },
              { value: faker.number.int({ min: 1, max: 5 }) },
            ]
          }
        },
        address: {
          create: {
            addressLine: faker.location.streetAddress({ useFullAddress: true }),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
          }
        },
        user: {
          connect: {
            id: user.id,
          }
        },
      }
    });
  }
  // Listing Variant D
  // With deposit
  // With available date
  // Two (2) ratings
  // Three (3) pricings
  for (let i = 0; i < variantD; i++) {
    // Choose random user
    const userIndex = Math.floor(Math.random() * userCount);
    const user = users[userIndex];

    const date202312 = faker.date.past();
    const date202311 = faker.date.past({ refDate: date202312 });
    const date202310 = faker.date.past({ refDate: date202311 });

    await prisma.listing.create({
      data: {
        deposit: faker.commerce.price({ min: 1_000, max: 10_000 }),
        description: faker.lorem.paragraph(),
        beds: faker.number.int({ min: 1, max: 15 }),
        baths: faker.number.int({ min: 1, max: 10 }),
        area: faker.number.float({ min: 20.0, max: 200.0, fractionDigits: 1 }),
        availableDate: faker.date.soon(),
        prices: {
          createMany: {
            data: [
              // 1st pricing 2023-10 to 2023-11
              {
                value: faker.commerce.price({ min: 2_000, max: 100_000 }),
                isCurrent: false,
                startDate: date202310,
                endDate: date202311,
              },
              // 2nd pricing 2023-11 to 2023-12
              {
                value: faker.commerce.price({ min: 2_000, max: 100_000 }),
                isCurrent: false,
                startDate: date202311,
                endDate: date202312,
              },
              // current pricing 2023-12-12 to current
              {
                value: faker.commerce.price({ min: 2_000, max: 100_000 }),
                startDate: date202312,
              },
            ]
          }
        },
        ratings: {
          createMany: {
            data: [
              { value: faker.number.int({ min: 1, max: 5 }) },
              { value: faker.number.int({ min: 1, max: 5 }) },
            ]
          }
        },
        address: {
          create: {
            addressLine: faker.location.streetAddress({ useFullAddress: true }),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
          }
        },
        user: {
          connect: {
            id: user.id,
          }
        },
      }
    });
  }
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
