(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EjUH:function(e,t,n){},z5MK:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));n("a1Th"),n("h7Nl"),n("Btvt"),n("I5cv"),n("0l/t");var a=n("RIqP"),r=n.n(a),i=(n("bWfx"),n("Z2Ku"),n("L9s1"),n("lwsE")),o=n.n(i),c=n("W8MJ"),s=n.n(c),l=n("PJYZ"),u=n.n(l),d=n("7W2i"),b=n.n(d),f=n("a1gu"),v=n.n(f),p=n("Nsbk"),T=n.n(p),m=n("lSNA"),h=n.n(m),I=n("pVnL"),y=n.n(I),C=n("QILm"),k=n.n(C),A=n("cDcd"),x=n.n(A),w=n("MGin"),N=n("/n7Q"),g=n("bIS8"),L=n("TSYQ"),E=n.n(L),O=n("eHHv"),R=n("e6Ar"),D=n("I53q"),V=n("eOGF");n("EjUH");function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=T()(e);if(t){var r=T()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var P={HORIZONTAL:"horizontal",VERTICAL:"vertical"},K={NAV:"nav",TAB:"tab"},H=Object(A.createContext)({activeTab:0,layout:P.HORIZONTAL,id:"",onTabClick:V.n,as:K.TAB}),S=H.Provider,Z=H.Consumer,B=Object(O.b)(Z,(function(e){if(!e)throw new Error("Tab.Content and Tab.List can be only used inside Tab scope.");return{tabContext:e}}));function U(e,t){return"".concat(e,"-item-").concat(t)}function W(e,t){return"".concat(e,"-content-").concat(t)}function j(e){var t=e.index,n=e.id,a=e.as,r=e.isActive,i=e.isOnlyForScreenReader,o=e.to,c=e.onClick,s=e.onKeyDown,l=e.children,u=e.panelId,d=e.className,b=k()(e,["index","id","as","isActive","isOnlyForScreenReader","to","onClick","onKeyDown","children","panelId","className"]),f=x.a.useCallback((function(){c(t)}),[c]),v=a===K.NAV?w.Link:"button",p=a===K.NAV?{to:o,tabIndex:i?-1:void 0}:{onClick:f,role:"tab",tabIndex:r?0:-1,onKeyDown:s,"aria-selected":r,"aria-controls":r?u:void 0};return x.a.createElement(v,y()({},b,{id:n,className:E()(d,"tab-item",{"sr-only":i,active:r})},p),l)}var M=function(e){b()(n,e);var t=F(n);function n(){var e;o()(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),h()(u()(e),"focusTabItem",!1),h()(u()(e),"handleKeyDown",(function(t){if(!(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)){var n=e.props,a=n.tabContext,r=a.layout,i=a.activeTab,o=n.tabList,c=r===P.HORIZONTAL,s=0===i?o.length-1:i-1,l=i===o.length-1?0:i+1;switch(t.key){case D.a.Home:case D.a.PageUp:e.clickAndFocus(0,t);break;case D.a.End:case D.a.PageDown:e.clickAndFocus(o.length-1,t);break;case D.a.ArrowUp:c||e.clickAndFocus(s,t);break;case D.a.ArrowLeft:c&&e.clickAndFocus(s,t);break;case D.a.ArrowDown:c||e.clickAndFocus(l,t);break;case D.a.ArrowRight:c&&e.clickAndFocus(l,t)}}})),h()(u()(e),"handleDropdownSelect",(function(t){if(e.props.tabContext.as===K.NAV){var n=document.getElementById(e.getTabItemId(t));if(n)return void n.click()}e.clickAndFocus(t)})),h()(u()(e),"handleTabItemClick",(function(t){(0,e.props.tabContext.onTabClick)(t),e.focusTabItem=!1})),h()(u()(e),"renderTabItem",(function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=e.props,i=r.renderItem,o=r.tabContext,c=o.activeTab,s=o.as,l=o.id,u=r.tabItemProps,d=t.idx,b=t.tab,f=!("number"!=typeof n||!a.length||a.includes(n)),v=d===c,p="function"==typeof u?u(b,d):u;return x.a.createElement(j,y()({},p,{key:d,index:d,id:e.getTabItemId(d),isActive:v,onClick:e.handleTabItemClick,onKeyDown:e.handleKeyDown,isOnlyForScreenReader:f,as:s,to:b.to,panelId:W(l,d)}),i(b,d))})),e}return s()(n,[{key:"componentDidUpdate",value:function(e){var t=e.tabContext.activeTab,n=this.props.tabContext.activeTab;if(t!==n&&this.focusTabItem){this.focusTabItem=!1;var a=document.getElementById(this.getTabItemId(n));if(!a)return;a.focus()}}},{key:"clickAndFocus",value:function(e,t){t&&t.preventDefault(),(0,this.props.tabContext.onTabClick)(e),this.focusTabItem=!0}},{key:"getTabsWithIndex",value:function(){return this.props.tabList.map((function(e,t){return{idx:t,tab:e}}))}},{key:"getTabA11yAttr",value:function(){var e=this.props,t=e.tabContext,n=t.layout,a=t.as,r=e.title,i=a===K.NAV;return{role:i?"navigation":"tablist","aria-orientation":i?void 0:n,"aria-label":r}}},{key:"getTabItemId",value:function(e){return U(this.props.tabContext.id,e)}},{key:"renderTabs",value:function(){var e=this,t=this.props,n=t.visibleTabCount,a=t.tabContext,r=a.layout,i=a.activeTab,o=this.getTabsWithIndex();if(r===P.VERTICAL)return o.map((function(t){return e.renderTabItem(t)}));var c=o.slice(0,n).map((function(e,t){return t}));return void 0!==n&&i>=n&&(c[c.length-1]=i),o.map((function(t,n){return e.renderTabItem(t,n,c)}))}},{key:"renderTabDropdown",value:function(){var e=this,t=this.props,n=t.dropdownTitle,a=t.tabList,i=t.visibleTabCount,o=t.excludeVisibleTabs,c=t.tabContext.activeTab;if(!(a.length<=+i)){var s=this.getTabsWithIndex(),l=r()(s);if(o&&+i>0&&(l=s.slice(i),c>=+i)){var u=s[+i-1];(l=l.filter((function(e){return+c!==e.idx}))).unshift(u)}return x.a.createElement(R.a,{className:"tab__dropdown",selectedValue:c,onSelect:this.handleDropdownSelect,title:x.a.createElement(x.a.Fragment,null,n,x.a.createElement(g.ChevronDownIcon,null)),tabIndex:0},l.map((function(t){return x.a.createElement(R.a.Item,{key:t.idx,value:t.idx},e.props.renderItem(t.tab,t.idx))})))}}},{key:"render",value:function(){var e=this.props,t=e.visibleTabCount,n=e.className,a=e.tabContext.layout,r=(e.tabList,e.renderItem,e.tabItemProps,e.dropdownTitle,e.excludeVisibleTabs,k()(e,["visibleTabCount","className","tabContext","tabList","renderItem","tabItemProps","dropdownTitle","excludeVisibleTabs"])),i=a===P.HORIZONTAL&&t;return x.a.createElement("div",y()({className:E()("render-list clearfix",n)},r),x.a.createElement("div",y()({className:"tab-header"},this.getTabA11yAttr()),this.renderTabs()),i&&this.renderTabDropdown())}}]),n}(A.PureComponent);function J(e){var t=e.children,n=e.className,a=e.layout,r=e.activeTab,i=e.id,o=e.as,c=e.onTabClick,s=k()(e,["children","className","layout","activeTab","id","as","onTabClick"]),l=x.a.useMemo((function(){return{layout:a||P.HORIZONTAL,id:i,activeTab:r,onTabClick:c,as:o}}),[a,i,r,c,o]);return x.a.createElement(S,{value:l},x.a.createElement("div",y()({className:E()("ui-tabs-wrap",n,{"vertical-layout":a===P.VERTICAL})},s),t))}h()(M,"defaultProps",{tabItemProps:{},dropdownTitle:"More",renderItem:function(e){return e},excludeVisibleTabs:!1}),J.defaultProps={layout:P.HORIZONTAL,as:K.TAB,onTabClick:V.n};var Q=B(M),Y=B((function(e){var t=e.children,n=e.className,a=e.tabContext,r=a.id,i=a.activeTab,o=a.as,c=k()(e,["children","className","tabContext"]),s=o===K.NAV?{}:{role:"tabpanel",tabIndex:0};return x.a.createElement("div",y()({className:E()("tab-list-content",n)},c,s,{id:W(r,i),"aria-labelledby":U(r,i)}),t)}));J.List=Q,J.Content=Y;var q=Object(N.d)("tab")(J);q.List=Q,q.Content=Y,q.LAYOUT=P,q.AS=K,t.b=q}}]);
//# sourceMappingURL=https://hrcdn.net/candidate-site/assets/sourcemaps/vendors~coding_question_view~custom_input~frontend_question_view~rba_question_view~test_case_ui-39dca5e6.js.map