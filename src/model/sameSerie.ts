export default class SameSerie {
  private seriesGroups: string[][];
  private index: Map<string, number>;

  constructor(seriesGroups: string[][]) {
    this.seriesGroups = seriesGroups;
    this.index = new Map<string, number>();
    let i = 0;
    for (const series of this.seriesGroups) {
      for (const serie of series) {
        this.index.set(serie, i);
      }
      i++;
    }
  }

  findOtherSeries(serie: string): string[] {
    const index: number | undefined = this.index.get(serie);
    if (index == null) {
      return [];
    }
    return this.seriesGroups[index].filter((serie2) => serie2 !== serie);
  }
}
