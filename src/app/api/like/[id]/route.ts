import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;
const token = process.env.TOKEN_KEY;

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const status = await axios.delete(`${baseUrl}/unlike${id}`, {
      headers: {
        "x-api-key": apikey,
        Authorization: `Bearer ${token}`,
      },
    });
    return NextResponse.json(status.data, { status: status.status });
  } catch (err) {
    NextResponse.error();
  }
}
