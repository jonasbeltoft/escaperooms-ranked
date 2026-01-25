'use client';

import { MapPin, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EscapeRoomCard } from './escape-room-card';

const mockRooms = [
    {
        name: "The Lost Temple",
        location: "Downtown Manhattan",
        distance: "0.3 miles",
        duration: "60 minutes",
        difficulty: "Medium",
        rating: 4.8,
        reviews: 124,
        imageUrl: "https://images.unsplash.com/photo-1549887534-7e9c10b24c2f?w=400&h=300&fit=crop",
    },
    {
        name: "Heist Masterclass",
        location: "SoHo",
        distance: "0.8 miles",
        duration: "90 minutes",
        difficulty: "Hard",
        rating: 4.9,
        reviews: 256,
        imageUrl: "https://images.unsplash.com/photo-1570575844985-59d1ad944110?w=400&h=300&fit=crop",
    },
    {
        name: "Mystery Manor",
        location: "Upper West Side",
        distance: "1.2 miles",
        duration: "60 minutes",
        difficulty: "Easy",
        rating: 4.5,
        reviews: 89,
        imageUrl: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=300&fit=crop",
    },
    {
        name: "Cyberpunk 2087",
        location: "Midtown",
        distance: "1.5 miles",
        duration: "75 minutes",
        difficulty: "Hard",
        rating: 4.7,
        reviews: 167,
        imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f3fb3ce?w=400&h=300&fit=crop",
    },
    {
        name: "Jungle Expedition",
        location: "Hell's Kitchen",
        distance: "1.8 miles",
        duration: "60 minutes",
        difficulty: "Medium",
        rating: 4.6,
        reviews: 143,
        imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop",
    },
    {
        name: "Sherlock's Study",
        location: "West Village",
        distance: "2.1 miles",
        duration: "75 minutes",
        difficulty: "Medium",
        rating: 4.4,
        reviews: 98,
        imageUrl: "https://images.unsplash.com/photo-1450110320161-8c4d8e8dfa0c?w=400&h=300&fit=crop",
    },
];

export function PopularRooms() {
    const [locationGranted, setLocationGranted] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Check if permission already granted on mount
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'geolocation' }).then(permission => {
                if (permission.state === 'granted') {
                    setShowButton(false);
                }
            });
        }
    }, []);

    const requestLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Start the animation sequence
                setLocationGranted(true);
                setIsAnimating(true);

                // After 300ms color transition + 300ms delay, start scale animation
                const scaleTimer = setTimeout(() => {
                    setIsAnimating(false);
                }, 600);

                // After scale animation completes (300ms more), hide button
                const hideTimer = setTimeout(() => {
                    setShowButton(false);
                }, 900);

                console.log('Location:', position.coords);
                return () => {
                    clearTimeout(scaleTimer);
                    clearTimeout(hideTimer);
                };
            },
            (error) => {
                console.warn('Location denied or error:', error);
            }
        );
    };

    return (
        <section id="rooms" className="bg-secondary-background py-14 sm:py-18 border-b-4 border-black scroll-mt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center gap-6 mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black">
                        {locationGranted ? 'Popular Nearby' : 'Global Top Rooms'}
                    </h2>

                    {/* Location Button */}
                    {showButton && (
                        <Button
                            onClick={requestLocation}
                            variant="default"
                            size="icon"
                            className={`transition-all duration-300 ${locationGranted ? 'bg-success hover:bg-success' : ''
                                } ${isAnimating === false && locationGranted ? 'scale-0' : 'scale-100'
                                }`}
                        >
                            {locationGranted ? (
                                <Check size={20} className={`text-black transition-all duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />
                            ) : (
                                <MapPin size={20} />
                            )}
                        </Button>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockRooms.map((room) => (
                        <EscapeRoomCard key={room.name} {...room} />
                    ))}
                </div>
            </div>
        </section>
    );
}

