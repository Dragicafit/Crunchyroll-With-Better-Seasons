export default class RequestService {
  fetchJson(urlOtherSeasons: string) {
    return fetch(urlOtherSeasons).then((response) => response.json());
  }
}
