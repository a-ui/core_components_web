import { Component, Prop, Host, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'aui-icon',
})
export class Icon {
  /** The icon name (eg: ai-close) */
  @Prop() name: string;
  /** The ARIA label */
  @Prop() ariaLabel?: string;
  /** Additional CSS class(es) */
  @Prop() branding?: string;

  /**
   * Inject SVG icons from core branding into page
   */
  fetchAntwerpIcons = async () => {
    if (!fetch) return;

    try {
      const xlinkHref = 'https://cdn.antwerpen.be/core_branding_scss/6.6.4/assets/images/ai.svg';
      const response = await fetch(xlinkHref);
      const svgText = await response.text();

      const svgWrapper = document.createElement('svg');

      svgWrapper.id = 'ai-svg';
      svgWrapper.innerHTML = svgText;
      if(!document.getElementById('ai-svg')) {
        document.body.appendChild(svgWrapper);
      }
    } catch(err) {
      throw new Error(err);
    }
  }

  render() {
    if(typeof document !== 'undefined' && !document.getElementById('ai-svg')) {
      this.fetchAntwerpIcons();
    }

    const iconClass = classNames(this.branding, this.name, 'ai');

    return (
      <Host>
        <span class={iconClass}>
          <svg aria-hidden="true"><use xlinkHref={`#${this.name}`} /></svg>
          {this.ariaLabel && <span class="u-screen-reader-only">{this.ariaLabel}</span>}
        </span>
      </Host>
    );
  }

}
