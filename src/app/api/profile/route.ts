import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;
const token = process.env.TOKEN_KEY;

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("t");
  try {
    const status = await axios.get(`${baseUrl}/profile`, {
      headers: {
        "x-api-key": apikey,
        Authorization: `Bearer ${token}`,
      },
    });
    return NextResponse.json({data: status.data,  status: status.status });
  } catch (err) {
    NextResponse.error();
  }
}
