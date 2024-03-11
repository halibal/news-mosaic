import { getEverythingFromNewsApi } from "@/actions/news-api/get-everything-from-news-api";
import NewsCardSimple from "@/components/news-card-simple/news-card-simple";
import { Article } from "@/types/article";
import NoDataAvailable from "@/components/common/no-data-available";

interface NewsListProps {
    category?: string | undefined;
    date?: string | undefined;
    q?: string | undefined;
    source?: string | undefined;
}

export default async function NewsList({ date, q, source }: NewsListProps) {
    const data = await getEverythingFromNewsApi(q, 1);

    const isData = data?.articles && data.articles.length > 0;

    const noDataAvailable = data.articles.length === 0;

    return (
        <div className="flex flex-col gap-4">
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
        </div>
    );
}
