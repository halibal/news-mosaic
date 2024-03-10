"use server";

import { NEWS_API_BASE_URL } from "@/actions/base-url";
import { errorObject } from "@/lib/functions/error-object";

export const getEverything = async (page = 1, pageSize = 5, query?: string) => {
    try {
        const response = await fetch(
            `${NEWS_API_BASE_URL}?q=${query}&pageSize=${pageSize}&page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: process.env.NEWS_API_KEY as string,
                },
                cache: "force-cache",
            }
        );

        if (!response.ok) {
            return errorObject(
                "There was an error fetching the news api data."
            );
        }

        const data = await response.json();
        return data;
    } catch (error: any) {
        return errorObject(error.message);
    }
};
