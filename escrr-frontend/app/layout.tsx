import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Header } from "@/components/header";

const dm_sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: "ESCRR - Escape Rooms Ranked",
    description: "Discover and review real-world escape rooms",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" className={`${dm_sans.variable} scroll-smooth`}>
                <body className="antialiased">
                    <Header />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
