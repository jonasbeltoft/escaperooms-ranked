'use client';

import { MapPin, Check, Map, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EscapeRoomCard } from './escape-room-card';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Input } from "./ui/input";
import type { GeoPoint, PopularRoomsMode, PopularRoomsProps, RoomCardData } from "@/app/types";

const mockRooms: RoomCardData[] = [
    {
        id: "bfd3d277-30fa-4cf1-9cff-d20bc9a4111d",
        name: "The Lost Temple",
        location: "Downtown Manhattan",
        distance: "0.3 miles",
        duration: "60 minutes",
        difficulty: "Medium",
        rating: 4.8,
        reviews: 124,
        imageUrl: "https://placehold.co/400x300/png",
    },
    {
        id: "a1e5f3c2-9c4b-4d2e-8f3b-2c9e4f1a5b6c",
        name: "Heist Masterclass",
        location: "SoHo",
        distance: "0.8 miles",
        duration: "90 minutes",
        difficulty: "Hard",
        rating: 4.9,
        reviews: 256,
        imageUrl: "https://placehold.co/400x300/png",
    },
    {
        id: "c3f9e8a7-4d2b-4f1a-9f3b-2c9e4f1a5b7d",
        name: "Mystery Manor",
        location: "Upper West Side",
        distance: "1.2 miles",
        duration: "60 minutes",
        difficulty: "Easy",
        rating: 4.5,
        reviews: 89,
        imageUrl: "https://placehold.co/400x300/png",
    },
    {
        id: "d4e6f7a8-5b3c-4d2e-9f4c-3d0e5f2b6c8e",
        name: "Cyberpunk 2087",
        location: "Midtown",
        distance: "1.5 miles",
        duration: "75 minutes",
        difficulty: "Hard",
        rating: 4.7,
        reviews: 167,
        imageUrl: "https://placehold.co/400x300/png",
    },
    {
        id: "e5f7a8b9-6c4d-4e3f-9g5d-4e1f6g3c7d9f",
        name: "Jungle Expedition",
        location: "Hell's Kitchen",
        distance: "1.8 miles",
        duration: "60 minutes",
        difficulty: "Medium",
        rating: 4.6,
        reviews: 143,
        imageUrl: "https://placehold.co/400x300/png",
    },
    {
        id: "f6g8b9c0-7d5e-4f4g-0h6e-5f2g7h4d8e0g",
        name: "Sherlock's Study",
        location: "West Village",
        distance: "2.1 miles",
        duration: "75 minutes",
        difficulty: "Medium",
        rating: 4.4,
        reviews: 98,
        imageUrl: "https://placehold.co/400x300/png",
    },
];

export function PopularRooms({ mode = 'location', initialLocation = null }: PopularRoomsProps) {
    const [viewMode, setViewMode] = useState<PopularRoomsMode>(mode);
    const [locationGranted, setLocationGranted] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showMapPicker, setShowMapPicker] = useState(false);
    const [rooms, setRooms] = useState<RoomCardData[]>(() => mockRooms);
    const [loading, setLoading] = useState(false);
    const [manualLocation, setManualLocation] = useState<GeoPoint | null>(initialLocation);

    useEffect(() => {
        // Check if permission already granted on mount
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'geolocation' }).then(permission => {
                if (permission.state === 'granted') {
                    setLocationGranted(true);
                }
            }).catch(() => { });
        }

        // load initial rooms based on default mode / location
        loadRooms();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // when view mode or manual location changes, reload rooms
        loadRooms();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewMode, manualLocation]);

    const requestLocation = () => {
        if (!navigator.geolocation) {
            console.warn('Geolocation not available');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords: GeoPoint = { lat: position.coords.latitude, lng: position.coords.longitude };
                setLocationGranted(true);
                setManualLocation(coords);
            },
            (error) => {
                console.warn('Location denied or error:', error);
                // fallback to global mode if denied
                setViewMode('global');
            }
        );
    };

    const loadRooms = async () => {
        setLoading(true);
        try {
            if (viewMode === 'global') {
                const data = await fetchRooms({ mode: 'global' });
                setRooms(data);
            } else {
                // location mode: prefer manualLocation, otherwise try to request browser location
                if (manualLocation) {
                    const data = await fetchRooms({ mode: 'location', geo: manualLocation });
                    setRooms(data);
                } else if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        const coords: GeoPoint = { lat: position.coords.latitude, lng: position.coords.longitude };
                        setLocationGranted(true);
                        setManualLocation(coords);
                        const data = await fetchRooms({ mode: 'location', geo: coords });
                        setRooms(data);
                    }, async (err) => {
                        console.warn('Geolocation error:', err);
                        // fallback
                        const data = await fetchRooms({ mode: 'global' });
                        setRooms(data);
                    });
                } else {
                    const data = await fetchRooms({ mode: 'global' });
                    setRooms(data);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    /**
     * Placeholder: fetchRooms
     * Replace the contents of this function with a real API call.
     * - If `options.mode === 'global'` fetch global top rooms.
     * - If `options.mode === 'location'` use `options.geo` to fetch nearby rooms.
     */
    async function fetchRooms(options: { mode: PopularRoomsMode; geo?: GeoPoint | null }): Promise<RoomCardData[]> {
        // TODO: implement real fetching logic here.
        // Example signatures you might use later:
        // fetch(`/api/rooms/top`)
        // fetch(`/api/rooms/near?lat=${geo.lat}&lng=${geo.lng}`)
        // For now, return the mocked rooms. You can modify/mock per-location if desired.
        console.log('fetchRooms called with', options);
        return mockRooms;
    }

    return (
        <section id="rooms" className="bg-secondary-background py-14 sm:py-18 border-b-4 border-black scroll-mt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center gap-6 mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black">
                        {manualLocation ? 'Popular Nearby' : 'Global Top Rooms'}
                    </h2>

                    {/* Location Button (persistent) */}
                    <div className="relative">
                        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="default"
                                    size="icon"
                                    aria-label="Select location for popular rooms"
                                >
                                    <MapPin size={20} />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent sideOffset={8} align="end" className="w-56">
                                {!showMapPicker ? (
                                    <>
                                        <DropdownMenuLabel>Choose Rooms</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onSelect={async () => { setViewMode('location'); requestLocation(); setDropdownOpen(false); }}>
                                            <MapPin size={16} />
                                            Near Me
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={(event: Event) => { event.preventDefault(); setShowMapPicker(true); setDropdownOpen(true); }}>
                                            <Map size={16} />
                                            Choose on map
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={async () => { setViewMode('global'); setManualLocation(null); await loadRooms(); setDropdownOpen(false); }}>
                                            <Globe size={16} />
                                            Global Top
                                        </DropdownMenuItem>
                                    </>
                                ) : (
                                    <div className="px-2 py-2">
                                        <label className="text-sm">Manual location</label>
                                        <Input
                                            aria-label="lat"
                                            placeholder="lat"
                                            value={manualLocation?.lat ?? ''}
                                            onChange={(e) => setManualLocation(prev => ({ ...(prev ?? { lat: 0, lng: 0 }), lat: Number(e.target.value) }))}
                                        />
                                        <Input
                                            aria-label="lng"
                                            placeholder="lng"
                                            className="mt-1"
                                            value={manualLocation?.lng ?? ''}
                                            onChange={(e) => setManualLocation(prev => ({ ...(prev ?? { lat: 0, lng: 0 }), lng: Number(e.target.value) }))}
                                        />
                                        <div className="flex gap-2 mt-2">
                                            <Button size="sm" onClick={async () => { setViewMode('location'); await loadRooms(); setDropdownOpen(false); setShowMapPicker(false); }}>Set location</Button>
                                            <Button size="sm" variant="default" onClick={() => { setShowMapPicker(false); }}>Back</Button>
                                        </div>
                                    </div>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(rooms ?? mockRooms).map((room) => (
                        <EscapeRoomCard key={room.id} {...room} />
                    ))}
                </div>
            </div>
        </section>
    );
}

