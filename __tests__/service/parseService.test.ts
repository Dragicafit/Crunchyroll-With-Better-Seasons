import cloneDeep from "lodash/cloneDeep";
import ParseService from "../../src/service/parseService";
import RequestService from "../../src/service/requestService";
import SeasonService from "../../src/service/seasonService";

let requestService: RequestService;
let seasonService: SeasonService;
let parseService: ParseService;

beforeEach(() => {
  requestService = new RequestService();
  seasonService = new SeasonService(requestService);
  parseService = new ParseService(requestService, seasonService);
});

it("parses seasons of demon slayer", async () => {
  let collectionSeason: any = {
    __resource_key__: "",
    items: [
      {
        id: "GR5VCD239",
        title: "Demon Slayer: Kimetsu no Yaiba (Russian Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-russian-dub",
      },
      {
        id: "GY2PCV2P2",
        title: "Demon Slayer: Kimetsu no Yaiba (French Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-french-dub",
      },
      {
        id: "GRW4JP20Y",
        title: "Demon Slayer: Kimetsu no Yaiba",
        slug_title: "demon-slayer-kimetsu-no-yaiba",
      },
      {
        id: "GRX0C4D5Q",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (English Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-english-dub",
      },
      {
        id: "G6P8CX023",
        title:
          "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc (English Dub)",
        slug_title:
          "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc-english-dub",
      },
      {
        id: "GR3VC2P74",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (Russian)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-russian",
      },
      {
        id: "G6X0C4KDW",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (French Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-french-dub",
      },
      {
        id: "G675CDWMX",
        title:
          "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc (French Dub)",
        slug_title:
          "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc-french-dub",
      },
      {
        id: "GR8VCPDK2",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      },
      {
        id: "GYVNC2VPW",
        title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
        slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      },
      {
        id: "GYZXCM75X",
        title: "Demon Slayer: Kimetsu no Yaiba (Spanish Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-spanish-dub",
      },
      {
        id: "GRQ4CZD8P",
        title: "Demon Slayer: Kimetsu no Yaiba (Portuguese Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-portuguese-dub",
      },
      {
        id: "GY09CX3E8",
        title:
          "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train (English Dub)",
        slug_title:
          "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train-english-dub",
      },
      {
        id: "G6E5CQPVN",
        title:
          "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train (Spanish Dub)",
        slug_title:
          "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train-spanish-dub",
      },
      {
        id: "GY75CD5NM",
        title:
          "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train (Portuguese Dub)",
        slug_title:
          "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train-portuguese-dub",
      },
      {
        id: "G6WEC39ZX",
        title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
        slug_title: "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train",
      },
      {
        id: "G68VCPDQ2",
        title: "Demon Slayer: Kimetsu no Yaiba (English Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-english-dub",
      },
    ],
  };
  let expected: any = [
    {
      id: "GR5VCD239",
      title: "Demon Slayer: Kimetsu no Yaiba",
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      season_number: 1,
      audio_locale2: "RU",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GY2PCV2P2",
      title: "Demon Slayer: Kimetsu no Yaiba",
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      season_number: 1,
      audio_locale2: "FR",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GRW4JP20Y",
      title: "Demon Slayer: Kimetsu no Yaiba",
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      season_number: 1,
      audio_locale2: "SUB",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GYZXCM75X",
      title: "Demon Slayer: Kimetsu no Yaiba",
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      season_number: 1,
      audio_locale2: "ES",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GRQ4CZD8P",
      title: "Demon Slayer: Kimetsu no Yaiba",
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      season_number: 1,
      audio_locale2: "PT",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G68VCPDQ2",
      title: "Demon Slayer: Kimetsu no Yaiba",
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      season_number: 1,
      audio_locale2: "EN",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GY09CX3E8",
      slug_title: "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      season_number: " Movie",
      audio_locale2: "EN",
      season_number_order: 2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6E5CQPVN",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      slug_title: "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train",
      season_number: " Movie",
      audio_locale2: "ES",
      season_number_order: 2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GY75CD5NM",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      slug_title: "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train",
      season_number: " Movie",
      audio_locale2: "PT",
      season_number_order: 2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6WEC39ZX",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      slug_title: "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train",
      season_number: " Movie",
      audio_locale2: "SUB",
      season_number_order: 2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GRX0C4D5Q",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      audio_locale2: "EN",
      season_number_order: 2.1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GR3VC2P74",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      audio_locale2: "RU",
      season_number_order: 2.1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6X0C4KDW",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      audio_locale2: "FR",
      season_number_order: 2.1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GR8VCPDK2",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      audio_locale2: "SUB",
      season_number_order: 2.1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6P8CX023",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      season_number: "2 Part 2",
      audio_locale2: "EN",
      season_number_order: 2.2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G675CDWMX",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      season_number: "2 Part 2",
      audio_locale2: "FR",
      season_number_order: 2.2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GYVNC2VPW",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      season_number: "2 Part 2",
      audio_locale2: "SUB",
      season_number_order: 2.2,
      useNewLang: true,
      useNewOrder: true,
    },
  ];
  expect(
    await parseService.parseSeasonsWithLang(collectionSeason, "")
  ).toStrictEqual(expected);
});

it("parses seasons with old", async () => {
  let collectionSeason: any = {
    __resource_key__: "cms:/seasons?series_id=seriesIdMock",
    items: [
      {
        id: "0",
        title: "title",
        slug_title: "slug",
        is_subbed: true,
      },
      {
        id: "1",
        title: "title (English Dub)",
        slug_title: "slug-english-dub",
        is_subbed: false,
      },
      {
        id: "2",
        title: "title (French Dub)",
        slug_title: "slug-french-dub",
        is_subbed: false,
      },
      {
        id: "3",
        title: "title (Spanish Dub)",
        slug_title: "slug-spanish-dub",
        is_subbed: false,
      },
      {
        id: "4",
        title: "title (Portuguese Dub)",
        slug_title: "slug-portuguese-dub",
        is_subbed: false,
      },
      {
        id: "5",
        title: "title (German Dub)",
        slug_title: "slug-german-dub",
        is_subbed: false,
      },
      {
        id: "6",
        title: "title (Russian Dub)",
        slug_title: "slug-russian-dub",
        is_subbed: false,
      },
      {
        id: "7",
        title: "title (Dub)",
        slug_title: "slug-dub",
        is_subbed: false,
      },
      {
        id: "8",
        title: "title (Sub)",
        slug_title: "slug-sub",
        is_subbed: false,
      },
      {
        id: "9",
        title: "title (Dubbed)",
        slug_title: "slug-dubbed",
        is_subbed: false,
      },
      {
        id: "10",
        title: "title (Subbed)",
        slug_title: "slug-subbed",
        is_subbed: false,
      },
      {
        id: "11",
        title: "title (Subtitled)",
        slug_title: "slug-subtitled",
        is_subbed: false,
      },
      {
        id: "12",
        title: "title (Russian)",
        slug_title: "slug-russian",
        is_subbed: false,
      },
      {
        id: "13",
        title: "title (VF)",
        slug_title: "slug-french-dub",
        is_subbed: false,
      },
      {
        id: "14",
        title: "(EN) title",
        slug_title: "slug-english-dub",
        is_subbed: false,
      },
      {
        id: "15",
        title: "(FR) title",
        slug_title: "slug-french-dub",
        is_subbed: false,
      },
      {
        id: "16",
        title: "(ES) title",
        slug_title: "slug-spanish-dub",
        is_subbed: false,
      },
      {
        id: "17",
        title: "(PT) title",
        slug_title: "slug-portuguese-dub",
        is_subbed: false,
      },
      {
        id: "18",
        title: "(DE) title",
        slug_title: "slug-german-dub",
        is_subbed: false,
      },
      {
        id: "19",
        title: "(RU) title",
        slug_title: "slug-russian-dub",
        is_subbed: false,
      },
      {
        id: "20",
        title: "title",
        slug_title: "slug-other",
        is_subbed: false,
      },
      {
        id: "21",
        title: "(OmU) title",
        slug_title: "slug",
        is_subbed: true,
      },
    ],
  };
  let expected: any = [
    {
      id: "0",
      title: "title",
      slug_title: "slug",
      is_subbed: true,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "SUB",
    },
    {
      id: "1",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "EN",
    },
    {
      id: "2",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "FR",
    },
    {
      id: "3",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "ES",
    },
    {
      id: "4",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "PT",
    },
    {
      id: "5",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "DE",
    },
    {
      id: "6",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "RU",
    },
    {
      id: "7",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "EN",
    },
    {
      id: "8",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "SUB",
    },
    {
      id: "9",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "EN",
    },
    {
      id: "10",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "SUB",
    },
    {
      id: "11",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "SUB",
    },
    {
      id: "12",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "RU",
    },
    {
      id: "13",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "FR",
    },
    {
      id: "14",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "EN",
    },
    {
      id: "15",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "FR",
    },
    {
      id: "16",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "ES",
    },
    {
      id: "17",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "PT",
    },
    {
      id: "18",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "DE",
    },
    {
      id: "19",
      title: "title",
      slug_title: "slug",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "RU",
    },
    {
      id: "20",
      title: "title",
      slug_title: "slug-other",
      is_subbed: false,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "OTHERS",
    },
    {
      id: "21",
      title: "title",
      slug_title: "slug",
      is_subbed: true,
      useNewLang: false,
      useNewOrder: false,
      audio_locale2: "SUB",
    },
  ];
  const findOtherSeriesMock = jest
    .spyOn(seasonService, "findOtherSeries")
    .mockImplementation(() => Promise.resolve());
  expect(
    await parseService.parseSeasonsWithLang(collectionSeason, "urlMock")
  ).toStrictEqual(expected);

  expect(findOtherSeriesMock).toHaveBeenNthCalledWith(
    1,
    "seriesIdMock",
    "urlMock",
    collectionSeason
  );
  expect(findOtherSeriesMock).toHaveBeenCalledTimes(1);
});

describe("parses merged seasons", () => {
  it("parses merged seasons", async () => {
    const seasonsWithLang: any = [
      {
        id: "0",
        title: "title sub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: true,
        is_dubbed: false,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
      },
      {
        id: "1",
        title: "title dub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: false,
        is_dubbed: true,
        subtitle_locales: [],
        audio_locale2: "EN",
      },
    ];
    const expected: any = [
      {
        id: "0",
        title: "title sub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: true,
        is_dubbed: true,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
        audio_locales2: ["SUB", "EN"],
        seasons: new Map([
          [
            "SUB",
            {
              id: "0",
              audio_locale: "SUB",
            },
          ],
          [
            "EN",
            {
              id: "1",
              audio_locale: "EN",
            },
          ],
        ]),
      },
    ];

    const seasonsWithLangClone = cloneDeep(seasonsWithLang);
    expect(
      await parseService.parseMergedSeasons(seasonsWithLang, "0")
    ).toStrictEqual(expected);
    expect(seasonsWithLang).toStrictEqual(seasonsWithLangClone);
  });

  it("parses merged seasons inverted", async () => {
    const seasonsWithLang: any = [
      {
        id: "0",
        title: "title dub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: false,
        is_dubbed: true,
        subtitle_locales: [],
        audio_locale2: "EN",
      },
      {
        id: "1",
        title: "title sub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: true,
        is_dubbed: false,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
      },
    ];
    const expected: any = [
      {
        id: "1",
        title: "title sub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: true,
        is_dubbed: true,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
        audio_locales2: ["EN", "SUB"],
        seasons: new Map([
          [
            "EN",
            {
              id: "0",
              audio_locale: "EN",
            },
          ],
          [
            "SUB",
            {
              id: "1",
              audio_locale: "SUB",
            },
          ],
        ]),
      },
    ];

    const seasonsWithLangClone = cloneDeep(seasonsWithLang);
    expect(
      await parseService.parseMergedSeasons(seasonsWithLang, "1")
    ).toStrictEqual(expected);
    expect(seasonsWithLang).toStrictEqual(seasonsWithLangClone);
  });

  it("parses two merged seasons", async () => {
    const seasonsWithLang: any = [
      {
        id: "0",
        title: "title sub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: true,
        is_dubbed: false,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
      },
      {
        id: "1",
        title: "title dub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: false,
        is_dubbed: true,
        subtitle_locales: [],
        audio_locale2: "EN",
      },
      {
        id: "2",
        title: "title dub 2",
        slug_title: "slug2",
        season_number: 2,
        is_subbed: false,
        is_dubbed: true,
        subtitle_locales: [],
        audio_locale2: "EN",
      },
      {
        id: "3",
        title: "title sub 2",
        slug_title: "slug2",
        season_number: 2,
        is_subbed: true,
        is_dubbed: false,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
      },
    ];
    const expected: any = [
      {
        id: "0",
        title: "title sub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: true,
        is_dubbed: true,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
        audio_locales2: ["SUB", "EN"],
        seasons: new Map([
          [
            "SUB",
            {
              id: "0",
              audio_locale: "SUB",
            },
          ],
          [
            "EN",
            {
              id: "1",
              audio_locale: "EN",
            },
          ],
        ]),
      },
      {
        id: "2",
        title: "title sub 2",
        slug_title: "slug2",
        season_number: 2,
        is_subbed: true,
        is_dubbed: true,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
        audio_locales2: ["EN", "SUB"],
        seasons: new Map([
          [
            "EN",
            {
              id: "2",
              audio_locale: "EN",
            },
          ],
          [
            "SUB",
            {
              id: "3",
              audio_locale: "SUB",
            },
          ],
        ]),
      },
    ];

    const seasonsWithLangClone = cloneDeep(seasonsWithLang);
    expect(
      await parseService.parseMergedSeasons(seasonsWithLang, "0")
    ).toStrictEqual(expected);
    expect(seasonsWithLang).toStrictEqual(seasonsWithLangClone);
  });

  it("parses merged seasons and different order", async () => {
    const seasonsWithLang: any = [
      {
        id: "0",
        title: "title sub",
        slug_title: "slug",
        season_number: 2,
        is_subbed: true,
        is_dubbed: false,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
      },
      {
        id: "1",
        title: "title dub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: false,
        is_dubbed: true,
        subtitle_locales: [],
        audio_locale2: "EN",
      },
    ];
    const expected: any = [
      {
        id: "0",
        title: "title sub",
        slug_title: "slug",
        season_number: 1,
        is_subbed: true,
        is_dubbed: true,
        subtitle_locales: ["EN", "FR"],
        audio_locale2: "SUB",
        audio_locales2: ["SUB", "EN"],
        seasons: new Map([
          [
            "SUB",
            {
              id: "0",
              audio_locale: "SUB",
            },
          ],
          [
            "EN",
            {
              id: "1",
              audio_locale: "EN",
            },
          ],
        ]),
      },
    ];

    const seasonsWithLangClone = cloneDeep(seasonsWithLang);
    expect(
      await parseService.parseMergedSeasons(seasonsWithLang, "0")
    ).toStrictEqual(expected);
    expect(seasonsWithLang).toStrictEqual(seasonsWithLangClone);
  });
});
