const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient()

const imageURLs = [
  "https://images.unsplash.com/photo-1449247613801-ab06418e2861",
  "https://images.unsplash.com/photo-1455994972514-4624f7f224a7",
  "https://images.unsplash.com/photo-1464890100898-a385f744067f",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  "https://images.unsplash.com/photo-1495433324511-bf8e92934d90",
  "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
  "https://images.unsplash.com/photo-1517414467812-ef3dbd81859a",
  "https://images.unsplash.com/photo-1521124678359-f3f6248f1914",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "https://images.unsplash.com/photo-1529408632839-a54952c491e5",
  "https://images.unsplash.com/photo-1529408686214-b48b8532f72c",
  "https://images.unsplash.com/photo-1530334542242-1410f69cb168",
  "https://images.unsplash.com/photo-1534595038511-9f219fe0c979",
  "https://images.unsplash.com/photo-1535078035266-a0fa7d3b8f65",
  "https://images.unsplash.com/photo-1535186696008-7cba739a3103",
  "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
  "https://images.unsplash.com/photo-1538609589535-bb35f0c034db",
  "https://images.unsplash.com/photo-1539922631499-09155cc609a4",
  "https://images.unsplash.com/photo-1551806235-a05dd14a54c7",
  "https://images.unsplash.com/photo-1558442074-3c19857bc1dc",
  "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e",
  "https://images.unsplash.com/photo-1560448076-ee77deea722b",
  "https://images.unsplash.com/photo-1560448204-61dc36dc98c8",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  "https://images.unsplash.com/photo-1560448205-17d3a46c84de",
  "https://images.unsplash.com/photo-1560448205-97abe7378152",
  "https://images.unsplash.com/photo-1580041029617-861657e9f349",
  "https://images.unsplash.com/photo-1581404476143-fb31d742929f",
  "https://images.unsplash.com/photo-1598928387577-d49b6d399110",
  "https://images.unsplash.com/photo-1598928428433-1077478561d6",
  "https://images.unsplash.com/photo-1598928739741-a922f245bb6d",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
  "https://images.unsplash.com/photo-1601760561441-16420502c7e0",
  "https://images.unsplash.com/photo-1601760562234-9814eea6663a",
  "https://images.unsplash.com/photo-1602028967263-17d1255ad02f",
  "https://images.unsplash.com/photo-1603111691889-364c9fc6d066",
  "https://images.unsplash.com/photo-1603382254452-30f9f44ad451",
  "https://images.unsplash.com/photo-1604011237296-117b9066e9e4",
  "https://images.unsplash.com/photo-1609766857120-0183863c7971",
  "https://images.unsplash.com/photo-1609766934998-2903faa9d02d",
  "https://images.unsplash.com/photo-1609767175584-7abe16d3f1fa",
  "https://images.unsplash.com/photo-1610516258978-461db90b97b4",
  "https://images.unsplash.com/photo-1612320582827-a95ab2596dbc",
  "https://images.unsplash.com/photo-1612320583354-02dd0cf04612",
  "https://images.unsplash.com/photo-1612320648993-61c1cd604b71",
  "https://images.unsplash.com/photo-1612419299101-6c294dc2901d",
  "https://images.unsplash.com/photo-1612719983112-5379ac744136",
  "https://images.unsplash.com/photo-1613082442324-62ef5249275e",
  "https://images.unsplash.com/photo-1613575831056-0acd5da8f085",
  "https://images.unsplash.com/photo-1614649024145-7f847b1c803f",
  "https://images.unsplash.com/photo-1617201929478-8eedff7508f9",
  "https://images.unsplash.com/photo-1618220321979-ecb3a975aa82",
  "https://images.unsplash.com/photo-1618220924273-338d82d6b886",
  "https://images.unsplash.com/photo-1618221941443-9ca819da798c",
  "https://images.unsplash.com/photo-1618222155830-fcacd23874e2",
  "https://images.unsplash.com/photo-1618296230835-9f5c38ca558a",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
  "https://images.unsplash.com/photo-1619989652700-9984844cb0ea",
  "https://images.unsplash.com/photo-1626965654957-fef1cb80d4b7",
  "https://images.unsplash.com/photo-1628592102751-ba83b0314276",
  "https://images.unsplash.com/photo-1629042306547-c1d7c6c85ffa",
  "https://images.unsplash.com/photo-1629042306551-641c2715737b",
  "https://images.unsplash.com/photo-1629042306558-7d1e15cc02fa",
  "https://images.unsplash.com/photo-1630699144641-72fa7a6b8aa1",
  "https://images.unsplash.com/photo-1630699293784-9f977570255a",
  "https://images.unsplash.com/photo-1630699294110-6bbec2bb9ea4",
  "https://images.unsplash.com/photo-1630699294157-554177f5b940",
  "https://images.unsplash.com/photo-1630699294197-6ac1c11ae156",
  "https://images.unsplash.com/photo-1630699375895-fe5996d163ee",
  "https://images.unsplash.com/photo-1630699376167-3870469e7598",
  "https://images.unsplash.com/photo-1632210702485-e1841e30752a",
  "https://images.unsplash.com/photo-1632323091845-f636f89749fa",
  "https://images.unsplash.com/photo-1633104069776-ea7e61258ec9",
  "https://images.unsplash.com/photo-1633505528166-407a12a88a04",
  "https://images.unsplash.com/photo-1633505650701-6104c4fc72c2",
  "https://images.unsplash.com/photo-1633505899118-4ca6bd143043",
  "https://images.unsplash.com/photo-1634547476021-c1155c01616c",
  "https://images.unsplash.com/photo-1634547532213-a4b8d7ff8927",
  "https://images.unsplash.com/photo-1638885930125-85350348d266",
  "https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf",
  "https://images.unsplash.com/photo-1649068431121-72182cd8ca27",
  "https://images.unsplash.com/photo-1650137938625-11576502aecd",
  "https://images.unsplash.com/photo-1653972233229-1b8c042d6d8e",
  "https://images.unsplash.com/photo-1653972233923-9901618fbca0",
  "https://images.unsplash.com/photo-1653974123072-cfb9d69725d9",
  "https://images.unsplash.com/photo-1653974123177-fe9c05fb79e6",
  "https://images.unsplash.com/photo-1654064550874-3c14a961730e",
  "https://images.unsplash.com/photo-1658218635253-64728f6234be",
  "https://images.unsplash.com/photo-1658218729615-167c32d70537"
]

// TODO: Unit test
function fetchRandomImages() {
  const MIN = 6;
  const limit = imageURLs.length
  const images = new Set()

  while (images.size !== MIN) {
    const index = Math.floor(Math.random() * limit)
    const image = imageURLs[index]
    images.add(image)
  }

  return Array.from(images)
}

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
  // One (1) pricing
  for (let i = 0; i < variantA; i++) {
    // Choose random user
    const userIndex = Math.floor(Math.random() * userCount);
    const user = users[userIndex];

    await prisma.listing.create({
      data: {
        deposit: faker.commerce.price({ min: 1_000, max: 10_000 }),
        imageUrls: fetchRandomImages(),
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
  // Two (2) pricings
  for (let i = 0; i < variantB; i++) {
    // Choose random user
    const userIndex = Math.floor(Math.random() * userCount);
    const user = users[userIndex];

    const endDate = faker.date.past();
    const startDate = faker.date.past({ refDate: endDate });

    await prisma.listing.create({
      data: {
        imageUrls: fetchRandomImages(),
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
        imageUrls: fetchRandomImages(),
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
        imageUrls: fetchRandomImages(),
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
