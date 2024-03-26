import { NextResponse} from "next/server";


const data = [
    {places:["Della Adventure Park", "Marine Drive", "Gateway of India"]},
    {
        img: [
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/90/58/9b/atv-200cc-polaris-get.jpg?w=700&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/40/ce/df/marine-drive-seen-as.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/16/f3/a1/fb-img-1474806779807.jpg?w=1000&h=-1&s=1"
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

