import urlAPI from "../../src/model/urlAPI";
import RequestService from "../../src/service/requestService";
import SeasonService from "../../src/service/seasonService";

let seasonService: SeasonService;
let requestService: RequestService;

beforeEach(() => {
  requestService = new RequestService();
  seasonService = new SeasonService(requestService);
});

it("finds other series", async () => {
  let collectionSeason: any = {
    items: [
      {
        season_number: 1,
      },
    ],
  };
  let expected: any = {
    items: [
      { season_number: 1 },
      { season_number: undefined },
      { season_number: undefined },
      { season_number: undefined },
    ],
  };
  const urlToSeasonNumber = new Map([
    ["GRE5XQJV6", 1],
    ["GR09QXWGR", 2.1],
    ["G6P8GKKJ6", 3],
  ]);
  const fetchJsonMock = jest
    .spyOn(requestService, "fetchJson")
    .mockImplementation((urlOtherSeasons) =>
      Promise.resolve({
        items: [{ season_number: urlToSeasonNumber.get(urlOtherSeasons) }],
      })
    );
  await seasonService.findOtherSeries(
    "GYGGPPW7Y",
    new urlAPI(),
    collectionSeason
  );
  let i = 1;
  for (const serie of urlToSeasonNumber.keys()) {
    expect(fetchJsonMock).toHaveBeenNthCalledWith(
      i,
      `seasons?series_id=${serie}&`
    );
    i++;
  }
  expect(fetchJsonMock).toHaveBeenCalledTimes(3);

  expect(collectionSeason).toStrictEqual(expected);
});
