// (Sch)meckle of sum.ts
import { sum, fetchData, fetchDataPromise } from "./sum";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("Test the schmoozerey", () => {
    expect(sum(2, 2)).toBe(4);
});

test('fetchData calls callback with "Peanut Buttuh"', done => {
    function callback(data: string) {
        expect(data).toBe("Peanut Buttuh");
        done();
    }

    fetchData(callback);
});

test("The data is Peanut Buttuh", async () => {
    const data = await fetchDataPromise();
    expect(data).toBe("Peanut Buttuh");
});