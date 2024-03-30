import { NextResponse, NextRequest } from "next/server";


const data = [
    {places:[]},
    {
    img: [
          
        ]
    }
];


export async function GET() {
    try {
        const places = data;
        return NextResponse.json(places)
    } catch (error) {
        console.log(error);
        
    }
}

