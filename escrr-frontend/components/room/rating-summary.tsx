"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CardRef, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "../ui/card";
import Star11 from "../stars/s11";
import { BicepsFlexed, Ghost, Info, Palette, Spotlight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { RatingBreakdown } from "@/app/types";

type RatingSummaryProps = {
    className?: string;
    ratings: RatingBreakdown
    reviewsCount?: number;
};

const renderLabel = (label: string, description: string) => (
    <HoverCard>
        <HoverCardTrigger asChild>
            <span className="inline-flex items-center gap-1 text-foreground/90 cursor-help">
                <span>{label}</span>
                <Info className="h-3 w-3 text-foreground/70" />
            </span>
        </HoverCardTrigger>
        <HoverCardContent className="text-xs leading-relaxed">
            {description}
        </HoverCardContent>
    </HoverCard>
);

export default function RatingSummary({ className, ratings, reviewsCount = 0 }: RatingSummaryProps) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const element = cardRef.current;
        if (!element) return;

        const updateCompact = (width: number) => {
            setIsCompact(width < 340);
        };

        updateCompact(element.getBoundingClientRect().width);

        const observer = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                updateCompact(entry.contentRect.width);
            });
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

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
        <CardRef ref={cardRef} className={`gap-4 bg-main ${className}`}>
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
                <div className={isCompact ? "flex flex-col gap-2" : "grid grid-cols-2 gap-2"}>
                    <div className="flex items-stretch border-2 border-border bg-background">
                        <div className="flex w-12 flex-col items-center justify-center gap-1 border-r-2 border-border bg-secondary-background py-2">
                            <Ghost className="h-5 w-5" />
                            <strong>{ratings.scary ?? "—"}</strong>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 px-2 py-2">
                            {renderLabel("Scary", "How intense the fear, tension, or jump-scare moments feel overall.")}
                            {renderStars(ratings.scary)}
                        </div>
                    </div>
                    <div className="flex items-stretch border-2 border-border bg-background">
                        <div className="flex w-12 flex-col items-center justify-center gap-1 border-r-2 border-border bg-secondary-background py-2">
                            <BicepsFlexed className="h-5 w-5" />
                            <strong>{ratings.difficulty ?? "—"}</strong>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 px-2 py-2">
                            {renderLabel("Difficulty", "Puzzle challenge level and how hard it is to escape without hints.")}
                            {renderStars(ratings.difficulty)}
                        </div>
                    </div>
                    <div className="flex items-stretch border-2 border-border bg-background">
                        <div className="flex w-12 flex-col items-center justify-center gap-1 border-r-2 border-border bg-secondary-background py-2">
                            <Spotlight className="h-5 w-5" />
                            <strong>{ratings.immersion ?? "—"}</strong>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 px-2 py-2">
                            {renderLabel("Immersion", "Acting, storytelling, and how immersive the live interaction feels.")}
                            {renderStars(ratings.immersion)}
                        </div>
                    </div>
                    <div className="flex items-stretch border-2 border-border bg-background">
                        <div className="flex w-12 flex-col items-center justify-center gap-1 border-r-2 border-border bg-secondary-background py-2">
                            <Palette className="h-5 w-5" />
                            <strong>{ratings.decoration ?? "—"}</strong>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 px-2 py-2">
                            {renderLabel("Decoration", "Set design quality, props, and how cohesive the theme looks.")}
                            {renderStars(ratings.decoration)}
                        </div>
                    </div>
                </div>
            </CardContent>
        </CardRef>
    );
}
