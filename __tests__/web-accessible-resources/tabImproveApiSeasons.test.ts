import { TabOverrideXMLHttpRequest } from "../../src/web-accessible-resources/tabOverrideXMLHttpRequest";

let tabOverride: TabOverrideXMLHttpRequest;
let collectionSeason: any;

beforeEach(() => {
  tabOverride = new TabOverrideXMLHttpRequest();
  collectionSeason = {
    __resource_key__: "cms:/seasons?series_id=GY5P48XEY",
    items: [
      {
        id: "GR5VCD239",
        title: "Demon Slayer: Kimetsu no Yaiba (Russian Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-russian-dub",
        season_number: 1,
        is_subbed: false,
      },
      {
        id: "GY2PCV2P2",
        title: "Demon Slayer: Kimetsu no Yaiba (French Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-french-dub",
        season_number: 1,
        is_subbed: false,
      },
      {
        id: "GRW4JP20Y",
        title: "Demon Slayer: Kimetsu no Yaiba",
        slug_title: "demon-slayer-kimetsu-no-yaiba",
        season_number: 1,
        is_subbed: true,
      },
      {
        id: "GRX0C4D5Q",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (English Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-english-dub",
        season_number: 2,
        is_subbed: false,
      },
      {
        id: "G6P8CX023",
        title:
          "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc (English Dub)",
        slug_title:
          "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc-english-dub",
        season_number: 2,
        is_subbed: false,
      },
      {
        id: "GR3VC2P74",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (Russian)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-russian",
        season_number: 2,
        is_subbed: false,
      },
      {
        id: "G6X0C4KDW",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (French Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-french-dub",
        season_number: 2,
        is_subbed: false,
      },
      {
        id: "G675CDWMX",
        title:
          "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc (French Dub)",
        slug_title:
          "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc-french-dub",

        season_number: 2,
        is_subbed: false,
      },
      {
        id: "GR8VCPDK2",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
        season_number: 2,
        is_subbed: true,
      },
      {
        id: "GYVNC2VPW",
        title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
        slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
        season_number: 2,
        is_subbed: true,
      },
    ],
  };
});

it("test with demon slayer", async () => {
  let expected: any = [
    {
      id: "GR5VCD239",
      title: "Demon Slayer: Kimetsu no Yaiba",
      slug_title: "demon-slayer-kimetsu-no-yaiba-russian-dub",
      season_number: 1,
      is_subbed: false,
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
      is_subbed: false,
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
      is_subbed: true,
      lang: "SUB",
      season_number_order: 1,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GRX0C4D5Q",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      is_subbed: false,
      lang: "EN",
      season_number_order: 2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GR3VC2P74",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-russian",
      season_number: "2 Part 1",
      is_subbed: false,
      lang: "RU",
      season_number_order: 2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6X0C4KDW",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      is_subbed: false,
      lang: "FR",
      season_number_order: 2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GR8VCPDK2",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
      season_number: "2 Part 1",
      is_subbed: true,
      lang: "SUB",
      season_number_order: 2,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G6P8CX023",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      season_number: "2 Part 2",
      is_subbed: false,
      lang: "EN",
      season_number_order: 2.5,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "G675CDWMX",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      season_number: "2 Part 2",
      is_subbed: false,
      lang: "FR",
      season_number_order: 2.5,
      useNewLang: true,
      useNewOrder: true,
    },
    {
      id: "GYVNC2VPW",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
      season_number: "2 Part 2",
      is_subbed: true,
      lang: "SUB",
      season_number_order: 2.5,
      useNewLang: true,
      useNewOrder: true,
    },
  ];
  expect(await tabOverride.parseSeasons(collectionSeason, "")).toStrictEqual(
    expected
  );
});
