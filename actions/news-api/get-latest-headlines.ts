"use server";

import { NEWS_API_BASE_URL } from "@/actions/base-url";
import { errorObject } from "@/lib/functions/error-object";

/**
 *
 * @param country
 * @param page
 * @param pageSize
 *
 */

export const getLatestHeadlines = async (
    country = "us",
    page = 1,
    pageSize = 3
) => {
    return fetch(
        `${NEWS_API_BASE_URL}/top-headlines?country=${country}&pageSize=${pageSize}&page=${page}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: process.env.NEWS_API_KEY as string,
            },
            cache: "force-cache",
        }
    )
        .then((response) => {
            if (!response.ok) {
                return errorObject(
                    "There was an error fetching the news api data."
                );
            }
            return response.json();
        })
        .catch((error) => {
            return errorObject(error.message);
        });
};
