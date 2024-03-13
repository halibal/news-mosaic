"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface SetCookiesProps {
    country?: string;
    category?: string;
    sources?: string;
}

export const setCookies = ({ country, category, sources }: SetCookiesProps) => {
    if (sources) {
        cookies().delete("country");
        cookies().delete("category");
        cookies().set("sources", sources);
    } else {
        cookies().delete("sources");
        if (country) {
            cookies().set("country", country);
        }

        if (category) {
            cookies().set("category", category);
        }
    }
    revalidatePath("/");
};
