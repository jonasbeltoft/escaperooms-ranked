'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b-4 border-black bg-secondary-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 gap-2">
                    <Link href="/" className="text-xl sm:text-3xl py-0.5 font-black hover:opacity-80 transition-opacity">
                        Escape Rooms Ranked
                    </Link>

                    <div className="flex items-center gap-4">
                        <SignedIn>
                            <Button variant="default" size="icon">
                                <UserButton />
                            </Button>
                        </SignedIn>
                        <SignedOut>
                            <div className="flex gap-3">
                                <SignInButton mode="modal">
                                    <Button variant="default">
                                        Sign In / Up
                                    </Button>
                                </SignInButton>
                            </div>
                        </SignedOut>
                    </div>
                </div>
            </div>
        </header>
    );
}
