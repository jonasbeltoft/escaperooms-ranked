import Star11 from "@/components/stars/s11";
import { cn } from "@/lib/utils";

export type Review = {
    id: string;
    user: string;
    text: string;
    ratings: { overall: number; scary: number; difficulty: number; immersion?: number; decoration: number };
    visitDate?: string;
};

type ReviewCardProps = {
    review: Review;
    variant?: "flat";
};

/**
 * Review card showing user feedback and rating breakdown.
 */
export default function ReviewCard({ review, variant = "flat" }: ReviewCardProps) {
    return (
        <div className={cn(
            "flex flex-col p-6 border-2 border-border rounded-base bg-background min-h-48",
            variant === "flat" && "shadow-none",
        )}>
            <div className="flex justify-between items-center">
                <div className="font-bold">{review.user}</div>
                <div className="text-sm text-gray-600">{review.visitDate ?? "recent"}</div>
            </div>

            <div className="mt-2 flex flex-col sm:flex-row gap-2 grow justify-between">
                <div className="text-sm">{review.text}</div>

                <div className="flex flex-row gap-4 items-end shrink-0 justify-end">
                    <div className="text-right">
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
                    <div className="grid grid-cols-2 gap-2 gap-x-4 justify-items-end">
                        <div className="w-max">
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
                        <div className="w-max">
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
                        <div className="w-max">
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
                        <div className="w-max">
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
