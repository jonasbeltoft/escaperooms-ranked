import ImageCard from "@/components/ui/image-card";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import Star11 from "./stars/s11";
import { Button } from "./ui/button";

interface EscapeRoomCardProps {
    id: string;
    name: string;
    location: string;
    distance: string;
    duration: string;
    difficulty: string;
    rating: number;
    reviews: number;
    imageUrl?: string;
}

export function EscapeRoomCard({
    id,
    name,
    location,
    distance,
    duration,
    difficulty,
    rating,
    reviews,
    imageUrl,
}: EscapeRoomCardProps) {
    const cardContent = (
        <div className="flex flex-col gap-3">
            <h3 className="font-black text-lg">{name}</h3>
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="shrink-0" />
                    <span className="font-semibold">{location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="shrink-0" />
                    <span className="font-semibold">{duration}</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex flex-col gap-1 mb-1">
                        <div className="flex items-center gap-1">
                            <span className="font-black text-sm">{rating}</span>
                            <span className="text-xs text-gray-600">({reviews})</span>
                        </div>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star11
                                    key={i}
                                    size={16}
                                    className={i < Math.round(rating) ? "fill-warn text-warn" : "fill-gray-300 text-gray-300"}
                                />
                            ))}
                        </div>
                    </div>
                    <span className="text-xs font-bold text-gray-700">{distance} away</span>
                </div>
                <div className="text-right self-end bg-background">
                    <div className="inline-block px-2 py-1 border-2 border-black font-bold text-sm">
                        {difficulty}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Link href={`/rooms/${id}`} className="ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
            <Button asChild={true} variant="reverse" size="undefined">
                <ImageCard
                    imageUrl={imageUrl}
                    caption={cardContent}
                    variant="reverse"
                    className="w-full block!"
                />
            </Button>
        </Link>
    );
}
