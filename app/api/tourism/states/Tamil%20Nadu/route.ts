import { NextResponse, NextRequest } from "next/server";

const data=[
    {places:[" Madurai Meenakshi Amman Temple","Kapaleeshwarar Temple ","Marina Beach ", "Besant Nagar Beach"," Brihadeeswara Temple"," Arulmigu Ramanatha Swamy Temple", " Snow Kingdom","Monuments At Mahabalipuram","Vivekananda Rock Memorial ", "Dhanushkodi Beach Point "]},
    {
    img:[ 
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/71/bf/0e/madurai-meenakshi-temple.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/0b/e8/33/kapaleeshwar-temple.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/96/26/64/marina-beach.jpg?w=800&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/33/48/2a/photo0jpg.jpg?w=800&h=-1&s=1 ",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/83/04/d8/brihadeeshwara-temple.jpg?w=800&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/91/84/f9/the-main-attraction-of.jpg?w=800&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a9/85/1d/plenty-of-games-and-options.jpg?w=800&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4a/8a/c0/shore-temple.jpg?w=800&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/94/8f/da/img-20170304-wa0027-largejpg.jpg?w=800&h=-1&s=1", 
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/26/c7/14/photo1jpg.jpg?w=800&h=-1&s=1 "
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

