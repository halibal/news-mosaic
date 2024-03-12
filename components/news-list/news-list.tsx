import { getEverythingFromNewsApi } from "@/actions/news-api/get-everything-from-news-api";
import NewsCardSimple from "@/components/news-card-simple/news-card-simple";
import { Article } from "@/types/article";
import NoDataAvailable from "@/components/common/no-data-available";
import { SearchParamsProps } from "@/types/search-params";
import Pagination from "@/components/common/pagination";
import { calculateTotalPages } from "@/lib/functions/calculate-total-pages";

export default async function NewsList({ searchParams }: SearchParamsProps) {
    const {
        q,
        sources,
        language,
        from,
        to,
        page = "1",
        pageSize = "5",
    } = searchParams;
    const data = await getEverythingFromNewsApi({
        query: q,
        page,
        pageSize,
        sources,
        language,
        from,
        to,
    });

    console.log(data);

    const isData = data?.articles && data.articles.length > 0;

    const noDataAvailable = data?.articles?.length === 0;

    console.log(data);

    const totalPages = data?.totalResults
        ? Math.ceil(data.totalResults / +pageSize)
        : 0;

    console.log(calculateTotalPages(data?.totalResults || 0, +pageSize));

    return (
        <div className="flex flex-1 flex-col gap-4">
            {noDataAvailable ? (
                <NoDataAvailable />
            ) : (
                <div className="flex flex-col gap-4">
                    {isData &&
                        data.articles.map((article: Article) => (
                            <NewsCardSimple
                                key={article.title}
                                pathname="/news/1"
                                imageUrl={article.urlToImage}
                                title={article.title}
                                description={article.description}
                            />
                        ))}
                </div>
            )}

            <div className="mt-auto">
                <hr className="my-2 border-sky-200" />
                <Pagination
                    totalPages={calculateTotalPages(
                        data?.totalResults || 1,
                        +pageSize
                    )}
                    searchParams={searchParams}
                    currentPage={+page || 1}
                    pageSize={+pageSize || 5}
                />
            </div>
        </div>
    );
}
