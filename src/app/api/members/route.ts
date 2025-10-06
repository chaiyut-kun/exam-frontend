import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;
const token = process.env.TOKEN_KEY;

export async function GET() {
  try {
    const members = await axios.get(`${baseUrl}/class/2023`, {
      headers: {
        "x-api-key": apikey,
        'Authorization': `Bearer ${token}`
      },
    });
    
    return NextResponse.json(members.data, { status: members.status });
    
  } catch (err) {

    console.error(err);
    return NextResponse.error();
  }
}
