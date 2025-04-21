import { NextResponse } from 'next/server';
import axios from 'axios';

const ZAPIER_MCP_URL = 'https://actions.zapier.com/mcp/sk-ak-ZenZprnEjABtFN5z1wA6JlaeuB/sse';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const response = await axios.post(ZAPIER_MCP_URL, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error connecting to Zapier MCP:', error);
    return NextResponse.json(
      { error: 'Failed to connect to Zapier MCP' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Zapier MCP endpoint is active' });
} 