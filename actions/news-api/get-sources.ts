"use server";

import { NEWS_API_BASE_URL } from "@/actions/base-url";
import { errorObject } from "@/lib/functions/error-object";

export const getSources = async (
    category?: string,
    country?: string,
    language?: string
) => {
    const isCategory = category ? `category=${category}` : "";
    const isCountry = country ? `&country=${country}` : "";
    const isLanguage = language ? `&language=${language}` : "";

    try {
        const response = await fetch(
            `${NEWS_API_BASE_URL}/top-headlines/sources?${isCategory}${isCountry}${isLanguage}`,
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
