export interface IOptions {
  id?: string;
  totalRem?: number;
}

const __ID = 'vw-flexible';
const __TOTAL_REM = 10;

export default class VWFlexible {
  stylesheet?: HTMLElement;
  options: IOptions;

  constructor(options: IOptions) {
    this.options = options;

    this.init();
  }

  init = () => {
    const { id = __ID, totalRem = __TOTAL_REM } = this.options;

    let stylesheet = document.getElementById(id);

    if (!stylesheet) {
      stylesheet = document.createElement('style');
      stylesheet.id = id;
      document.head.appendChild(stylesheet);
    }

    this.stylesheet = stylesheet;

    stylesheet.innerHTML = `
      html {
        font-size: ${100 / totalRem}vw !important;
      }
    `;
  };

  destroy = () => {
    !!this.stylesheet && document.head.removeChild(this.stylesheet);
  };
}
