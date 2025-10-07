import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;
const token = process.env.TOKEN_KEY;

export async function DELETE(
  req: NextRequest,
) {
  const { id } = await req.json();
  console.log("id", id);
  try {
    const status = await axios.delete(`${baseUrl}/unlike`,  {
      headers: {
        "x-api-key": apikey,
        Authorization: `Bearer ${token}`,
      },
      data: { statusId: id }
    });
    return NextResponse.json(status.data, { status: status.status });
  } catch (err) {
    console.error("delete like failed", err);
    return NextResponse.json({ message: "Unable to unlike" }, { status: 500 });
  }
}
