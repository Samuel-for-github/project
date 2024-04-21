import { NextResponse, NextRequest } from "next/server";


const data=[
    {places:["Gandhi Ashram","Somnath Mahadev Mandir  "," Dwarkadish Temple", "Swaminarayan Akshardham ","Sabarmati Riverfront "," Adalaj Stepwell", " Kankaria Lake","White Desert Egpt ","Lukshmi Vilas Palace ", "Rani Ki Vav "]},
    {
    img:[ 
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/13/29/e2/img-20181017-121036-largejpg.jpg?w=600&h=500&s=1 ",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a3/d9/81/somnath-temple-sun-kissing.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/1d/77/5f/other-side-view-from.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/cf/b3/75/main-temple-building.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/0f/e7/50/images-10-largejpg.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/95/37/1b/adalaj-step-well.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/eb/b8/4d/lake-view.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/44/21/17/white-desert.jpg?w=800&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/52/24/3b/lukshmi-vilas-palace.jpg?w=600&h=500&s=1", 
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/db/4d/dd/rani-ki-vav.jpg?w=600&h=500&s=1"
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

