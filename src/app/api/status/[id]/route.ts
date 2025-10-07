import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;

export async function GET(
  req: NextRequest, { params }: { params: Promise<{ id?: string }> }
) {
  try {
    const {id} = await params;
    const token = req.nextUrl.searchParams.get("t");
    if (!id) {
      console.log("Missing id");
      console.log("params", params);
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }
    const response = await axios.get(`${baseUrl}/status/${id}`, {
      headers: {
        "x-api-key": apikey,
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
