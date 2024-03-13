import React from "react";
import SectionTitle from "@/components/common/section-title";
import { Skeleton } from "@/components/ui/skeleton";

export default function PersonalizedNewsSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title="Personalized News" />
            <div className="flex justify-between gap-4 overflow-hidden max-xl:flex-col">
                <Skeleton className="h-40 w-64 rounded-xl max-xl:w-full xl:h-52" />
                <Skeleton className="h-40 w-64 rounded-xl max-xl:w-full xl:h-52" />
                <Skeleton className="h-40 w-64 rounded-xl max-xl:w-full xl:h-52" />
                <Skeleton className="h-40 w-64 rounded-xl max-xl:w-full xl:h-52" />
            </div>
        </div>
    );
}
