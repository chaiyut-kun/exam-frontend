import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;
const token = process.env.TOKEN_KEY;

export async function POST(req: NextRequest) {
    const body = await req.json();
    
    try {

        const status = await axios.post(`${baseUrl}/status`, body, {
            headers: {
                "x-api-key": apikey,
                'Authorization': `Bearer ${token}`
            },
        });

        return NextResponse.json(status.data, { status: status.status });

    } catch (err) {
        NextResponse.error();
    }
}

export async function GET() {
    try {

        const status = await axios.get(`${baseUrl}/status`,  {
            headers: {
                "x-api-key": apikey,
                'Authorization': `Bearer ${token}`
            },
        });

        return NextResponse.json(status.data, { status: status.status });

    } catch (err) {
        NextResponse.error();
    }
}