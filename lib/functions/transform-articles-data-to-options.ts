/**
 * Transform array of articles to options for select elements
 * @param data
 * @returns
 */

export const transformArticlesDataToOptions = (data: any) => {
    if (!data) return [];

    return data.map((item: any) => ({
        label: item.name,
        value: item.id,
    }));
};
