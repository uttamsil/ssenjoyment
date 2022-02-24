/*! elementor-pro - v3.5.2 - 28-11-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["elements-handlers"],{

/***/ "../assets/dev/js/frontend/elements-handlers.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/elements-handlers.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _frontend = _interopRequireDefault(__webpack_require__(/*! modules/animated-headline/assets/js/frontend/frontend */ "../modules/animated-headline/assets/js/frontend/frontend.js"));

var _frontend2 = _interopRequireDefault(__webpack_require__(/*! modules/carousel/assets/js/frontend/frontend */ "../modules/carousel/assets/js/frontend/frontend.js"));

var _frontend3 = _interopRequireDefault(__webpack_require__(/*! modules/countdown/assets/js/frontend/frontend */ "../modules/countdown/assets/js/frontend/frontend.js"));

var _frontend4 = _interopRequireDefault(__webpack_require__(/*! modules/hotspot/assets/js/frontend/frontend */ "../modules/hotspot/assets/js/frontend/frontend.js"));

var _frontend5 = _interopRequireDefault(__webpack_require__(/*! modules/forms/assets/js/frontend/frontend */ "../modules/forms/assets/js/frontend/frontend.js"));

var _frontend6 = _interopRequireDefault(__webpack_require__(/*! modules/gallery/assets/js/frontend/frontend */ "../modules/gallery/assets/js/frontend/frontend.js"));

var _frontend7 = _interopRequireDefault(__webpack_require__(/*! modules/lottie/assets/js/frontend/frontend */ "../modules/lottie/assets/js/frontend/frontend.js"));

var _frontend8 = _interopRequireDefault(__webpack_require__(/*! modules/nav-menu/assets/js/frontend/frontend */ "../modules/nav-menu/assets/js/frontend/frontend.js"));

var _frontend9 = _interopRequireDefault(__webpack_require__(/*! modules/popup/assets/js/frontend/frontend */ "../modules/popup/assets/js/frontend/frontend.js"));

var _frontend10 = _interopRequireDefault(__webpack_require__(/*! modules/posts/assets/js/frontend/frontend */ "../modules/posts/assets/js/frontend/frontend.js"));

var _frontend11 = _interopRequireDefault(__webpack_require__(/*! modules/share-buttons/assets/js/frontend/frontend */ "../modules/share-buttons/assets/js/frontend/frontend.js"));

var _frontend12 = _interopRequireDefault(__webpack_require__(/*! modules/slides/assets/js/frontend/frontend */ "../modules/slides/assets/js/frontend/frontend.js"));

var _frontend13 = _interopRequireDefault(__webpack_require__(/*! modules/social/assets/js/frontend/frontend */ "../modules/social/assets/js/frontend/frontend.js"));

var _frontend14 = _interopRequireDefault(__webpack_require__(/*! modules/table-of-contents/assets/js/frontend/frontend */ "../modules/table-of-contents/assets/js/frontend/frontend.js"));

var _frontend15 = _interopRequireDefault(__webpack_require__(/*! modules/theme-builder/assets/js/frontend/frontend */ "../modules/theme-builder/assets/js/frontend/frontend.js"));

var _frontend16 = _interopRequireDefault(__webpack_require__(/*! modules/theme-elements/assets/js/frontend/frontend */ "../modules/theme-elements/assets/js/frontend/frontend.js"));

var _frontend17 = _interopRequireDefault(__webpack_require__(/*! modules/woocommerce/assets/js/frontend/frontend */ "../modules/woocommerce/assets/js/frontend/frontend.js"));

const extendDefaultHandlers = defaultHandlers => {
  const handlers = {
    animatedText: _frontend.default,
    carousel: _frontend2.default,
    countdown: _frontend3.default,
    hotspot: _frontend4.default,
    form: _frontend5.default,
    gallery: _frontend6.default,
    lottie: _frontend7.default,
    nav_menu: _frontend8.default,
    popup: _frontend9.default,
    posts: _frontend10.default,
    share_buttons: _frontend11.default,
    slides: _frontend12.default,
    social: _frontend13.default,
    themeBuilder: _frontend15.default,
    themeElements: _frontend16.default,
    woocommerce: _frontend17.default,
    tableOfContents: _frontend14.default
  };
  return { ...defaultHandlers,
    ...handlers
  };
};

elementorProFrontend.on('elementor-pro/modules/init:before', () => {
  elementorFrontend.hooks.addFilter('elementor-pro/frontend/handlers', extendDefaultHandlers);
});

/***/ }),

/***/ "../assets/dev/js/frontend/utils/icons/e-icons.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/frontend/utils/icons/e-icons.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.close = void 0;

var _manager = _interopRequireDefault(__webpack_require__(/*! ./manager */ "../assets/dev/js/frontend/utils/icons/manager.js"));

// This file is automatically generated, please don't change anything in this file.
const iconsManager = new _manager.default('eicon');
const close = {
  get element() {
    const svgData = {
      path: 'M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z',
      width: 1000,
      height: 1000
    };
    return iconsManager.createSvgElement('close', svgData);
  }

};
exports.close = close;

/***/ }),

/***/ "../assets/dev/js/frontend/utils/icons/manager.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/frontend/utils/icons/manager.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

class IconsManager {
  constructor(elementsPrefix) {
    this.prefix = `${elementsPrefix}-`;

    if (!IconsManager.symbolsContainer) {
      const symbolsContainerId = 'e-font-icon-svg-symbols';
      IconsManager.symbolsContainer = document.getElementById(symbolsContainerId);

      if (!IconsManager.symbolsContainer) {
        IconsManager.symbolsContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        IconsManager.symbolsContainer.setAttributeNS(null, 'style', 'display: none;');
        IconsManager.symbolsContainer.setAttributeNS(null, 'class', symbolsContainerId);
        document.body.appendChild(IconsManager.symbolsContainer);
      }
    }
  }

  createSvgElement(name, {
    path,
    width,
    height
  }) {
    const elementName = this.prefix + name,
          elementSelector = '#' + this.prefix + name; // Create symbol if not exist yet.

    if (!IconsManager.iconsUsageList.includes(elementName)) {
      if (!IconsManager.symbolsContainer.querySelector(elementSelector)) {
        const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
        symbol.id = elementName;
        symbol.innerHTML = '<path d="' + path + '"></path>';
        symbol.setAttributeNS(null, 'viewBox', '0 0 ' + width + ' ' + height);
        IconsManager.symbolsContainer.appendChild(symbol);
      }

      IconsManager.iconsUsageList.push(elementName);
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = '<use xlink:href="' + elementSelector + '" />';
    svg.setAttributeNS(null, 'class', 'e-font-icon-svg e-' + elementName);
    return svg;
  }

}

exports.default = IconsManager;
(0, _defineProperty2.default)(IconsManager, "symbolsContainer", void 0);
(0, _defineProperty2.default)(IconsManager, "iconsUsageList", []);

/***/ }),

/***/ "../modules/animated-headline/assets/js/frontend/frontend.js":
/*!*******************************************************************!*\
  !*** ../modules/animated-headline/assets/js/frontend/frontend.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('animated-headline', () => __webpack_require__.e(/*! import() | animated-headline */ "animated-headline").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/animated-headlines */ "../modules/animated-headline/assets/js/frontend/handlers/animated-headlines.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/carousel/assets/js/frontend/frontend.js":
/*!**********************************************************!*\
  !*** ../modules/carousel/assets/js/frontend/frontend.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('media-carousel', () => __webpack_require__.e(/*! import() | media-carousel */ "media-carousel").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/media-carousel */ "../modules/carousel/assets/js/frontend/handlers/media-carousel.js")));
    elementorFrontend.elementsHandler.attachHandler('testimonial-carousel', () => __webpack_require__.e(/*! import() | carousel */ "carousel").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/testimonial-carousel */ "../modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js")));
    elementorFrontend.elementsHandler.attachHandler('reviews', () => __webpack_require__.e(/*! import() | carousel */ "carousel").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/testimonial-carousel */ "../modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/countdown/assets/js/frontend/frontend.js":
/*!***********************************************************!*\
  !*** ../modules/countdown/assets/js/frontend/frontend.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('countdown', () => __webpack_require__.e(/*! import() | countdown */ "countdown").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/countdown */ "../modules/countdown/assets/js/frontend/handlers/countdown.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/frontend.js":
/*!*******************************************************!*\
  !*** ../modules/forms/assets/js/frontend/frontend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('form', [() => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-steps */ "../modules/forms/assets/js/frontend/handlers/form-steps.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-sender */ "../modules/forms/assets/js/frontend/handlers/form-sender.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-redirect */ "../modules/forms/assets/js/frontend/handlers/form-redirect.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/fields/date */ "../modules/forms/assets/js/frontend/handlers/fields/date.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/recaptcha */ "../modules/forms/assets/js/frontend/handlers/recaptcha.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/fields/time */ "../modules/forms/assets/js/frontend/handlers/fields/time.js"))]);
    elementorFrontend.elementsHandler.attachHandler('subscribe', [() => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-steps */ "../modules/forms/assets/js/frontend/handlers/form-steps.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-sender */ "../modules/forms/assets/js/frontend/handlers/form-sender.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-redirect */ "../modules/forms/assets/js/frontend/handlers/form-redirect.js"))]);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/gallery/assets/js/frontend/frontend.js":
/*!*********************************************************!*\
  !*** ../modules/gallery/assets/js/frontend/frontend.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('gallery', () => __webpack_require__.e(/*! import() | gallery */ "gallery").then(__webpack_require__.bind(__webpack_require__, /*! ./handler */ "../modules/gallery/assets/js/frontend/handler.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/hotspot/assets/js/frontend/frontend.js":
/*!*********************************************************!*\
  !*** ../modules/hotspot/assets/js/frontend/frontend.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('hotspot', () => __webpack_require__.e(/*! import() | hotspot */ "hotspot").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/hotspot */ "../modules/hotspot/assets/js/frontend/handlers/hotspot.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/lottie/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/lottie/assets/js/frontend/frontend.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('lottie', () => __webpack_require__.e(/*! import() | lottie */ "lottie").then(__webpack_require__.bind(__webpack_require__, /*! ./handler */ "../modules/lottie/assets/js/frontend/handler.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/nav-menu/assets/js/frontend/frontend.js":
/*!**********************************************************!*\
  !*** ../modules/nav-menu/assets/js/frontend/frontend.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();

    if (jQuery.fn.smartmenus) {
      // Override the default stupid detection
      jQuery.SmartMenus.prototype.isCSSOn = function () {
        return true;
      };

      if (elementorFrontend.config.is_rtl) {
        jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = true;
      }
    }

    elementorFrontend.elementsHandler.attachHandler('nav-menu', () => __webpack_require__.e(/*! import() | nav-menu */ "nav-menu").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/nav-menu */ "../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/document.js":
/*!*******************************************************!*\
  !*** ../modules/popup/assets/js/frontend/document.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _triggers = _interopRequireDefault(__webpack_require__(/*! ./triggers */ "../modules/popup/assets/js/frontend/triggers.js"));

var _timing = _interopRequireDefault(__webpack_require__(/*! ./timing */ "../modules/popup/assets/js/frontend/timing.js"));

var _eIcons = __webpack_require__(/*! @elementor-pro/e-icons */ "../assets/dev/js/frontend/utils/icons/e-icons.js");

// Temporary solution, when core 3.5.0 will be the minimum version, is should be replaced with @elementor/e-icons.
class _default extends elementorModules.frontend.Document {
  bindEvents() {
    const openSelector = this.getDocumentSettings('open_selector');

    if (openSelector) {
      elementorFrontend.elements.$body.on('click', openSelector, this.showModal.bind(this));
    }
  }

  startTiming() {
    const timing = new _timing.default(this.getDocumentSettings('timing'), this);

    if (timing.check()) {
      this.initTriggers();
    }
  }

  initTriggers() {
    this.triggers = new _triggers.default(this.getDocumentSettings('triggers'), this);
  }

  showModal(avoidMultiple) {
    const settings = this.getDocumentSettings();

    if (!this.isEdit) {
      if (!elementorFrontend.isWPPreviewMode()) {
        if (this.getStorage('disable')) {
          return;
        }

        if (avoidMultiple && elementorProFrontend.modules.popup.popupPopped && settings.avoid_multiple_popups) {
          return;
        }
      } // A clean copy of the element without previous initializations and events


      this.$element = jQuery(this.elementHTML);
      this.elements.$elements = this.$element.find(this.getSettings('selectors.elements'));
    }

    const modal = this.getModal(),
          $closeButton = modal.getElements('closeButton');
    modal.setMessage(this.$element).show();

    if (!this.isEdit) {
      if (settings.close_button_delay) {
        $closeButton.hide();
        clearTimeout(this.closeButtonTimeout);
        this.closeButtonTimeout = setTimeout(() => $closeButton.show(), settings.close_button_delay * 1000);
      }

      super.runElementsHandlers();
    }

    this.setEntranceAnimation();

    if (!settings.timing || !settings.timing.times_count) {
      this.countTimes();
    }

    elementorProFrontend.modules.popup.popupPopped = true;
  }

  setEntranceAnimation() {
    const $widgetContent = this.getModal().getElements('widgetContent'),
          settings = this.getDocumentSettings(),
          newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'entrance_animation');

    if (this.currentAnimation) {
      $widgetContent.removeClass(this.currentAnimation);
    }

    this.currentAnimation = newAnimation;

    if (!newAnimation) {
      return;
    }

    const animationDuration = settings.entrance_animation_duration.size;
    $widgetContent.addClass(newAnimation);
    setTimeout(() => $widgetContent.removeClass(newAnimation), animationDuration * 1000);
  }

  setExitAnimation() {
    const modal = this.getModal(),
          settings = this.getDocumentSettings(),
          $widgetContent = modal.getElements('widgetContent'),
          newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'exit_animation'),
          animationDuration = newAnimation ? settings.entrance_animation_duration.size : 0;
    setTimeout(() => {
      if (newAnimation) {
        $widgetContent.removeClass(newAnimation + ' reverse');
      }

      if (!this.isEdit) {
        this.$element.remove();
        modal.getElements('widget').hide();
      }
    }, animationDuration * 1000);

    if (newAnimation) {
      $widgetContent.addClass(newAnimation + ' reverse');
    }
  }

  initModal() {
    let modal;

    this.getModal = () => {
      if (!modal) {
        const settings = this.getDocumentSettings(),
              id = this.getSettings('id'),
              triggerPopupEvent = eventType => elementorFrontend.elements.$document.trigger('elementor/popup/' + eventType, [id, this]);

        let classes = 'elementor-popup-modal';

        if (settings.classes) {
          classes += ' ' + settings.classes;
        }

        const modalProperties = {
          id: 'elementor-popup-modal-' + id,
          className: classes,
          closeButton: true,
          preventScroll: settings.prevent_scroll,
          onShow: () => triggerPopupEvent('show'),
          onHide: () => triggerPopupEvent('hide'),
          effects: {
            hide: () => {
              if (settings.timing && settings.timing.times_count) {
                this.countTimes();
              }

              this.setExitAnimation();
            },
            show: 'show'
          },
          hide: {
            auto: !!settings.close_automatically,
            autoDelay: settings.close_automatically * 1000,
            onBackgroundClick: !settings.prevent_close_on_background_click,
            onOutsideClick: !settings.prevent_close_on_background_click,
            onEscKeyPress: !settings.prevent_close_on_esc_key,
            ignore: '.flatpickr-calendar'
          },
          position: {
            enable: false
          }
        };

        if (elementorFrontend.config.experimentalFeatures.e_font_icon_svg) {
          modalProperties.closeButtonOptions = {
            iconElement: _eIcons.close.element
          };
        } // This line should be moved to the condition above, as an 'else' case, once the core minimum version is 3.5.0.


        modalProperties.closeButtonClass = 'eicon-close';
        modal = elementorFrontend.getDialogsManager().createWidget('lightbox', modalProperties);
        modal.getElements('widgetContent').addClass('animated');
        const $closeButton = modal.getElements('closeButton');

        if (this.isEdit) {
          $closeButton.off('click');

          modal.hide = () => {};
        }

        this.setCloseButtonPosition();
      }

      return modal;
    };
  }

  setCloseButtonPosition() {
    const modal = this.getModal(),
          closeButtonPosition = this.getDocumentSettings('close_button_position'),
          $closeButton = modal.getElements('closeButton');
    $closeButton.appendTo(modal.getElements('outside' === closeButtonPosition ? 'widget' : 'widgetContent'));
  }

  disable() {
    this.setStorage('disable', true);
  }

  setStorage(key, value, options) {
    elementorFrontend.storage.set(`popup_${this.getSettings('id')}_${key}`, value, options);
  }

  getStorage(key, options) {
    return elementorFrontend.storage.get(`popup_${this.getSettings('id')}_${key}`, options);
  }

  countTimes() {
    const displayTimes = this.getStorage('times') || 0;
    this.setStorage('times', displayTimes + 1);
  }

  runElementsHandlers() {}

  async onInit() {
    super.onInit(); // In case that the library was not loaded, it indicates a Core version that enables dynamic loading.

    if (!window.DialogsManager) {
      await elementorFrontend.utils.assetsLoader.load('script', 'dialog');
    }

    this.initModal();

    if (this.isEdit) {
      this.showModal();
      return;
    }

    this.$element.show().remove();
    this.elementHTML = this.$element[0].outerHTML;

    if (elementorFrontend.isEditMode()) {
      return;
    }

    if (elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === this.getSettings('id')) {
      this.showModal();
      return;
    }

    this.startTiming();
  }

  onSettingsChange(model) {
    const changedKey = Object.keys(model.changed)[0];

    if (-1 !== changedKey.indexOf('entrance_animation')) {
      this.setEntranceAnimation();
    }

    if ('exit_animation' === changedKey) {
      this.setExitAnimation();
    }

    if ('close_button_position' === changedKey) {
      this.setCloseButtonPosition();
    }
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/frontend.js":
/*!*******************************************************!*\
  !*** ../modules/popup/assets/js/frontend/frontend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _document = _interopRequireDefault(__webpack_require__(/*! ./document */ "../modules/popup/assets/js/frontend/document.js"));

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.hooks.addAction('elementor/frontend/documents-manager/init-classes', this.addDocumentClass);
    elementorFrontend.elementsHandler.attachHandler('form', () => __webpack_require__.e(/*! import() | popup */ "popup").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/forms-action */ "../modules/popup/assets/js/frontend/handlers/forms-action.js")));
    elementorFrontend.on('components:init', () => this.onFrontendComponentsInit());

    if (!elementorFrontend.isEditMode() && !elementorFrontend.isWPPreviewMode()) {
      this.setViewsAndSessions();
    }
  }

  addDocumentClass(documentsManager) {
    documentsManager.addDocumentClass('popup', _document.default);
  }

  setViewsAndSessions() {
    const pageViews = elementorFrontend.storage.get('pageViews') || 0;
    elementorFrontend.storage.set('pageViews', pageViews + 1);
    const activeSession = elementorFrontend.storage.get('activeSession', {
      session: true
    });

    if (!activeSession) {
      elementorFrontend.storage.set('activeSession', true, {
        session: true
      });
      const sessions = elementorFrontend.storage.get('sessions') || 0;
      elementorFrontend.storage.set('sessions', sessions + 1);
    }
  }

  showPopup(settings) {
    const popup = elementorFrontend.documentsManager.documents[settings.id];

    if (!popup) {
      return;
    }

    const modal = popup.getModal();

    if (settings.toggle && modal.isVisible()) {
      modal.hide();
    } else {
      popup.showModal();
    }
  }

  closePopup(settings, event) {
    const popupID = jQuery(event.target).parents('[data-elementor-type="popup"]').data('elementorId');

    if (!popupID) {
      return;
    }

    const document = elementorFrontend.documentsManager.documents[popupID];
    document.getModal().hide();

    if (settings.do_not_show_again) {
      document.disable();
    }
  }

  onFrontendComponentsInit() {
    elementorFrontend.utils.urlActions.addAction('popup:open', settings => this.showPopup(settings));
    elementorFrontend.utils.urlActions.addAction('popup:close', (settings, event) => this.closePopup(settings, event));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing.js":
/*!*****************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _pageViews = _interopRequireDefault(__webpack_require__(/*! ./timing/page-views */ "../modules/popup/assets/js/frontend/timing/page-views.js"));

var _sessions = _interopRequireDefault(__webpack_require__(/*! ./timing/sessions */ "../modules/popup/assets/js/frontend/timing/sessions.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./timing/url */ "../modules/popup/assets/js/frontend/timing/url.js"));

var _sources = _interopRequireDefault(__webpack_require__(/*! ./timing/sources */ "../modules/popup/assets/js/frontend/timing/sources.js"));

var _loggedIn = _interopRequireDefault(__webpack_require__(/*! ./timing/logged-in */ "../modules/popup/assets/js/frontend/timing/logged-in.js"));

var _devices = _interopRequireDefault(__webpack_require__(/*! ./timing/devices */ "../modules/popup/assets/js/frontend/timing/devices.js"));

var _times = _interopRequireDefault(__webpack_require__(/*! ./timing/times */ "../modules/popup/assets/js/frontend/timing/times.js"));

var _browsers = _interopRequireDefault(__webpack_require__(/*! ./timing/browsers */ "../modules/popup/assets/js/frontend/timing/browsers.js"));

class _default extends elementorModules.Module {
  constructor(settings, document) {
    super(settings);
    this.document = document;
    this.timingClasses = {
      page_views: _pageViews.default,
      sessions: _sessions.default,
      url: _url.default,
      sources: _sources.default,
      logged_in: _loggedIn.default,
      devices: _devices.default,
      times: _times.default,
      browsers: _browsers.default
    };
  }

  check() {
    const settings = this.getSettings();
    let checkPassed = true;
    jQuery.each(this.timingClasses, (key, TimingClass) => {
      if (!settings[key]) {
        return;
      }

      const timing = new TimingClass(settings, this.document);

      if (!timing.check()) {
        checkPassed = false;
      }
    });
    return checkPassed;
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/base.js":
/*!**********************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/base.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor(settings, document) {
    super(settings);
    this.document = document;
  }

  getTimingSetting(settingKey) {
    return this.getSettings(this.getName() + '_' + settingKey);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/browsers.js":
/*!**************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/browsers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

class _default extends _base.default {
  getName() {
    return 'browsers';
  }

  check() {
    if ('all' === this.getTimingSetting('browsers')) {
      return true;
    }

    const targetedBrowsers = this.getTimingSetting('browsers_options'),
          browserDetectionFlags = elementorFrontend.utils.environment;
    return targetedBrowsers.some(browserName => browserDetectionFlags[browserName]);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/devices.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/devices.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

class _default extends _base.default {
  getName() {
    return 'devices';
  }

  check() {
    return -1 !== this.getTimingSetting('devices').indexOf(elementorFrontend.getCurrentDeviceMode());
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/logged-in.js":
/*!***************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/logged-in.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

class _default extends _base.default {
  getName() {
    return 'logged_in';
  }

  check() {
    const userConfig = elementorFrontend.config.user;

    if (!userConfig) {
      return true;
    }

    if ('all' === this.getTimingSetting('users')) {
      return false;
    }

    const userRolesInHideList = this.getTimingSetting('roles').filter(role => -1 !== userConfig.roles.indexOf(role));
    return !userRolesInHideList.length;
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/page-views.js":
/*!****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/page-views.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

class _default extends _base.default {
  getName() {
    return 'page_views';
  }

  check() {
    const pageViews = elementorFrontend.storage.get('pageViews'),
          name = this.getName();
    let initialPageViews = this.document.getStorage(name + '_initialPageViews');

    if (!initialPageViews) {
      this.document.setStorage(name + '_initialPageViews', pageViews);
      initialPageViews = pageViews;
    }

    return pageViews - initialPageViews >= this.getTimingSetting('views');
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/sessions.js":
/*!**************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/sessions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

class _default extends _base.default {
  getName() {
    return 'sessions';
  }

  check() {
    const sessions = elementorFrontend.storage.get('sessions'),
          name = this.getName();
    let initialSessions = this.document.getStorage(name + '_initialSessions');

    if (!initialSessions) {
      this.document.setStorage(name + '_initialSessions', sessions);
      initialSessions = sessions;
    }

    return sessions - initialSessions >= this.getTimingSetting('sessions');
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/sources.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/sources.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

class _default extends _base.default {
  getName() {
    return 'sources';
  }

  check() {
    const sources = this.getTimingSetting('sources');

    if (3 === sources.length) {
      return true;
    }

    const referrer = document.referrer.replace(/https?:\/\/(?:www\.)?/, ''),
          isInternal = 0 === referrer.indexOf(location.host.replace('www.', ''));

    if (isInternal) {
      return -1 !== sources.indexOf('internal');
    }

    if (-1 !== sources.indexOf('external')) {
      return true;
    }

    if (-1 !== sources.indexOf('search')) {
      return /^(google|yahoo|bing|yandex|baidu)\./.test(referrer);
    }

    return false;
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/times.js":
/*!***********************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/times.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

class _default extends _base.default {
  getName() {
    return 'times';
  }

  check() {
    const displayTimes = this.document.getStorage('times') || 0;
    return this.getTimingSetting('times') > displayTimes;
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/url.js":
/*!*********************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/url.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

class _default extends _base.default {
  getName() {
    return 'url';
  }

  check() {
    const url = this.getTimingSetting('url'),
          action = this.getTimingSetting('action'),
          referrer = document.referrer;

    if ('regex' !== action) {
      return 'hide' === action ^ -1 !== referrer.indexOf(url);
    }

    let regexp;

    try {
      regexp = new RegExp(url);
    } catch (e) {
      return false;
    }

    return regexp.test(referrer);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers.js":
/*!*******************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _pageLoad = _interopRequireDefault(__webpack_require__(/*! ./triggers/page-load */ "../modules/popup/assets/js/frontend/triggers/page-load.js"));

var _scrolling = _interopRequireDefault(__webpack_require__(/*! ./triggers/scrolling */ "../modules/popup/assets/js/frontend/triggers/scrolling.js"));

var _scrollingTo = _interopRequireDefault(__webpack_require__(/*! ./triggers/scrolling-to */ "../modules/popup/assets/js/frontend/triggers/scrolling-to.js"));

var _click = _interopRequireDefault(__webpack_require__(/*! ./triggers/click */ "../modules/popup/assets/js/frontend/triggers/click.js"));

var _inactivity = _interopRequireDefault(__webpack_require__(/*! ./triggers/inactivity */ "../modules/popup/assets/js/frontend/triggers/inactivity.js"));

var _exitIntent = _interopRequireDefault(__webpack_require__(/*! ./triggers/exit-intent */ "../modules/popup/assets/js/frontend/triggers/exit-intent.js"));

class _default extends elementorModules.Module {
  constructor(settings, document) {
    super(settings);
    this.document = document;
    this.triggers = [];
    this.triggerClasses = {
      page_load: _pageLoad.default,
      scrolling: _scrolling.default,
      scrolling_to: _scrollingTo.default,
      click: _click.default,
      inactivity: _inactivity.default,
      exit_intent: _exitIntent.default
    };
    this.runTriggers();
  }

  runTriggers() {
    const settings = this.getSettings();
    jQuery.each(this.triggerClasses, (key, TriggerClass) => {
      if (!settings[key]) {
        return;
      }

      const trigger = new TriggerClass(settings, () => this.onTriggerFired());
      trigger.run();
      this.triggers.push(trigger);
    });
  }

  destroyTriggers() {
    this.triggers.forEach(trigger => trigger.destroy());
    this.triggers = [];
  }

  onTriggerFired() {
    this.document.showModal(true);
    this.destroyTriggers();
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/base.js":
/*!************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/base.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor(settings, callback) {
    super(settings);
    this.callback = callback;
  }

  getTriggerSetting(settingKey) {
    return this.getSettings(this.getName() + '_' + settingKey);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/click.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/click.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

class _default extends _base.default {
  constructor(...args) {
    super(...args);
    this.checkClick = this.checkClick.bind(this);
    this.clicksCount = 0;
  }

  getName() {
    return 'click';
  }

  checkClick() {
    this.clicksCount++;

    if (this.clicksCount === this.getTriggerSetting('times')) {
      this.callback();
    }
  }

  run() {
    elementorFrontend.elements.$body.on('click', this.checkClick);
  }

  destroy() {
    elementorFrontend.elements.$body.off('click', this.checkClick);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/exit-intent.js":
/*!*******************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/exit-intent.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

class _default extends _base.default {
  constructor(...args) {
    super(...args);
    this.detectExitIntent = this.detectExitIntent.bind(this);
  }

  getName() {
    return 'exit_intent';
  }

  detectExitIntent(event) {
    if (event.clientY <= 0) {
      this.callback();
    }
  }

  run() {
    elementorFrontend.elements.$window.on('mouseleave', this.detectExitIntent);
  }

  destroy() {
    elementorFrontend.elements.$window.off('mouseleave', this.detectExitIntent);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/inactivity.js":
/*!******************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/inactivity.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

class _default extends _base.default {
  constructor(...args) {
    super(...args);
    this.restartTimer = this.restartTimer.bind(this);
  }

  getName() {
    return 'inactivity';
  }

  run() {
    this.startTimer();
    elementorFrontend.elements.$document.on('keypress mousemove', this.restartTimer);
  }

  startTimer() {
    this.timeOut = setTimeout(this.callback, this.getTriggerSetting('time') * 1000);
  }

  clearTimer() {
    clearTimeout(this.timeOut);
  }

  restartTimer() {
    this.clearTimer();
    this.startTimer();
  }

  destroy() {
    this.clearTimer();
    elementorFrontend.elements.$document.off('keypress mousemove', this.restartTimer);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/page-load.js":
/*!*****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/page-load.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

class _default extends _base.default {
  getName() {
    return 'page_load';
  }

  run() {
    this.timeout = setTimeout(this.callback, this.getTriggerSetting('delay') * 1000);
  }

  destroy() {
    clearTimeout(this.timeout);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/scrolling-to.js":
/*!********************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/scrolling-to.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

class _default extends _base.default {
  getName() {
    return 'scrolling_to';
  }

  run() {
    let $targetElement;

    try {
      $targetElement = jQuery(this.getTriggerSetting('selector'));
    } catch (e) {
      return;
    }

    this.waypointInstance = elementorFrontend.waypoint($targetElement, this.callback)[0];
  }

  destroy() {
    if (this.waypointInstance) {
      this.waypointInstance.destroy();
    }
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/scrolling.js":
/*!*****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/scrolling.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

class _default extends _base.default {
  constructor(...args) {
    super(...args);
    this.checkScroll = this.checkScroll.bind(this);
    this.lastScrollOffset = 0;
  }

  getName() {
    return 'scrolling';
  }

  checkScroll() {
    const scrollDirection = scrollY > this.lastScrollOffset ? 'down' : 'up',
          requestedDirection = this.getTriggerSetting('direction');
    this.lastScrollOffset = scrollY;

    if (scrollDirection !== requestedDirection) {
      return;
    }

    if ('up' === scrollDirection) {
      this.callback();
      return;
    }

    const fullScroll = elementorFrontend.elements.$document.height() - innerHeight,
          scrollPercent = scrollY / fullScroll * 100;

    if (scrollPercent >= this.getTriggerSetting('offset')) {
      this.callback();
    }
  }

  run() {
    elementorFrontend.elements.$window.on('scroll', this.checkScroll);
  }

  destroy() {
    elementorFrontend.elements.$window.off('scroll', this.checkScroll);
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/posts/assets/js/frontend/frontend.js":
/*!*******************************************************!*\
  !*** ../modules/posts/assets/js/frontend/frontend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    ['classic', 'full_content', 'cards'].forEach(skinName => {
      elementorFrontend.elementsHandler.attachHandler('posts', () => __webpack_require__.e(/*! import() | load-more */ "load-more").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/load-more */ "../modules/posts/assets/js/frontend/handlers/load-more.js")), skinName);
    });
    elementorFrontend.elementsHandler.attachHandler('posts', () => __webpack_require__.e(/*! import() | posts */ "posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js")), 'classic');
    elementorFrontend.elementsHandler.attachHandler('posts', () => __webpack_require__.e(/*! import() | posts */ "posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js")), 'full_content');
    elementorFrontend.elementsHandler.attachHandler('posts', () => __webpack_require__.e(/*! import() | posts */ "posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/cards */ "../modules/posts/assets/js/frontend/handlers/cards.js")), 'cards');
    elementorFrontend.elementsHandler.attachHandler('portfolio', () => __webpack_require__.e(/*! import() | portfolio */ "portfolio").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/portfolio */ "../modules/posts/assets/js/frontend/handlers/portfolio.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/share-buttons/assets/js/frontend/frontend.js":
/*!***************************************************************!*\
  !*** ../modules/share-buttons/assets/js/frontend/frontend.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('share-buttons', () => __webpack_require__.e(/*! import() | share-buttons */ "share-buttons").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/share-buttons */ "../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/slides/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/slides/assets/js/frontend/frontend.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('slides', () => __webpack_require__.e(/*! import() | slides */ "slides").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/slides */ "../modules/slides/assets/js/frontend/handlers/slides.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/social/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/social/assets/js/frontend/frontend.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('facebook-button', () => __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js")));
    elementorFrontend.elementsHandler.attachHandler('facebook-comments', () => __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js")));
    elementorFrontend.elementsHandler.attachHandler('facebook-embed', () => __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js")));
    elementorFrontend.elementsHandler.attachHandler('facebook-page', () => __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/table-of-contents/assets/js/frontend/frontend.js":
/*!*******************************************************************!*\
  !*** ../modules/table-of-contents/assets/js/frontend/frontend.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('table-of-contents', () => __webpack_require__.e(/*! import() | table-of-contents */ "table-of-contents").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/table-of-contents */ "../modules/table-of-contents/assets/js/frontend/handlers/table-of-contents.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/frontend/frontend.js":
/*!***************************************************************!*\
  !*** ../modules/theme-builder/assets/js/frontend/frontend.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    ['archive_classic', 'archive_full_content', 'archive_cards'].forEach(skinName => {
      elementorFrontend.elementsHandler.attachHandler('archive-posts', () => __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/archive-posts-load-more */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-load-more.js")), skinName);
    });
    elementorFrontend.elementsHandler.attachHandler('archive-posts', () => __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/archive-posts-skin-classic */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js")), 'archive_classic');
    elementorFrontend.elementsHandler.attachHandler('archive-posts', () => __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/archive-posts-skin-classic */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js")), 'archive_full_content');
    elementorFrontend.elementsHandler.attachHandler('archive-posts', () => __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/archive-posts-skin-cards */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-cards.js")), 'archive_cards');
    jQuery(function () {
      // Go to elementor element - if the URL is something like http://domain.com/any-page?preview=true&theme_template_id=6479
      var match = location.search.match(/theme_template_id=(\d*)/),
          $element = match ? jQuery('.elementor-' + match[1]) : [];

      if ($element.length) {
        jQuery('html, body').animate({
          scrollTop: $element.offset().top - window.innerHeight / 2
        });
      }
    });
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/theme-elements/assets/js/frontend/frontend.js":
/*!****************************************************************!*\
  !*** ../modules/theme-elements/assets/js/frontend/frontend.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('search-form', () => __webpack_require__.e(/*! import() | search-form */ "search-form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/search-form */ "../modules/theme-elements/assets/js/frontend/handlers/search-form.js")));
  }

}

exports.default = _default;

/***/ }),

/***/ "../modules/woocommerce/assets/js/frontend/frontend.js":
/*!*************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/frontend.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('woocommerce-menu-cart', () => __webpack_require__.e(/*! import() | woocommerce-menu-cart */ "woocommerce-menu-cart").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/menu-cart */ "../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js")));
    elementorFrontend.elementsHandler.attachHandler('woocommerce-checkout-page', () => __webpack_require__.e(/*! import() | woocommerce-checkout-page */ "woocommerce-checkout-page").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/checkout-page */ "../modules/woocommerce/assets/js/frontend/handlers/checkout-page.js")));
    elementorFrontend.elementsHandler.attachHandler('woocommerce-cart', () => __webpack_require__.e(/*! import() | woocommerce-cart */ "woocommerce-cart").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/cart */ "../modules/woocommerce/assets/js/frontend/handlers/cart.js")));
    elementorFrontend.elementsHandler.attachHandler('woocommerce-my-account', () => __webpack_require__.e(/*! import() | woocommerce-my-account */ "woocommerce-my-account").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/my-account */ "../modules/woocommerce/assets/js/frontend/handlers/my-account.js")));
  }

}

exports.default = _default;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["frontend"], () => (__webpack_exec__("../assets/dev/js/frontend/elements-handlers.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=elements-handlers.js.map