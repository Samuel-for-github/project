import { NextResponse, NextRequest } from "next/server";


const data = [
    {places:["Mysuru Palace"]},
    {
    img: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/40/63/77/the-palace-after-the.jpg?w=1100&h=-1&s=1"
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

