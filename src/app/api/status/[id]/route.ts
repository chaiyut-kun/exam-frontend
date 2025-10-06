import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;
const token = process.env.TOKEN_KEY;

export async function GET(request: Request, { params }: { params: { id: string } }) {

    try {
        const { id } = params;
        const response = await axios.get(`${baseUrl}/status/${id}`, {
            headers: {
                "x-api-key": apikey,
                'Authorization': `Bearer ${token}`
            }
        })

        return NextResponse.json(response.data, { status: response.status });
    } catch (err) {
        console.error(err)
        throw err
    }
    
}