import { NextResponse, NextRequest } from "next/server";


const data = ["mumbai", "pune"];


export async function GET() {
    try {
        const places = data;
        return NextResponse.json(places)
    } catch (error) {
        console.log(error);
        
    }
}

