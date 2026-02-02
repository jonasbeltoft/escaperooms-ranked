export function LoadingSpinner() {

    return (<main className="min-h-[calc(100dvh-76px)] flex items-center justify-center p-6">
        <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent border-primary mx-auto" />
            <h2 className="mt-4 text-lg font-semibold">Loading room…</h2>
        </div>
    </main>)
}
