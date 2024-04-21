import { NextResponse, NextRequest } from "next/server";


const data=[
    {places:["Kerala Backwaters","Tea Gardens","Sree Padmanabha Swamy Temple", "Wonderla Kochi","Varkala Beach","Great K.V Kathakali Center", "Guruvayur Temple","Lulu Mall","Kerala Folklore Museum", "Jew Town "]},
    {
    img:[ 
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d4/2a/3d/kerala-backwater-village.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e9/52/a2/sunset-at-tata-tea-gardens.jpg?w=600&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/fe/2b/f3/sree-padmanabhaswamy.jpg?w=600&h=300&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b4/a7/c4/a-wave-pool-in-which.jpg?w=600&h=500&s=1",
 "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c8/f1/cb/varkala-beach.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/bf/2d/63/bhima-and-bakasura-bhima.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/03/4b/65/night-view.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/c6/77/bd/lulu.jpg?w=600&h=500&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/17/1c/49/anthropology-and-ethnography.jpg?w=800&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/74/c7/3f/jewish-synagogue.jpg?w=600&h=500&s=1"
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

