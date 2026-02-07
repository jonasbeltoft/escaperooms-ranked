import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
    return (
        <main className="min-h-[calc(100dvh-76px)] bg-lattice flex items-center justify-center px-4 py-10" style={{ backgroundSize: "90px 90px" }}>
            <Card className="w-full max-w-xl bg-secondary-background">
                <CardHeader>
                    <CardTitle className="text-3xl sm:text-4xl">Page not found</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-sm text-foreground/70">
                        We couldn&apos;t find the page you&apos;re looking for. It may have been removed or the link is incorrect.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button asChild>
                            <Link href="/">
                                <ArrowLeft />
                                Back to home
                            </Link>
                        </Button>
                        <Button asChild variant="neutral">
                            <Link href="/rooms">
                                Browse rooms
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
