import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "../ui/card";
import Star11 from "../stars/s11";

type RatingSummaryProps = {
    className?: string;
    ratings: {
        scary?: number;
        difficulty?: number;
        roleplay?: number;
        theme?: number;
        overall?: number;
    };
    reviewsCount?: number;
};

export default function RatingSummary({ className, ratings, reviewsCount = 0 }: RatingSummaryProps) {
    return (
        <Card className={`gap-4 bg-main ${className}`}>
            <CardHeader>
                <div>
                    <CardTitle>Ratings</CardTitle>
                    <CardDescription>{reviewsCount} reviews</CardDescription>
                </div>

                <CardAction className="text-right flex-col items-end">
                    <div className="text-4xl font-black">{ratings.overall?.toFixed(1) ?? "—"}</div>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star11
                                key={i}
                                size={16}
                                className={i < Math.floor(ratings.overall ?? 0) ? "fill-warn text-warn" : "fill-gray-300 text-gray-300"}
                            />
                        ))}
                    </div>
                </CardAction>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm">Scary: <strong>{ratings.scary ?? '—'}</strong></div>
                    <div className="text-sm">Difficulty: <strong>{ratings.difficulty ?? '—'}</strong></div>
                    <div className="text-sm">Roleplay: <strong>{ratings.roleplay ?? '—'}</strong></div>
                    <div className="text-sm">Theme: <strong>{ratings.theme ?? '—'}</strong></div>
                </div>
            </CardContent>
        </Card>
    );
}
