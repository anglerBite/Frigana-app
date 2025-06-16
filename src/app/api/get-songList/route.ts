import {  NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch('http://localhost:3001/search', {
            headers: {
                'Content-Type' : 'application/json',
            },
        })
        // console.log(res);
    
        const data = await res.json();
        return NextResponse.json(data)
    } catch {
        return NextResponse.json({error: 'fetch failed'}, {status: 500});
    }
}