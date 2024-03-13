import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function LatestNewsSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-clr_primary">Latest News</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                <Skeleton className="min-h-52 w-full min-w-full rounded-xl shadow-lg lg:min-w-[430px]" />
                <div className="grid grid-cols-1 gap-4">
                    <Skeleton className="min-h-52 w-full min-w-[210px] rounded-xl shadow-lg" />
                    <Skeleton className="min-h-52 w-full min-w-[210px] rounded-xl shadow-lg" />
                </div>
            </div>
        </div>
    );
}
