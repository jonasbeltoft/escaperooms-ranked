/**
 * Ratings breakdown for a room or review.
 */
export type RatingBreakdown = {
    overall: number;
    scary: number;
    difficulty: number;
    immersion: number;
    decoration: number;
};

/**
 * A single review for a room.
 */
export type RoomReview = {
    id: string;
    user: string;
    text: string;
    ratings: RatingBreakdown;
    visitDate: string;
    images?: string[];
};

/**
 * Room address and geo location.
 */
export type RoomLocation = {
    address: string;
    city: string;
    lat: number;
    lng: number;
};

/**
 * Room owner information.
 */
export type RoomOwner = {
    name: string;
    url: string;
};

/**
 * Core room model used in the app.
 */
export type Room = {
    id: string;
    name: string;
    duration: string;
    description: string;
    tags: string[];
    images: string[];
    ratings: RatingBreakdown;
    location: RoomLocation;
    owner: RoomOwner;
    url: string;
    players: string;
    difficulty: string;
    recommendedAge: string;
    reviews: RoomReview[];
};

/**
 * Latitude/longitude point.
 */
export type GeoPoint = {
    lat: number;
    lng: number;
};

/**
 * Mode for popular rooms listing.
 */
export type PopularRoomsMode = "global" | "location";

/**
 * Props for the PopularRooms component.
 */
export type PopularRoomsProps = {
    mode?: PopularRoomsMode;
    initialLocation?: GeoPoint | null;
};

/**
 * Room list card data.
 */
export type RoomCardData = {
    id: string;
    name: string;
    location: string;
    distance: string;
    duration: string;
    difficulty: string;
    rating: number;
    reviews: number;
    imageUrl?: string;
};
