import Color from 'color';
import MersenneTwister from 'mersenne-twister';

const WOBBLE = 30;

const BASE_COLORS = [
  '#01888C', // teal
  '#FC7500', // bright orange
  '#034F5D', // dark teal
  '#F73F01', // orangered
  '#FC1960', // magenta
  '#C7144C', // raspberry
  '#F3C100', // goldenrod
  '#1598F2', // lightning blue
  '#2465E1', // sail blue
  '#F19E02', // gold
].map(hex => Color(hex));

export class Colors {
  readonly colors: Color[];

  constructor(
    private readonly generator: MersenneTwister,
    private readonly wobble: number = WOBBLE
  ) {
    // Hue Shift
    const amount = generator.random() * 30 - this.wobble / 2;
    this.colors = BASE_COLORS.map(color => {
      color.rotate(amount);
      return color;
    });
  }

  next() {
    this.generator.random(); // Apparently, to maintain compatibility with original Jazzicon
    const idx = Math.floor(this.colors.length * this.generator.random());
    return this.colors.splice(idx, 1)[0];
  }
}
