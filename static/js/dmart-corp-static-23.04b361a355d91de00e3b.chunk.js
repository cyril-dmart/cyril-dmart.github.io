(this["webpackJsonpdmart-corp-static"]=this["webpackJsonpdmart-corp-static"]||[]).push([[23],{"0CY7":function(e,t,a){"use strict";var n=a("jOth"),r=a("psW0"),o=a("67Y/"),c=a("9Z1F"),i=a("WSmt"),s=a("I65S"),u=a("kEuB"),d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_LOGGER:"true",REACT_APP_CSS_PREFIX:"DMart",REACT_APP_PUBLIC_URL:"https://cyril-dmart.github.io//",REACT_APP_BASE_URL:"https://cyril-dmart.github.io/",REACT_APP_API_URL:"https://canary.api.dmartindia.com",REACT_APP_TITLE:"Dmart India",REACT_APP_ID:"dmart-corp-static",REACT_APP_ROOT:"dmart-corp-static",REACT_APP_MDF_API_URL:"https://canary.api.dmartindia.com",REACT_APP_CATEGORY_URL:"https://storage.googleapis.com/corporate-storage/category/categorylist.json",REACT_APP_PLACEMENT_DOCUMENT_URL:"PD_20200210223130-A7u9ojQXYX7NAug.pdf",REACT_APP_CONTENT_BASE_URL:"/corporate/content",REACT_APP_FILE_API:"/file/v1",REACT_APP_CONTENT_API:"/v1",REACT_APP_FEEDBACK_BASE_URL:"/corporate/feedback",REACT_APP_FEEDBACK_API:"/v1",REACT_APP_PARTNER_BASE_URL:"/corporate/partner",REACT_APP_MDM_BASE_URL:"/mdm-site/v1",REACT_APP_PARTNER_UPLOAD_VERB:"/onboard/files/v1",REACT_APP_PARTNER_REGISTER_VERB:"/onboard/v1",REACT_APP_CAPTACHA_KEY:"6LdKg_0UAAAAAGhploFNjTULYF_eCDXv69lqW0Z5",REACT_APP_GA:"UA-68974534-1"}),A=d.REACT_APP_API_URL,_=void 0===A?"":A,l=d.REACT_APP_CONTENT_BASE_URL,E=void 0===l?"":l,b=d.REACT_APP_CONTENT_API,f=_+E+(void 0===b?"":b);t.a=function(e){return e.pipe(Object(n.a)(u.b.name),Object(r.a)((function(e){return Object(i.a)({method:"GET",url:"".concat(f,"?contentPlaceholder=InvestorRelations_Details&isPublished=true&page=InvestorRelationPage"),headers:{"Content-Type":"application/json"},async:!0,crossDomain:!0}).pipe(Object(o.a)((function(t){return u.b.successAction(t,e)})),Object(c.a)((function(t){return Object(s.of)(u.b.failureAction(t,e))})))})))}},BhN1:function(e,t,a){"use strict";a.d(t,"a",(function(){return z}));var n=a("ANjH"),r=a("lk2u"),o=a("SVmU"),c=(a("1mXj"),a("21GR")),i=a("prSB"),s=a("mwIZ"),u=a.n(s),d=a("s+fF"),A=a("k8Y/"),_=a.n(A),l=a("bt/X"),E=a.n(l),b=a("mTTR"),f=a.n(b),R=a("3WF5"),P=a.n(R),m=a("qPyV"),O=a.n(m),C=a("xweI"),p=a.n(C),T=a("k4Da"),j=a.n(T),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=e,r=E()(p()(n,"siteState"),"siteState"),o=P()(f()(r)),c=""!==t?O()(_()(j()(r[t],(function(e){return""!==e.siteCity})),["siteCity"],["asc"]),"siteCity"):[],i=c.map((function(e){return e.siteCity})),s=""!==a?_()(j()(c,(function(e){return e.siteCity===a&&"Store"===e.locationType})),["locationName"],["asc"]).map((function(e){return e.locationName})):[];return{stateList:o,cityList:i,cityStores:s}},y=function(e,t){var a=e;return""!==t&&(a=j()(e,(function(e){return e.locationType===t}))),a},S=a("UHX2"),L={locationType:"",userType:"",state:"",store:"",city:"",name:"",emailId:"",mobile:"",addressLine1:"",addressLine2:"",pincode:"",comments:"",storecode:"",mode:S.e[S.d.WEBSITE]},N={sendFeedbackData:d.a.NONE,getStoreList:d.a.NONE,storeList:[],allStores:[],submitFeedback:d.a.NONE,errorData:{},siteId:"",formData:L,stateList:[],cityList:[],cityStores:[],mode:S.d.WEBSITE,kioskMode:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.b.name:var a=e.allStores,n=e.storeList,r=e.stateList;return Object(i.a)(Object(i.a)(Object(i.a)({},e),N),{},{allStores:a,storeList:n,stateList:r});case S.f.name:return Object(i.a)(Object(i.a)({},e),{},{sendFeedbackData:d.a.LOADING,submitFeedback:d.a.LOADING});case S.f.success:return Object(i.a)(Object(i.a)({},e),{},{sendFeedbackData:d.a.SUCCESS,submitFeedback:d.a.SUCCESS});case S.f.failure:var o=t.payload;return Object(i.a)(Object(i.a)({},e),{},{sendFeedbackData:d.a.FAILURE,submitFeedback:d.a.FAILURE,errorData:o});case S.c.name:return Object(i.a)(Object(i.a)({},e),{},{getStoreList:d.a.LOADING,formData:L});case S.c.success:var c=t.payload,s=c.response,A=s,_=u()(e.formData,"locationType","");return A=y(A,_),Object(i.a)(Object(i.a)({},e),{},{getStoreList:d.a.SUCCESS,allStores:s,storeList:A},v(s));case S.c.failure:var l=t.payload;return Object(i.a)(Object(i.a)({},e),{},{getStoreList:d.a.FAILURE,errorData:l});case S.h.name:var E=u()(t,"payload","");return Object(i.a)(Object(i.a)({},e),{},{siteId:E});case S.g.name:var b=u()(t,"payload",{});return Object(i.a)(Object(i.a)({},e),{},{formData:Object(i.a)(Object(i.a)({},e.formData),b)});case S.a.name:var f=u()(t.payload,"state",""),R=u()(t.payload,"city",""),P=u()(e.formData,"locationType",""),m=u()(e,"allStores",[]);return m=y(m,P),""===f&&""!==R&&(f=u()(e.formData,"state","")),Object(i.a)(Object(i.a)(Object(i.a)({},e),{},{storeList:m},v(m,f,R)),{},{formData:Object(i.a)(Object(i.a)({},e.formData),{},{state:f,city:R,store:""})});case S.i.name:var O=""===u()(t,"payload","")?S.d.WEBSITE:t.payload,C=[S.d.INSTORE,S.d.QR].includes(O);return Object(i.a)(Object(i.a)({},e),{},{mode:S.e[O],kioskMode:C});default:return e}},g=a("pZt1"),D=a.n(g),U=a("E+oP"),h=a.n(U),F=a("kEuB"),B={section:"",sections:[],submenus:[],submenu:"",subcategoryContent:{},subcategories:[],subcategory:"",submenuContent:{},showSubCategory:!1,fileContent:{},fileLinks:[],showFiles:[]},k={errorData:{},getInvestorRelations:d.a.NONE,investorRelationsContent:[],selections:B},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.b.name:return Object(i.a)(Object(i.a)({},e),{},{getInvestorRelations:d.a.LOADING,investorRelationsContent:[],selections:B});case F.b.success:var a=t.payload,n=a.response,r=n.sort((function(e,t){return Number(e.content.sequence)===Number(t.content.sequence)?0:Number(e.content.sequence)>Number(t.content.sequence)?1:-1})),o=P()(r,"content.investorCategoryName"),c=u()(e,"selections.section","");h()(o)||""!==c||(c=D()(o));var s=D()(r.filter((function(e){return u()(e,"content.investorCategoryName","")===c}))),A=u()(s,"content.subMenus",[]),_=P()(A,"name"),l=u()(e,"selections.submenu","")||D()(_),E=D()(A.filter((function(e){return u()(e,"name","")===l}))),b=u()(E,"subCategories",[]).filter((function(e){return"true"===u()(e,"additionalData.display","true")})),f=u()(E,"subCategories",[]).filter((function(e){return"false"===u()(e,"additionalData.display","true")})),R=[];f.length>0&&(R=f.map((function(e){return{files:u()(e,"files",[]).map((function(e){return{fileName:e.fileName,fileId:e.fileId}})),heading:u()(e,"name","")}})));var m=P()(b,"name"),O=u()(e,"selections.category","")||D()(m),C=D()(b.filter((function(e){return u()(e,"name","")===O}))),p=u()(C,"files",[]),T=p.map((function(e){return{fileName:e.fileName,fileId:e.fileId}}));return Object(i.a)(Object(i.a)({},e),{},{getInvestorRelations:d.a.SUCCESS,investorRelationsContent:r,selections:Object(i.a)(Object(i.a)({},e.selections),{},{sections:o,section:c,submenuContent:s,submenus:_,submenu:l,subcategoryContent:E,subcategories:m,subcategory:O,showFiles:R,fileContent:C,fileLinks:T})});case F.b.failure:var j=t.payload;return Object(i.a)(Object(i.a)({},e),{},{getInvestorRelations:d.a.FAILURE,investorRelationsContent:[],errorData:j});case F.a.name:var v=u()(t.payload,"section",""),y=u()(t.payload,"menu",""),S=u()(t.payload,"category",""),L=D()(e.investorRelationsContent.filter((function(e){return u()(e,"content.investorCategoryName","")===v}))),N=u()(L,"content.subMenus",[]),I=P()(N,"name"),g=""!==y?y:D()(I),U=D()(N.filter((function(e){return u()(e,"name","")===g}))),G=u()(U,"subCategories",[]).filter((function(e){return"true"===u()(e,"additionalData.display","true")})),W=u()(U,"subCategories",[]).filter((function(e){return"false"===u()(e,"additionalData.display","true")})),w=[];W.length>0&&(w=W.map((function(e){return{files:u()(e,"files",[]).map((function(e){return{fileName:e.fileName,fileId:e.fileId}})),heading:u()(e,"name","")}})));var M=P()(G,"name"),K=""!==S?S:D()(M),Y=D()(G.filter((function(e){return u()(e,"name","")===K}))),V=u()(Y,"files",[]),X=V.map((function(e){return{fileName:e.fileName,fileId:e.fileId}}));return Object(i.a)(Object(i.a)({},e),{},{selections:Object(i.a)(Object(i.a)({},e.selections),{},{section:v,submenus:I,submenu:g,submenuContent:L,subcategoryContent:U,subcategories:M,subcategory:K,showFiles:w,fileContent:Y,fileLinks:X})});case F.c.name:var H=u()(t,"payload",""),q=u()(e,"selections.submenuContent",{}),Z=u()(q,"content.subMenus",[]),J=D()(Z.filter((function(e){return u()(e,"name","")===H}))),Q=u()(J,"subCategories",[]),z=Q.some((function(e){var t=e.additionalData;return!0===u()(t,"display",!1)||"true"===u()(t,"display","")})),x=P()(Q,"name"),$=D()(x),ee=D()(Q.filter((function(e){return u()(e,"name","")===$}))),te=u()(ee,"files",[]),ae=te.map((function(e){return{fileName:e.fileName,fileId:e.fileId}}));return Object(i.a)(Object(i.a)({},e),{},{selections:Object(i.a)(Object(i.a)({},e.selections),{},{subcategoryContent:J,subcategories:x,subcategory:$,showSubCategory:z,showFiles:[],fileContent:ee,fileLinks:ae})});default:return e}},W=a("upjz"),w=a("e/6S"),M=a("VUrc"),K={company:"",website:"",firstname:"",lastname:"",emailId:"",mobile:"",telno:"",state:"",city:"",location:"",companyAddress:"",category:"",goodsOffered:"",pancard:"",gst:"",gstRegistrationType:"",periodInDistribution:"",areaCovered:"",turnover:"",cessNo:"",RTname1:"",RTvalue1:"",RTname2:"",RTvalue2:"",RTname3:"",RTvalue3:"",pincode:""},Y={firstname:"",lastName:"",emailId:"",mobile:"",state:"",city:"",location:"",landmark:"",address:"",pincode:"",landlordType:"",landAddress:"",landlocation:"",plotSize:"",frontage:"",landLength:"",landWidth:"",carpetArea:"",floorArea:"",commercialArea:"",roadWidth:"",roadSideWidth:"",serviceRoads:"",propertyType:"",dayTimeStreetTraffic:"",nightTimeStreetTraffic:"",developerName:"",majorResidentialProjects:"",commercialProjectsDone:"",presence:"",catchment:""},V={sendFormData:d.a.NONE,storeList:[],errorData:{},formData:K,landlordFormData:Y,stateList:[],cityList:[],saveImages:d.a.NONE,fileIds:[],images:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.b.name:return Object(i.a)(Object(i.a)({},e),V);case M.f.name:var a=u()(t,"payload",{});return Object(i.a)(Object(i.a)({},e),{},{formData:Object(i.a)(Object(i.a)({},e.formData),a)});case M.g.name:var n=u()(t,"payload",{});return Object(i.a)(Object(i.a)({},e),{},{landlordFormData:Object(i.a)(Object(i.a)({},e.landlordFormData),n)});case M.a.name:var r=E()(p()(w,"state"),"state"),o=P()(f()(r)),c=u()(t.payload,"state",""),s=r[c],A=s.map((function(e){return e.name}));return Object(i.a)(Object(i.a)({},e),{},{stateList:o,cityList:A});case M.e.name:return Object(i.a)(Object(i.a)({},e),{},{sendFormData:d.a.LOADING});case M.e.success:return Object(i.a)(Object(i.a)({},e),{},{sendFormData:d.a.SUCCESS,formData:K,landlordFormData:Y});case M.e.failure:return Object(i.a)(Object(i.a)({},e),{},{sendFormData:d.a.FAILURE});case M.d.name:return Object(i.a)(Object(i.a)({},e),{},{saveImages:d.a.LOADING});case M.d.success:var _=t.payload,l=_.response,b=u()(t.meta,"payload.image",{}),R=u()(e,"images",[]);if(console.log(h()(b),h()(f()(b))),h()(f()(b))){var m=u()(t.meta,"payload.images",[]);R=m}else R=[].concat(Object(W.a)(R),[b]);return Object(i.a)(Object(i.a)({},e),{},{saveImages:d.a.SUCCESS,fileIds:l,images:R});case M.d.failure:return Object(i.a)(Object(i.a)({},e),{},{saveImages:d.a.FAILURE});case M.c.name:var O=E()(p()(w,"state"),"state"),C=P()(f()(O));return Object(i.a)(Object(i.a)({},e),{},{stateList:C});default:return e}},H=a("HZYq"),q={isDesktopView:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.a.name:var a=u()(t,"payload",!1);return Object(i.a)(Object(i.a)({},e),{},{isDesktopView:a});default:return e}},J=Object(n.c)({investorRelations:G,feedbackReducer:I,partnerReducer:X,screenReducer:Z}),Q=Object(r.a)();function z(){var e=[Q];var t=Object(n.e)(J,n.a.apply(void 0,e));return Q.run(c.a),{store:t,persistor:Object(o.a)(t)}}},Bw0r:function(e,t,a){"use strict";a.d(t,"b",(function(){return P})),a.d(t,"a",(function(){return m}));var n=a("jOth"),r=a("psW0"),o=a("9Z1F"),c=a("15JJ"),i=a("67Y/"),s=a("WSmt"),u=a("F/XL"),d=a("UHX2"),A=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_LOGGER:"true",REACT_APP_CSS_PREFIX:"DMart",REACT_APP_PUBLIC_URL:"https://cyril-dmart.github.io//",REACT_APP_BASE_URL:"https://cyril-dmart.github.io/",REACT_APP_API_URL:"https://canary.api.dmartindia.com",REACT_APP_TITLE:"Dmart India",REACT_APP_ID:"dmart-corp-static",REACT_APP_ROOT:"dmart-corp-static",REACT_APP_MDF_API_URL:"https://canary.api.dmartindia.com",REACT_APP_CATEGORY_URL:"https://storage.googleapis.com/corporate-storage/category/categorylist.json",REACT_APP_PLACEMENT_DOCUMENT_URL:"PD_20200210223130-A7u9ojQXYX7NAug.pdf",REACT_APP_CONTENT_BASE_URL:"/corporate/content",REACT_APP_FILE_API:"/file/v1",REACT_APP_CONTENT_API:"/v1",REACT_APP_FEEDBACK_BASE_URL:"/corporate/feedback",REACT_APP_FEEDBACK_API:"/v1",REACT_APP_PARTNER_BASE_URL:"/corporate/partner",REACT_APP_MDM_BASE_URL:"/mdm-site/v1",REACT_APP_PARTNER_UPLOAD_VERB:"/onboard/files/v1",REACT_APP_PARTNER_REGISTER_VERB:"/onboard/v1",REACT_APP_CAPTACHA_KEY:"6LdKg_0UAAAAAGhploFNjTULYF_eCDXv69lqW0Z5",REACT_APP_GA:"UA-68974534-1"}),_=A.REACT_APP_API_URL,l=void 0===_?"":_,E=A.REACT_APP_FEEDBACK_BASE_URL,b=void 0===E?"":E,f=A.REACT_APP_FEEDBACK_API,R=l+b+(void 0===f?"":f),P=function(e){return e.pipe(Object(n.a)(d.f.name),Object(r.a)((function(e){var t=e.payload;return Object(s.a)({method:"POST",url:R,body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=utf-8"},async:!0,crossDomain:!0,withCredentials:!0}).pipe(Object(r.a)((function(t){return Object(u.a)(d.f.successAction(t,e),d.b.action())})),Object(o.a)((function(t){return Object(u.a)(d.f.failureAction(t,e))})))})))},m=function(e){return e.pipe(Object(n.a)(d.c.name),Object(c.a)((function(e){var t=e.payload;return s.a.get("".concat(null===t||void 0===t?void 0:t.url,"?").concat(decodeURIComponent(t.query)),{}).pipe(Object(i.a)((function(t){return d.c.successAction(t,e)})),Object(o.a)((function(t){return Object(u.a)(d.c.failureAction(t,e))})))})))}},HZYq:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("s+fF"),r=Object(n.b)("ScreenSize")},UHX2:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"h",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return A})),a.d(t,"i",(function(){return _}));var n,r=a("s+fF"),o=Object(r.b)("GetStoreList"),c=Object(r.b)("SendFeedbackData"),i=Object(r.b)("UpdateSiteId"),s=Object(r.b)("ChangeStateOrCity"),u=Object(r.b)("ClearState"),d=Object(r.b)("UpdateForm");!function(e){e.WEBSITE="website",e.INSTORE="kiosk",e.QR="qr"}(n||(n={}));var A={website:"WEBSITE",kiosk:"INSTORE",qr:"QR"},_=Object(r.b)("UpdateViewMode")},VC7t:function(e,t,a){"use strict";a.d(t,"b",(function(){return O})),a.d(t,"a",(function(){return C}));var n=a("jOth"),r=a("psW0"),o=a("67Y/"),c=a("9Z1F"),i=a("WSmt"),s=a("F/XL"),u=a("VUrc"),d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_LOGGER:"true",REACT_APP_CSS_PREFIX:"DMart",REACT_APP_PUBLIC_URL:"https://cyril-dmart.github.io//",REACT_APP_BASE_URL:"https://cyril-dmart.github.io/",REACT_APP_API_URL:"https://canary.api.dmartindia.com",REACT_APP_TITLE:"Dmart India",REACT_APP_ID:"dmart-corp-static",REACT_APP_ROOT:"dmart-corp-static",REACT_APP_MDF_API_URL:"https://canary.api.dmartindia.com",REACT_APP_CATEGORY_URL:"https://storage.googleapis.com/corporate-storage/category/categorylist.json",REACT_APP_PLACEMENT_DOCUMENT_URL:"PD_20200210223130-A7u9ojQXYX7NAug.pdf",REACT_APP_CONTENT_BASE_URL:"/corporate/content",REACT_APP_FILE_API:"/file/v1",REACT_APP_CONTENT_API:"/v1",REACT_APP_FEEDBACK_BASE_URL:"/corporate/feedback",REACT_APP_FEEDBACK_API:"/v1",REACT_APP_PARTNER_BASE_URL:"/corporate/partner",REACT_APP_MDM_BASE_URL:"/mdm-site/v1",REACT_APP_PARTNER_UPLOAD_VERB:"/onboard/files/v1",REACT_APP_PARTNER_REGISTER_VERB:"/onboard/v1",REACT_APP_CAPTACHA_KEY:"6LdKg_0UAAAAAGhploFNjTULYF_eCDXv69lqW0Z5",REACT_APP_GA:"UA-68974534-1"}),A=d.REACT_APP_API_URL,_=void 0===A?"":A,l=d.REACT_APP_PARTNER_BASE_URL,E=void 0===l?"":l,b=d.REACT_APP_PARTNER_UPLOAD_VERB,f=void 0===b?"":b,R=d.REACT_APP_PARTNER_REGISTER_VERB,P=_+E+(void 0===R?"":R),m=_+E+f,O=function(e){return e.pipe(Object(n.a)(u.e.name),Object(r.a)((function(e){var t=e.payload;return Object(i.a)({method:"POST",url:P,body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=utf-8"},async:!0,crossDomain:!0,withCredentials:!0}).pipe(Object(o.a)((function(t){return u.e.successAction(t,e)})),Object(c.a)((function(t){return Object(s.a)(u.e.failureAction(t,e))})))})))},C=function(e){return e.pipe(Object(n.a)(u.d.name),Object(r.a)((function(e){var t=e.payload.data;return Object(i.a)({method:"POST",url:m,body:t,async:!0,crossDomain:!0,withCredentials:!0}).pipe(Object(o.a)((function(t){return u.d.successAction(t,e)})),Object(c.a)((function(t){return Object(s.a)(u.d.failureAction(t,e))})))})))}},VUrc:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"g",(function(){return d}));var n=a("s+fF"),r=Object(n.b)("SendFeedbackData"),o=Object(n.b)("ChangeStateOrCity"),c=Object(n.b)("ClearState"),i=Object(n.b)("UpdateForm"),s=Object(n.b)("SaveImages"),u=Object(n.b)("GetStates"),d=Object(n.b)("UpdateLandlordForm")},Z69r:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},kEuB:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return c}));var n=a("s+fF"),r=Object(n.b)("GetInvestorRelationsContent"),o=Object(n.b)("ChangeSection"),c=Object(n.b)("SelectedCategory")},"s+fF":function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n}));var n,r,o=a("i7Pf"),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return"".concat((e/t).toFixed(2),"rem")},i=function(e){var t=Object(o.a)(6),a="".concat(t,"/").concat(e),n="".concat(t,"/").concat(e,"_SUCCESS"),r="".concat(t,"/").concat(e,"_CANCEL"),c="".concat(t,"/").concat(e,"_CLEAR"),i="".concat(t,"/").concat(e,"_PROGRESS"),s="".concat(t,"/").concat(e,"_RELOAD"),u="".concat(t,"/").concat(e,"_FAILURE");return{name:a,success:n,failure:u,progress:i,reload:s,cancel:r,clear:c,action:function(e,t){return{type:a,payload:e,meta:t}},successAction:function(e,t){return{type:n,payload:e,meta:t}},failureAction:function(e,t){return{type:u,payload:e,meta:t}},cancelAction:function(e,t){return{type:r,payload:e,meta:t}},clearAction:function(e,t){return{type:c,payload:e,meta:t}},progressAction:function(e,t){return{type:i,payload:e,meta:t}},reloadAction:function(e,t){return{type:s,payload:e,meta:t}}}};!function(e){e.NONE="NONE",e.LOADING="LOADING",e.FAILURE="FAILURE",e.SUCCESS="SUCCESS",e.RETRYING="RETRYING",e.RELOADING="RELOADING"}(n||(n={})),function(e){e.WARN="WARN",e.INFO="INFO",e.NONE="NONE",e.ERROR="ERROR"}(r||(r={}))}}]);
//# sourceMappingURL=dmart-corp-static-23.04b361a355d91de00e3b.chunk.js.map