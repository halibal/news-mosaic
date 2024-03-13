import { getTopHeadlines } from "@/actions/news-api/get-top-headlines";
import SectionTitle from "@/components/common/section-title";
import NoDataAvailable from "@/components/common/no-data-available";
import SmallNewsCard from "@/components/small-news-card/small-news-card";
import { Article } from "@/types/article";
import { filterRemovedArticles } from "@/lib/functions/filter-removed-articles";
import { cookies } from "next/headers";

export default async function PersonalizedNews() {
    const countryCookie = cookies().get("country")?.value;
    const categoryCookie = cookies().get("category")?.value;
    const sourcesCookie = cookies().get("sources")?.value;

    const data = await getTopHeadlines(
        categoryCookie,
        countryCookie,
        sourcesCookie
    );

    const filteredArticles = filterRemovedArticles(data);

    const isData =
        filteredArticles?.articles && filteredArticles?.articles?.length > 0;

    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title="Personalized News" />
            {isData || (
                <p className="rounded-xl bg-rose-100 p-4 text-justify text-sm text-rose-500">
                    WARNING: {data?.message}
                </p>
            )}
            <div className="flex justify-between gap-4 overflow-hidden max-xl:flex-col">
                {isData ? (
                    filteredArticles.articles.map(
                        (item: Article, index: number) => (
                            <SmallNewsCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                pathname={item.url}
                                imageUrl={item.urlToImage}
                            />
                        )
                    )
                ) : (
                    <NoDataAvailable />
                )}
            </div>
        </div>
    );
}
