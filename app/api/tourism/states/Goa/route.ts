import { NextResponse, NextRequest } from "next/server";


const data = [
    {places:["Palolem Beach", "Agonda Beach", "Baga Beach", "Basilica of Bom Jesus", "Cavelossim Beach"]},
    {
    img: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/9c/palolem-sea-beach.jpg?w=800&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7c/44/65/far-right-end-agonda.jpg?w=1200&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=800&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d6/93/6c/medallion-with-holy-trinity.jpg?w=1200&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4d/6a/dc/aguas-calidas.jpg?w=1200&h=-1&s=1"
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

