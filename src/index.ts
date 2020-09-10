export interface IOptions {
  width: number;
}

export default class VWFlexible {
  options: IOptions;
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  constructor(options: IOptions) {
    this.options = options;
    this.init();
  }

  init = () => {
    if (!document.addEventListener) {
      return;
    }
    // DOM初始化时计算一次
    document.addEventListener('DOMContentLoaded', this.recalc, false);
    // 屏幕尺寸变化重新计算
    window.addEventListener(this.resizeEvt, this.recalc, false);
    // 横竖屏切换重新计算
    document.addEventListener(this.resizeEvt, this.orientchange, false);
  };

  recalc = () => {
    const { width } = this.options;

    let meta = document.getElementsByName('viewport')[0];

    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'viewport');
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      'content',
      'width=device-width,initial-scale=1.0,user-scalable=no'
    );

    const clientWidth = document.documentElement.clientWidth;

    let scale = clientWidth / width;
    scale = scale > 1 ? 1 : scale;

    meta.setAttribute(
      'content',
      `width=${width},minimum-scale=${scale},maximum-scale=${scale},user-scalable=no,minimal-ui`
    );
  };

  orientchange = () => {
    setTimeout(() => {
      if (
        window.orientation == 180 ||
        window.orientation == 0 ||
        window.orientation == 90 ||
        window.orientation == -90
      ) {
        this.recalc();
      }
    }, 200);
  };

  destroy = () => {
    if (!document.removeEventListener) {
      return;
    }
    document.removeEventListener('DOMContentLoaded', this.recalc, false);
    window.removeEventListener(this.resizeEvt, this.recalc, false);
    document.removeEventListener(this.resizeEvt, this.orientchange, false);
  };
}
