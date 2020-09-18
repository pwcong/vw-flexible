export interface IOptions {
  id?: string;
  width: number;
  rem2px: number;
}

const _ID = 'vw-flexible';

export default class VWFlexible {
  stylesheet?: HTMLElement;
  options: IOptions;

  constructor(options: IOptions) {
    this.options = options;

    this.init();
  }

  init = () => {
    const { id = _ID, width, rem2px } = this.options;

    let stylesheet = document.getElementById('vw-flexible');

    if (!stylesheet) {
      stylesheet = document.createElement('style');
      stylesheet.id = id;
      document.head.appendChild(stylesheet);
    }

    this.stylesheet = stylesheet;

    const px2vw = 100 / width;
    const base = rem2px * px2vw;

    stylesheet.innerHTML = `
      html {
        font-size: ${base}vw !important;
      }
    `;
  };

  destroy = () => {
    !!this.stylesheet && document.head.removeChild(this.stylesheet);
  };
}
