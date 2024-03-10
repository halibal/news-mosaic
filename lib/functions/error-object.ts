"use server";

export const errorObject = (message: string) => {
    return {
        status: "error",
        message,
    };
};
