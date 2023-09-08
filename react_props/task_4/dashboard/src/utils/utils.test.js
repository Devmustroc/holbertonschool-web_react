import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe("getFullYear", () => {
    it("getFullYear", () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    });
});

describe("getFooterCopy", () => {
    it("getFooterCopy true", () => {
        expect(getFooterCopy(true)).toEqual("Holberton School");
    });
    it("getFooterCopy false", () => {
        expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
});

describe("getLatestNotification", () => {
    it("getLatestNotification", () => {
        expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
});
