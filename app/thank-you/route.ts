import { NextResponse } from 'next/server';
import { thankYouHtml } from './thankYouHtml';

export const dynamic = 'force-dynamic';

export async function GET() {
  return new NextResponse(thankYouHtml, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
}
