import SubtitleService from "../service/subtitleService";
import { startPageBundle } from "./tabConst";

const subtitleService = new SubtitleService();

fetch(startPageBundle)
  .then((res: Response) => res.text())
  .then((body: string) => {
    try {
      body = subtitleService.overridePageBundle(body);
    } catch (error) {
      console.error("Couldn't override vilos, fallback to default", error);
    }

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.charset = "utf-8";
    s.innerHTML = body;
    document.body.appendChild(s);
  });
