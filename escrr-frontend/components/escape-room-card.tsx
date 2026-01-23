import ImageCard from "@/components/ui/image-card";
import { Clock, MapPin } from "lucide-react";
import Star11 from "./stars/s11";

interface EscapeRoomCardProps {
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
            <div className="flex justify-between items-center pt-2">
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
                <div className="text-right">
                    <div className="inline-block px-2 py-1 border-2 border-black font-bold text-xs">
                        {difficulty}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {imageUrl ? (
                <ImageCard
                    imageUrl={imageUrl}
                    caption={cardContent}
                    className="w-full"
                />
            ) : (
                <div className="w-full rounded-base border-2 border-border bg-gray-100 shadow-shadow aspect-4/3 flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-center px-4">No image available</span>
                </div>
            )}
        </div>
    );
}
