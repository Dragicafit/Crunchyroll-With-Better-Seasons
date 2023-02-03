export default class RequestService {
  fetchJson(urlOtherSeasons: string, authorization?: string) {
    return fetch(urlOtherSeasons, {
      headers: {
        Authorization: authorization || "",
      },
    }).then((response) => response.json());
  }
}
