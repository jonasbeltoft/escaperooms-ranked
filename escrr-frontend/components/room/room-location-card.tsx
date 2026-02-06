import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export interface RoomLocation {
    address: string
    city: string
    lat: number
    lng: number
}

export interface RoomOwner {
    name: string
    url: string
}

interface RoomLocationCardProps {
    location: RoomLocation
    owner: RoomOwner
    className?: string
}

export function RoomLocationCard({
    location,
    owner,
    className
}: RoomLocationCardProps) {
    const src = `https://maps.google.com/maps?q=${location.address}&z=12&output=embed`

    return (
        <Card className={`bg-secondary-background ${className}`}>
            <CardHeader>
                <CardTitle>
                    Location
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-1 text-sm">
                    <p className="text-base font-semibold">{location.address}</p>
                    <p className="text-foreground/70">{location.city}</p>
                </div>
                <div className="relative h-48 overflow-hidden rounded-xl border border-border bg-black/10">
                    <iframe
                        src={src}
                        className="absolute inset-0 h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        title={`${location.address} map`}
                    />
                </div>
                <div className="text-sm text-foreground/80">
                    Owner:
                    <Link
                        href={owner.url}
                        className="ml-1 font-semibold underline underline-offset-2 text-foreground hover:text-foreground"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {owner.name}
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
