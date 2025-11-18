// Method to (sch)meckle using Jest
export const sum = (a: number, b: number): number => {
    return a + b;
};

// Other (sch)meckle using Jest
export const fetchData = (callback: (data: string) => void) => {
    setTimeout(() => {
        callback("Peanut Buttuh");
    }, 1000);
};

// Anudda (sch)meckle using Jest
export const fetchDataPromise = (): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Peanut Buttuh");
        }, 1000);
    });
};