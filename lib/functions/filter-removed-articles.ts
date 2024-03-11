import { Article } from "@/types/article";

interface NewsData {
    status: string;
    totalResults: number;
    articles: Article[];
}

export function filterRemovedArticles(data?: NewsData): NewsData {
    if (!data) {
        return {
            status: "ok",
            totalResults: 0,
            articles: [],
        };
    }

    const filteredArticles = data.articles.filter(
        (article) => article.title !== "[Removed]"
    );

    return {
        ...data,
        articles: filteredArticles,
        totalResults: filteredArticles.length,
    };
}
