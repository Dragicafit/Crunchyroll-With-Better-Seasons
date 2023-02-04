import ParseService from "../../src/service/parseService";
import RequestService from "../../src/service/requestService";
import SeasonService from "../../src/service/seasonService";

let requestService: RequestService;
let seasonService: SeasonService;
let parseService: ParseService;

beforeEach(() => {
  requestService = new RequestService();
  seasonService = new SeasonService(requestService);
  parseService = new ParseService();
});

it("parses seasons of demon slayer", async () => {
  let collectionSeason: any = {
    meta: { versions_considered: true },
    data: [
      {
        id: "GR5VCD239",
        title: "Demon Slayer: Kimetsu no Yaiba (Russian Dub)",
      },
      {
        id: "GY2PCV2P2",
        title: "Demon Slayer: Kimetsu no Yaiba (French Dub)",
      },
      {
        id: "GRW4JP20Y",
        title: "Demon Slayer: Kimetsu no Yaiba",
      },
      {
        id: "GRX0C4D5Q",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (English Dub)",
      },
      {
        id: "G6P8CX023",
        title:
          "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc (English Dub)",
      },
      {
        id: "GR3VC2P74",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (Russian)",
      },
      {
        id: "G6X0C4KDW",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (French Dub)",
      },
      {
        id: "G675CDWMX",
        title:
          "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc (French Dub)",
      },
      {
        id: "GR8VCPDK2",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      },
      {
        id: "GYVNC2VPW",
        title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      },
      {
        id: "GYZXCM75X",
        title: "Demon Slayer: Kimetsu no Yaiba (Spanish Dub)",
      },
      {
        id: "GRQ4CZD8P",
        title: "Demon Slayer: Kimetsu no Yaiba (Portuguese Dub)",
      },
      {
        id: "GY09CX3E8",
        title:
          "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train (English Dub)",
      },
      {
        id: "G6E5CQPVN",
        title:
          "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train (Spanish Dub)",
      },
      {
        id: "GY75CD5NM",
        title:
          "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train (Portuguese Dub)",
      },
      {
        id: "G6WEC39ZX",
        title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      },
      {
        id: "G68VCPDQ2",
        title: "Demon Slayer: Kimetsu no Yaiba (English Dub)",
      },
    ],
  };
  let expected: any = [
    {
      id: "GR5VCD239",
      title: "Demon Slayer: Kimetsu no Yaiba",
    },
    {
      id: "GY2PCV2P2",
      title: "Demon Slayer: Kimetsu no Yaiba",
    },
    {
      id: "GRW4JP20Y",
      title: "Demon Slayer: Kimetsu no Yaiba",
    },
    {
      id: "GRX0C4D5Q",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
    },
    {
      id: "G6P8CX023",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
    },
    {
      id: "GR3VC2P74",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
    },
    {
      id: "G6X0C4KDW",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
    },
    {
      id: "G675CDWMX",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
    },
    {
      id: "GR8VCPDK2",
      title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
    },
    {
      id: "GYVNC2VPW",
      title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
    },
    {
      id: "GYZXCM75X",
      title: "Demon Slayer: Kimetsu no Yaiba",
    },
    {
      id: "GRQ4CZD8P",
      title: "Demon Slayer: Kimetsu no Yaiba",
    },
    {
      id: "GY09CX3E8",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    },
    {
      id: "G6E5CQPVN",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    },
    {
      id: "GY75CD5NM",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    },
    {
      id: "G6WEC39ZX",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    },
    {
      id: "G68VCPDQ2",
      title: "Demon Slayer: Kimetsu no Yaiba",
    },
  ];
  expect(
    await parseService.parseSeasonsWithLang(collectionSeason)
  ).toStrictEqual(expected);
});

it("parses seasons with old", async () => {
  let collectionSeason: any = {
    meta: { versions_considered: true },
    data: [
      {
        id: "0",
        title: "title",
      },
      {
        id: "1",
        title: "title (English Dub)",
      },
      {
        id: "2",
        title: "title (French Dub)",
      },
      {
        id: "3",
        title: "title (Spanish Dub)",
      },
      {
        id: "4",
        title: "title (Portuguese Dub)",
      },
      {
        id: "5",
        title: "title (German Dub)",
      },
      {
        id: "6",
        title: "title (Italian Dub)",
      },
      {
        id: "7",
        title: "title (Hindi Dub)",
      },
      {
        id: "8",
        title: "title (Arabic Dub)",
      },
      {
        id: "9",
        title: "title (Castilian Dub)",
      },
      {
        id: "10",
        title: "title (Russian Dub)",
      },
      {
        id: "11",
        title: "title (Dub)",
      },
      {
        id: "12",
        title: "title (Sub)",
      },
      {
        id: "13",
        title: "title (Dubbed)",
      },
      {
        id: "14",
        title: "title (Subbed)",
      },
      {
        id: "15",
        title: "title (Subtitled)",
      },
      {
        id: "16",
        title: "title (Russian)",
      },
      {
        id: "17",
        title: "title (VF)",
      },
      {
        id: "18",
        title: "(EN) title",
      },
      {
        id: "19",
        title: "(FR) title",
      },
      {
        id: "20",
        title: "(ES) title",
      },
      {
        id: "21",
        title: "(PT) title",
      },
      {
        id: "22",
        title: "(DE) title",
      },
      {
        id: "23",
        title: "(IT) title",
      },
      {
        id: "24",
        title: "(HI) title",
      },
      {
        id: "25",
        title: "(AR) title",
      },
      {
        id: "26",
        title: "(CAS) title",
      },
      {
        id: "27",
        title: "(RU) title",
      },
      {
        id: "28",
        title: "title",
      },
      {
        id: "29",
        title: "(OmU) title",
      },
    ],
  };
  let expected: any = [
    {
      id: "0",
      title: "title",
    },
    {
      id: "1",
      title: "title",
    },
    {
      id: "2",
      title: "title",
    },
    {
      id: "3",
      title: "title",
    },
    {
      id: "4",
      title: "title",
    },
    {
      id: "5",
      title: "title",
    },
    {
      id: "6",
      title: "title",
    },
    {
      id: "7",
      title: "title",
    },
    {
      id: "8",
      title: "title",
    },
    {
      id: "9",
      title: "title",
    },
    {
      id: "10",
      title: "title",
    },
    {
      id: "11",
      title: "title",
    },
    {
      id: "12",
      title: "title",
    },
    {
      id: "13",
      title: "title",
    },
    {
      id: "14",
      title: "title",
    },
    {
      id: "15",
      title: "title",
    },
    {
      id: "16",
      title: "title",
    },
    {
      id: "17",
      title: "title",
    },
    {
      id: "18",
      title: "title",
    },
    {
      id: "19",
      title: "title",
    },
    {
      id: "20",
      title: "title",
    },
    {
      id: "21",
      title: "title",
    },
    {
      id: "22",
      title: "title",
    },
    {
      id: "23",
      title: "title",
    },
    {
      id: "24",
      title: "title",
    },
    {
      id: "25",
      title: "title",
    },
    {
      id: "26",
      title: "title",
    },
    {
      id: "27",
      title: "title",
    },
    {
      id: "28",
      title: "title",
    },
    {
      id: "29",
      title: "title",
    },
  ];
  // const findOtherSeriesMock = jest
  //   .spyOn(seasonService, "findOtherSeries")
  //   .mockImplementation(() => Promise.resolve());
  expect(
    await parseService.parseSeasonsWithLang(collectionSeason)
  ).toStrictEqual(expected);

  // expect(findOtherSeriesMock).toHaveBeenNthCalledWith(
  //   1,
  //   "seriesIdMock",
  //   new urlAPI(),
  //   collectionSeason
  // );
  // expect(findOtherSeriesMock).toHaveBeenCalledTimes(1);
});

// describe("parses merged seasons", () => {
//   it("parses merged seasons", async () => {
//     const seasonsWithLang: any = [
//       {
//         id: "0",
//         versions: [{ guid: "0" }, { guid: "1" }],
//       },
//       {
//         id: "1",
//         versions: [{ guid: "0" }, { guid: "1" }],
//       },
//     ];
//     const expected: any = [
//       {
//         id: "0",
//         versions: [{ guid: "0" }, { guid: "1" }],
//       },
//     ];

//     const seasonsWithLangClone = cloneDeep(seasonsWithLang);
//     expect(
//       await parseService.parseMergedSeasons(seasonsWithLang, "0")
//     ).toStrictEqual(expected);
//     expect(seasonsWithLang).toStrictEqual(seasonsWithLangClone);
//   });

//   it("parses merged seasons inverted", async () => {
//     const seasonsWithLang: any = [
//       {
//         id: "0",
//         versions: [{ guid: "0" }, { guid: "1" }],
//       },
//       {
//         id: "1",
//         versions: [{ guid: "0" }, { guid: "1" }],
//       },
//     ];
//     const expected: any = [
//       {
//         id: "1",
//         versions: [{ guid: "0" }, { guid: "1" }],
//       },
//     ];

//     expect(
//       await parseService.parseMergedSeasons(seasonsWithLang, "1")
//     ).toStrictEqual(expected);
//   });

//   it("parses two merged seasons", async () => {
//     const seasonsWithLang: any = [
//       {
//         id: "0",
//         title: "title sub",
//         slug_title: "slug",
//         season_number: 1,
//         is_subbed: true,
//         is_dubbed: false,
//         subtitle_locales: ["EN", "FR"],
//         audio_locale2: "SUB",
//       },
//       {
//         id: "1",
//         title: "title dub",
//         slug_title: "slug",
//         season_number: 1,
//         is_subbed: false,
//         is_dubbed: true,
//         subtitle_locales: [],
//         audio_locale2: "EN",
//       },
//       {
//         id: "2",
//         title: "title dub 2",
//         slug_title: "slug2",
//         season_number: 2,
//         is_subbed: false,
//         is_dubbed: true,
//         subtitle_locales: [],
//         audio_locale2: "EN",
//       },
//       {
//         id: "3",
//         title: "title sub 2",
//         slug_title: "slug2",
//         season_number: 2,
//         is_subbed: true,
//         is_dubbed: false,
//         subtitle_locales: ["EN", "FR"],
//         audio_locale2: "SUB",
//       },
//     ];
//     const expected: any = [
//       {
//         id: "0",
//         title: "title sub",
//         slug_title: "slug",
//         season_number: 1,
//         is_subbed: true,
//         is_dubbed: true,
//         subtitle_locales: ["EN", "FR"],
//         audio_locale2: "SUB",
//         audio_locales2: ["SUB", "EN"],
//         seasons: new Map([
//           [
//             "SUB",
//             {
//               id: "0",
//               audio_locale: "SUB",
//             },
//           ],
//           [
//             "EN",
//             {
//               id: "1",
//               audio_locale: "EN",
//             },
//           ],
//         ]),
//       },
//       {
//         id: "2",
//         title: "title sub 2",
//         slug_title: "slug2",
//         season_number: 2,
//         is_subbed: true,
//         is_dubbed: true,
//         subtitle_locales: ["EN", "FR"],
//         audio_locale2: "SUB",
//         audio_locales2: ["EN", "SUB"],
//         seasons: new Map([
//           [
//             "EN",
//             {
//               id: "2",
//               audio_locale: "EN",
//             },
//           ],
//           [
//             "SUB",
//             {
//               id: "3",
//               audio_locale: "SUB",
//             },
//           ],
//         ]),
//       },
//     ];

//     const seasonsWithLangClone = cloneDeep(seasonsWithLang);
//     expect(
//       await parseService.parseMergedSeasons(seasonsWithLang, "0")
//     ).toStrictEqual(expected);
//     expect(seasonsWithLang).toStrictEqual(seasonsWithLangClone);
//   });

//   it("parses merged seasons and different order", async () => {
//     const seasonsWithLang: any = [
//       {
//         id: "0",
//         title: "title sub",
//         slug_title: "slug",
//         season_number: 2,
//         is_subbed: true,
//         is_dubbed: false,
//         subtitle_locales: ["EN", "FR"],
//         audio_locale2: "SUB",
//       },
//       {
//         id: "1",
//         title: "title dub",
//         slug_title: "slug",
//         season_number: 1,
//         is_subbed: false,
//         is_dubbed: true,
//         subtitle_locales: [],
//         audio_locale2: "EN",
//       },
//     ];
//     const expected: any = [
//       {
//         id: "0",
//         title: "title sub",
//         slug_title: "slug",
//         season_number: 1,
//         is_subbed: true,
//         is_dubbed: true,
//         subtitle_locales: ["EN", "FR"],
//         audio_locale2: "SUB",
//         audio_locales2: ["SUB", "EN"],
//         seasons: new Map([
//           [
//             "SUB",
//             {
//               id: "0",
//               audio_locale: "SUB",
//             },
//           ],
//           [
//             "EN",
//             {
//               id: "1",
//               audio_locale: "EN",
//             },
//           ],
//         ]),
//       },
//     ];

//     const seasonsWithLangClone = cloneDeep(seasonsWithLang);
//     expect(
//       await parseService.parseMergedSeasons(seasonsWithLang, "0")
//     ).toStrictEqual(expected);
//     expect(seasonsWithLang).toStrictEqual(seasonsWithLangClone);
//   });
// });
