import {
  collectionEpisode,
  collectionPanel,
  collectionSeason,
} from "../../src/web-accessible-resources/tabConst";

it("test API seasons", () => {
  let collectionSeason: collectionSeason = {
    __class__: "collection",
    __href__: "/cms/v2/FR/M3/crunchyroll/seasons?series_id=GY5P48XEY",
    __resource_key__: "cms:/seasons?series_id=GY5P48XEY",
    __links__: {},
    __actions__: {},
    total: 10,
    items: [
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/GR5VCD239",
        __resource_key__: "cms:/seasons/GR5VCD239",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=GR5VCD239",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "GR5VCD239",
        channel_id: "crunchyroll",
        title: "Demon Slayer: Kimetsu no Yaiba (Russian Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-russian-dub",
        series_id: "GY5P48XEY",
        season_number: 1,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: [],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: false,
        is_dubbed: true,
        is_simulcast: false,
        seo_title: "",
        seo_description: "",
        availability_notes: "",
        audio_locales: [],
        subtitle_locales: [],
      },
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/GY2PCV2P2",
        __resource_key__: "cms:/seasons/GY2PCV2P2",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=GY2PCV2P2",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "GY2PCV2P2",
        channel_id: "crunchyroll",
        title: "Demon Slayer: Kimetsu no Yaiba (French Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-french-dub",
        series_id: "GY5P48XEY",
        season_number: 1,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: [],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: false,
        is_dubbed: true,
        is_simulcast: false,
        seo_title: "",
        seo_description: "",
        availability_notes: "",
        audio_locales: [],
        subtitle_locales: [],
      },
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/GRW4JP20Y",
        __resource_key__: "cms:/seasons/GRW4JP20Y",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=GRW4JP20Y",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "GRW4JP20Y",
        channel_id: "crunchyroll",
        title: "Demon Slayer: Kimetsu no Yaiba",
        slug_title: "demon-slayer-kimetsu-no-yaiba",
        series_id: "GY5P48XEY",
        season_number: 1,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: ["spring-2019", "summer-2019"],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: true,
        is_dubbed: false,
        is_simulcast: false,
        seo_title: "",
        seo_description: "",
        availability_notes:
          '[link url="https://store.crunchyroll.com/collections/demon-slayer-kimetsu-no-yaiba-merchandise-collection?utm_source=ecomm_cr\u0026utm_medium=show_page\u0026utm_campaign=show_page_kimetsu_2019_6_20\u0026referrer=ecomm_cr_show_page_show_page_kimetsu"]Check out our Demon Slayer Figures![/link]',
        audio_locales: [],
        subtitle_locales: [],
      },
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/GRX0C4D5Q",
        __resource_key__: "cms:/seasons/GRX0C4D5Q",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=GRX0C4D5Q",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "GRX0C4D5Q",
        channel_id: "crunchyroll",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (English Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-english-dub",
        series_id: "GY5P48XEY",
        season_number: 2,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: [],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: false,
        is_dubbed: true,
        is_simulcast: false,
        seo_title: "",
        seo_description: "",
        availability_notes: "",
        audio_locales: [],
        subtitle_locales: [],
      },
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/G6P8CX023",
        __resource_key__: "cms:/seasons/G6P8CX023",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=G6P8CX023",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "G6P8CX023",
        channel_id: "crunchyroll",
        title:
          "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc (English Dub)",
        slug_title:
          "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc-english-dub",
        series_id: "GY5P48XEY",
        season_number: 2,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: [],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: false,
        is_dubbed: true,
        is_simulcast: true,
        seo_title: "",
        seo_description: "",
        availability_notes: "",
        audio_locales: [],
        subtitle_locales: [],
      },
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/GR3VC2P74",
        __resource_key__: "cms:/seasons/GR3VC2P74",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=GR3VC2P74",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "GR3VC2P74",
        channel_id: "crunchyroll",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (Russian)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-russian",
        series_id: "GY5P48XEY",
        season_number: 2,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: [],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: false,
        is_dubbed: true,
        is_simulcast: false,
        seo_title: "",
        seo_description: "",
        availability_notes: "",
        audio_locales: [],
        subtitle_locales: [],
      },
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/G6X0C4KDW",
        __resource_key__: "cms:/seasons/G6X0C4KDW",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=G6X0C4KDW",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "G6X0C4KDW",
        channel_id: "crunchyroll",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc (French Dub)",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc-french-dub",
        series_id: "GY5P48XEY",
        season_number: 2,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: [],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: false,
        is_dubbed: true,
        is_simulcast: false,
        seo_title: "",
        seo_description: "",
        availability_notes: "",
        audio_locales: [],
        subtitle_locales: [],
      },
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/G675CDWMX",
        __resource_key__: "cms:/seasons/G675CDWMX",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=G675CDWMX",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "G675CDWMX",
        channel_id: "crunchyroll",
        title:
          "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc (French Dub)",
        slug_title:
          "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc-french-dub",
        series_id: "GY5P48XEY",
        season_number: 2,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: [],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: false,
        is_dubbed: true,
        is_simulcast: false,
        seo_title: "",
        seo_description: "",
        availability_notes: "",
        audio_locales: [],
        subtitle_locales: [],
      },
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/GR8VCPDK2",
        __resource_key__: "cms:/seasons/GR8VCPDK2",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=GR8VCPDK2",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "GR8VCPDK2",
        channel_id: "crunchyroll",
        title: "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
        slug_title: "demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
        series_id: "GY5P48XEY",
        season_number: 2,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: ["fall-2021"],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: true,
        is_dubbed: false,
        is_simulcast: false,
        seo_title: "",
        seo_description: "",
        availability_notes: "",
        audio_locales: [],
        subtitle_locales: [],
      },
      {
        __class__: "season",
        __href__: "/cms/v2/FR/M3/crunchyroll/seasons/GYVNC2VPW",
        __resource_key__: "cms:/seasons/GYVNC2VPW",
        __links__: {
          "season/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "season/episodes": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=GYVNC2VPW",
          },
          "season/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GY5P48XEY",
          },
        },
        __actions__: {},
        id: "GYVNC2VPW",
        channel_id: "crunchyroll",
        title: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
        slug_title: "demon-slayer-kimetsu-no-yaiba-entertainment-district-arc",
        series_id: "GY5P48XEY",
        season_number: 2,
        is_complete: false,
        description: "",
        keywords: [],
        season_tags: ["winter-2022"],
        images: {},
        extended_maturity_ratings: {},
        maturity_ratings: ["TV-14"],
        is_mature: false,
        mature_blocked: false,
        is_subbed: true,
        is_dubbed: false,
        is_simulcast: true,
        seo_title: "",
        seo_description: "",
        availability_notes: "",
        audio_locales: [],
        subtitle_locales: [],
      },
    ],
  };
});

it("test API episodes", () => {
  let collectionEpisode: collectionEpisode = {
    __class__: "collection",
    __href__: "/cms/v2/FR/M3/crunchyroll/episodes?season_id=G6VD5VM46",
    __resource_key__: "cms:/episodes?season_id=G6VD5VM46",
    __links__: {},
    __actions__: {},
    total: 24,
    items: [
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GY3K0QWZY",
        __resource_key__: "cms:/episodes/GY3K0QWZY",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G624G859Y",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G8MFN925K/streams",
          },
        },
        __actions__: {},
        id: "GY3K0QWZY",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "1",
        episode_number: 1,
        sequence_number: 1,
        production_episode_id: "",
        title: "April showers bring May flowers",
        slug_title: "april-showers-bring-may-flowers",
        description:
          "Having given up on life, 15-year-old Hatori Chise sells herself at an underground auction, where she is bought by Elias Ainsworth, a not-quite-human mage, for 5 million pounds. She learns that he intends for her to be his future bride, and her world begins to change.",
        next_episode_id: "G624G859Y",
        next_episode_title: "One today is worth two tomorrows",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-10-08T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450056,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: ["en-US"],
        playback:
          "https://pl.crunchyroll.com/asset/389e0008525987125a282e327d4f34d0/v/dbe64c259b22869396d4fcad820b0901/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvMzg5ZTAwMDg1MjU5ODcxMjVhMjgyZTMyN2Q0ZjM0ZDAvdi9kYmU2NGMyNTliMjI4NjkzOTZkNGZjYWQ4MjBiMDkwMS8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=C0GZbTjFGS~zvvTmi3LF-4jTaz9lD5XQklhHnQx5UQuc5Jk-RqHnW2A1vNG1~QBaIG2JZdQEDKGNH1GOL6BRNvp8bD4IWNzgFo10VM8hR83aZb3xR2WQafPyTbpbT1cB4qO-P8vPvu3A3qSnlspzoEwREDVUIu21QYg2hXEZ82HcjvdcLwP7kvtf8xshlMFknjVbgx2Yjd33l1s79nYHATiWl0WmNiEYl5hYWmvgYNQC72vPnm27Eduit9Ce33PjDGKhJY~NdIPGjqPTPLypz8ju9-LX4qcVdt8Kbfd3ivHw7XZzLGbdOdDxDb4A4xCKM4X9jxqSTMDxmUXK3ilYug__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G624G859Y",
        __resource_key__: "cms:/episodes/G624G859Y",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G6ZJE84MY",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GZ4FVNP9N/streams",
          },
        },
        __actions__: {},
        id: "G624G859Y",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "2",
        episode_number: 2,
        sequence_number: 2,
        production_episode_id: "",
        title: "One today is worth two tomorrows",
        slug_title: "one-today-is-worth-two-tomorrows",
        description:
          "Few people know the truth about the bookstore on the outskirts of London that Elias frequents. He takes Chise there, where they meet Angelica, who teaches Chise a little bit of magic, but... The true power of the Sleigh Beggy materializes a fragment of Chise's memories.",
        next_episode_id: "G6ZJE84MY",
        next_episode_title:
          "The balance distinguishes not between gold and lead",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-10-15T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/d6fd14d79ef3e676d974994cd977b5f7.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/d6fd14d79ef3e676d974994cd977b5f7.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/d6fd14d79ef3e676d974994cd977b5f7.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/d6fd14d79ef3e676d974994cd977b5f7.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d6fd14d79ef3e676d974994cd977b5f7.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/d6fd14d79ef3e676d974994cd977b5f7.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/d6fd14d79ef3e676d974994cd977b5f7.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/d6fd14d79ef3e676d974994cd977b5f7.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450099,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/2b3d51d5ae5b63f1e77878d1e1f27a64/v/f7e5f1cf86a50b1255d0cf754a7afe18/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvMmIzZDUxZDVhZTViNjNmMWU3Nzg3OGQxZTFmMjdhNjQvdi9mN2U1ZjFjZjg2YTUwYjEyNTVkMGNmNzU0YTdhZmUxOC8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=ZJEQzUMvIuLb9yzFvZSJi1uTCwK~NZEQfdJ2yDkLiS~-KdbRw-MlGcpgCqmSLMhykJzA8V6dLoe9KI4roTLVTiqCihSfdyS8YI5rVvXIUgmyZhLQg4fDgFSqoUNIglp05Ab~SnkkiULVRXLHJy6gVgi9Kh9rEKk3Z8H-Nrs-AdY6e4fYpO4ZmNjRC5vWPYAv-hEIhei8oXsoayJu3wy0om2TbDI5epUEYkJMjxqWigCRMiRRYpG~~eN4us5QIKhE1yO~yngYwVoNpUSO4Zs3CyuSuD9Z2sGZqGauyAgpLEa1JW9v6qzRtX00tP~MB8h0R5UE2D~ArUXqg6ty0DhQ2A__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G6ZJE84MY",
        __resource_key__: "cms:/episodes/G6ZJE84MY",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G60X5P1VR",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GDVFV427N/streams",
          },
        },
        __actions__: {},
        id: "G6ZJE84MY",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "3",
        episode_number: 3,
        sequence_number: 3,
        production_episode_id: "",
        title: "The balance distinguishes not between gold and lead",
        slug_title: "the-balance-distinguishes-not-between-gold-and-lead",
        description:
          "Simon, who is assigned by the Church to keep an eye on Elias, visits with some business. One of his requests brings Chise and Elias to the ends of the earth, where they meet Elias' mentor, Lindel, along with an old race on the verge of extinction. An old one, about to return to the earth, spends his last moments sharing a dream with Chise.",
        next_episode_id: "G60X5P1VR",
        next_episode_title: "Everything must have a beginning",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-10-22T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/c9bd824c400a678a6fe069905bff90c7.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/c9bd824c400a678a6fe069905bff90c7.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/c9bd824c400a678a6fe069905bff90c7.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/c9bd824c400a678a6fe069905bff90c7.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c9bd824c400a678a6fe069905bff90c7.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/c9bd824c400a678a6fe069905bff90c7.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/c9bd824c400a678a6fe069905bff90c7.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/c9bd824c400a678a6fe069905bff90c7.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1451549,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/2396ee9f93b979166d8485b647f49d9c/v/b55125c806006675d7936b97c8576868/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvMjM5NmVlOWY5M2I5NzkxNjZkODQ4NWI2NDdmNDlkOWMvdi9iNTUxMjVjODA2MDA2Njc1ZDc5MzZiOTdjODU3Njg2OC8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=QID-woMUlP2dB9i0KJgfX1LsDIVudDMNNqjEwREKXr0TzuPXL~16cDhJnn8HYZGC7QJss-rmCqVuzianI6BMROwOBC8gDmTeXI3P57-dKir0Q-rbyKHWPkMcFzeGgV4FpdVP5vaXPrbs89GHQFlUGvV0f3J1g4L82i2vcyxnb9ZlQ2v8Wwcp6xfpZONy2CCUEtMS58Ws0QWpp8VSjnCzqqUvyo1sKQAGZ~UEuGCWG6DB93dp3~yNoXiIpJbhBpCtkHMYBiaxRDxPtNVh0u82e0pEGlqnex9Jg5LsbiPza0G-AhDCrfyPctpeCwUbScjQiYbKcdpCKrhjjD1MsjYKIw__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G60X5P1VR",
        __resource_key__: "cms:/episodes/G60X5P1VR",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GYQWD197Y",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GQ9FG4EWE/streams",
          },
        },
        __actions__: {},
        id: "G60X5P1VR",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "4",
        episode_number: 4,
        sequence_number: 4,
        production_episode_id: "",
        title: "Everything must have a beginning",
        slug_title: "everything-must-have-a-beginning",
        description:
          "Long ago, the humans and cats of Ulthar, city of cats, were struck by a great tragedy. For generations, the souls of those who were at the center of this tragedy have been sealed away by the king of cats. Chise and Elias travel to Ulthar in order to complete Simon's second task: to purify the spirits that remain.",
        next_episode_id: "GYQWD197Y",
        next_episode_title: "Love conquers all",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-10-29T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/054e4ab15e661b9c2880c3b7a43c6d34.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/054e4ab15e661b9c2880c3b7a43c6d34.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/054e4ab15e661b9c2880c3b7a43c6d34.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/054e4ab15e661b9c2880c3b7a43c6d34.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/054e4ab15e661b9c2880c3b7a43c6d34.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/054e4ab15e661b9c2880c3b7a43c6d34.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/054e4ab15e661b9c2880c3b7a43c6d34.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/054e4ab15e661b9c2880c3b7a43c6d34.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450099,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/768b17affa941b0afcae0e6e5977bfd7/v/fab68f8a63882a99177ad4cf65392605/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvNzY4YjE3YWZmYTk0MWIwYWZjYWUwZTZlNTk3N2JmZDcvdi9mYWI2OGY4YTYzODgyYTk5MTc3YWQ0Y2Y2NTM5MjYwNS8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=L5OzqHdUoWtX4upfNLKoA9q0zcCtl2QnQDtDH6W5Gqo7yZ~HmnfZfKYff2uTu7zqxHYzTREW~ZLoccGl9F1XKapub4nn1wXQ0zWSEKXcPLwciMStRYxpP15x0nkq-ZvQtPj6bUrjqzeInlKnD050B~Oxxnwxoep1SBeJohryO035x7rguhdeI7mMO9tgfQ0WwJJlU-FHVCwoPyu~qo7O-ZxIgTqBLAMX2J3d7mxx~uYOegiUFjDay9ZIJwvCl3vosb24jjwzesaYz1K8hbyOZC6tNcEJfW4Wn~vjSH6yWBz2vXlKKmJD2gbvFcD2saeXtbKlQ2QNAAQH7tgpFIsaYQ__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GYQWD197Y",
        __resource_key__: "cms:/episodes/GYQWD197Y",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GRW4W3M3Y",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G5JFZJEG4/streams",
          },
        },
        __actions__: {},
        id: "GYQWD197Y",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "5",
        episode_number: 5,
        sequence_number: 5,
        production_episode_id: "",
        title: "Love conquers all",
        slug_title: "love-conquers-all",
        description:
          "To sorcerer Refnred's eyes, Chise is a sad girl, being duped by a mage. But no matter what Elias' true motives are, Chise has no intention of leaving him. Elias was the first person to value her, after all. As she walks towards the epicenter, she learns of the truth behind it. The sight of a boy appears behind the tragedy.",
        next_episode_id: "GRW4W3M3Y",
        next_episode_title: "The Faerie Queene",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-11-05T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/7f513a5104a797ad34db8d4361548354.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/7f513a5104a797ad34db8d4361548354.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/7f513a5104a797ad34db8d4361548354.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/7f513a5104a797ad34db8d4361548354.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7f513a5104a797ad34db8d4361548354.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/7f513a5104a797ad34db8d4361548354.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/7f513a5104a797ad34db8d4361548354.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/7f513a5104a797ad34db8d4361548354.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450141,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/44ecd665486cd1cf1551072844fad696/v/a4704963a48f1d140a767baec9dd24e3/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvNDRlY2Q2NjU0ODZjZDFjZjE1NTEwNzI4NDRmYWQ2OTYvdi9hNDcwNDk2M2E0OGYxZDE0MGE3NjdiYWVjOWRkMjRlMy8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=MNOYbSD3nH8hYrokTry41winm-Wn6~xuQ9k1d~xwdTDGPDvKZJBhBlg3MUy5OoC1ROk-73LegIVs60emn5dWJlwa-HptHeMPlI88CCnWX50RgblahatzHTAOTgWKz5PqmcHQITqFEhwgXcTVIeYwiQnYjx5zIf88HBwOvPPfvKGWxkBrqsRWrH1eJYu~FaWa60irgKxnj89Pq7MrcTMStIel4y7-DqLraxenhkSkfJr20eokFMU1kDxdTqKHrnhZ13JqqaOa5DuIkqo1xen75T29cQsK8NwvJCv0mbJaRF9JbN46slGu0VkRAQcnAzeN7UWr9EYNjbTKhS0~z~l-rA__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GRW4W3M3Y",
        __resource_key__: "cms:/episodes/GRW4W3M3Y",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GR1XW2N0R",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GWMF8NP0G/streams",
          },
        },
        __actions__: {},
        id: "GRW4W3M3Y",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "6",
        episode_number: 6,
        sequence_number: 6,
        production_episode_id: "",
        title: "The Faerie Queene",
        slug_title: "the-faerie-queene",
        description:
          "Chise is deep in thought as she watches the souls return to where they'd belonged all along. More than ten days have passed since the incident at Ulthar, but she is still in a deep sleep. Elias and Simon stand worriedly by her side, when they are met by two unexpected guests: Titania, Queen of Fairies, Lord of Tír na nÓg.",
        next_episode_id: "GR1XW2N0R",
        next_episode_title: "Talk of the devil, and he is sure to appear.",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-11-12T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/7669fa385d664259e9c9cf414f498ea1.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/7669fa385d664259e9c9cf414f498ea1.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/7669fa385d664259e9c9cf414f498ea1.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/7669fa385d664259e9c9cf414f498ea1.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7669fa385d664259e9c9cf414f498ea1.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/7669fa385d664259e9c9cf414f498ea1.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/7669fa385d664259e9c9cf414f498ea1.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/7669fa385d664259e9c9cf414f498ea1.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450013,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: ["en-US"],
        playback:
          "https://pl.crunchyroll.com/asset/81a1dd04fc38ddb038219e927248ebac/v/88ad4832cbe93dcdbde945808621ca36/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvODFhMWRkMDRmYzM4ZGRiMDM4MjE5ZTkyNzI0OGViYWMvdi84OGFkNDgzMmNiZTkzZGNkYmRlOTQ1ODA4NjIxY2EzNi8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=RtJBANTOhC7w7NmHGXTjEDEeDU3Qen-x7PoqtYXjouqIkzb-yoApQ05C6wva3g3vgn~XdzgtbleKtoSZYwIK7TLjgSjRgx93G280SKJR~lemnNRP3EZuTcHcO2y5ywkNWjK3RLimkSgktmDrVRJR-EMsinQuw1bqVchS5Vk~lRIRKtl9G0Jau0aEulEKkFJ1yCtlLtxgPRMNLhztXr0YgAi-d8xR7duhHSlOUwIvwzPRlE1zyn8Q3PRWg7y1eslog71pEV7~1VTWUlN~7NYAWRASt0AARcUezLAgHJPgjKVFWSoGWwLT5jJYlx~CpCmQ9em2DJ0xfyM7946RBXaHmg__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GR1XW2N0R",
        __resource_key__: "cms:/episodes/GR1XW2N0R",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GYXJGP1M6",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GGVF27D13/streams",
          },
        },
        __actions__: {},
        id: "GR1XW2N0R",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "7",
        episode_number: 7,
        sequence_number: 7,
        production_episode_id: "",
        title: "Talk of the devil, and he is sure to appear.",
        slug_title: "talk-of-the-devil-and-he-is-sure-to-appear",
        description:
          "The dog, with its flowing, black hair and burning red eyes, called Chise by the name \"Isabelle.\" The Church's final request is to investigate a black dog that emerged in a cemetetry, but the black dog ends up saving Chise from danger. Meanwhile, Renfred's apprentice, Alice, is also on the move, looking for the black dog.",
        next_episode_id: "GYXJGP1M6",
        next_episode_title: "Let sleeping dogs lie.",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-11-19T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/644677895f580f6ed47da007c5d998e2.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/644677895f580f6ed47da007c5d998e2.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/644677895f580f6ed47da007c5d998e2.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/644677895f580f6ed47da007c5d998e2.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/644677895f580f6ed47da007c5d998e2.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/644677895f580f6ed47da007c5d998e2.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/644677895f580f6ed47da007c5d998e2.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/644677895f580f6ed47da007c5d998e2.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450099,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/29ba42ad5386fe6dbcf53327d412880f/v/98697a21e0feeade87c774788d7013a3/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvMjliYTQyYWQ1Mzg2ZmU2ZGJjZjUzMzI3ZDQxMjg4MGYvdi85ODY5N2EyMWUwZmVlYWRlODdjNzc0Nzg4ZDcwMTNhMy8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=rCCmlPbh93EyEi542JT9zDRqVTOYtesUk5SWBzlWV83NwdD3zgBtApuknQjGdKGaGhm5F7MkoJbpnvEqbtB43VLQX1MmgTEPNFxqKxjJNvvhkJ~mrQM-dgUFynMYe7rZzoKEDWNh2-bREPxaeootc7-bUjvMDOYriMad2jx4BlIv0jR5IyhQh9QQIcCPtXUNSXK8MdO1IcdciCKox8iciEUaDYe3MsIqmwLfH3YhQ-KVB-L5BWOZE8hG0OankdWNK-d-gLfbd2pkTXNSqvDM8EP3KMFpu0Jq8DC8B26Er4-KAij3C6SXJSxtEYhWiYM9uKQWd2yCRIGly6XoB~8pcw__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GYXJGP1M6",
        __resource_key__: "cms:/episodes/GYXJGP1M6",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G679X075Y",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G07FNQ9Z1/streams",
          },
        },
        __actions__: {},
        id: "GYXJGP1M6",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "8",
        episode_number: 8,
        sequence_number: 8,
        production_episode_id: "",
        title: "Let sleeping dogs lie.",
        slug_title: "let-sleeping-dogs-lie",
        description:
          'Alice sees Elias\' changes and decides immediately that he could never be human. Sorcerer Cartaphilius, who is attempting to capture the black dog by manipulating Renfred and Alice, causes Elias to show a completely different side of himself when his "work" hurts Chise. Those who know Elias call him the Pilum Murialis.',
        next_episode_id: "G679X075Y",
        next_episode_title: "None so deaf as those who will not hear",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-11-26T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/6f1b2ff6bcfd55ab2fbf1e0dfe908a2d.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/6f1b2ff6bcfd55ab2fbf1e0dfe908a2d.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/6f1b2ff6bcfd55ab2fbf1e0dfe908a2d.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/6f1b2ff6bcfd55ab2fbf1e0dfe908a2d.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6f1b2ff6bcfd55ab2fbf1e0dfe908a2d.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/6f1b2ff6bcfd55ab2fbf1e0dfe908a2d.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/6f1b2ff6bcfd55ab2fbf1e0dfe908a2d.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/6f1b2ff6bcfd55ab2fbf1e0dfe908a2d.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450184,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/9ce1ab74e7836dac5a61840082c0a15d/v/b6dc7c95e4d6da82dbe2c3ddb7e7f0b8/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvOWNlMWFiNzRlNzgzNmRhYzVhNjE4NDAwODJjMGExNWQvdi9iNmRjN2M5NWU0ZDZkYTgyZGJlMmMzZGRiN2U3ZjBiOC8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=YQD11R~A9JrVGznzUvLvs7kC8degq72GvEjGnd2ycch9AvjbSCrrFjnunc5D0bUqfvAdo41aSR~Ie28YOL8GA2gt0Vrmcrajs5azHVMB57nNrJgeiFwhneYdEyTa4~MKdk--wet9ETBupFq-NHOtmsWy7PB~VSBeAFQbv9Ilm419iOCJSMyYpAYTMBUI1usbm2M1b-TFvfdmenoqG4JxMeLamgbbbtZa6Hlr41ec0V02X7IQPYC4GkhoR97yAfuWUPMezdP7LOUpzyxk-AXP8lzIeXBMhmUj~tNysqt8k6YD9mhyRNoOQ89QKE9uiHvp~~5GmJSY-jnn9TBY77kfig__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G679X075Y",
        __resource_key__: "cms:/episodes/G679X075Y",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G6MEJ7D3R",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GEMFZ580M/streams",
          },
        },
        __actions__: {},
        id: "G679X075Y",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "9",
        episode_number: 9,
        sequence_number: 9,
        production_episode_id: "",
        title: "None so deaf as those who will not hear",
        slug_title: "none-so-deaf-as-those-who-will-not-hear",
        description:
          "With the church's requests fulfilled, things were supposed to go back to normal. But Elias has been acting strange since the last request: he'd vanished on the first morning after Chise had spent a night in his room. Neither Angelica's kind words nor Ruth's pure words are enough to put Chise's mind to rest.",
        next_episode_id: "G6MEJ7D3R",
        next_episode_title: "We live and learn",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-12-03T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/5bd488d13fbce75c185c10e7768abfe4.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/5bd488d13fbce75c185c10e7768abfe4.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/5bd488d13fbce75c185c10e7768abfe4.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/5bd488d13fbce75c185c10e7768abfe4.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5bd488d13fbce75c185c10e7768abfe4.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/5bd488d13fbce75c185c10e7768abfe4.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/5bd488d13fbce75c185c10e7768abfe4.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/5bd488d13fbce75c185c10e7768abfe4.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450056,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/1002a583f5063b625b06566fa887e214/v/b3db6af2f93070d6ecb83e5def6e2b4f/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvMTAwMmE1ODNmNTA2M2I2MjViMDY1NjZmYTg4N2UyMTQvdi9iM2RiNmFmMmY5MzA3MGQ2ZWNiODNlNWRlZjZlMmI0Zi8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=AvGiqcWr1QQO8DL2PeRAMk9xEa29Pc2LU4MJ0Vap79ifDb3Xsc4rmj0M2qUw22qc0ZCg2N1GCUApGdoGjcSzN1CCaJtof2LUTx5DUtDZaTpTcUbvPsJESaFrvJb4d7ej1nh8RMqHSLn8phpyFdx0B0cLmdTcOpeFSFyt2O6~qfvZoMgaiQPogz~LOUjyOPWPFG133~DVU-w-Bfw~7Dt3Yw7YQAIoM0YgMsAKvGHThHUXhvbzUSHUQ31dsBP2bM95eCz6WptTV9gIm1EpjduNWGudTuA6DkuSaD7sMlR1aWrigcJM8y8HRNRC4Mzfuky2MLZB~yMUzuTVw3bk-JR43w__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G6MEJ7D3R",
        __resource_key__: "cms:/episodes/G6MEJ7D3R",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G63K0Q7Z6",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G3WFXM7JV/streams",
          },
        },
        __actions__: {},
        id: "G6MEJ7D3R",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "10",
        episode_number: 10,
        sequence_number: 10,
        production_episode_id: "",
        title: "We live and learn",
        slug_title: "we-live-and-learn",
        description:
          "Chise and Selkie climb aboard a dragon's back to meet Lindel, to have her own mage's staff made. Frustrated by Chise's acceptance of her being kept as a pet by Elias, he describes the time he found Elias in the darkness. Meanwhile, Elias, who had stayed at home by himself, receives a letter from a sorcerer's college.",
        next_episode_id: "G63K0Q7Z6",
        next_episode_title: "Lovers ever run before the clock",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-12-10T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/b2d245c7c3a43b76374cd2dc8ab73bbc.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/b2d245c7c3a43b76374cd2dc8ab73bbc.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/b2d245c7c3a43b76374cd2dc8ab73bbc.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/b2d245c7c3a43b76374cd2dc8ab73bbc.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b2d245c7c3a43b76374cd2dc8ab73bbc.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/b2d245c7c3a43b76374cd2dc8ab73bbc.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/b2d245c7c3a43b76374cd2dc8ab73bbc.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/b2d245c7c3a43b76374cd2dc8ab73bbc.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450141,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/06a8520c6da4de910469df44c2f1deb6/v/b3bdd613a2207a44f8b0991a706342f1/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvMDZhODUyMGM2ZGE0ZGU5MTA0NjlkZjQ0YzJmMWRlYjYvdi9iM2JkZDYxM2EyMjA3YTQ0ZjhiMDk5MWE3MDYzNDJmMS8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=K~Mow~59YhiFZqBP821NYX8wGAlC-NXkxHMr~jcwN2gUG6b0CorfC119YbpH1zqlu0vyEdn~HjNv9ZmpqdGtwfZCK2G-ZCoOGwaI~CUM2UQneEqJ1JbGPXPp-AqV103OrWcK-rkis9OufT3UmwjmtrFggruSxj2zSL-YhazPTcS1EHFim3wQkVdUS~kKeqnpi9A1wv-D4oP9cymbHoAoNj8zzv9~bBIbW4SPpPcH1gnZ7mVNiLliMSGxfoh0z7yBbbtI~1PP5MkEIAs5S1Z1q5kvHwMDXKYBPmna~cWx6LB6ryJMp2TSacbotAEvEkyFK5ekyuHephdeBi4B8QGqoA__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G63K0Q7Z6",
        __resource_key__: "cms:/episodes/G63K0Q7Z6",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GR24G8196",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GPPFKW02M/streams",
          },
        },
        __actions__: {},
        id: "G63K0Q7Z6",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "11",
        episode_number: 11,
        sequence_number: 11,
        production_episode_id: "",
        title: "Lovers ever run before the clock",
        slug_title: "lovers-ever-run-before-the-clock",
        description:
          "\"Elias, is an odd failure who pretends to be human -- but is it because of his master's words, or because of his distrust for humans, that he stopped communicating about himself?\r\nLindel's alias, Echoes, refers to the to a song aking to the sound of snowmelt, traveling through the wind, causing the blooming of flowers and the dancing of fairies. The magic of the song turns into a mirror the surface of the water Chise peers into. What does she see beyond the mirror?\"",
        next_episode_id: "GR24G8196",
        next_episode_title: "Better to ask the way than go astray",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-12-17T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/1de4740402cae8122b5e20fec6287af3.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/1de4740402cae8122b5e20fec6287af3.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/1de4740402cae8122b5e20fec6287af3.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/1de4740402cae8122b5e20fec6287af3.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1de4740402cae8122b5e20fec6287af3.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/1de4740402cae8122b5e20fec6287af3.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/1de4740402cae8122b5e20fec6287af3.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/1de4740402cae8122b5e20fec6287af3.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450099,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/efd2e0c28d7340e32a3c20b6c9e3fb96/v/b33795606def59988a467476749bf6c7/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvZWZkMmUwYzI4ZDczNDBlMzJhM2MyMGI2YzllM2ZiOTYvdi9iMzM3OTU2MDZkZWY1OTk4OGE0Njc0NzY3NDliZjZjNy8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=ZIJzSYoN7EssIAISmORRTdSnPjILQR-y-~4bNGvT7wFBpwq9iAXwaxexzRvdrVipd~cj-nxXJlu0L0m9xYf2wac6jFpl2Qnm66Ag6UGniCa0sei8c7KZBV-RM4kdFrB6ribufvZMVk4oYz6bJfDBmkM2x7bAsQ3gM3jcbHLxvxiu~cqMSNDyNpxyShyCqNKjc1W7k7ZaftMmHn8KkRVmogYLzxNTFjOCFaxTQqN26xNex0xZVxQBc-vZkBdMWsoTJ2RV2M43XmI65F9D7-VnLUacpKJZm-ssbwX-DGCIO-ichPz~DwfNtNlfiiqJn-3X9Jo8qCWEeOvBD7vmlMChTg__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GR24G8196",
        __resource_key__: "cms:/episodes/GR24G8196",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GRZJE82M6",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G8MFN92QK/streams",
          },
        },
        __actions__: {},
        id: "GR24G8196",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "12",
        episode_number: 12,
        sequence_number: 12,
        production_episode_id: "",
        title: "Better to ask the way than go astray",
        slug_title: "better-to-ask-the-way-than-go-astray",
        description:
          "Lindel finishes the staff that Chise had finished carving. As she finishes, she meets an old friend, who offers her some wise advice.",
        next_episode_id: "GRZJE82M6",
        next_episode_title: "East, west, home's best.",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2017-12-24T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/8f15c56b53571c54385a68cd1ac349f4.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/8f15c56b53571c54385a68cd1ac349f4.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/8f15c56b53571c54385a68cd1ac349f4.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/8f15c56b53571c54385a68cd1ac349f4.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8f15c56b53571c54385a68cd1ac349f4.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/8f15c56b53571c54385a68cd1ac349f4.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/8f15c56b53571c54385a68cd1ac349f4.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/8f15c56b53571c54385a68cd1ac349f4.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1455176,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/30b8ba5e013c2d4b5932d7f3babbddec/v/e8b62e88b0fa558983b24543d3bb6b5d/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvMzBiOGJhNWUwMTNjMmQ0YjU5MzJkN2YzYmFiYmRkZWMvdi9lOGI2MmU4OGIwZmE1NTg5ODNiMjQ1NDNkM2JiNmI1ZC8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=DaWDcEgx~Avijs5ohAXhWO6bZQONfEHveo5Up2myL4qRmYJPk1b3feOxtKYSn1l4ZUhbneIUuemeVnneBLZwGTDcEnUo~fHn8vMaPESVk6gnar4~ACeHOlVhjBGJnfmg9FsDXMNztXYi0mUoww85xHKdDX1PzEsIjmVk0WVCAptAuFnzmwEqI8bAWn6SwWPJXvlqu0hcDfWz2tKRYsaaEOaiSqCPBypDKisH3N0LlWEf48xajI4OtoZaUiqwOSwB-v1L9Kp0~o9PTQ9Ug2NQTWST7rlkqI15-gJcF81CfBtXVVX7RSJW1BGhMq6iYGJw0nB~Mw00Gz-CECln5Hl1Zw__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GRZJE82M6",
        __resource_key__: "cms:/episodes/GRZJE82M6",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G6QWD1K76",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GDVFV420N/streams",
          },
        },
        __actions__: {},
        id: "GRZJE82M6",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "13",
        episode_number: 13,
        sequence_number: 13,
        production_episode_id: "",
        title: "East, west, home's best.",
        slug_title: "east-west-homes-best",
        description:
          "Chise is attacked by yukimushi, briefly making her dangerously ill. She and Elias discuss the nature of their relationship.",
        next_episode_id: "G6QWD1K76",
        next_episode_title: "Looks breed love.",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-01-07T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/52470dc6b0791b671c006b6562fdd397.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/52470dc6b0791b671c006b6562fdd397.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/52470dc6b0791b671c006b6562fdd397.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/52470dc6b0791b671c006b6562fdd397.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/52470dc6b0791b671c006b6562fdd397.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/52470dc6b0791b671c006b6562fdd397.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/52470dc6b0791b671c006b6562fdd397.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/52470dc6b0791b671c006b6562fdd397.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450141,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/9f8d0fbf9c93f349579331dcd3ee3836/v/70886cff0e407f0e47fdc2343023036c/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvOWY4ZDBmYmY5YzkzZjM0OTU3OTMzMWRjZDNlZTM4MzYvdi83MDg4NmNmZjBlNDA3ZjBlNDdmZGMyMzQzMDIzMDM2Yy8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=cAgdq6NzrAKL5gwjfEHfNHceloQdxTa-ftKPxpDyTHkMX8MhHkhgJyQW6DL6w1fi9nRzlLOn4g9yThPz9nh00ad2bKcX46~Y-CEWxNsxb8EJ1NxCvnZ7mrt99hZftFfOnBIcnarjRQEpsQGlxtc3MXDl2eT67x7onlYib8YV-RkcoDAYBZiCT--edoOIdYjllq0h5N015FZ~EjRCISzC1awgKSYLR5NKRMOfDzCsoWcLH-54qzxLzIswPoMjldYusmPc8dehVDt2e3opiB5M7F2fFCgxMQpT0~5pML7GQEGmXBlnWu7kMcULT32S7dBOfqR01n3N~4BRNoW6INb-Fw__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G6QWD1K76",
        __resource_key__: "cms:/episodes/G6QWD1K76",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GYW4W3Z36",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G5JFZJE34/streams",
          },
        },
        __actions__: {},
        id: "G6QWD1K76",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "14",
        episode_number: 14,
        sequence_number: 14,
        production_episode_id: "",
        title: "Looks breed love.",
        slug_title: "looks-breed-love",
        description:
          "The Leannán Sídhe begs Chise for her help: Joel is on his death bed, and she can only seem to make things worse. Chise vows to do what she can to turn that around.",
        next_episode_id: "GYW4W3Z36",
        next_episode_title: "There is no place like home",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-01-14T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/825277daebbf12df5478488b66b3bfb9.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/825277daebbf12df5478488b66b3bfb9.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/825277daebbf12df5478488b66b3bfb9.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/825277daebbf12df5478488b66b3bfb9.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/825277daebbf12df5478488b66b3bfb9.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/825277daebbf12df5478488b66b3bfb9.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/825277daebbf12df5478488b66b3bfb9.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/825277daebbf12df5478488b66b3bfb9.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450056,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/259627983bce0b2baebfc148a061cd39/v/f76d0adbd0a948995541af9e4786facb/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvMjU5NjI3OTgzYmNlMGIyYmFlYmZjMTQ4YTA2MWNkMzkvdi9mNzZkMGFkYmQwYTk0ODk5NTU0MWFmOWU0Nzg2ZmFjYi8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=pMUMkR39MTElTXFlWhoy5lDaXBzVW2JCO-BF8jW7i~klyQxdjHm3WvtkffBtJTHpP8OgvmUatuAtxSG5iwoP1~Fd221n87~6U~UQ8Ye9e04sO42ncZi-AVRAEIEBsfBaxoIZTyF1jEs2H1HMJ79UNJlJAHyiBZKxJzK0~Voet99GjsF0ew39g-qqNO9byTjeVy1XVmI5tqgRKJi-rfxeLvUxdrDmzb4QfQ~T1y9lUDYgnW5V0Y4fRKIYfY8g8~AjCM~NPiVYcPrls6Hp1CYqLKcZzpra0ZtxdGa9aXykpetVK6l67EcMNG-8CLCGaDks4lFoLlyBN6lefjM6fYg13Q__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GYW4W3Z36",
        __resource_key__: "cms:/episodes/GYW4W3Z36",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GR0X5PGVY",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GGVF27DP3/streams",
          },
        },
        __actions__: {},
        id: "GYW4W3Z36",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "15",
        episode_number: 15,
        sequence_number: 15,
        production_episode_id: "",
        title: "There is no place like home",
        slug_title: "there-is-no-place-like-home",
        description:
          "A surge of magic threatens to kill Chise. Elias takes her to the land of fairies for treatment, while Silky is left to take care of their home.",
        next_episode_id: "GR0X5PGVY",
        next_episode_title: "God's mill grinds slow but sure",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-01-21T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/f940631e2a971cf82e7e6d6a099d2feb.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/f940631e2a971cf82e7e6d6a099d2feb.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/f940631e2a971cf82e7e6d6a099d2feb.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/f940631e2a971cf82e7e6d6a099d2feb.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f940631e2a971cf82e7e6d6a099d2feb.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/f940631e2a971cf82e7e6d6a099d2feb.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/f940631e2a971cf82e7e6d6a099d2feb.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/f940631e2a971cf82e7e6d6a099d2feb.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1449928,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/e5db4e36c320687fc419585c427dfca8/v/774c4dba16262f3e21190c5d94d57749/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvZTVkYjRlMzZjMzIwNjg3ZmM0MTk1ODVjNDI3ZGZjYTgvdi83NzRjNGRiYTE2MjYyZjNlMjExOTBjNWQ5NGQ1Nzc0OS8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=haZRaxktqTUJZCbomZPX21~ugjXlxw8VHZHdQ51l5foxraa7NSEo1oo7wzjOlcPuJeuKW-Q9htckzilbJFsq-oiCBta~H~lCFoZT-GjdPmAff2fnDOhiSizOHQNmFK77~ijbS7zvUumI-~HBRqYVf4p7ubKvPy34rjRr4pzimfwpxv1pTMWPJsqmcOBEg2R~9FJ-7VZtxxtoEMjD62H-UpIzko6lLsymw0QMvjPoHS3ibQoAtRMHFUL6ZaB2cvAcX1SSQ22O~SsbNtrI8Ax3fBSHgH3XMzRIXlf5C8imOtpJBqeEAmDzjIvG4fvvH45fo~EeT0Fa0KCleGLwZstY6A__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GR0X5PGVY",
        __resource_key__: "cms:/episodes/GR0X5PGVY",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GR1XW201R",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GEMFZ58VM/streams",
          },
        },
        __actions__: {},
        id: "GR0X5PGVY",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "16",
        episode_number: 16,
        sequence_number: 16,
        production_episode_id: "",
        title: "God's mill grinds slow but sure",
        slug_title: "gods-mill-grinds-slow-but-sure",
        description:
          "Christmas is coming up. Alice invites Chise out to London, where they hang out together and go gift shopping for Renfred and Elias.",
        next_episode_id: "GR1XW201R",
        next_episode_title: "Look before you leap",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-01-28T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/e7063b8e03752ccbb11f5b8701a2cf90.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/e7063b8e03752ccbb11f5b8701a2cf90.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/e7063b8e03752ccbb11f5b8701a2cf90.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/e7063b8e03752ccbb11f5b8701a2cf90.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e7063b8e03752ccbb11f5b8701a2cf90.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/e7063b8e03752ccbb11f5b8701a2cf90.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/e7063b8e03752ccbb11f5b8701a2cf90.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/e7063b8e03752ccbb11f5b8701a2cf90.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450141,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/516bcf0435c54ccf4826a9f559c378de/v/276b6eb4cdf2d506f770ec57dca3b399/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvNTE2YmNmMDQzNWM1NGNjZjQ4MjZhOWY1NTljMzc4ZGUvdi8yNzZiNmViNGNkZjJkNTA2Zjc3MGVjNTdkY2EzYjM5OS8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=TNX8IoVjN3nDtudG8zZBEv1BJ2la0KB5TBNggeRJ0HwsdDYPBmsj0btElZErpZPNhTQzQ9JdKU11hcm0DfvuMyThj~PXkXQS5CQYYCWziRR8kax6Y8mD3f90jW1SRbGWMp9ruqYvI~1MXnGeoGbSUKc2XOfOs9aGcM0MZSrNcZJZC9j9zqjlB1ViqDf-CUZJH58sYmTymOzHq3B998KQObJ5f1VUpUDmZG6tov2oBbNY9c-vIWrQa7f9o5Wr2Ea856zdiZ8cHoLT0lcwwdTwhxJ2y1FHtOVkS00TsrwI61cIMzdiq7997bPMi62UwUAeExl8q2jW3hVJq~B~1tnmww__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GR1XW201R",
        __resource_key__: "cms:/episodes/GR1XW201R",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GR79X0K56",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G9XFEWDV3/streams",
          },
        },
        __actions__: {},
        id: "GR1XW201R",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "17",
        episode_number: 17,
        sequence_number: 17,
        production_episode_id: "",
        title: "Look before you leap",
        slug_title: "look-before-you-leap",
        description:
          "Two siblings, Stella and Ethan, get in a fight. They wish for things that they don’t entirely mean, but come to regret dearly, as they become true.",
        next_episode_id: "GR79X0K56",
        next_episode_title: "Forgive and forget",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-02-04T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/e31dc9e3bd205ac5dadc34567b1845c8.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/e31dc9e3bd205ac5dadc34567b1845c8.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/e31dc9e3bd205ac5dadc34567b1845c8.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/e31dc9e3bd205ac5dadc34567b1845c8.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e31dc9e3bd205ac5dadc34567b1845c8.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/e31dc9e3bd205ac5dadc34567b1845c8.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/e31dc9e3bd205ac5dadc34567b1845c8.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/e31dc9e3bd205ac5dadc34567b1845c8.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450141,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/6fe4cee66d6c14cd3318d40559e74f23/v/2b590b15d870bd69db83fbb8faf14713/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvNmZlNGNlZTY2ZDZjMTRjZDMzMThkNDA1NTllNzRmMjMvdi8yYjU5MGIxNWQ4NzBiZDY5ZGI4M2ZiYjhmYWYxNDcxMy8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=nvzbEJY20HK8mnomEsD~w~XsCXPP7hFHbYV3dZtKo7gsRCZ2AREVAZWmvBxHQthWsmcxR2No~9CXMig14AiFWnPbY~YymicnRpzuMEbZwAAEwC8FAHjcI~ZCtxmWX0yICGVLrd2R4Cw6JEhOGtdXkliOYqQjtq9t37wcwhzWMBPS0~zXca17r7hXpHvyktTiYyZwTdm7vrM~AvGHiSB-AWXR0JsumqIufzUfcQwnDwGGHk-JIqZExHkE0U6jafz4COu59p3a8gMJSSznViKvhjZW1hhMzx0t1HDZ0hZcMA~7buWmpdSAKmHYBHoiVXSxi0eEL85G3ohykT5d8BYurw__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GR79X0K56",
        __resource_key__: "cms:/episodes/GR79X0K56",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G6XJGP3MR",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G4GFQPM41/streams",
          },
        },
        __actions__: {},
        id: "GR79X0K56",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "18",
        episode_number: 18,
        sequence_number: 18,
        production_episode_id: "",
        title: "Forgive and forget",
        slug_title: "forgive-and-forget",
        description:
          "Having made friends with Chise, Stella visits the Ainsworths’ home. Meanwhile, Elias’ behavior takes a troubling turn.",
        next_episode_id: "G6XJGP3MR",
        next_episode_title: "Any port in a storm.",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-02-11T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/766056cd86cb210652251846fbf07742.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/766056cd86cb210652251846fbf07742.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/766056cd86cb210652251846fbf07742.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/766056cd86cb210652251846fbf07742.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/766056cd86cb210652251846fbf07742.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/766056cd86cb210652251846fbf07742.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/766056cd86cb210652251846fbf07742.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/766056cd86cb210652251846fbf07742.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450056,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/def5324cbd469fc43dcae791dc1ef5a0/v/e915c80cfba25032723ad9fa238c2613/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvZGVmNTMyNGNiZDQ2OWZjNDNkY2FlNzkxZGMxZWY1YTAvdi9lOTE1YzgwY2ZiYTI1MDMyNzIzYWQ5ZmEyMzhjMjYxMy8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=IqSZbWCA3vqSplgKzFVbF0AaMcWvxK9Z-94OFb9OU3j7Dtvx0b8wCLxEFXMWmSkYCUjK4I2po4tg0QseOCaJW8mRDSoYd0L4boUlpzk5Prg-7k88zoQsiwaLRdDIIMHfRSEUZeb2DuWM7O6CkZqkri5a31RXZ2Xj6MeW9fHa7OhvxC2GJXBnU2oes2-PUQrGOZFTgT9f9TNyBtxzG38z1ZjjnVmD0KUu~SlWqv0vRPJqVCWRw947ymen232HaklHMV2Ja9SWuD3CBnSnEQ92Liybh6V-sWbVFL1L7bqbzBuEVEdiYYEFGIFlj0krXKpSpOuJlla-7hITlA1Yb379KA__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G6XJGP3MR",
        __resource_key__: "cms:/episodes/G6XJGP3MR",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GY1XW200Y",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G1QF48XZ1/streams",
          },
        },
        __actions__: {},
        id: "G6XJGP3MR",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "19",
        episode_number: 19,
        sequence_number: 19,
        production_episode_id: "",
        title: "Any port in a storm.",
        slug_title: "any-port-in-a-storm",
        description:
          "In a dream, Chise converses with Cartaphilus. It seems that he’s found a solution to his problem – one that involves Chise.",
        next_episode_id: "GY1XW200Y",
        next_episode_title:
          "You can't make an omelet without breaking a few eggs",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-02-18T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/632193c0f52ce05fd493cc0e70f9c607.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/632193c0f52ce05fd493cc0e70f9c607.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/632193c0f52ce05fd493cc0e70f9c607.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/632193c0f52ce05fd493cc0e70f9c607.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/632193c0f52ce05fd493cc0e70f9c607.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/632193c0f52ce05fd493cc0e70f9c607.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/632193c0f52ce05fd493cc0e70f9c607.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/632193c0f52ce05fd493cc0e70f9c607.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450141,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/73373494e37a9900b28ab2d74654d669/v/69eafd0948d3d87facf16145a7efe259/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvNzMzNzM0OTRlMzdhOTkwMGIyOGFiMmQ3NDY1NGQ2Njkvdi82OWVhZmQwOTQ4ZDNkODdmYWNmMTYxNDVhN2VmZTI1OS8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=irPOuqsAvCR0R2AxSgQ~kIzCtWjZH7OSTEz~dNoKlx8bJW98AJFlSswAJLqRDpBWLlSCZvSAh2oBtKzZe7ljJjrK-Tuyv9LIUFB3Df-Uq3RPICJTCV8qGx78mqszgA97DxBPDkIGtYbALgepr7kghR93qrQ7OEsvRUR7hgE2HBGJcEuLIsIOH1VhHedtS~K6YLeYR32T5jVjtQxBR88Ye7TXqoOXKnuNLEvLmK6kvWyH7L0InbvF3WqrXbMfNXkPOnmLr1s1xz75CZ3Sb61CwgstnPF5jM0MUe063pBb3VL2RP4K6FUHebIjr1lIvJ5Ste4xCt51-hv9izWxQ525hg__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GY1XW200Y",
        __resource_key__: "cms:/episodes/GY1XW200Y",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GYQWD1QPY",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GNJFD5W8X/streams",
          },
        },
        __actions__: {},
        id: "GY1XW200Y",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "20",
        episode_number: 20,
        sequence_number: 20,
        production_episode_id: "",
        title: "You can't make an omelet without breaking a few eggs",
        slug_title: "you-cant-make-an-omelet-without-breaking-a-few-eggs",
        description:
          "Chise falls victim to a dragon’s curse after she attempts to free it as it’s being sold at an auction. She may not have very long left.",
        next_episode_id: "GYQWD1QPY",
        next_episode_title: "Necessity has no law.",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-02-25T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/a7ebff0eb9ee58be29fe8fb0f2dcf7f3.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/a7ebff0eb9ee58be29fe8fb0f2dcf7f3.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/a7ebff0eb9ee58be29fe8fb0f2dcf7f3.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/a7ebff0eb9ee58be29fe8fb0f2dcf7f3.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a7ebff0eb9ee58be29fe8fb0f2dcf7f3.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/a7ebff0eb9ee58be29fe8fb0f2dcf7f3.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/a7ebff0eb9ee58be29fe8fb0f2dcf7f3.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/a7ebff0eb9ee58be29fe8fb0f2dcf7f3.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450013,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/7df81114181bc5b987398c5899a60ae4/v/e219b08e8e225f6bd6668c814fb858a3/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvN2RmODExMTQxODFiYzViOTg3Mzk4YzU4OTlhNjBhZTQvdi9lMjE5YjA4ZThlMjI1ZjZiZDY2NjhjODE0ZmI4NThhMy8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=C7LrUv66v4Es5dS9XdYrwrmyWzSwKPOhfs7HMOXanzRVEDxxu7bm5U76WVEkPmm6FLwy9S8vS2Wpf8lipa9JRCHk3UtKuiIPLLgrhdb69jLL0Z00fM4DX~lx4BiMTx7cLXLXeBlF6e7aDjLcnilITsqKqJQj5ywqbp-T7b4nzZ1kxUy~vO2kCIBGyjnMz039rWpFsHtjBzlLwBDn8~Xr~uoW2qhQODrGdrFLSyhRLAtTu1Qb8h4iAUrpVFY9SX3BdYzRTqvZSGKSHD-naez-rYdVZf-eXIZm5ukQ4WujAwsNlJv05GNblZ6JfMhDMlnyIAQEvF5DiD0r8KQnSnLfRA__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GYQWD1QPY",
        __resource_key__: "cms:/episodes/GYQWD1QPY",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/GRW4W32KY",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GM8FXJ5N3/streams",
          },
        },
        __actions__: {},
        id: "GYQWD1QPY",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "21",
        episode_number: 21,
        sequence_number: 21,
        production_episode_id: "",
        title: "Necessity has no law.",
        slug_title: "necessity-has-no-law",
        description:
          "Elias and Chise attend a meeting of witches to try to enlist their help. Elias, desperate to help Chise, makes some questionable decisions.",
        next_episode_id: "GRW4W32KY",
        next_episode_title: "As you sow, so shall you reap.",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-03-04T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/cc96362eb7f39414fb7c296be783fb26.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/cc96362eb7f39414fb7c296be783fb26.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/cc96362eb7f39414fb7c296be783fb26.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/cc96362eb7f39414fb7c296be783fb26.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cc96362eb7f39414fb7c296be783fb26.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/cc96362eb7f39414fb7c296be783fb26.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/cc96362eb7f39414fb7c296be783fb26.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/cc96362eb7f39414fb7c296be783fb26.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450099,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/a53755e4bfcea1c75617dfb258a1f188/v/6de10c3d4e46fbaf9d6a64f0799c2a59/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvYTUzNzU1ZTRiZmNlYTFjNzU2MTdkZmIyNThhMWYxODgvdi82ZGUxMGMzZDRlNDZmYmFmOWQ2YTY0ZjA3OTljMmE1OS8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=lELnwEZ5mU1~dnxoH1IhJApCvKotEtY4hmAKySBRIUOCknkfUcYIU7bjmyIUCKjXfDCY8vYZpXKlgvE4RaKvNYKQZe27jCrReIB5QIAiLkICxOCei8rEVHr8ZbXzbPJ959CEHo-rYDHINDZyy7uxSL37Hs0Lxdig-BurAStXsAcIe7qypAVWSda4oJJ0iCOGR0MKFFK4TF6QHKgkeK2VZWbWOmnj8dQE0tQl2S-8F7XMwd-Im5yU0fhF426VgEhJrkOCLJoUSlYqIWk0Ry7IlIBPLJWK6deJt4JeIGO1LQshnGF7kym4NzZLz32JyDO2CB8ABIGH43ZvMN08flezaA__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/GRW4W32KY",
        __resource_key__: "cms:/episodes/GRW4W32KY",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G60X5PG2R",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G3WFXM75V/streams",
          },
        },
        __actions__: {},
        id: "GRW4W32KY",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "22",
        episode_number: 22,
        sequence_number: 22,
        production_episode_id: "",
        title: "As you sow, so shall you reap.",
        slug_title: "as-you-sow-so-shall-you-reap",
        description:
          "Having captured Chise, Cartaphilus begins grafting parts of her onto himself. He forces her to relive some of her worst memories.",
        next_episode_id: "G60X5PG2R",
        next_episode_title: "Nothing seek, nothing find.",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-03-11T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/6034a0207f157a3aa99ee123275ccf69.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/6034a0207f157a3aa99ee123275ccf69.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/6034a0207f157a3aa99ee123275ccf69.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/6034a0207f157a3aa99ee123275ccf69.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6034a0207f157a3aa99ee123275ccf69.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/6034a0207f157a3aa99ee123275ccf69.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/6034a0207f157a3aa99ee123275ccf69.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/6034a0207f157a3aa99ee123275ccf69.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450141,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: ["en-US"],
        playback:
          "https://pl.crunchyroll.com/asset/a5d58092039dbdbda3dba474112d2809/v/558366e369ab750a482518fb4c4f0ea0/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvYTVkNTgwOTIwMzlkYmRiZGEzZGJhNDc0MTEyZDI4MDkvdi81NTgzNjZlMzY5YWI3NTBhNDgyNTE4ZmI0YzRmMGVhMC8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=r-hF1aZU~6vxLiUnVtagumnL9-ZxAn93-DW3tjGOp7MnKdLTPWjTDiHhY83RtzAC8No7Zs7J2kevCXTc93lLfCW5v5OfsVoU0OfCQRHidy1lePs-pC9ytpMxbb9QxBNALr6-EMU63lC0pMUkKvtDvnqO9ytntXGSoqB5X2S5Ed0KVV2Ah19Hc-0XHkgjuAbit6gEaQlNcZvqVP-N4HthX1LByDE3HPS0LO6eYndFFanZb6wlQO1YGVani6YL2ISkr-lZLnyAydEgHedzbG~80AziB-tbdtoR-6r2h7hCJq0zUc1B61cJ1zE3eEzH92pN~49FE31c8RmXKlmOcxwiag__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G60X5PG2R",
        __resource_key__: "cms:/episodes/G60X5PG2R",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G679X0KNY",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/GEMFZ581V/streams",
          },
        },
        __actions__: {},
        id: "G60X5PG2R",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "23",
        episode_number: 23,
        sequence_number: 23,
        production_episode_id: "",
        title: "Nothing seek, nothing find.",
        slug_title: "nothing-seek-nothing-find",
        description:
          "Elias earns the help of many, and they form a search party for Chise. Meanwhile, Chise and Cartaphilus relive his past together.",
        next_episode_id: "G679X0KNY",
        next_episode_title: "Live and let live",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-03-18T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/569a590833b86722d320d767a035ed25.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/569a590833b86722d320d767a035ed25.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/569a590833b86722d320d767a035ed25.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/569a590833b86722d320d767a035ed25.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/569a590833b86722d320d767a035ed25.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/569a590833b86722d320d767a035ed25.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/569a590833b86722d320d767a035ed25.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/569a590833b86722d320d767a035ed25.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450141,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/649bb31a7e400473c37e4803db61fd27/v/96ad4271b6dffc1b4438a6d5b0dc4f0f/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvNjQ5YmIzMWE3ZTQwMDQ3M2MzN2U0ODAzZGI2MWZkMjcvdi85NmFkNDI3MWI2ZGZmYzFiNDQzOGE2ZDViMGRjNGYwZi8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=HS5Nsm9g5ypVgtYBmql8MmMMS9i8cOlqnLDTJ-wrngRcTWMkPTRyQlUQAbMpOWD2fQ5zN71QGacGIIOMxrLq23QwJZcfO26gLAVHSzv7tTtD3BzqFJYcNOp~FBZKm-KCYFKNxqU8nJ3vAhgoPyj2pwu-m6i-BEXC0CignwQsgL0pd0zHlL7znvmbm6tRIgSfbsRTkVPewTqM-t6ZCWQpdV1xLFpRilR2vlN8FEz5UjVhBm6pRjBQFMUh1Yjq8TPIfOlsQtxJ0MgOD~FzQyIHl9s7tQ4~02Cz-cPtf4EhPV-84LknRaccjzUXhE4bwMeVOUlLUNZ42zZQOEaGnpp3bQ__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
      {
        __class__: "episode",
        __href__: "/cms/v2/FR/M3/crunchyroll/episodes/G679X0KNY",
        __resource_key__: "cms:/episodes/G679X0KNY",
        __links__: {
          "episode/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          "episode/next_episode": {
            href: "/cms/v2/FR/M3/crunchyroll/episodes/G6KE22846",
          },
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G9XFEWDKW/streams",
          },
        },
        __actions__: {},
        id: "G679X0KNY",
        channel_id: "crunchyroll",
        series_id: "GRZXQJJ8Y",
        series_title: "The Ancient Magus' Bride",
        series_slug_title: "the-ancient-magus-bride",
        season_id: "G6VD5VM46",
        season_title: "The Ancient Magus' Bride (English Dub)",
        season_slug_title: "the-ancient-magus-bride-english-dub",
        season_number: 1,
        episode: "24",
        episode_number: 24,
        sequence_number: 24,
        production_episode_id: "",
        title: "Live and let live",
        slug_title: "live-and-let-live",
        description:
          "Cartaphilus and Chise argue over their respective approaches to dealing with their own suffering, beating each other up brutally in the process.",
        next_episode_id: "G6KE22846",
        next_episode_title: "April showers bring May flowers",
        hd_flag: true,
        maturity_ratings: ["TV-14"],
        extended_maturity_ratings: {},
        is_mature: false,
        mature_blocked: false,
        episode_air_date: "2018-03-25T01:30:00+09:00",
        available_date: null,
        free_available_date: "2020-01-30T23:00:00Z",
        premium_date: null,
        premium_available_date: "2020-01-30T23:00:00Z",
        is_subbed: false,
        is_dubbed: true,
        is_clip: false,
        seo_title: "",
        seo_description: "",
        season_tags: [],
        available_offline: true,
        media_type: "episode",
        slug: "",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/33b6c96d14f442c1296dff60b8f7ae00.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/33b6c96d14f442c1296dff60b8f7ae00.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/33b6c96d14f442c1296dff60b8f7ae00.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/33b6c96d14f442c1296dff60b8f7ae00.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/33b6c96d14f442c1296dff60b8f7ae00.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/33b6c96d14f442c1296dff60b8f7ae00.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/33b6c96d14f442c1296dff60b8f7ae00.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/33b6c96d14f442c1296dff60b8f7ae00.jpeg",
              },
            ],
          ],
        },
        duration_ms: 1450184,
        is_premium_only: false,
        listing_id: "",
        subtitle_locales: [],
        playback:
          "https://pl.crunchyroll.com/asset/c9f29da59e869eec937d7b18eb9a797d/v/1b82f3c31b0269336a03f882d5e8a60e/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvYzlmMjlkYTU5ZTg2OWVlYzkzN2Q3YjE4ZWI5YTc5N2Qvdi8xYjgyZjNjMzFiMDI2OTMzNmEwM2Y4ODJkNWU4YTYwZS8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkwMjU2M319fV19\u0026Signature=adTcrlI9ucVFXgPt8okLhKgdGzmTcQTOliF9uiAx1DiKKRVrQtBaGbnJ-auqMep0gyuArJHMewKMdmLdvUOGn7mvW9nt9NpRcuK5yImLxOUWdhAXPtHBbPmYX8F6YsoClSmxI0D9kb5mVfKrss4TiqjhspMIHXiWcXFWuNbwbEh9~wSOKlvi8UUSNgrCmw4V4SNZs4--D45Z~kT6FS8EqOJ4seBHTIzf7iwONBXOq4cnrBzUmMSnIZTybzbAex2niS1Hg4zPMCHBMQU7mQrB-43u5JTe69zPUCazS~5kWa5617OjyPG2xuR20RKlyqjDepCsSf~6QT6~tH~H-ibczw__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        availability_notes: "",
      },
    ],
  };
});

it("test API episode", () => {
  let collectionPanel: collectionPanel = {
    __class__: "collection",
    __href__: "/cms/v2/FR/M3/crunchyroll/objects/GY3K0QWZY",
    __resource_key__: "cms:/objects/GY3K0QWZY",
    __links__: {},
    __actions__: {},
    total: 1,
    items: [
      {
        __class__: "panel",
        __href__: "",
        __links__: {
          "episode/season": {
            href: "/cms/v2/FR/M3/crunchyroll/seasons/G6VD5VM46",
          },
          "episode/series": {
            href: "/cms/v2/FR/M3/crunchyroll/series/GRZXQJJ8Y",
          },
          resource: { href: "/cms/v2/FR/M3/crunchyroll/episodes/GY3K0QWZY" },
          "resource/channel": {
            href: "/cms/v2/FR/M3/crunchyroll/channels/crunchyroll",
          },
          streams: {
            href: "/cms/v2/FR/M3/crunchyroll/videos/G8MFN925K/streams",
          },
        },
        __actions__: {},
        id: "GY3K0QWZY",
        external_id: "EPI.792909",
        channel_id: "crunchyroll",
        title: "April showers bring May flowers",
        description:
          "Having given up on life, 15-year-old Hatori Chise sells herself at an underground auction, where she is bought by Elias Ainsworth, a not-quite-human mage, for 5 million pounds. She learns that he intends for her to be his future bride, and her world begins to change.",
        promo_title: "",
        promo_description: "",
        type: "episode",
        slug: "",
        slug_title: "april-showers-bring-may-flowers",
        images: {
          thumbnail: [
            [
              {
                width: 320,
                height: 180,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 600,
                height: 338,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/600x338/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 640,
                height: 360,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 800,
                height: 450,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/800x450/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 1200,
                height: 675,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 1440,
                height: 810,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1440x810/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 1600,
                height: 900,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1600x900/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
              {
                width: 1920,
                height: 1080,
                type: "thumbnail",
                source:
                  "https://beta.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/a1ecb0108f5bb71fae6cbb438f298a1d.jpeg",
              },
            ],
          ],
        },
        episode_metadata: {
          series_id: "GRZXQJJ8Y",
          series_title: "The Ancient Magus' Bride",
          series_slug_title: "the-ancient-magus-bride",
          season_id: "G6VD5VM46",
          season_title: "The Ancient Magus' Bride (English Dub)",
          season_slug_title: "the-ancient-magus-bride-english-dub",
          season_number: 1,
          episode_number: 1,
          episode: "1",
          sequence_number: 1,
          duration_ms: 1450056,
          episode_air_date: "2017-10-08T01:30:00+09:00",
          is_premium_only: false,
          extended_maturity_ratings: {},
          maturity_ratings: ["TV-14"],
          is_mature: false,
          mature_blocked: false,
          available_date: null,
          free_available_date: "2020-01-30T23:00:00Z",
          premium_date: null,
          premium_available_date: "2020-01-30T23:00:00Z",
          is_subbed: false,
          is_dubbed: true,
          is_clip: false,
          available_offline: true,
          subtitle_locales: ["en-US"],
          availability_notes: "",
        },
        playback:
          "https://pl.crunchyroll.com/asset/389e0008525987125a282e327d4f34d0/v/dbe64c259b22869396d4fcad820b0901/languages/en-US?*\u0026Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vYXNzZXQvMzg5ZTAwMDg1MjU5ODcxMjVhMjgyZTMyN2Q0ZjM0ZDAvdi9kYmU2NGMyNTliMjI4NjkzOTZkNGZjYWQ4MjBiMDkwMS8~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1MTkzNDIxN319fV19\u0026Signature=RlGK2HFvurV2Y2MvS-iCpmwLj5cxTXrNx~UYT9Jed31YduE1XbUbTnJ0PpycWoyebGdhWT433dGvlvpkvq17d9FF0urZIetuh6x78l90fUhg6lw4qvCO-f451dTEmLvEkzYDTZZ8L5NWzEy2hKLcRhBSnATJ16zhCs5Wf5SZnppktib7nV2sgU2ZPLZrVmY77GDJXxzpjPiv36u2vJp~gx9HjhW-p9bOCF1i-29auRtRnVne4e-T0gmge2Bg6UbMLI2vanlp~m2dO9oyUtUx~bIC1x60qcArcIg-3YkG5xkdYtSS8UTIRXExNoi-MD6bLn3v-dvHI3mxM3whpSczEg__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        linked_resource_key: "cms:/episodes/GY3K0QWZY",
      },
    ],
  };
});
