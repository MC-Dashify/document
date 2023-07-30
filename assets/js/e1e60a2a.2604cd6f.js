"use strict";
(self["webpackChunkdocuments"] = self["webpackChunkdocuments"] || []).push([[712],{

/***/ 8439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Client)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(7961);
// EXTERNAL MODULE: ./src/pages/downloads/downloads.module.css
var downloads_module = __webpack_require__(7588);
;// CONCATENATED MODULE: ./src/hooks/os.js
function useOperatingSystem(){const[operatingSystem,setOperatingSystem]=(0,react.useState)('');(0,react.useEffect)(()=>{const userAgent=window.navigator.userAgent;if(userAgent.includes('Windows NT')){setOperatingSystem('Windows');}else if(userAgent.includes('Linux')){setOperatingSystem('Linux');}else if(userAgent.includes('Intel Mac')){setOperatingSystem('Intel Mac');}else if(userAgent.includes('ARM Mac')){setOperatingSystem('ARM Mac');}else{setOperatingSystem('Unknown');}},[]);return operatingSystem;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(6154);
// EXTERNAL MODULE: ./node_modules/react-simple-image-slider/dist/index.js
var dist = __webpack_require__(3225);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/pages/downloads/client.js
const operatingSystemList=['Windows','Linux','Intel Mac','ARM Mac'];function Client(){const operatingSystem=useOperatingSystem();const isOperatingSystemSupported=operatingSystemList.includes(operatingSystem);const[isFetched,setIsFetched]=(0,react.useState)(false);const[downloadAssets,setDownloadAssets]=(0,react.useState)({});const[downloadUrl,setDownloadUrl]=(0,react.useState)('');const[imgWidth,setImgWidth]=(0,react.useState)(0);const images=[{url:'/img/home-screen.png'},{url:'/img/create-profile.png'},{url:'/img/overview.png'},{url:'/img/stats.png'},{url:'/img/world-modal.png'},{url:'/img/players.png'},{url:'/img/console.png'}];(0,react.useEffect)(()=>{const fetchData=async()=>{let assetsObject={};const fetchData=await axios/* default */.Z.get('https://api.github.com/repos/MC-Dashify/client/releases/latest');fetchData.data.assets.forEach(asset=>{if(asset.name.endsWith('x64-setup.exe')){assetsObject['Windows']=asset.browser_download_url;}else if(asset.name.endsWith('aarch64.dmg')){assetsObject['ARM Mac']=asset.browser_download_url;}else if(asset.name.endsWith('x64.dmg')){assetsObject['Intel Mac']=asset.browser_download_url;}else if(asset.name.endsWith('AppImage')){assetsObject['Linux']=asset.browser_download_url;}});setDownloadAssets(assetsObject);setIsFetched(true);};fetchData();},[]);(0,react.useEffect)(()=>{Object.entries(downloadAssets).forEach(_ref=>{let[key,value]=_ref;if(key===operatingSystem){setDownloadUrl(value);}});},[operatingSystem,downloadAssets]);(0,react.useEffect)(()=>{if(window.innerWidth>=996){setImgWidth(996);}else{setImgWidth(0);}},[]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{description:"Client \uC124\uCE58\uD558\uAE30"},/*#__PURE__*/react.createElement("main",{className:downloads_module/* default */.Z.mainSection},/*#__PURE__*/react.createElement("header",{className:downloads_module/* default */.Z.header},/*#__PURE__*/react.createElement("h1",{className:downloads_module/* default */.Z.heading},"Client \uB2E4\uC6B4\uB85C\uB4DC"),/*#__PURE__*/react.createElement("h2",{className:downloads_module/* default */.Z.subheading},"Dashify\uB97C \uC0AC\uC6A9\uD558\uB294 \uC11C\uBC84\uB97C GUI\uB85C \uAD00\uB9AC \uBC0F \uBAA8\uB2C8\uD130\uB9C1")),!isOperatingSystemSupported?/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("p",{className:downloads_module/* default */.Z.notSupported},"\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uD604\uC7AC Dashify Client\uB294 \uC0AC\uC6A9\uC911\uC778 \uC6B4\uC601\uCCB4\uC81C\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),/*#__PURE__*/react.createElement("p",null,"\uB9CC\uC57D User Agent\uB97C \uC784\uC758\uB85C \uBC14\uAFB8\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC0AC\uC6A9\uC911\uC774\uB77C\uBA74 \uBE44\uD65C\uC131\uD654 \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."),/*#__PURE__*/react.createElement("span",null,"\uB610\uB294"),/*#__PURE__*/react.createElement(Link/* default */.Z,{to:'https://github.com/MC-Dashify/client/releases/latest'},/*#__PURE__*/react.createElement("button",{className:`button ${downloads_module/* default */.Z.secondaryDownloadButton}`},/*#__PURE__*/react.createElement("span",null,"\uB2E4\uB978 \uD50C\uB7AB\uD3FC\uC6A9\uC73C\uB85C GitHub\uC5D0\uC11C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uAE30")))):isFetched?/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:downloadUrl},/*#__PURE__*/react.createElement("button",{className:`${downloads_module/* default */.Z.downloadLatestButton} button`},`${operatingSystem}용 다운로드`)),/*#__PURE__*/react.createElement("span",null,"\uB610\uB294"),/*#__PURE__*/react.createElement(Link/* default */.Z,{to:'https://github.com/MC-Dashify/client/releases/latest'},/*#__PURE__*/react.createElement("button",{className:`button ${downloads_module/* default */.Z.secondaryDownloadButton}`},/*#__PURE__*/react.createElement("span",null,"\uB2E4\uB978 \uD50C\uB7AB\uD3FC\uC6A9\uC73C\uB85C GitHub\uC5D0\uC11C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uAE30")))):/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("span",null,"\uB85C\uB529\uC911...")),/*#__PURE__*/react.createElement("div",{className:downloads_module/* default */.Z.screenshot},/*#__PURE__*/react.createElement("hr",{className:`${downloads_module/* default */.Z.divider}`}),/*#__PURE__*/react.createElement("h1",{className:downloads_module/* default */.Z.heading},"\uC2A4\uD06C\uB9B0\uC0F7"),/*#__PURE__*/react.createElement("br",null),/*#__PURE__*/react.createElement("div",{className:downloads_module/* default */.Z.imageSlider},/*#__PURE__*/react.createElement((dist_default()),{width:imgWidth,height:imgWidth*0.67470238095238,images:images,showBullets:false,showNavs:true,loop:true,autoPlay:true,autoPlayDelay:5,navStyle:2,slideDuration:0.5})))));}

/***/ }),

/***/ 7588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"mainSection":"mainSection_MBrt","header":"header_U4su","heading":"heading_mKgn","divider":"divider_Q9S2","subheading":"subheading_BWhW","downloadLatestButton":"downloadLatestButton_Afl1","secondaryDownloadButton":"secondaryDownloadButton_nyFT","screenshot":"screenshot_odGs","fadeIn":"fadeIn_WbTX","imageSlider":"imageSlider_BjXG","launcherMain":"launcherMain_v7Jo"});

/***/ })

}]);