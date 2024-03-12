"use server";

import { NEWS_API_BASE_URL } from "@/actions/base-url";
import { errorObject } from "@/lib/functions/error-object";

interface GetEverythingFromNewsApiProps {
    query?: string;
    page?: string;
    pageSize?: string;
    sources?: string;
    language?: string;
    from?: string;
    to?: string;
}

export const getEverythingFromNewsApi = async ({
    query,
    page,
    pageSize,
    sources,
    language,
    from,
    to,
}: GetEverythingFromNewsApiProps) => {
    const isSources = sources ? `&sources=${sources}` : "";
    const isLanguage = language ? `&language=${language}` : "";
    const isDate = from && to ? `&from=${from}&to=${to}` : "";

    try {
        const response = await fetch(
            `${NEWS_API_BASE_URL}/everything?q=${query}&pageSize=${pageSize}&page=${page}${isSources}${isLanguage}${isDate}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: process.env.NEWS_API_KEY as string,
                },
                cache: "force-cache",
            }
        );

        const data = await response.json();
        return data;
    } catch (error: any) {
        return errorObject(error.message);
    }
};
