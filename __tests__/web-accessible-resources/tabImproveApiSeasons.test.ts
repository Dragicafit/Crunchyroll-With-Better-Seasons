import { improveApiSeasons } from "../../src/web-accessible-resources/tabImproveApiSeasons";

it("test improveApiSeasons type", () => {
  for (const [key, value] of improveApiSeasons) {
    expect(typeof key).toEqual("string");
    expect(
      [
        "SUB",
        "EN",
        "FR",
        "ES",
        "PT",
        "DE",
        "IT",
        "HI",
        "AR",
        "CAS",
        "RU",
        "OTHERS",
      ].includes(value.lang)
    ).toBeTruthy();
    expect(
      value.season_number == null ||
        typeof value.season_number === "string" ||
        typeof value.season_number === "number"
    ).toBeTruthy();
    expect(
      value.season_number_order == null ||
        typeof value.season_number_order === "number"
    ).toBeTruthy();
  }
});
