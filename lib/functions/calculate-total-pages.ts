export const calculateTotalPages = (totalResults: number, pageSize: number) => {
    const limitedResults = totalResults > 100 ? 100 : totalResults;
    return Math.ceil(limitedResults / pageSize);
};
