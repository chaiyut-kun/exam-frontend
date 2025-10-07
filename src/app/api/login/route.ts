import { LoginITF } from "@/types/LoginRegister";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;

export async function POST(req: NextRequest) {
  const body = (await req.json()) as LoginITF;

  try {
    const login = await axios.post(`${baseUrl}/signin`, body, {
      headers: {
        "x-api-key": apikey,
        "Content-Type": "application/json",
      },

    
    });

    return NextResponse.json({data: login.data.data, status: login.status})
    
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
