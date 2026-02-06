import Star11 from "../stars/s11";

type Review = {
    id: string;
    user: string;
    text: string;
    ratings: { overall: number; scary: number; difficulty: number; roleplay?: number; decor: number };
    visitDate?: string;
};

export default function ReviewsList({ reviews }: { reviews?: Review[] }) {
    if (!reviews || reviews.length === 0) {
        return <div className="text-gray-500">No reviews yet — be the first to add one.</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            {reviews.map((r) => (
                <div key={r.id} className="flex flex-col p-6 border-2 border-border rounded-base bg-background min-h-48">

                    <div className="flex justify-between items-center">
                        <div className="font-bold">{r.user}</div>
                        <div className="text-sm text-gray-600">{r.visitDate ?? 'recent'}</div>
                    </div>

                    <div className="mt-2 flex flex-col sm:flex-row gap-2 grow justify-between">
                        <div className="text-sm">{r.text}</div>

                        <div className="flex flex-row gap-4 items-end shrink-0 justify-end">
                            <div className="text-right">
                                <div className="text-4xl font-black">{r.ratings.overall?.toFixed(1) ?? "—"}</div>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star11
                                            key={i}
                                            size={16}
                                            className={i < Math.floor(r.ratings.overall ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 gap-x-4 justify-items-end">
                                <div className="w-min">
                                    <div className="text-sm">Scary: <strong>{r.ratings.scary ?? '—'}</strong></div>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star11
                                                key={i}
                                                size={16}
                                                className={i < Math.floor(r.ratings.scary ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-min">
                                    <div className="text-sm">Difficulty: <strong>{r.ratings.difficulty ?? '—'}</strong></div>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star11
                                                key={i}
                                                size={16}
                                                className={i < Math.floor(r.ratings.difficulty ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-min">
                                    <div className="text-sm">Roleplay: <strong>{r.ratings.roleplay ?? '—'}</strong></div>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star11
                                                key={i}
                                                size={16}
                                                className={i < Math.floor(r.ratings.roleplay ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-min">
                                    <div className="text-sm">Decor: <strong>{r.ratings.decor ?? '—'}</strong></div>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star11
                                                key={i}
                                                size={16}
                                                className={i < Math.floor(r.ratings.decor ?? 0) ? "fill-warn text-warn" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
