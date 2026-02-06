"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ImageGallery from '@/components/room/image-gallery';
import RatingSummary from '@/components/room/rating-summary';
import ReviewsList from '@/components/room/reviews-list';
import { LoadingSpinner } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RoomTag } from '@/components/room/room-tag';
import { RoomLocationCard } from '@/components/room/room-location-card';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BicepsFlexed, Clock, ShieldCheck, Users } from "lucide-react";

const MOCK_ROOMS: Record<string, any> = {
    'c3f9e8a7-4d2b-4f1a-9f3b-2c9e4f1a5b7d': {
        id: 'c3f9e8a7-4d2b-4f1a-9f3b-2c9e4f1a5b7d',
        name: 'Mystery Manor',
        duration: '60 minutes',
        description: 'A spooky manor full of secrets and puzzles. Winding corridors, hidden compartments, and atmospheric set pieces create a layered narrative that rewards exploration. Actors, thoughtful sound design, and tactile props heighten the immersion while puzzles range from observational to logic-based, offering a satisfying, well-rounded challenge.',
        tags: ['Live actors', 'Family-friendly'],
        images: [
            'https://placehold.co/600x400/png?text=Image+1',
            'https://placehold.co/600x400/png?text=Image+2',
            'https://placehold.co/600x400/png?text=Image+3',
        ],
        ratings: { overall: 4.5, scary: 3.8, difficulty: 4.2, roleplay: 4.0, decor: 4.6 },
        location: {
            address: 'Piazza del Colosseo, 1',
            city: '00184 Roma RM, Italy',
            lat: 41.8902,
            lng: 12.4922,
        },
        owner: {
            name: 'Arcane Rooms Co.',
            url: 'https://arcane-rooms.example.com',
        },
        players: '2-6 players',
        difficulty: 'Intermediate',
        recommendedAge: '12+',
        reviews: [
            {
                id: 'r1',
                user: 'Alice',
                text: "I absolutely loved the atmosphere — every detail felt intentional and immersive. The set design, lighting, and soundscapes built a steady sense of tension without ever feeling cheap. The actors and game masters were attentive and helped the flow when we got stuck. This is one of the most atmospheric rooms I've played in a long time, and I'd recommend it to anyone who enjoys detailed storytelling alongside solid puzzles.",
                ratings: { overall: 5, scary: 4, difficulty: 3, roleplay: 5, decor: 4 },
                visitDate: '2025-12-01'
            },
            {
                id: 'r2',
                user: 'Bob',
                text: "The puzzles were smart and often required real teamwork, which we enjoyed a lot. A couple of clues felt a touch obscure and pushed the difficulty up more than expected, but solving them produced a great feeling of accomplishment. If you like challenging, brainy rooms that reward persistence, this one is worth the price — just be ready to think laterally at times.",
                ratings: { overall: 4, scary: 3, difficulty: 4, roleplay: 3, decor: 4 },
                visitDate: '2026-01-10'
            },
            {
                id: 'r3',
                user: 'Charlie',
                text: "Amazing experience from start to finish — the actors were absolutely fantastic and elevated the whole game. Their timing and commitment to character made many moments genuinely surprising and memorable. The puzzles matched the narrative, and transitions between scenes felt smooth and well-paced. Highly recommend for people who appreciate immersive roleplay alongside clever game design.",
                ratings: { overall: 5, scary: 4, difficulty: 4, roleplay: 5, decor: 5 },
                visitDate: '2025-11-15'
            },
            {
                id: 'r4',
                user: 'Diana',
                text: "Fun and approachable — the room balanced excitement with accessibility, making it great for families and mixed-ability groups. It delivers atmosphere without being overwhelmingly scary, and the puzzles were engaging without being frustrating for younger players. We had a great time together and appreciated that it felt polished and thoughtfully designed for a broad audience.",
                ratings: { overall: 4, scary: 2, difficulty: 3, roleplay: 4, decor: 4 },
                visitDate: '2025-10-20'
            },
            {
                id: 'r5',
                user: 'Eve',
                text: "Clever puzzles and a strong decor, though a few areas of the room were darker than we'd have liked which made finding clues harder at times. Once we adapted, the challenges felt fair and satisfying, and the set pieces were inventive. Lighting aside, the overall experience was very good and left us wanting to try other rooms from the same company.",
                ratings: { overall: 4, scary: 4, difficulty: 5, roleplay: 3, decor: 4 },
                visitDate: '2026-02-05'
            },
            {
                id: 'r6',
                user: 'Frank',
                text: "I loved the decor and the level of polish — everything tied together and felt cohesive. The narrative thread kept us motivated to push through tougher puzzles, and the final reveal was very satisfying. We'll definitely be back to try some of their other rooms; great value for an immersive night out with friends.",
                ratings: { overall: 5, scary: 3, difficulty: 4, roleplay: 4, decor: 5 },
                visitDate: '2025-09-30'
            },
            {
                id: 'r7',
                user: 'Grace',
                text: "Good value for money — the production quality was high and the puzzles provided a steady, enjoyable challenge. Some sequences are demanding and require clear communication, so bring a mix of skills in your team. Overall it's a thoughtfully designed experience that gave us a lot of fun for the price.",
                ratings: { overall: 4, scary: 3, difficulty: 4, roleplay: 4, decor: 4 },
                visitDate: '2026-03-12'
            },
            {
                id: 'r8',
                user: 'Henry',
                text: "The live actors were the highlight — they brought energy and unpredictability that made the game unforgettable. Their interactions felt organic and heightened several key moments, turning an already-strong set into a truly memorable experience. If you enjoy actor-led rooms, this one is a must-play.",
                ratings: { overall: 5, scary: 4, difficulty: 3, roleplay: 5, decor: 5 },
                visitDate: '2025-08-25'
            }
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
                <div className="max-w-lg w-full text-center bg-secondary-background border-2 border-border rounded-base p-8 shadow-shadow">
                    <h1 className="text-4xl font-black">Room not found</h1>
                    <p className="mt-3 text-sm text-foreground/70">We couldn't find the room you're looking for. It may have been removed or the link is incorrect.</p>
                    <div className="mt-6 flex justify-center">
                        <Link href="/" tabIndex={-1}>
                            <Button>Back</Button>
                        </Link>
                    </div>
                </div>
            </main>
        );
    } else return (
        <main className="bg-lattice" style={{ backgroundSize: '90px 90px' }}>
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-black">{room.name}</h1>
                <div className="grid lg:grid-cols-3 sm:gap-6 ">
                    <div className="lg:col-span-2 ">
                        {room.images.length > 0 && (
                            <div className="mt-4">
                                <ImageGallery images={room.images} />
                            </div>
                        )}
                        <Card className="mt-4 bg-main gap-2">
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">{room.description}</p>
                                <div className="mt-3 flex gap-2">
                                    {room.tags.map((t: string) => (
                                        <RoomTag key={t} label={t} />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <aside className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-4 self-start">
                        <div className="flex flex-col gap-4 flex-1">
                            <RatingSummary className="flex-2" ratings={room.ratings} reviewsCount={room.reviews.length} />
                            <Card className="flex-1 bg-secondary-background">
                                <CardHeader>
                                    <CardTitle>Details</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm">
                                    <div className="flex items-center justify-between border-b">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>Duration:</span>

                                        </div>
                                        <span>{room.duration}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4" />
                                            <span>Players:</span>
                                        </div>
                                        <span>{room.players}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <BicepsFlexed className="h-4 w-4" />
                                            <span>Difficulty:</span>
                                        </div>
                                        <span>{room.difficulty}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="h-4 w-4" />
                                            <span>Recommended Age:</span>
                                        </div>
                                        <span>{room.recommendedAge}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <RoomLocationCard className="flex-1" location={room.location} owner={room.owner} />
                    </aside>
                </div>
            </section>

            <section id="reviews" className="bg-secondary-background border-t-4 border-border scroll-mt-18 sm:scroll-mt-14">
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
