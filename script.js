const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const longId = 1111111111111111111111
const shortId = 1

async function query(number, id) {
  console.log(`\nQuery #${number} (id = ${id}):\n`)

  await prisma.user.findUnique({
    where: { id },
  });
}

query(1, longId)
  .catch((e) => {
    console.error(e)
  })
  .then(() => {
    return query(2, shortId)
  })
    .catch((e) => {
      console.error(e)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
