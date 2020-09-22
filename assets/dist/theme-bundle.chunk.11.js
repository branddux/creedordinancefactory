(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compare; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var Compare =
/*#__PURE__*/
function (_PageManager) {
  _inheritsLoose(Compare, _PageManager);

  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Compare.prototype;

  _proto.onReady = function onReady() {
    var _this = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    var message = this.context.compareRemoveMessage;
    $('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])(message);
        event.preventDefault();
      }
    });
  };

  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");



function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    }) : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tYXAuanMiXSwibmFtZXMiOlsiQ29tcGFyZSIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsIm1lc3NhZ2UiLCJjb21wYXJlUmVtb3ZlTWVzc2FnZSIsIiQiLCJvbiIsImV2ZW50IiwiY29tcGFyaXNvbnMiLCJsZW5ndGgiLCJzaG93QWxlcnRNb2RhbCIsInByZXZlbnREZWZhdWx0IiwiUGFnZU1hbmFnZXIiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJpcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJlbGVtZW50IiwidmFsdWUiLCJ0cmlnZ2VySGFuZGxlciIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtBQUFBOztBQUNOQyw0RUFBZSxDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBZCxDQUFmO0FBRUEsUUFBTUMsT0FBTyxHQUFHLEtBQUtGLE9B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QWhCO0FBQ0g7O0FBRURqQixvQkFBZ0IsQ0FBQ1csY0FBRCxFQUFpQlEsbUJBQWpCLEVBQXNDakIsVUFBdEMsQ0FBaEI7QUFDSCxHQVhEO0FBYUFsQixHQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLHdCQUF2QixFQUFpRCxVQUFBQyxLQUFLLEVBQUk7QUFDdEQsUUFBTW1DLEtBQUssR0FBR3JDLENBQUMsQ0FBQ0UsS0FBSyxDQUFDZ0MsYUFBUCxDQUFmO0FBQ0EsUUFBTUksaUJBQWlCLEdBQUdELEtBQUssQ0FBQ2IsSUFBTixDQUFXLG9DQUFYLENBQTFCOztBQUVBLFFBQUljLGlCQUFpQixDQUFDbEMsTUFBbEIsSUFBNEIsQ0FBaEMsRUFBbUM7QUFDL0JDLG1FQUFjLENBQUMsa0RBQUQsQ0FBZDtBQUNBSCxXQUFLLENBQUNJLGNBQU47QUFDSDtBQUNKLEdBUkQ7QUFVQU4sR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVQyxFQUFWLENBQWEsT0FBYixFQUFzQixxQkFBdEIsRUFBNkMsWUFBTTtBQUMvQyxRQUFNc0Msb0JBQW9CLEdBQUd2QyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVV3QixJQUFWLENBQWUsb0NBQWYsQ0FBN0I7O0FBRUEsUUFBSWUsb0JBQW9CLENBQUNuQyxNQUFyQixJQUErQixDQUFuQyxFQUFzQztBQUNsQ0MsbUVBQWMsQ0FBQyxrREFBRCxDQUFkO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7QUFDSixHQVBEO0FBUUgsQzs7Ozs7Ozs7Ozs7O0FDeEVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFyZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmNvbnRleHQuY29tcGFyZVJlbW92ZU1lc3NhZ2U7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJpc29uLXJlbW92ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmNvbXBhcmlzb25zLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xuXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyBfLm1hcCgkY2hlY2tlZCwgZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKSA6IFtdO1xuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==