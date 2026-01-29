/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/filter.js":
/*!*************************************!*\
  !*** ./src/js/components/filter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var filter = document.querySelector('.filter');
  if (!filter) return;

  // toggle
  var toggleBtn = filter.querySelector('.js-filter-toggle');
  toggleBtn.addEventListener('click', function () {
    filter.classList.toggle('filter--expanded');
  });

  // grid
  var table = document.querySelector('.data-table');
  var viewClassList = ['view-grid', 'view-list', 'view-table'];
  var btnList = filter.querySelectorAll('.button[data-view]');
  btnList.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.classList.contains('button--active')) return;
      btnList.forEach(function (btn) {
        return btn.classList.remove('button--active');
      });
      viewClassList.forEach(function (className) {
        return table.classList.remove(className);
      });
      btn.classList.add('button--active');
      table.classList.add(btn.dataset.view);
    });
  });
});

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  // profile
  var profileToggle = document.querySelector('.header__profile-btn');
  var profile = document.querySelector('.header__profile');
  var account = document.querySelector('.header__account');
  var accountClose = document.querySelector('.header__account-close');
  if (!profileToggle || !profile || !account || !accountClose) return;
  profileToggle.addEventListener('click', function () {
    profile.classList.toggle('header__profile--active');
  });
  accountClose.addEventListener('click', function () {
    profile.classList.remove('header__profile--active');
  });
});

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Open modal
var openModal = function openModal(modalId) {
  var modal = document.querySelector(modalId);
  if (!modal) {
    console.warn("Modal ".concat(modalId, " does not exist!"));
    return;
  }
  if (modal.classList.contains('modal--header-fixed')) {
    document.querySelector('.header').style.position = 'fixed';
  }
  document.body.style.overflow = 'hidden';
  modal.style.display = 'flex';
  setTimeout(function () {
    modal.classList.add('modal--show');
  });
};

// Close modal
var closeModal = function closeModal() {
  var modal = document.querySelector('.modal--show');
  if (!modal) return;
  if (modal.classList.contains('modal--header-fixed')) {
    document.querySelector('.header').style.position = '';
  }
  modal.classList.remove('modal--show');
  document.body.style.overflow = '';
  setTimeout(function () {
    modal.style.display = '';
  }, 350, modal);
};
document.addEventListener('DOMContentLoaded', function () {
  var modalLinks = document.querySelectorAll('[data-modal]');
  if (modalLinks.length) {
    modalLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var modalId = "#modal-".concat(link.dataset.modal);
        openModal(modalId);
        return false;
      });
    });
  }

  // Close on Close btn click
  var closeButtons = document.querySelectorAll('.js-close-modal');
  if (closeButtons.length) {
    closeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        return closeModal();
      });
    });
  }

  // Close on Escape
  document.body.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, false);

  // modal help
  var modalHelp = document.querySelector('#modal-help');
  var helpLinkList = document.querySelectorAll('.modal-help__list-el-content');
  if (helpLinkList.length) {
    helpLinkList.forEach(function (link) {
      link.addEventListener('click', function () {
        var el = link.closest('.modal-help__list-el');
        el.classList.toggle('modal-help__list-el--opened');
      });
    });
  }
  var helpSubLinkList = document.querySelectorAll('.modal-help__sublist-el');
  if (helpSubLinkList.length) {
    helpSubLinkList.forEach(function (link) {
      link.addEventListener('click', function () {
        return modalHelp.classList.add('modal-help--slide-show');
      });
    });
  }
  var backBtn = document.querySelector('.modal-help__back-btn');
  backBtn.addEventListener('click', function () {
    return modalHelp.classList.remove('modal-help--slide-show');
  });
});

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var selectList = document.querySelectorAll('.select');
  if (!selectList.length) return;
  selectList.forEach(function (select) {
    select.addEventListener('click', function (evt) {
      evt.stopPropagation();
      closeAllSelect(select);
      if (!evt.target.closest('.select__list-box')) {
        select.classList.toggle('select--active');
      }
    });
    var current = select.querySelector('.select__current');
    var input = select.querySelector('.select__input');
    var selectItems = select.querySelectorAll('.select__list-item');
    selectItems.forEach(function (item) {
      item.addEventListener('click', function () {
        current.innerHTML = item.innerHTML;
        current.classList.remove('select__current--placeholder');
        input.value = item.innerText;
        var oldSelected = select.querySelector('.select__list-item--selected');
        oldSelected.classList.remove('select__list-item--selected');
        item.classList.add('select__list-item--selected');
      });
    });
  });
  document.addEventListener('click', closeAllSelect);
  function closeAllSelect(exeptSelect) {
    selectList.forEach(function (select) {
      if (exeptSelect && exeptSelect === select) return;
      select.classList.remove('select--active');
    });
  }
});

/***/ }),

/***/ "./src/js/components/theme-switcher.js":
/*!*********************************************!*\
  !*** ./src/js/components/theme-switcher.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var removeAllThemes = function removeAllThemes() {
    var classList = document.documentElement.classList;
    for (var i = classList.length - 1; i >= 0; i--) {
      var className = classList[i];
      if (className.startsWith('theme-')) {
        classList.remove(className);
      }
    }
  };
  var switcherList = document.querySelectorAll('.theme-switcher');
  if (switcherList.length > 0) {
    switcherList.forEach(function (switcher) {
      switcher.addEventListener('click', function () {
        if (document.documentElement.classList.contains('theme-light')) {
          removeAllThemes();
          document.documentElement.classList.add('theme-dark');
        } else {
          removeAllThemes();
          document.documentElement.classList.add('theme-light');
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_theme_switcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/theme-switcher */ "./src/js/components/theme-switcher.js");
/* harmony import */ var _components_theme_switcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_theme_switcher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select */ "./src/js/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filter */ "./src/js/components/filter.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_filter__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener('DOMContentLoaded', function () {
  tippy('[data-tippy-content]');
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map