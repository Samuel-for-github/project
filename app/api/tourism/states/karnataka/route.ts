import { NextResponse, NextRequest } from "next/server";


const data=[
{places:["Mysore palace","wonderla bengaluru ","Iskon Temple Bangalore", "Sri Chamarajendra zoological Gardens ","Lalbagh Botanical Garden "," Somnathpur Temple", "Mullayanagiri "," UB City"," Group Of Monuments At Hampi", " Sri Chamundeshwari Temple"]},
{
img:
[ 
" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/40/63/77/the-palace-after-the.jpg?w=600&h=500&s=1",
" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b4/a3/72/flash-tower-is-a-shoot.jpg?w=600&h=500&s=1",
" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/a2/b1/90/front-view-of-temple.jpg?w=600&h=500&s=1",
" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1f/b4/67/zoo-entrance.jpg?w=600&h=500&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/7d/47/f4/lalbagh-botanical-garden.jpg?w=600&h=500&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/08/6b/fd/somanathapura-vishnu.jpg?w=600&h=500&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/6e/54/05/img-20180922-090745-hdr.jpg?w=800&h=-1&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e0/d9/9f/ub-city.jpg?w=600&h=300&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d9/64/87/caption.jpg?w=600&h=500&s=1 ", 
" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/aa/dd/9e/chamundeswari-temple.jpg?w=600&h=500&s=1"
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

