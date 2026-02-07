'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="bg-background border-b-4 border-black py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight">
                    FIND YOUR NEXT <br />
                    <span className="border-4 px-6 py-3 inline-block my-2 bg-lattice bg-secondary-background">
                        <span className="text-5xl sm:text-7xl">E</span>
                        <span className="text-5xl sm:text-7xl">S</span>
                        <span className="text-5xl sm:text-7xl">C</span>
                        <span className="text-xs sm:text-sm">ape</span>
                        {' '}
                        <span className="text-5xl sm:text-7xl">R</span>
                        <span className="text-xs sm:text-sm">ooms</span>
                        {' '}
                        <span className="text-5xl sm:text-7xl">R</span>
                        <span className="text-xs sm:text-sm">anked</span>
                    </span> <br />
                    EXPERIENCE
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-semibold">
                    Discover and review real-world escape rooms. Track shared experiences with other players.
                </p>

                {/* Find Rooms CTA */}
                <Link href="#rooms" tabIndex={-1}>
                    <Button variant="default" size="lg" className="text-2xl px-12 py-8 font-bold h-auto">
                        EXPLORE ROOMS
                    </Button>
                </Link>
                <p className="text-sm text-gray-600 mt-8 font-medium">
                    Over 500+ rooms and 50,000+ reviews from the escrr community
                </p>
            </div>
        </section>
    );
}
