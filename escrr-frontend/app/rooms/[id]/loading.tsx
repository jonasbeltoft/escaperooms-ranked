import { Skeleton } from "@/components/ui/skeleton";

/**
 * Loading skeleton for room detail page.
 */
export default function Loading() {
    return (
        <main className="bg-lattice" style={{ backgroundSize: "90px 90px" }}>
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-main border-2 border-border rounded-base shadow-shadow py-4 px-6">
                    <div className="flex items-center justify-between gap-4">
                        <Skeleton className="h-7 w-56" />
                        <Skeleton className="h-5 w-28" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 sm:gap-6">
                    <div className="lg:col-span-2">
                        <div className="mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="flex flex-row gap-4 sm:flex-col">

                                    <Skeleton className="aspect-4/3 h-56" />
                                    <Skeleton className="aspect-4/3 h-56" />
                                </div>
                                <div className="aspect-3/2 sm:aspect-auto col-span-1 sm:col-span-2 rounded-base overflow-hidden border-2 border-border">
                                    <Skeleton className="h-full w-full" />
                                </div>
                            </div>
                            <div className="mt-4 bg-main border-2 border-border rounded-base shadow-shadow">
                                <div className="p-6 space-y-3">
                                    <Skeleton className="h-5 w-28" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-11/12" />
                                    <Skeleton className="h-4 w-10/12" />
                                    <div className="flex gap-2 pt-2">
                                        <Skeleton className="h-6 w-20" />
                                        <Skeleton className="h-6 w-24" />
                                        <Skeleton className="h-6 w-16" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-4 self-start">
                        <div className="flex flex-col gap-4 flex-1">
                            <div className="bg-main border-2 border-border rounded-base shadow-shadow p-6 space-y-4">
                                <Skeleton className="h-5 w-32" />
                                <Skeleton className="h-8 w-20" />
                                <div className="grid grid-cols-2 gap-3">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-4 w-20" />
                                </div>
                            </div>
                            <div className="bg-secondary-background border-2 border-border rounded-base shadow-shadow p-6 space-y-3">
                                <Skeleton className="h-5 w-20" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-10/12" />
                                <Skeleton className="h-4 w-9/12" />
                            </div>
                        </div>
                        <div className="bg-secondary-background border-2 border-border rounded-base shadow-shadow p-6 flex-1 space-y-3">
                            <Skeleton className="h-5 w-24" />
                            <Skeleton className="h-4 w-10/12" />
                            <Skeleton className="h-4 w-8/12" />
                            <Skeleton className="h-36 w-full" />
                            <Skeleton className="h-4 w-28" />
                        </div>
                    </aside>
                </div>
            </section>

            <section className="bg-secondary-background border-t-4 border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    <Skeleton className="h-6 w-24" />
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="bg-background border-2 border-border rounded-base shadow-shadow p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-11/12" />
                            <Skeleton className="h-4 w-10/12" />
                            <div className="flex gap-3">
                                <Skeleton className="h-10 w-20" />
                                <Skeleton className="h-10 w-40" />
                            </div>
                        </div>
                        <div className="bg-background border-2 border-border rounded-base shadow-shadow p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-11/12" />
                            <Skeleton className="h-4 w-10/12" />
                            <div className="flex gap-3">
                                <Skeleton className="h-10 w-20" />
                                <Skeleton className="h-10 w-40" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
