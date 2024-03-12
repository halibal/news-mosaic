import Filters from "@/components/filters/filters";
import NewsList from "@/components/news-list/news-list";
import NewsListSkeleton from "@/components/news-list/news-list-skeleton";
import { SearchParamsProps } from "@/types/search-params";
import { Suspense } from "react";

export default function NewsPage({ searchParams }: SearchParamsProps) {
    return (
        <div className="my-10 flex max-w-6xl flex-1 gap-8 p-4">
            <div className="flex w-80 flex-col gap-4 rounded-lg bg-slate-50 p-2">
                <Filters searchParams={searchParams} />
            </div>
            <div className="flex w-[700px] flex-1 flex-col gap-4">
                <Suspense fallback={<NewsListSkeleton />}>
                    <NewsList searchParams={searchParams} />
                </Suspense>
            </div>
        </div>
    );
}
