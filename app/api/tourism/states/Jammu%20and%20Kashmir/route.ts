import { NextResponse, NextRequest } from "next/server";


const data=[
    {places:["Vaishno Devi Mandir ","Shankaracharya Hill","Dal Lake", "Indira Gandhi Tulip Garden ","Apharwat Peak ","Sonamarg", " Nigeen Lake","Nishat Garden "," Sinthan Top", "Betaab Valley "]},
    {
    img:[ 
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/34/98/37/lrm-export-31665251117501.jpg?w=800&h=-1&s=1",
    " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/fb/3a/19/shankaracharya-temple.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/2b/0f/merkmal-des-dal-sees.jpg?w=600&h=500&s=1 ",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f3/ed/05/as-the-spring-has-set.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ec/b0/41/img-20180131-wa0006-largejpg.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e6/80/3b/sonamarg.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/b9/99/4d/nagin-lake.jpg?w=800&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/44/98/b5/nishat-garden.jpg?w=600&h=500&s=1",
    " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8b/1f/1d/as-you-travel-towards.jpg?w=800&h=-1&s=1", 
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/71/3f/53/betaab-valley.jpg?w=800&h=-1&s=1"
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

