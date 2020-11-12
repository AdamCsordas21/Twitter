import { formatDate } from "./date-time";

describe("date formatter", () => {
  it("should display full date if date difference is over 1 day ago", () => {
    const date = new Date(2000, 0, 11, 5, 45, 55, 123).toJSON();
    const currentDate = new Date(2000, 0, 12, 17, 45, 55, 123);
    expect(formatDate(date, currentDate)).toEqual("11/01/2000");
  });

  it("should display x hours ago if time difference is within 24 and 1 hour ago", () => {
    const date = new Date(2000, 0, 31, 5, 45, 55, 123).toJSON();
    const currentDate = new Date(2000, 0, 31, 17, 45, 55, 123);
    expect(formatDate(date, currentDate)).toEqual("12h");
  });

  it("should display x minutes ago if time difference is under 1 hour ago", () => {
    const date = new Date(2000, 0, 31, 16, 55, 55, 123).toJSON();
    const currentDate = new Date(2000, 0, 31, 17, 50, 45, 123);
    expect(formatDate(date, currentDate)).toEqual("55m");
  });
});
