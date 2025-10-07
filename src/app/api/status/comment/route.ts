import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;

export async function POST(req: NextRequest) {
    const body = await req.json();
    const token = body.token;
    delete body.token;
    try {

        const status = await axios.post(`${baseUrl}/comment`, body, {
            headers: {
                "x-api-key": apikey,
                'Authorization': `Bearer ${token}`
            },
        });

        return NextResponse.json({data: status.data,  status: status.status });

    } catch (err) {
        NextResponse.error();
    }
}