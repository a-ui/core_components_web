import { Component, Prop, Host, Listen, State, Watch, h } from '@stencil/core';
import Cookies from 'js-cookie';
import { createFocusTrap } from 'focus-trap';
import classNames from 'classnames';

import { ConfigInterface, TranslationsInterface } from './cookie-consent.interface';
import { cookieTranslations } from '../../services/default-cookie-translations.js';
import { Environment } from '../../services/environment.js';

@Component({
  tag: 'aui-cookie-consent',
  styleUrl: 'cookie-consent.scss',
})
export class CookieConsent {
  /** Extra CSS class(es) to add */
  @Prop() branding: string = 'aui';
  /** Configuration of your cookie consent window */
  @Prop() config: string;
  /** If set to true, the modal will show the cookie preferences and not the default screen with the title and description */
  @Prop() openPreferences: boolean;
  /** Set the translation strings for the cookie consent */
  @Prop() translations: string;
  /** Set the current enovironment, this will impact the name of the cookie where the preferences will be saved. eg. 'acceptance' */
  @Prop() environment: string;
  /** Set the domain where you want your cookiepreferences to be saved. eg. 'antwerpen.be' */
  @Prop() domain: string;
  /** Single path or comma seperated list of paths on which the cookie consent will not open */
  @Prop() excludedpaths: string;
  /** Runs when new cookie preferences are saved */
  @Prop() preferencesSaved: Function;

  @State() configData: ConfigInterface = {};
  @State() translationData: TranslationsInterface;
  @State() hidden: boolean = false;
  @State() showPreferences: boolean = false;
  @State() checkedCategories: any[] = [];
  @State() currentEnvironment: string;
  @State() openedManually: boolean = false;

  componentRef!: HTMLElement;
  modalRef!: HTMLElement;

  componentWillLoad() {
    this.handleTranslations();
    this.loadConfigAndTranslations();
    this.checkEnvironment();
    this.checkCookie();
    this.checkExcludedPaths();
  }

  componentDidLoad() {
    if(!this.configData.nonBlocking && !this.hidden) {
      const focusTrap = createFocusTrap(this.componentRef);
      setTimeout(() => focusTrap.activate());
    }
  }

  @Watch('config')
  parseConfigProp(newValue: string) {
    if (newValue) this.configData = JSON.parse(newValue);
    this.checkedCategories = this.configData.cookieConfig;
  }

  @Watch('translations')
  parseTranslationsProp(newValue: string) {
    if (newValue) this.handleTranslations(JSON.parse(newValue));
  }

  @Watch('openPreferences')
  watchHandler(newValue: boolean) {
    this.checkCookie();
    this.hidden = !newValue;
    this.showPreferences = newValue;
    this.openedManually = true;
  }

  @Listen('checkCategory')
  handleCheckCategory(event: CustomEvent<number>) {
    const key = event.detail;
    const newCategories = this.checkedCategories.map((cat, i) => {
      if(key === i) {
        return {...cat, enabled: !cat.enabled};
      }
      return cat;
    })
    this.checkedCategories = [...newCategories];
  }

  @Listen('openCloseCategory')
  handleOpenCloseCategory(event: CustomEvent<number>) {
    const key = event.detail;
    const newCategories = this.checkedCategories.map((cat, i) => {
      if(key === i) {
        return {...cat, open: !cat.open};
      }
      return cat;
    })
    this.checkedCategories = [...newCategories];
  }

  checkExcludedPaths() {
    if(this.excludedpaths && this.excludedpaths.length > 0){
      const excludedPaths = this.excludedpaths.split(",");
      if(excludedPaths.indexOf(window.location.pathname) > -1) {
        this.hideModal();
      }
    }
  }

  loadConfigAndTranslations() {
    if (this.config) {
      this.parseConfigProp(this.config);
    }

    if (this.translations) {
      this.parseTranslationsProp(this.translations);
    }
  }

  handleTranslations(translations: TranslationsInterface = {}) {
    this.translationData = {
      ...cookieTranslations,
      ...translations,
    }
  }

  checkEnvironment() {
    if (this.environment) {
      this.currentEnvironment = this.environment;
    } else {
      this.currentEnvironment = Environment.getEnvironment();
    }
  }

  setCookie(type?: string) {
    let cookiePreferences = [];
    if (Cookies.get('cookiepreferences_' + this.currentEnvironment)) {
      cookiePreferences = JSON.parse(Cookies.get('cookiepreferences_' + this.currentEnvironment));
    }
    this.checkedCategories.forEach(function (category) {
      // Make sure cookies from the same subdomain are left untouched
      const index = cookiePreferences.map(e => e.category).indexOf(category.name);
      if(index > -1) {
        cookiePreferences[index].accepted = (type === 'all' ? true : category.enabled);
      } else {
        cookiePreferences = [...cookiePreferences, {
          category: category.name,
          accepted: (type === 'all' ? true : category.enabled),
          ...(category.id) && {id: category.id},
        }];
      }
    })
    Cookies.set('cookiepreferences_' + this.currentEnvironment,
      cookiePreferences,
      { domain: this.domain || window.location.hostname, expires: 365 }
    );

    if (this.preferencesSaved) {
      this.preferencesSaved(cookiePreferences);
    }
  }

  checkCookie() {
    let hideWindow = false;
    if (Cookies.get('cookiepreferences_' + this.currentEnvironment)) {
      let cookiePreferences = JSON.parse(Cookies.get('cookiepreferences_' + this.currentEnvironment));
      let checkedCategories = [...this.checkedCategories];
      cookiePreferences.forEach(function (cookiePref) {
        let index = checkedCategories.findIndex((obj => obj.name === cookiePref.category));
        if(checkedCategories[index]){
          hideWindow = true;
          checkedCategories[index].enabled = cookiePref.accepted;
        }
      });
      this.checkedCategories = checkedCategories;
    }
    this.hidden = hideWindow;
  }

  checkCookiePolicy() {
    var cookiePolicy = !!this.configData.cookiePolicy
      ? (<p><a href={this.configData.cookiePolicy}>{this.translationData.textCookiePolicy}</a></p>)
      : null;
    return cookiePolicy;
  }

  openCookiePreferences() {
    this.hidden = false;
    this.showPreferences = true;
  }

  handleAcceptAll(e) {
    e.preventDefault()
    this.setCookie('all');
    this.hidden = true;
    this.openPreferences = false;
  }

  handleAcceptOnlyNecessary(e) {
    e.preventDefault();
    this.checkedCategories.forEach(function (category) {
      category.enabled = !category.showSwitch;
    });
    this.setCookie();
    this.hidden = true;
    this.openPreferences = false;
  }

  handleShowPreferences() {
    this.showPreferences = !this.showPreferences;
    setTimeout(() => this.modalRef.focus());
  }

  handleHidePreferences() {
    this.showPreferences = false;

    if (this.openedManually) {
      this.hidden = true;
      this.openedManually = false;
      this.openPreferences = false;
    }
  }

  savePreferences() {
    this.setCookie();
    this.hidden = true;
    this.openPreferences = false;
  }

  hideModal() {
    this.hidden = true;
  }

  showCategories = () => {
    return this.checkedCategories.map((category, key) =>
      <aui-cookie-category
        data={category}
        translations={this.translationData}
        index={key}
      ></aui-cookie-category>
    )
  }

  checkCookieConfig = () => {
    return this.checkedCategories.length === 0
      ? <div role="alertdialog" class="m-alert m-alert--danger m-alert--inline u-margin-bottom"><p>No cookie consent configuration found.</p></div>
      : null;
  }

  showCookieConsentDashboard = () => {
    return (
      <div>
        <div class="m-modal__body">
          {this.checkCookieConfig()}
          <h1 class="h3 u-margin-bottom">{this.configData.title}</h1>
          <p class="u-margin-bottom" innerHTML={this.configData.intro}></p>
        </div>
        <div class="m-modal__footer">
          <button class="a-button" onClick={(e) => this.handleAcceptAll(e)}>{this.translationData.buttonAccept}</button>
          <button class="a-button" onClick={(e) => this.handleAcceptOnlyNecessary(e)}>{this.translationData.buttonReject}</button>
          <button class="a-button a-button--transparent" onClick={() => this.handleShowPreferences()}>{this.translationData.buttonSetup}</button>
        </div>
      </div>
    )
  }

  showCookieConsentPreferences = () => {
    return (
      <div>
        <div class="m-modal__body">
          {this.checkCookieConfig()}
          <div class="m-modal__top-buttons">
            <p>
              <a role="button" href="#" class="has-icon-left" onClick={() => this.handleShowPreferences()}>
                <aui-icon name="ai-arrow-left-1" />
                {this.translationData.buttonBack}
              </a>
            </p>
            {this.checkCookiePolicy()}
          </div>
          <h1 class="h3 u-margin-top u-margin-bottom">{this.translationData.textCookieTypes}</h1>
          {this.showCategories()}
        </div>
        <div class="m-modal__footer u-margin-top">
          <button class="a-button" onClick={() => this.savePreferences()}>{this.translationData.buttonSaveSettings}</button>
        </div>
      </div>
    )
  }

  render() {
    const overlayClass = classNames('m-overlay',{
      'm-cookie-consent': true,
      'is-active': !this.hidden,
    });

    if (this.configData.nonBlocking && !this.showPreferences && !this.hidden) {
      return (
        <Host class={this.branding}>
          <div class="m-cookie-consent m-cookie-consent--non-blocking">
            <div class="u-container m-cookie-consent__content u-margin-top u-margin-bottom">
              <div class="m-cookie-consent__text">
                <h1 class="h3 u-margin-bottom">{this.configData.title}</h1>
                <p innerHTML={this.configData.intro}></p>
              </div>
              <div class="m-cookie-consent__buttons">
                <button class="a-button" onClick={(e) => this.handleAcceptAll(e)}>{this.translationData.buttonAccept}</button>
                <button class="a-button" onClick={(e) => this.handleAcceptOnlyNecessary(e)}>{this.translationData.buttonReject}</button>
                <button class="a-button a-button--transparent" onClick={() => this.handleShowPreferences()}>{this.translationData.buttonSetup}</button>
              </div>
            </div>
          </div>
        </Host>
      );
    }

    return (
      <Host class={this.branding} tabindex="-1" role="dialog" aria-label="Cookies" aria-modal="true" ref={(el) => this.componentRef = el as HTMLElement}>
        <div class={overlayClass}>
          <div class='m-overlay__inner'>
            <div class="m-modal m-modal--l" tabindex={0} ref={(el) => this.modalRef = el as HTMLElement}>
              <div class="m-modal__content">
                { !this.showPreferences ? this.showCookieConsentDashboard() : this.showCookieConsentPreferences() }
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
