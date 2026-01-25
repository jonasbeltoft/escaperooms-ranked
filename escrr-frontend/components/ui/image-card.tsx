import { ReactNode, useState, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
    imageUrl: string
    caption: ReactNode
    className?: string
}

export default function ImageCard({ imageUrl, caption, className }: Props) {
    const [imageFailed, setImageFailed] = useState(false)

    const handleImageLoad = useCallback(() => {
    }, [imageUrl])

    const handleImageError = useCallback(() => {
        setImageFailed(true)
    }, [imageUrl])

    return (
        <figure
            className={cn(
                "w-62.5 overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow",
                className,
            )}
        >
            {imageFailed ? (
                <div className="w-full aspect-4/3 bg-gray-100 flex items-center justify-center border-b-2 border-border">
                    <span className="text-gray-500 font-bold text-center px-4">No image available</span>
                </div>
            ) : (
                <Image
                    className="w-full h-auto"
                    src={imageUrl}
                    alt="image"
                    width={250}
                    height={188}
                    onAbort={handleImageError}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
            )}
            <figcaption className="border-t-2 border-border p-4 text-foreground">
                {caption}
            </figcaption>
        </figure>
    )
}
