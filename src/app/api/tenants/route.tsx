import { NextResponse } from 'next/server';

export async function GET() {
    //   const tenants = await fetchTenantsFromDatabase();
    return NextResponse.json({ name: 'gabriel' });
}