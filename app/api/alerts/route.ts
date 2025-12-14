import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ alerts: [{ id: 'p1', type: 'PRICE', ticker: 'AAPL', threshold: 200, direction: 'above' }] });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ created: true, alert: body }, { status: 201 });
}
