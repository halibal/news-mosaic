export const wait = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(() => {
                console.log("waiting");
            });
        }, time);
    });
};
