"use client"

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ReviewForm({ roomId, onSubmit }: { roomId?: string; onSubmit?: (payload: any) => void }) {
    const [text, setText] = useState("");
    const [overall, setOverall] = useState(5);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = { roomId, text, ratings: { overall } };
        onSubmit?.(payload);
        setText("");
    };

    return (
        <form onSubmit={submit} className="space-y-3">
            <label className="block">
                <div className="text-sm font-semibold mb-1">Your experience</div>
                <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full p-2 border-2 border-border rounded-base" rows={4} />
            </label>

            <label className="block">
                <div className="text-sm font-semibold mb-1">Overall rating</div>
                <Input type="number" value={String(overall)} onChange={(e) => setOverall(Number(e.target.value))} min={1} max={5} />
            </label>

            <div>
                <Button type="submit">Submit review</Button>
            </div>
        </form>
    );
}
