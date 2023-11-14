/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TranslationsInterface } from "./components/cookie-consent/cookie-consent.interface";
export { TranslationsInterface } from "./components/cookie-consent/cookie-consent.interface";
export namespace Components {
    interface AuiCookieCategory {
        "data": any[];
        "index": number;
        "translations": TranslationsInterface;
    }
    interface AuiCookieConsent {
        /**
          * Extra CSS class(es) to add
         */
        "branding": string;
        /**
          * Configuration of your cookie consent window
         */
        "config": string;
        /**
          * Set the domain where you want your cookiepreferences to be saved. eg. 'antwerpen.be'
         */
        "domain": string;
        /**
          * Set the current enovironment, this will impact the name of the cookie where the preferences will be saved. eg. 'acceptance'
         */
        "environment": string;
        /**
          * Single path or comma seperated list of paths on which the cookie consent will not open
         */
        "excludedpaths": string;
        /**
          * If set to true, the modal will show the cookie preferences and not the default screen with the title and description
         */
        "openPreferences": boolean;
        /**
          * Runs when new cookie preferences are saved
         */
        "preferencesSaved": Function;
        /**
          * Set the translation strings for the cookie consent
         */
        "translations": string;
    }
    interface AuiCookieContentBlocker {
        /**
          * Extra CSS class(es) to add
         */
        "branding": string;
        /**
          * A paragraph text to explain the content blocker title
         */
        "description": string;
        /**
          * The icon name (eg: ai-close)
         */
        "icon": string;
        /**
          * The content blocker title
         */
        "message": string;
        /**
          * Set the translation strings for the content blocker
         */
        "translations": string;
    }
    interface AuiCookieTable {
        "data": any[];
        "translations": TranslationsInterface;
    }
    interface AuiIcon {
        /**
          * The ARIA label
         */
        "ariaLabel"?: string;
        /**
          * Additional CSS class(es)
         */
        "branding"?: string;
        /**
          * The icon name (eg: ai-close)
         */
        "name": string;
    }
}
export interface AuiCookieCategoryCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAuiCookieCategoryElement;
}
declare global {
    interface HTMLAuiCookieCategoryElement extends Components.AuiCookieCategory, HTMLStencilElement {
    }
    var HTMLAuiCookieCategoryElement: {
        prototype: HTMLAuiCookieCategoryElement;
        new (): HTMLAuiCookieCategoryElement;
    };
    interface HTMLAuiCookieConsentElement extends Components.AuiCookieConsent, HTMLStencilElement {
    }
    var HTMLAuiCookieConsentElement: {
        prototype: HTMLAuiCookieConsentElement;
        new (): HTMLAuiCookieConsentElement;
    };
    interface HTMLAuiCookieContentBlockerElement extends Components.AuiCookieContentBlocker, HTMLStencilElement {
    }
    var HTMLAuiCookieContentBlockerElement: {
        prototype: HTMLAuiCookieContentBlockerElement;
        new (): HTMLAuiCookieContentBlockerElement;
    };
    interface HTMLAuiCookieTableElement extends Components.AuiCookieTable, HTMLStencilElement {
    }
    var HTMLAuiCookieTableElement: {
        prototype: HTMLAuiCookieTableElement;
        new (): HTMLAuiCookieTableElement;
    };
    interface HTMLAuiIconElement extends Components.AuiIcon, HTMLStencilElement {
    }
    var HTMLAuiIconElement: {
        prototype: HTMLAuiIconElement;
        new (): HTMLAuiIconElement;
    };
    interface HTMLElementTagNameMap {
        "aui-cookie-category": HTMLAuiCookieCategoryElement;
        "aui-cookie-consent": HTMLAuiCookieConsentElement;
        "aui-cookie-content-blocker": HTMLAuiCookieContentBlockerElement;
        "aui-cookie-table": HTMLAuiCookieTableElement;
        "aui-icon": HTMLAuiIconElement;
    }
}
declare namespace LocalJSX {
    interface AuiCookieCategory {
        "data"?: any[];
        "index"?: number;
        "onCheckCategory"?: (event: AuiCookieCategoryCustomEvent<number>) => void;
        "onOpenCloseCategory"?: (event: AuiCookieCategoryCustomEvent<number>) => void;
        "translations"?: TranslationsInterface;
    }
    interface AuiCookieConsent {
        /**
          * Extra CSS class(es) to add
         */
        "branding"?: string;
        /**
          * Configuration of your cookie consent window
         */
        "config"?: string;
        /**
          * Set the domain where you want your cookiepreferences to be saved. eg. 'antwerpen.be'
         */
        "domain"?: string;
        /**
          * Set the current enovironment, this will impact the name of the cookie where the preferences will be saved. eg. 'acceptance'
         */
        "environment"?: string;
        /**
          * Single path or comma seperated list of paths on which the cookie consent will not open
         */
        "excludedpaths"?: string;
        /**
          * If set to true, the modal will show the cookie preferences and not the default screen with the title and description
         */
        "openPreferences"?: boolean;
        /**
          * Runs when new cookie preferences are saved
         */
        "preferencesSaved"?: Function;
        /**
          * Set the translation strings for the cookie consent
         */
        "translations"?: string;
    }
    interface AuiCookieContentBlocker {
        /**
          * Extra CSS class(es) to add
         */
        "branding"?: string;
        /**
          * A paragraph text to explain the content blocker title
         */
        "description"?: string;
        /**
          * The icon name (eg: ai-close)
         */
        "icon"?: string;
        /**
          * The content blocker title
         */
        "message"?: string;
        /**
          * Set the translation strings for the content blocker
         */
        "translations"?: string;
    }
    interface AuiCookieTable {
        "data"?: any[];
        "translations"?: TranslationsInterface;
    }
    interface AuiIcon {
        /**
          * The ARIA label
         */
        "ariaLabel"?: string;
        /**
          * Additional CSS class(es)
         */
        "branding"?: string;
        /**
          * The icon name (eg: ai-close)
         */
        "name"?: string;
    }
    interface IntrinsicElements {
        "aui-cookie-category": AuiCookieCategory;
        "aui-cookie-consent": AuiCookieConsent;
        "aui-cookie-content-blocker": AuiCookieContentBlocker;
        "aui-cookie-table": AuiCookieTable;
        "aui-icon": AuiIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "aui-cookie-category": LocalJSX.AuiCookieCategory & JSXBase.HTMLAttributes<HTMLAuiCookieCategoryElement>;
            "aui-cookie-consent": LocalJSX.AuiCookieConsent & JSXBase.HTMLAttributes<HTMLAuiCookieConsentElement>;
            "aui-cookie-content-blocker": LocalJSX.AuiCookieContentBlocker & JSXBase.HTMLAttributes<HTMLAuiCookieContentBlockerElement>;
            "aui-cookie-table": LocalJSX.AuiCookieTable & JSXBase.HTMLAttributes<HTMLAuiCookieTableElement>;
            "aui-icon": LocalJSX.AuiIcon & JSXBase.HTMLAttributes<HTMLAuiIconElement>;
        }
    }
}
