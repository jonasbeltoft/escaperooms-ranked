import { cn } from "@/lib/utils"

interface RoomTagProps {
    label: string
    className?: string
}

export function RoomTag({ label, className }: RoomTagProps) {
    return (
        <span className={cn("text-xs px-2 py-1 border-2 border-border rounded-base", className)}>
            {label}
        </span>
    )
}
