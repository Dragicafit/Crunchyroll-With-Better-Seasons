import { TabOverrideXMLHttpRequest } from "../../src/web-accessible-resources/tabOverrideXMLHttpRequest";

let tabOverride: TabOverrideXMLHttpRequest;

beforeEach(() => {
  tabOverride = new TabOverrideXMLHttpRequest();
});

it("test with demon slayer", async () => {
  let collectionSeason: any = {
    __resource_key__: "cms:/seasons?series_id=GY5P48XEY",
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
      lang: "RU",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GY2PCV2P2",
      title: "Demon Slayer: Kimetsu no Yaiba",
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      season_number: 1,
      lang: "FR",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GRW4JP20Y",
      title: "Demon Slayer: Kimetsu no Yaiba",
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      season_number: 1,
      lang: "SUB",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GYZXCM75X",
      lang: "ES",
      season_number: 1,
      season_number_order: 1,
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      title: "Demon Slayer: Kimetsu no Yaiba",
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GRQ4CZD8P",
      lang: "PT",
      season_number: 1,
      season_number_order: 1,
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      title: "Demon Slayer: Kimetsu no Yaiba",
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G68VCPDQ2",
      lang: "EN",
      season_number: 1,
      season_number_order: 1,
      slug_title: "demon-slayer-kimetsu-no-yaiba",
      title: "Demon Slayer: Kimetsu no Yaiba",
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GY09CX3E8",
      lang: "EN",
      season_number: " Movie",
      season_number_order: 2,
      slug_title: "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6E5CQPVN",
      lang: "ES",
      season_number: " Movie",
      season_number_order: 2,
      slug_title: "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GY75CD5NM",
      lang: "PT",
      season_number: " Movie",
      season_number_order: 2,
      slug_title: "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6WEC39ZX",
      lang: "SUB",
      season_number: " Movie",
      season_number_order: 2,
      slug_title: "demon-slayer--kimetsu-no-yaiba--the-movie-mugen-train",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GRX0C4D5Q",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      lang: "EN",
      season_number_order: 2.1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GR3VC2P74",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      lang: "RU",
      season_number_order: 2.1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6X0C4KDW",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      lang: "FR",
      season_number_order: 2.1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GR8VCPDK2",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      lang: "SUB",
      season_number_order: 2.1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6P8CX023",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      season_number: "2 Part 2",
      lang: "EN",
      season_number_order: 2.2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G675CDWMX",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      season_number: "2 Part 2",
      lang: "FR",
      season_number_order: 2.2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GYVNC2VPW",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      season_number: "2 Part 2",
      lang: "SUB",
      season_number_order: 2.2,
      useNewLang: true,
      useNewOrder: true,
    },
  ];
  expect(await tabOverride.parseSeasons(collectionSeason, "")).toStrictEqual(
    expected
  );
});
