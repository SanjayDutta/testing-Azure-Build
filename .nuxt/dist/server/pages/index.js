exports.ids = [3];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=edec3994&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<h4>02/08/1998</h4> <h1>" + _vm._ssrEscape(_vm._s(_vm.message)) + "</h1> <h2>Enter your Name: <input type=\"text\"" + _vm._ssrAttr("value", _vm.name) + "></h2> <button>Click to change name</button> " + (_vm.buttonClicked ? "<h1>" + _vm._ssrEscape(_vm._s(_vm.inputName)) + "</h1>" : "<!---->") + "\n  Enter City:<input type=\"text\"" + _vm._ssrAttr("value", _vm.city) + "><button>Get Weather</button><br>" + _vm._ssrEscape("\n  " + _vm._s(_vm.weatherInfo) + "\n"))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=edec3994&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(19);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',

  data() {
    return {
      message: 'Testing Azure+Github Deployment',
      name: "",
      city: "",
      inputName: "",
      buttonClicked: true,
      weatherInfo: null
    };
  },

  methods: {
    changeName() {
      this.inputName = `Hello ${this.name}`; //this.buttonClicked = !this.buttonClicked
    },

    callApi() {
      console.log('Calling API');
      console.log(this.city);
      external_axios_default()({
        url: '/api/test',
        method: 'get',
        params: {
          city: this.city
        }
      }).then(response => {
        console.log(response.data);
        this.weatherInfo = response.data;
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ab8a5a4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map