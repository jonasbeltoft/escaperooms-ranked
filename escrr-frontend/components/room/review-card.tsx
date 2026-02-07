"use client";

import { RoomReview } from "@/app/types";
import Star11 from "@/components/stars/s11";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type ReviewCardProps = {
    review: RoomReview;
    variant?: "flat";
};

/**
 * Review card showing user feedback and rating breakdown.
 */
export default function ReviewCard({ review, variant = "flat" }: ReviewCardProps) {
    const images = review.images?.slice(0, 5) ?? [];
    const hasImages = images.length > 0;

    return (
        <div className={cn(
            "flex flex-col p-6 border-2 border-border rounded-base bg-background min-h-48",
            variant === "flat" && "shadow-none",
        )}>
            <div className="flex justify-between items-center">
                <div className="font-bold">{review.user}</div>
                <div className="text-sm text-gray-600">{review.visitDate ?? "recent"}</div>
            </div>

            <div className="mt-2 flex flex-col sm:flex-row gap-4">
                <div className="text-sm flex-[1.3]">
                    <p>{review.text}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] grid-rows-2 items-end gap-2 w-full sm:w-fit">
                    {hasImages && (
                        <Dialog>
                            <DialogTrigger asChild>
                                <button
                                    type="button"
                                    className="group relative h-16 w-24 col-1 row-1 sm:col-2 sm:row-1 sm:self-start sm:justify-self-end"
                                    aria-label={`View ${images.length} review images`}
                                >
                                    <span className="relative block h-full w-full overflow-hidden rounded-base border-2 border-black bg-secondary-background">
                                        <img
                                            src={images[0]}
                                            alt={`Review by ${review.user} image 1`}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span className="absolute -bottom-2 -right-2 rounded-base border-2 border-black bg-main px-1.5 py-0.5 text-[10px] font-black">
                                        {images.length}
                                    </span>
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl! bg-secondary-background">
                                <DialogHeader className="px-12">
                                    <DialogTitle>Review photos</DialogTitle>
                                </DialogHeader>
                                <div className="px-12">
                                    <Carousel opts={{ loop: true }}>
                                        <CarouselContent>
                                            {images.map((src, index) => (
                                                <CarouselItem key={`${review.id}-image-${index}`}>
                                                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-base border-2 border-border bg-black/10">
                                                        <img
                                                            src={src}
                                                            alt={`Review by ${review.user} image ${index + 1}`}
                                                            className="h-full w-full object-cover"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}
                    <div className="self-end justify-self-end col-2 row-1 sm:row-2 sm:col-1 text-end min-w-max">
                        <div className="text-4xl font-black">{review.ratings.overall?.toFixed(1) ?? "—"}</div>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star11
                                    key={i}
                                    size={16}
                                    className={i < Math.floor(review.ratings.overall ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="grid w-fit grid-cols-2 gap-2 gap-x-4 justify-items-start col-2 row-2 justify-self-end">
                        <div className="w-max min-w-max">
                            <div className="text-sm">Scary: <strong>{review.ratings.scary ?? "—"}</strong></div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star11
                                        key={i}
                                        size={16}
                                        className={i < Math.floor(review.ratings.scary ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-max min-w-max">
                            <div className="text-sm">Difficulty: <strong>{review.ratings.difficulty ?? "—"}</strong></div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star11
                                        key={i}
                                        size={16}
                                        className={i < Math.floor(review.ratings.difficulty ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-max min-w-max">
                            <div className="text-sm">Immersion: <strong>{review.ratings.immersion ?? "—"}</strong></div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star11
                                        key={i}
                                        size={16}
                                        className={i < Math.floor(review.ratings.immersion ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-max min-w-max">
                            <div className="text-sm">Decoration: <strong>{review.ratings.decoration ?? "—"}</strong></div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star11
                                        key={i}
                                        size={16}
                                        className={i < Math.floor(review.ratings.decoration ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
