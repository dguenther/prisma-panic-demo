const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const id = 111111111111111111111111111111111

  await prisma.user.findUnique({
    where: { id },
  });
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
