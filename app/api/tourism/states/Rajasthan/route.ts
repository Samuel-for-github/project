import { NextResponse, NextRequest } from "next/server";

const data=[
    {places:["Amber Palace","Mehrangarh Fort","Elefantastic", "City Palace Of Udaipur ","Hawa Mahal Palace Of Wind ","Jantar Mantar ", "Lake Pichola ","City Palace Of Jaipur ","Jaisalmer  Fort ", "Ranthambore Tiger Reserve"]},
    {
    img:[ 
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=600&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/99/ae/7f/images-14-largejpg.jpg?w=700&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/2d/95/98/this-is-elephant-love.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/2b/f0/f7/img-20181018-104236-01.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/e3/4b/img-20180921-184349-largejpg.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/10/b5/57/jantar-mantar-jaipur.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/77/15/9a/photo0jpg.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/8a/82/this-is-the-time-when.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ae/37/19/jaisalmer-fortress.jpg?w=600&h=500&s=1", 
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/1a/06/d8/tiger-in-jim-corbett.jpg?w=600&h=500&s=1"
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

