import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "../ui/card";
import Star11 from "../stars/s11";
import { BicepsFlexed, Ghost, Palette, Spotlight } from "lucide-react";

type RatingSummaryProps = {
    className?: string;
    ratings: {
        scary?: number;
        difficulty?: number;
        roleplay?: number;
        decor?: number;
        overall?: number;
    };
    reviewsCount?: number;
};

export default function RatingSummary({ className, ratings, reviewsCount = 0 }: RatingSummaryProps) {
    const renderStars = (value?: number) => (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                i < Math.floor(value ?? 0) ?
                    <Star11
                        key={i}
                        size={16}
                        className="fill-warn text-warn"
                    />
                    :
                    <Star11
                        key={i}
                        size={16}
                        className="text-gray-300"
                    />
            ))}
        </div>
    );

    return (
        <Card className={`gap-4 bg-main ${className}`}>
            <CardHeader>
                <div>
                    <CardTitle>Ratings</CardTitle>
                    <CardDescription>
                        <Link
                            href="#reviews"
                            className="underline underline-offset-2 decoration-border hover:decoration-foreground"
                        >
                            {reviewsCount} reviews
                        </Link>
                    </CardDescription>
                </div>

                <CardAction className="text-right flex-col items-end">
                    <div className="text-4xl font-black">{ratings.overall?.toFixed(1) ?? "—"}</div>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            i < Math.floor(ratings.overall ?? 0) ?
                                <Star11
                                    key={i}
                                    size={18}
                                    className={"fill-warn text-warn"}
                                />
                                :
                                <Star11
                                    key={i}
                                    size={18}
                                    className={"text-background"}
                                />
                        ))}
                    </div>
                </CardAction>
            </CardHeader>

            <CardContent className="text-sm">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-stretch border-2 border-border bg-background">
                        <div className="flex w-12 flex-col items-center justify-center gap-1 border-r-2 border-border bg-secondary-background py-2">
                            <Ghost className="h-5 w-5" />
                            <strong>{ratings.scary ?? "—"}</strong>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 px-2 py-2">
                            <span>Scary</span>
                            {renderStars(ratings.scary)}
                        </div>
                    </div>
                    <div className="flex items-stretch border-2 border-border bg-background">
                        <div className="flex w-12 flex-col items-center justify-center gap-1 border-r-2 border-border bg-secondary-background py-2">
                            <BicepsFlexed className="h-5 w-5" />
                            <strong>{ratings.difficulty ?? "—"}</strong>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 px-2 py-2">
                            <span>Difficulty</span>
                            {renderStars(ratings.difficulty)}
                        </div>
                    </div>
                    <div className="flex items-stretch border-2 border-border bg-background">
                        <div className="flex w-12 flex-col items-center justify-center gap-1 border-r-2 border-border bg-secondary-background py-2">
                            <Spotlight className="h-5 w-5" />
                            <strong>{ratings.roleplay ?? "—"}</strong>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 px-2 py-2">
                            <span>Roleplay</span>
                            {renderStars(ratings.roleplay)}
                        </div>
                    </div>
                    <div className="flex items-stretch border-2 border-border bg-background">
                        <div className="flex w-12 flex-col items-center justify-center gap-1 border-r-2 border-border bg-secondary-background py-2">
                            <Palette className="h-5 w-5" />
                            <strong>{ratings.decor ?? "—"}</strong>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 px-2 py-2">
                            <span>Decor</span>
                            {renderStars(ratings.decor)}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
