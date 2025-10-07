import { Boy } from "@mui/icons-material";
import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;
const token = process.env.TOKEN_KEY;

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const status = await axios.post(`${baseUrl}/like`, body, {
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

export async function DELETE(
  req: NextRequest,
) {
  const body = await req.json();
  const { statusId} = body
  console.log("body", statusId);
  try {
    const status = await axios.delete(`${baseUrl}/like`,  {
      headers: {
        "x-api-key": apikey,
        Authorization: `Bearer ${token}`,
      },
      data: { statusId: statusId }
    });
    return NextResponse.json(status.data, { status: status.status });
  } catch (err) {
    console.error("delete like failed", err);
    return NextResponse.json({ message: "Unable to unlike" }, { status: 500 });
  }
}
