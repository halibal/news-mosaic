import NewsCardSimple from "@/components/news-card-simple/news-card-simple";
import { getLatestHeadlines } from "@/actions/news-api/get-latest-headlines";
import { Article } from "@/types/article";
import NoDataAvailable from "@/components/common/no-data-available";
import SectionTitle from "@/components/common/section-title";
import { cookies } from "next/headers";

export default async function LatestNews() {
    const countryCookie = cookies().get("country")?.value;
    const data = await getLatestHeadlines(countryCookie);

    const isData = data?.articles && data?.articles?.length > 0;


    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title="Latest News" />
            <p className="rounded-xl bg-rose-100 p-4 text-justify text-sm text-rose-500">
                WARNING: {data?.status === "error" && data?.message}
            </p>
            {!isData ? (
                <NoDataAvailable />
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                    {isData &&
                        data.articles
                            ?.slice(0, 1)
                            .map((article: Article) => (
                                <NewsCardSimple
                                    key={article.title}
                                    pathname="/news/1"
                                    imageUrl={article.urlToImage}
                                    title={article.title}
                                    description={article.description}
                                />
                            ))}
                    <div className="grid grid-cols-1 gap-4">
                        {isData &&
                            data.articles
                                ?.slice(1)
                                .map((article: Article) => (
                                    <NewsCardSimple
                                        key={article.title}
                                        pathname="/news/1"
                                        imageUrl={article.urlToImage}
                                        title={article.title}
                                        description={article.description}
                                    />
                                ))}
                    </div>
                </div>
            )}
        </div>
    );
}
