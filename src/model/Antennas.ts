export class Antennas {

  currentConfig: Config[] | null = null;

  constructor(
    public dataProvider: () => Config[],
    public onUpdate: (data: Config[]) => void
  ) {
  }

  init() {
    this.currentConfig = this.dataProvider();
    this.update()
  }

  toggle(id: number) {
    const x = this.currentConfig?.find(x => x.id == id);
    if (x) x.state = !x.state;
    this.update()
  }

  update() {
    this.currentConfig && this.onUpdate(this.currentConfig);
  }

}

type Config = {
  id: number,
  name: string,
  state: boolean,
  description: string
}