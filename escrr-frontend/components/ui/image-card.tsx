import { ReactNode, useState, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
    imageUrl?: string
    caption?: ReactNode
    className?: string
    variant?: 'default' | 'reverse'
    width: number
    height?: number
}

export default function ImageCard({ imageUrl, caption, className, variant = 'default', width, height }: Props) {
    const [imageFailed, setImageFailed] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const handleImageError = useCallback(() => {
        setImageFailed(true)
    }, [imageUrl])

    return (
        <figure
            className={cn(
                "w-62.5 overflow-hidden rounded-base border-2 border-border bg-gray-100! font-base",
                variant === 'reverse' ? '' : 'shadow-shadow',
                className,
            )}
        >
            {imageFailed ? (
                <div className="w-full aspect-4/3 bg-gray-100 flex items-center justify-center border-border">
                    <span className="text-gray-500 font-bold text-center px-4">No image available</span>
                </div>
            ) : (
                <Image
                    className={`w-full h-auto transition-opacity object-cover duration-100 ease-out ${isImageLoaded ? "opacity-100" : " opacity-0"}`}
                    src={imageUrl ? imageUrl : ""}
                    alt="image"
                    loading="lazy"
                    width={width}
                    height={height}
                    onLoad={() => setIsImageLoaded(true)}
                    onError={handleImageError}
                    onAbort={handleImageError}
                />
            )}
            {caption && (
                <figcaption className="border-t-4 bg-main border-border p-4 text-foreground">
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}
