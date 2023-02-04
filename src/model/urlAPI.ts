export default class urlAPI {
  private host: string;
  private baseUrl: string;
  private apiPath: string;
  private extraInfos: string;
  private authorization?: string;

  public constructor(
    matchApiUrl?: RegExpMatchArray,
    authorization?: string | null
  ) {
    this.host = matchApiUrl?.groups!["host"] ?? "";
    this.baseUrl = matchApiUrl?.groups!["baseUrl"] ?? "";
    this.apiPath = matchApiUrl?.groups!["apiPath"] ?? "";
    this.extraInfos = matchApiUrl?.groups!["extraInfos"] ?? "";
    this.authorization = authorization ?? undefined;
  }

  public getHost(): string {
    return this.host;
  }

  public setHost(host: string): urlAPI {
    this.host = host;
    return this;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public setBaseUrl(baseUrl: string): urlAPI {
    this.baseUrl = baseUrl;
    return this;
  }

  public getApiPath(): string {
    return this.apiPath;
  }

  public setApiPath(apiPath: string): urlAPI {
    this.apiPath = apiPath;
    return this;
  }

  public getExtraInfos(): string {
    return this.extraInfos;
  }

  public setExtraInfos(extraInfos: string): urlAPI {
    this.extraInfos = extraInfos;
    return this;
  }

  public getAuthorization(): string | undefined {
    return this.authorization;
  }

  public setAuthorization(authorization?: string): urlAPI {
    this.authorization = authorization;
    return this;
  }

  public toString(): string {
    return this.host + this.baseUrl + this.apiPath + this.extraInfos;
  }
}
