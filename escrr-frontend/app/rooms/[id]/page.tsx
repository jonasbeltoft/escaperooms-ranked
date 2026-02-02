import React from 'react';

type Props = {
    params: { id: string };
};

export default function RoomPage({ params }: Props) {
    return (
        <main className="min-h-screen p-6">
            <h1 className="text-2xl font-black">Room</h1>
            <p className="mt-4">Placeholder page for room id: {params.id}</p>
        </main>
    );
}
