export default function NoDataAvailable({
    height = "13rem",
}: {
    height?: string;
}) {
    return (
        <div
            className="flex min-h-52 w-full items-center justify-center rounded-xl bg-clr_secondary p-4 text-clr_primary shadow-lg"
            style={{ height }}>
            <p className="text-xs">No data available...</p>
        </div>
    );
}
