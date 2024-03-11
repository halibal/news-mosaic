import { getTopHeadlines } from "@/actions/news-api/get-top-headlines";
import SectionTitle from "@/components/common/section-title";
import NoDataAvailable from "@/components/common/no-data-available";
import SmallNewsCard from "@/components/small-news-card/small-news-card";
import { Article } from "@/types/article";
import { filterRemovedArticles } from "@/lib/functions/filter-removed-articles";

interface PersonalizedNewsProps {
    country?: string;
    category?: string;
    sources?: string;
}

export default async function PersonalizedNews({
    country,
    category,
    sources,
}: PersonalizedNewsProps) {
    const data = await getTopHeadlines(category, country, sources);
    console.log(data);

    const filteredArticles = filterRemovedArticles(data);

    const isData =
        data.status !== "error" && filteredArticles?.articles && filteredArticles.articles.length > 0;

    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title="Personalized News" />
            <div className="flex gap-4 overflow-hidden">
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
