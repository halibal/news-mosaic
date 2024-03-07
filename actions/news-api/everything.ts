"use server";

import { NEWS_API_BASE_URL } from "@/actions/base-url";
import { errorObject } from "@/lib/functions/error-object";

export const everything = async (query: string) => {
    try {
        const response = await fetch(`${NEWS_API_BASE_URL}?q=${query}`, {
            method: "GET",
            headers: {
                Authorization: process.env.NEWS_API_KEY as string,
            },
        });

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
