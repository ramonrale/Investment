import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const benchmarks = [
    { ticker: 'SPY', name: 'SPDR S&P 500 ETF Trust' },
    { ticker: 'QQQ', name: 'Invesco QQQ Trust' },
    { ticker: 'VTI', name: 'Vanguard Total Stock Market ETF' }
  ];
  for (const benchmark of benchmarks) {
    await prisma.benchmark.upsert({ where: { ticker: benchmark.ticker }, create: benchmark, update: benchmark });
  }

  const user = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    create: { email: 'demo@example.com', passwordHash: 'demo-hash', name: 'Demo User' },
    update: {}
  });

  const security = await prisma.security.upsert({
    where: { ticker: 'AAPL' },
    create: { ticker: 'AAPL', name: 'Apple Inc.', sector: 'Technology' },
    update: {}
  });

  const portfolio = await prisma.portfolio.upsert({
    where: { id: 'demo-portfolio' },
    create: { id: 'demo-portfolio', name: 'Demo Portfolio', type: 'REAL', userId: user.id },
    update: {}
  });

  await prisma.transaction.createMany({
    data: [
      {
        portfolioId: portfolio.id,
        type: 'BUY',
        securityId: security.id,
        quantity: 10,
        price: 150,
        fees: 0,
        occurredAt: new Date('2024-01-01')
      },
      {
        portfolioId: portfolio.id,
        type: 'DIVIDEND',
        securityId: security.id,
        quantity: 0,
        price: 0.24,
        fees: 0,
        occurredAt: new Date('2024-03-15')
      }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
