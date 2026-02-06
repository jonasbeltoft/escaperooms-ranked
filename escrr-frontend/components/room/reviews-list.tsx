import { Review } from "@/app/types";
import ReviewCard from "@/components/room/review-card";

export default function ReviewsList({ reviews }: { reviews?: Review[] }) {
    if (!reviews || reviews.length === 0) {
        return <div className="text-gray-500">No reviews yet — be the first to add one.</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
            ))}
        </div>
    );
}
