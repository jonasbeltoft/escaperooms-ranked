'use client';

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    const { user } = useUser();

    return (
        <header className="sticky top-0 z-50 border-b-2 border-black bg-secondary-background shadow-shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="text-3xl font-black hover:opacity-80 transition-opacity">
                        Escape Rooms Ranked
                    </Link>

                    <div className="flex items-center gap-4">
                        {user ? (
                            <UserButton />
                        ) : (
                            <div className="flex gap-3">
                                <SignInButton mode="modal">
                                    <Button variant="default">
                                        Sign In / Up
                                    </Button>
                                </SignInButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
