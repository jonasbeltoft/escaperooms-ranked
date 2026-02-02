"use client"

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ImageGallery from '@/components/room/image-gallery';
import RatingSummary from '@/components/room/rating-summary';
import ReviewsList from '@/components/room/reviews-list';
import ReviewForm from '@/components/room/review-form';
import { LoadingSpinner } from "@/components/loading-spinner";

const MOCK_ROOMS: Record<string, any> = {
    'c3f9e8a7-4d2b-4f1a-9f3b-2c9e4f1a5b7d': {
        id: 'c3f9e8a7-4d2b-4f1a-9f3b-2c9e4f1a5b7d',
        name: 'Mystery Manor',
        duration: '60 minutes',
        description: 'A spooky manor full of secrets and puzzles.',
        tags: ['Live actors', 'Family-friendly'],
        images: [
            'https://picsum.photos/id/325/1200/800',
            'https://picsum.photos/id/326/400/250',
            'https://picsum.photos/id/327/400/250',
        ],
        ratings: { overall: 4.5, scary: 3.8, difficulty: 4.2, roleplay: 4.0, theme: 4.6 },
        reviews: [
            { id: 'r1', user: 'Alice', text: 'Loved the atmosphere!', ratings: { overall: 5, scary: 4, difficulty: 3, roleplay: 5, theme: 4 }, visitDate: '2025-12-01' },
            { id: 'r2', user: 'Bob', text: 'Great puzzles but a bit hard.', ratings: { overall: 4, scary: 3, difficulty: 4, roleplay: 3, theme: 4 }, visitDate: '2026-01-10' },
            { id: 'r3', user: 'Charlie', text: 'Amazing experience, the actors were fantastic!', ratings: { overall: 5, scary: 4, difficulty: 4, roleplay: 5, theme: 5 }, visitDate: '2025-11-15' },
            { id: 'r4', user: 'Diana', text: 'Fun but not too scary, perfect for families.', ratings: { overall: 4, scary: 2, difficulty: 3, roleplay: 4, theme: 4 }, visitDate: '2025-10-20' },
            { id: 'r5', user: 'Eve', text: 'Puzzles were clever, but the room was a bit dark.', ratings: { overall: 4, scary: 4, difficulty: 5, roleplay: 3, theme: 4 }, visitDate: '2026-02-05' },
            { id: 'r6', user: 'Frank', text: 'Loved the theme, will definitely come back!', ratings: { overall: 5, scary: 3, difficulty: 4, roleplay: 4, theme: 5 }, visitDate: '2025-09-30' },
            { id: 'r7', user: 'Grace', text: 'Good value for money, though it was challenging.', ratings: { overall: 4, scary: 3, difficulty: 4, roleplay: 4, theme: 4 }, visitDate: '2026-03-12' },
            { id: 'r8', user: 'Henry', text: 'The live actors made it unforgettable!', ratings: { overall: 5, scary: 4, difficulty: 3, roleplay: 5, theme: 5 }, visitDate: '2025-08-25' }
        ],
    },
};

export default function RoomPage() {
    const { id } = useParams();
    const [room, setRoom] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        // Simulate fetching room data
        setTimeout(() => {
            setRoom(MOCK_ROOMS[id.toString()] ?? null);
            setLoading(false);
        }, 500);
    }, [id]);

    if (!room && loading) {
        return (
            LoadingSpinner()
        );
    } else if (!room && !loading) {
        return (
            <main className="min-h-[calc(100dvh-76px)] flex items-center justify-center p-6">
                <div className="max-w-lg w-full text-center bg-background border-2 border-border rounded-base p-8 shadow-shadow">
                    <h1 className="text-4xl font-black">Room not found</h1>
                    <p className="mt-3 text-sm text-gray-600">We couldn't find the room you're looking for. It may have been removed or the link is incorrect.</p>
                    <div className="mt-6 flex justify-center">
                        <a href="/" className="inline-block px-4 py-2 bg-primary text-white rounded-base">Back to home</a>
                    </div>
                </div>
            </main>
        );
    } else return (
        <main>
            <section className="grid lg:grid-cols-3 gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid-cols-1">
                <div className="lg:col-span-2 ">
                    <h1 className="text-3xl font-black">{room.name}</h1>
                    {room.images.length > 0 ? (
                        <>
                            <div className="mt-4">
                                <ImageGallery images={room.images} />
                            </div>
                            <div className="mt-6">
                                <h2 className="text-xl font-bold">Description</h2>
                                <p className="mt-2 text-sm text-gray-700">{room.description}</p>
                                <div className="mt-3 flex gap-2">
                                    {room.tags.map((t: string) => (
                                        <span key={t} className="text-xs px-2 py-1 border-2 border-border rounded-base">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="mt-2 text-sm text-gray-700">{room.description}</p>
                            <div className="mt-3 flex gap-2">
                                {room.tags.map((t: string) => (
                                    <span key={t} className="text-xs px-2 py-1 border-2 border-border rounded-base">{t}</span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <aside className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-4 self-start lg:block lg:sticky lg:mt-13 lg:top-24">
                    <RatingSummary className="flex-2" ratings={room.ratings} reviewsCount={room.reviews.length} />
                    <div className="flex-1 p-4 border-2 border-border rounded-base bg-secondary-background lg:mt-4">
                        <div className="font-bold">Details</div>
                        <div className="mt-2 text-sm">Duration: {room.duration}</div>
                        <div className="mt-2 text-sm">Location: TBD</div>
                    </div>
                </aside>
            </section>

            <section className="bg-secondary-background border-t-4 border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    <h2 className="text-xl font-bold">Reviews</h2>
                    <div className="mt-4">
                        <ReviewsList reviews={room.reviews} />
                    </div>
                </div>
            </section>

        </main>
    );
}
