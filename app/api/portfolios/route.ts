import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    portfolios: [
      { id: 'demo', name: 'Core Portfolio', type: 'REAL', baseCurrency: 'USD', benchmark: 'SPY' },
    ],
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ created: true, portfolio: body }, { status: 201 });
}
