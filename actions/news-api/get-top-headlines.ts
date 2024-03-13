"use server";

import { NEWS_API_BASE_URL } from "@/actions/base-url";
import { errorObject } from "@/lib/functions/error-object";
import { cookies } from "next/headers";

/**
 *
 * @param category
 * @param country
 * @param sources
 * @param page
 * @param pageSize
 *
 */

export const getTopHeadlines = async (
    category?: string,
    country = "us",
    sources?: string,
    page = 1,
    pageSize = 4
) => {
    // can't send sources if category or country is present and vice versa due to endpoint restrictions
    const isSources = category || country ? "" : `&sources=${sources}`;
    let isCategory = category
        ? category !== "all"
            ? `&category=${category}`
            : ""
        : "";
    let isCountry = country
        ? country !== "all"
            ? `&country=${country}`
            : `&country=us`
        : "";

    if (sources) {
        isCategory = "";
        isCountry = "";
    }

    try {
        const response = await fetch(
            `${NEWS_API_BASE_URL}/top-headlines?pageSize=${pageSize}&page=${page}${isCategory}${isCountry}${isSources}`,
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
