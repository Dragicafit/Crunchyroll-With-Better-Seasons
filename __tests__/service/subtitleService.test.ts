import fetch from "node-fetch";
import SubtitleService from "../../src/service/subtitleService";

let subtitleService: SubtitleService;

beforeEach(() => {
  subtitleService = new SubtitleService();
});

it("verify regex works with newest version of bundle", async () => {
  const body = await fetch(
    "https://static.crunchyroll.com/vilos-v2/web/vilos/js/bundle.js"
  ).then((res) => res.text());
  subtitleService.overridePageBundle(body);
});
