import { Skeleton } from "@/components/ui/skeleton";

const skeletonStyles =
    "group relative flex min-h-52 flex-col overflow-hidden rounded-xl shadow-slate-500 sm:min-w-full md:w-[450px] lg:w-[600px] xl:w-[780px]";

export default function NewsListSkeleton() {
    return (
        <>
            <Skeleton className={skeletonStyles} />
            <Skeleton className={skeletonStyles} />
            <Skeleton className={skeletonStyles} />
            <Skeleton className={skeletonStyles} />
        </>
    );
}
