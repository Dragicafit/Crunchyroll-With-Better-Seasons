import SeasonService from "../../../src/service/seasonService";
import RequestService from "../../../src/service/requestService";

let seasonService: SeasonService;
let requestService: RequestService;

beforeEach(() => {
  requestService = new RequestService();
  seasonService = new SeasonService(requestService);
});

it("", async () => {});
