import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;

export async function POST(req: NextRequest) {
    const body = await req.json();
    
    try {

        const status = await axios.post(`${baseUrl}/status`, body, {
            headers: {
                "x-api-key": apikey,
                'Authorization': `Bearer ${body.token}`
            },
        });

        return NextResponse.json({data: status.data,  status: status.status });

    } catch (err) {
        return NextResponse.error();
    }
}

export async function GET(req: NextRequest) {
    const token = req.nextUrl.searchParams.get("t");

    try {
        const status = await axios.get(`${baseUrl}/status`,  {
            headers: {
                "x-api-key": apikey,
                'Authorization': `Bearer ${token}`
            },
        });
        
        console.log("status api", status);

        return NextResponse.json({data: status.data});

    } catch (err) {
        return NextResponse.error();
    }
}