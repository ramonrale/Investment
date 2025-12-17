import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    transactions: [
      { id: '1', type: 'BUY', ticker: 'AAPL', quantity: 50, price: 190.2, occurredAt: '2024-07-01' },
    ],
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ created: true, transaction: body }, { status: 201 });
}
