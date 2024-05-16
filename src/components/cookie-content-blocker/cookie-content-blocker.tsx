import { Component, Prop, Host, h, State, Watch } from '@stencil/core';
import { TranslationsInterface } from '../cookie-consent/cookie-consent.interface';
import { contentBlockerTranslations } from '../../services/default-cookie-translations.js';

@Component({
  tag: 'aui-cookie-content-blocker',
  styleUrl: 'cookie-content-blocker.scss',
})
export class ContentBlocker {
  /** The content blocker title */
  @Prop() message: string;
  /** A paragraph text to explain the content blocker title */
  @Prop() description: string;
  /** The icon name (eg: ai-close) */
  @Prop() icon: string;
  /** Extra CSS class(es) to add */
  @Prop() branding: string = 'aui';
  /** Set the translation strings for the content blocker */
  @Prop() translations = '';

  @State() translationData: TranslationsInterface;

  componentWillLoad() {
    this.handleTranslations();
    this.parseTranslationsProp(this.translations);
  }

  @Watch('translations')
  parseTranslationsProp(newValue: string) {
    if (newValue) this.handleTranslations(JSON.parse(newValue));
  }

  handleTranslations(translations: TranslationsInterface = {}) {
    this.translationData = {
      ...contentBlockerTranslations,
      ...translations,
    }
  }

  openCookiePreferences() {
    const cookieConsentElement = document.querySelector('aui-cookie-consent');
    cookieConsentElement.openPreferences = true;
  }

  render() {
    return (
      <Host class={this.branding}>
        <div class="m-card m-card--gray">
          <div class="u-text-center u-margin">
            {this.icon &&
              <aui-icon name={this.icon} branding="h2 u-margin-bottom-xs" />
            }
            <h3 class="h6">{this.message}</h3>
            <p class="u-margin-bottom-xs">{this.description}</p>
            <button class="a-button" onClick={() => this.openCookiePreferences()}>{this.translationData.buttonOpenCookieSettings}</button>
          </div>
        </div>
      </Host>
    );
  }

}
