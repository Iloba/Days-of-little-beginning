
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"23",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return navigator.userAgent.match(\/Mobile\/i)\u0026\u0026navigator.userAgent.match(\/Android\/i)||navigator.userAgent.match(\/BlackBerry\/i)||navigator.userAgent.match(\/iPhone\/i)||navigator.userAgent.match(\/webOS\/i)?\"m\":navigator.userAgent.match(\/iPad\/i)||navigator.userAgent.match(\/PlayBook\/i)||navigator.userAgent.match(\/Android\/i)\u0026\u0026!navigator.userAgent.match(\/Mobile\/i)?\"t\":\"d\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ProductIDList"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",1],8,16],",d=3\u003Ea.length?a.length:3,c=[],b=0;b\u003Cd;b++)c.push(a[b].id);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmz"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";void 0==a\u0026\u0026(a=\"other\");return-1!=a.search(\"criteo\")?1:0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ProductTransactionProducts"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=[],b=",["escape",["macro",6],8,16],",a=0;a\u003Cb.length;a++)c[a]={id:b[a].id,price:b[a].price,quantity:b[a].quantity};return c})();"]
    },{
      "function":"__j",
      "vtp_name":"KADCV"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],";a=a\u0026\u0026a.userEmail||\"\";return a.trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],";a=a\u0026\u0026a.hashedUserId||\"\";return a.trim()})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"UA-33081454-20"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",13]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",14],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__u"
    },{
      "function":"__c",
      "vtp_value":"12865"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ProductBasketProducts"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ProductID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"TransactionID"
    },{
      "function":"__c",
      "vtp_value":"38764"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__f",
      "vtp_component":"URL"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",13]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",15],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",17],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",15],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",19],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",17],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",15],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",19],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",17],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",15],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",19],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",17],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",15],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",19],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",17],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",15],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",19],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",17],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",15],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",19],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",17],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",15],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",19],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",21],
      "vtp_conversionValue":["macro",22],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"989591318",
      "vtp_currencyCode":"NGN",
      "vtp_conversionLabel":"NjkcCNrjkAgQlu7v1wM",
      "vtp_url":["macro",23],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":35
    },{
      "function":"__hl",
      "tag_id":36
    },{
      "function":"__hl",
      "tag_id":37
    },{
      "function":"__hl",
      "tag_id":38
    },{
      "function":"__hl",
      "tag_id":39
    },{
      "function":"__hl",
      "tag_id":40
    },{
      "function":"__hl",
      "tag_id":41
    },{
      "function":"__hl",
      "tag_id":42
    },{
      "function":"__hl",
      "tag_id":43
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.NREUM||(NREUM={});\n__nr_require=function(a,d,f){function b(c){if(!d[c]){var e=d[c]={exports:{}};a[c][0].call(e.exports,function(e){var g=a[c][1][e];return b(g||e)},e,e.exports)}return d[c].exports}if(\"function\"==typeof __nr_require)return __nr_require;for(var c=0;c\u003Cf.length;c++)b(f[c]);return b}({1:[function(a,d,f){function b(a){try{c.console\u0026\u0026console.log(a)}catch(g){}}d=a(\"ee\");a=a(16);var c={};try{var h=localStorage.getItem(\"__nr_flags\").split(\",\");console\u0026\u0026\"function\"==typeof console.log\u0026\u0026(c.console=!0,-1!==h.indexOf(\"dev\")\u0026\u0026\n(c.dev=!0),-1!==h.indexOf(\"nr_dev\")\u0026\u0026(c.nrDev=!0))}catch(e){}c.nrDev\u0026\u0026d.on(\"internal-error\",function(a){b(a.stack)});c.dev\u0026\u0026d.on(\"fn-err\",function(a,c,h){b(h.stack)});c.dev\u0026\u0026(b(\"NR AGENT IN DEVELOPMENT MODE\"),b(\"flags: \"+a(c,function(a,c){return a}).join(\", \")))},{}],2:[function(a,d,f){function b(a,r,b,d,f){try{p?--p:h(f||new c(a,r,b),!0)}catch(x){try{e(\"ierr\",[x,k.now(),!0])}catch(y){}}return\"function\"==typeof l\u0026\u0026l.apply(this,g(arguments))}function c(a,c,b){this.message=a||\"Uncaught error with no additional information\";\nthis.sourceURL=c;this.line=b}function h(a,c){var b=c?null:k.now();e(\"err\",[a,b])}var e=a(\"handle\"),g=a(17);d=a(\"ee\");var k=a(\"loader\"),n=a(\"gos\"),l=window.onerror,m=!1,q=\"nr@seenError\",p=0;k.features.err=!0;a(1);window.onerror=b;try{throw Error();}catch(v){\"stack\"in v\u0026\u0026(a(8),a(7),\"addEventListener\"in window\u0026\u0026a(5),k.xhrWrappable\u0026\u0026a(9),m=!0)}d.on(\"fn-start\",function(a,c,b){m\u0026\u0026(p+=1)});d.on(\"fn-err\",function(a,c,b){m\u0026\u0026!b[q]\u0026\u0026(n(b,q,function(){return!0}),this.thrown=!0,h(b))});d.on(\"fn-end\",function(){m\u0026\u0026\n!this.thrown\u0026\u00260\u003Cp\u0026\u0026--p});d.on(\"internal-error\",function(a){e(\"ierr\",[a,k.now(),!0])})},{}],3:[function(a,d,f){a(\"loader\").features.ins=!0},{}],4:[function(a,d,f){function b(a){}if(window.performance\u0026\u0026window.performance.timing\u0026\u0026window.performance.getEntriesByType){d=a(\"ee\");var c=a(\"handle\");f=a(8);var h=a(7),e=\"learResourceTimings\",g=\"addEventListener\",k=\"resourcetimingbufferfull\",n=\"bstResource\",l=\"resource\",m=\"-start\",q=\"-end\",p=\"fn\"+m,v=\"fn\"+q,r=\"bstTimer\",w=\"pushState\",t=a(\"loader\");t.features.stn=\n!0;a(6);var u=NREUM.o.EV;d.on(p,function(a,c){var b=a[0];b instanceof u\u0026\u0026(this.bstStart=t.now())});d.on(v,function(a,b){var e=a[0];e instanceof u\u0026\u0026c(\"bst\",[e,b,this.bstStart,t.now()])});f.on(p,function(a,c,b){this.bstStart=t.now();this.bstType=b});f.on(v,function(a,b){c(r,[b,this.bstStart,t.now(),this.bstType])});h.on(p,function(){this.bstStart=t.now()});h.on(v,function(a,b){c(r,[b,this.bstStart,t.now(),\"requestAnimationFrame\"])});d.on(w+m,function(a){this.time=t.now();this.startPath=location.pathname+\nlocation.hash});d.on(w+q,function(a){c(\"bstHist\",[location.pathname+location.hash,this.startPath,this.time])});g in window.performance\u0026\u0026(window.performance[\"c\"+e]?window.performance[g](k,function(a){c(n,[window.performance.getEntriesByType(l)]);window.performance[\"c\"+e]()},!1):window.performance[g](\"webkit\"+k,function(a){c(n,[window.performance.getEntriesByType(l)]);window.performance[\"webkitC\"+e]()},!1));document[g](\"scroll\",b,{passive:!0});document[g](\"keypress\",b,!1);document[g](\"click\",b,!1)}},\n{}],5:[function(a,d,f){function b(a){for(;a\u0026\u0026!a.hasOwnProperty(k);)a=Object.getPrototypeOf(a);a\u0026\u0026c(a)}function c(a){e.inPlace(a,[k,n],\"-\",h)}function h(a,c){return a[1]}f=a(\"ee\").get(\"events\");var e=a(19)(f,!0),g=a(\"gos\");a=XMLHttpRequest;var k=\"addEventListener\",n=\"removeEventListener\";d.exports=f;\"getPrototypeOf\"in Object?(b(document),b(window),b(a.prototype)):a.prototype.hasOwnProperty(k)\u0026\u0026(c(window),c(a.prototype));f.on(k+\"-start\",function(a,c){var b=a[1],h=g(b,\"nr@wrapped\",function(){function a(){if(\"function\"==\ntypeof b.handleEvent)return b.handleEvent.apply(b,arguments)}var c={object:a,\"function\":b}[typeof b];return c?e(c,\"fn-\",null,c.name||\"anonymous\"):b});this.wrapped=a[1]=h});f.on(n+\"-start\",function(a){a[1]=this.wrapped||a[1]})},{}],6:[function(a,d,f){f=a(\"ee\").get(\"history\");a=a(19)(f);d.exports=f;a.inPlace(window.history,[\"pushState\",\"replaceState\"],\"-\")},{}],7:[function(a,d,f){f=a(\"ee\").get(\"raf\");var b=a(19)(f);a=\"equestAnimationFrame\";d.exports=f;b.inPlace(window,[\"r\"+a,\"mozR\"+a,\"webkitR\"+a,\"msR\"+\na],\"raf-\");f.on(\"raf-start\",function(a){a[0]=b(a[0],\"fn-\")})},{}],8:[function(a,d,f){function b(a,b,c){a[0]=h(a[0],\"fn-\",null,c)}function c(a,b,c){this.method=c;this.timerDuration=isNaN(a[1])?0:+a[1];a[0]=h(a[0],\"fn-\",this,c)}f=a(\"ee\").get(\"timer\");var h=a(19)(f);a=\"setTimeout\";var e=\"setInterval\",g=\"clearTimeout\",k=\"-start\",n=\"-\";d.exports=f;h.inPlace(window,[a,\"setImmediate\"],a+n);h.inPlace(window,[e],e+n);h.inPlace(window,[g,\"clearImmediate\"],g+n);f.on(e+k,b);f.on(a+k,c)},{}],9:[function(a,d,f){function b(a,\nb){n.inPlace(b,[\"onreadystatechange\"],\"fn-\",e)}function c(){var a=this,b=k.context(a);3\u003Ca.readyState\u0026\u0026!b.resolved\u0026\u0026(b.resolved=!0,k.emit(\"xhr-resolved\",[],a));n.inPlace(a,r,\"fn-\",e)}function h(){for(var a=0;a\u003Cw.length;a++)b([],w[a]);w.length\u0026\u0026(w=[])}function e(a,b){return b}function g(a,b){for(var c in a)b[c]=a[c];return b}a(5);f=a(\"ee\");var k=f.get(\"xhr\"),n=a(19)(k),l=NREUM.o,m=l.XHR,q=l.MO;a=l.PR;var p=l.SI,v=\"readystatechange\",r=\"onload onerror onabort onloadstart onloadend onprogress ontimeout\".split(\" \"),\nw=[];d.exports=k;d=window.XMLHttpRequest=function(a){a=new m(a);try{k.emit(\"new-xhr\",[a],a),a.addEventListener(v,c,!1)}catch(z){try{k.emit(\"internal-error\",[z])}catch(B){}}return a};if(g(m,d),d.prototype=m.prototype,n.inPlace(d.prototype,[\"open\",\"send\"],\"-xhr-\",e),k.on(\"send-xhr-start\",function(a,c){b(a,c);w.push(c);q\u0026\u0026(t?t.then(h):p?p(h):(u=-u,x.data=u))}),k.on(\"open-xhr-start\",b),q){var t=a\u0026\u0026a.resolve();if(!p\u0026\u0026!a){var u=1,x=document.createTextNode(u);(new q(h)).observe(x,{characterData:!0})}}else f.on(\"fn-end\",\nfunction(a){a[0]\u0026\u0026a[0].type===v||h()})},{}],10:[function(a,d,f){function b(a){var b=this.params,e=this.metrics;if(!this.ended){this.ended=!0;for(var d=0;d\u003Cn;d++)a.removeEventListener(k[d],this.listener,!1);if(!b.aborted){if(e.duration=c.now()-this.startTime,4===a.readyState){b.status=a.status;d=this.lastSize;var f=a.responseType;if(\"json\"!==f||null===d)d=\"arraybuffer\"===f||\"blob\"===f||\"json\"===f?a.response:a.responseText,d=q(d);(d\u0026\u0026(e.rxSize=d),this.sameOrigin)\u0026\u0026(d=a.getResponseHeader(\"X-NewRelic-App-Data\"))\u0026\u0026\n(b.cat=d.split(\", \").pop())}else b.status=0;e.cbTime=this.cbTime;g.emit(\"xhr-done\",[a],a);h(\"xhr\",[b,e,this.startTime])}}}var c=a(\"loader\");if(c.xhrWrappable){var h=a(\"handle\"),e=a(11),g=a(\"ee\"),k=[\"load\",\"error\",\"abort\",\"timeout\"],n=k.length,l=a(\"id\"),m=a(14),q=a(13),p=window.XMLHttpRequest;c.features.xhr=!0;a(9);g.on(\"new-xhr\",function(a){var c=this;c.totalCbs=0;c.called=0;c.cbTime=0;c.end=b;c.ended=!1;c.xhrGuids={};c.lastSize=null;m\u0026\u0026(34\u003Cm||10\u003Em)||window.opera||a.addEventListener(\"progress\",function(a){c.lastSize=\na.loaded},!1)});g.on(\"open-xhr-start\",function(a){this.params={method:a[0]};a=e(a[1]);var b=this.params;b.host=a.hostname+\":\"+a.port;b.pathname=a.pathname;this.sameOrigin=a.sameOrigin;this.metrics={}});g.on(\"open-xhr-end\",function(a,b){\"loader_config\"in NREUM\u0026\u0026\"xpid\"in NREUM.loader_config\u0026\u0026this.sameOrigin\u0026\u0026b.setRequestHeader(\"X-NewRelic-ID\",NREUM.loader_config.xpid)});g.on(\"send-xhr-start\",function(a,b){var e=this.metrics,d=a[0],h=this;e\u0026\u0026d\u0026\u0026(d=q(d))\u0026\u0026(e.txSize=d);this.startTime=c.now();this.listener=\nfunction(a){try{\"abort\"===a.type\u0026\u0026(h.params.aborted=!0),(\"load\"!==a.type||h.called===h.totalCbs\u0026\u0026(h.onloadCalled||\"function\"!=typeof b.onload))\u0026\u0026h.end(b)}catch(y){try{g.emit(\"internal-error\",[y])}catch(z){}}};for(e=0;e\u003Cn;e++)b.addEventListener(k[e],this.listener,!1)});g.on(\"xhr-cb-time\",function(a,b,c){this.cbTime+=a;b?this.onloadCalled=!0:this.called+=1;this.called!==this.totalCbs||!this.onloadCalled\u0026\u0026\"function\"==typeof c.onload||this.end(c)});g.on(\"xhr-load-added\",function(a,b){var c=\"\"+l(a)+!!b;\nthis.xhrGuids\u0026\u0026!this.xhrGuids[c]\u0026\u0026(this.xhrGuids[c]=!0,this.totalCbs+=1)});g.on(\"xhr-load-removed\",function(a,b){var c=\"\"+l(a)+!!b;this.xhrGuids\u0026\u0026this.xhrGuids[c]\u0026\u0026(delete this.xhrGuids[c],--this.totalCbs)});g.on(\"addEventListener-end\",function(a,b){b instanceof p\u0026\u0026\"load\"===a[0]\u0026\u0026g.emit(\"xhr-load-added\",[a[1],a[2]],b)});g.on(\"removeEventListener-end\",function(a,b){b instanceof p\u0026\u0026\"load\"===a[0]\u0026\u0026g.emit(\"xhr-load-removed\",[a[1],a[2]],b)});g.on(\"fn-start\",function(a,b,e){b instanceof p\u0026\u0026(\"onload\"===\ne\u0026\u0026(this.onload=!0),(\"load\"===(a[0]\u0026\u0026a[0].type)||this.onload)\u0026\u0026(this.xhrCbStart=c.now()))});g.on(\"fn-end\",function(a,b){this.xhrCbStart\u0026\u0026g.emit(\"xhr-cb-time\",[c.now()-this.xhrCbStart,this.onload,b],b)})}},{}],11:[function(a,d,f){d.exports=function(a){var b=document.createElement(\"a\"),d=window.location,e={};b.href=a;e.port=b.port;a=b.href.split(\":\/\/\");!e.port\u0026\u0026a[1]\u0026\u0026(e.port=a[1].split(\"\/\")[0].split(\"@\").pop().split(\":\")[1]);e.port\u0026\u0026\"0\"!==e.port||(e.port=\"https\"===a[0]?\"443\":\"80\");e.hostname=b.hostname||\nd.hostname;e.pathname=b.pathname;e.protocol=a[0];\"\/\"!==e.pathname.charAt(0)\u0026\u0026(e.pathname=\"\/\"+e.pathname);a=!b.protocol||\":\"===b.protocol||b.protocol===d.protocol;d=b.hostname===document.domain\u0026\u0026b.port===d.port;return e.sameOrigin=a\u0026\u0026(!b.hostname||d),e}},{}],12:[function(a,d,f){function b(){}function c(a,b,c){return function(){return h(a,[k.now()].concat(e(arguments)),b?null:this,c),b?void 0:this}}var h=a(\"handle\");f=a(16);var e=a(17),g=a(\"ee\").get(\"tracer\"),k=a(\"loader\"),n=NREUM;\"undefined\"==typeof window.newrelic\u0026\u0026\n(newrelic=n);a=\"setPageViewName setCustomAttribute setErrorHandler finished addToTrace inlineHit addRelease\".split(\" \");var l=\"api-\",m=l+\"ixn-\";f(a,function(a,b){n[b]=c(l+b,!0,\"api\")});n.addPageAction=c(l+\"addPageAction\",!0);n.setCurrentRouteName=c(l+\"routeName\",!0);d.exports=newrelic;n.interaction=function(){return(new b).get()};var q=b.prototype={createTracer:function(a,b){var c={},e=this,d=\"function\"==typeof b;return h(m+\"tracer\",[k.now(),a,c],e),function(){if(g.emit((d?\"\":\"no-\")+\"fn-start\",[k.now(),\ne,d],c),d)try{return b.apply(this,arguments)}catch(u){throw g.emit(\"fn-err\",[arguments,this,u],c),u;}finally{g.emit(\"fn-end\",[k.now()],c)}}}};f(\"actionText setName setAttribute save ignore onEnd getContext end get\".split(\" \"),function(a,b){q[b]=c(m+b)});newrelic.noticeError=function(a){\"string\"==typeof a\u0026\u0026(a=Error(a));h(\"err\",[a,k.now()])}},{}],13:[function(a,d,f){d.exports=function(a){if(\"string\"==typeof a\u0026\u0026a.length)return a.length;if(\"object\"==typeof a){if(\"undefined\"!=typeof ArrayBuffer\u0026\u0026a instanceof\nArrayBuffer\u0026\u0026a.byteLength)return a.byteLength;if(\"undefined\"!=typeof Blob\u0026\u0026a instanceof Blob\u0026\u0026a.size)return a.size;if(!(\"undefined\"!=typeof FormData\u0026\u0026a instanceof FormData))try{return JSON.stringify(a).length}catch(c){}}}},{}],14:[function(a,d,f){a=0;(f=navigator.userAgent.match(\/Firefox[\\\/\\s](\\d+\\.\\d+)\/))\u0026\u0026(a=+f[1]);d.exports=a},{}],15:[function(a,d,f){function b(a,b){if(!c||a!==c)return!1;if(!b)return!0;if(!h)return!1;for(var e=h.split(\".\"),d=b.split(\".\"),g=0;g\u003Cd.length;g++)if(d[g]!==e[g])return!1;\nreturn!0}var c=null,h=null;f=\/Version\\\/(\\S+)\\s+Safari\/;navigator.userAgent\u0026\u0026(a=navigator.userAgent,(f=a.match(f))\u0026\u0026-1===a.indexOf(\"Chrome\")\u0026\u0026-1===a.indexOf(\"Chromium\")\u0026\u0026(c=\"Safari\",h=f[1]));d.exports={agent:c,version:h,match:b}},{}],16:[function(a,d,f){function b(a,b){var d=[],e=\"\",f=0;for(e in a)c.call(a,e)\u0026\u0026(d[f]=b(e,a[e]),f+=1);return d}var c=Object.prototype.hasOwnProperty;d.exports=b},{}],17:[function(a,d,f){function b(a,b,e){b||(b=0);\"undefined\"==typeof e\u0026\u0026(e=a?a.length:0);var c=-1;e=e-b||0;\nfor(var d=Array(0\u003Ee?0:e);++c\u003Ce;)d[c]=a[b+c];return d}d.exports=b},{}],18:[function(a,d,f){d.exports={exists:\"undefined\"!=typeof window.performance\u0026\u0026window.performance.timing\u0026\u0026\"undefined\"!=typeof window.performance.timing.navigationStart}},{}],19:[function(a,d,f){function b(a){return!(a\u0026\u0026a instanceof Function\u0026\u0026a.apply\u0026\u0026!a[e])}var c=a(\"ee\"),h=a(17),e=\"nr@original\",g=Object.prototype.hasOwnProperty,k=!1;d.exports=function(a,d){function f(a,c,d,f){function g(){var b;try{var e=this;var g=h(arguments);\nvar k=\"function\"==typeof d?d(g,e):d||{}}catch(A){r([A,\"\",[g,e,f],k])}p(c+\"start\",[g,e,f],k);try{return b=a.apply(e,g)}catch(A){throw p(c+\"err\",[g,e,A],k),A;}finally{p(c+\"end\",[g,e,b],k)}}return b(a)?a:(c||(c=\"\"),g[e]=a,n(a,g),g)}function l(a,c,d,e){d||(d=\"\");var g,h=\"-\"===d.charAt(0);for(g=0;g\u003Cc.length;g++){var k=c[g];var l=a[k];b(l)||(a[k]=f(l,h?k+d:d,e,k))}}function p(b,c,e){if(!k||d){var g=k;k=!0;try{a.emit(b,c,e,d)}catch(y){r([y,b,c,e])}k=g}}function n(a,b){if(Object.defineProperty\u0026\u0026Object.keys)try{var c=\nObject.keys(a);return c.forEach(function(c){Object.defineProperty(b,c,{get:function(){return a[c]},set:function(b){return a[c]=b,b}})}),b}catch(y){r([y])}for(var d in a)g.call(a,d)\u0026\u0026(b[d]=a[d]);return b}function r(b){try{a.emit(\"internal-error\",b)}catch(t){}}return a||(a=c),f.inPlace=l,f.flag=e,f}},{}],ee:[function(a,d,f){function b(){}function c(a){function d(a){return a\u0026\u0026a instanceof b?a:a?k(a,g,h):h()}function f(b,c,e,g){if(!q.aborted||g){a\u0026\u0026a(b,c,e);e=d(e);g=u(b);for(var f=g.length,h=0;h\u003Cf;h++)g[h].apply(e,\nc);g=l[B[b]];return g\u0026\u0026g.push([C,b,c,e]),e}}function p(a,b){z[a]=u(a).concat(b)}function t(a,b){var c=z[a];if(c)for(var d=0;d\u003Cc.length;d++)c[d]===b\u0026\u0026c.splice(d,1)}function u(a){return z[a]||[]}function x(a){return m[a]=m[a]||c(f)}function y(a,b){n(a,function(a,c){b=b||\"feature\";B[c]=b;b in l||(l[b]=[])})}var z={},B={},C={on:p,addEventListener:p,removeEventListener:t,emit:f,get:x,listeners:u,context:d,buffer:y,abort:e,aborted:!1};return C}function h(){return new b}function e(){(l.api||l.feature)\u0026\u0026\n(q.aborted=!0,l=q.backlog={})}var g=\"nr@context\",k=a(\"gos\"),n=a(16),l={},m={},q=d.exports=c();q.backlog=l},{}],gos:[function(a,d,f){function b(a,b,d){if(c.call(a,b))return a[b];d=d();if(Object.defineProperty\u0026\u0026Object.keys)try{return Object.defineProperty(a,b,{value:d,writable:!0,enumerable:!1}),d}catch(k){}return a[b]=d,d}var c=Object.prototype.hasOwnProperty;d.exports=b},{}],handle:[function(a,d,f){function b(a,b,d,f){c.buffer([a],f);c.emit(a,b,d)}var c=a(\"ee\").get(\"handle\");d.exports=b;b.ee=c},{}],\nid:[function(a,d,f){function b(a){var b=typeof a;return!a||\"object\"!==b\u0026\u0026\"function\"!==b?-1:a===window?0:e(a,h,function(){return c++})}var c=1,h=\"nr@id\",e=a(\"gos\");d.exports=b},{}],loader:[function(a,d,f){function b(){if(!y++){var a=x.info=NREUM.info,b=q.getElementsByTagName(\"script\")[0];if(setTimeout(l.abort,3E4),!(a\u0026\u0026a.licenseKey\u0026\u0026a.applicationID\u0026\u0026b))return l.abort();n(u,function(b,c){a[b]||(a[b]=c)});k(\"mark\",[\"onload\",e()+x.offset],null,\"api\");var c=q.createElement(\"script\");c.src=\"https:\/\/\"+a.agent;\nb.parentNode.insertBefore(c,b)}}function c(){\"complete\"===q.readyState\u0026\u0026h()}function h(){k(\"mark\",[\"domContent\",e()+x.offset],null,\"api\")}function e(){return z.exists\u0026\u0026performance.now?Math.round(performance.now()):(g=Math.max((new Date).getTime(),g))-x.offset}var g=(new Date).getTime(),k=a(\"handle\"),n=a(16),l=a(\"ee\");f=a(15);var m=window,q=m.document,p=\"addEventListener\",v=\"attachEvent\",r=m.XMLHttpRequest,w=r\u0026\u0026r.prototype;NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:r,REQ:m.Request,\nEV:m.Event,PR:m.Promise,MO:m.MutationObserver};var t=\"\"+location,u={beacon:\"bam.nr-data.net\",errorBeacon:\"bam.nr-data.net\",agent:\"js-agent.newrelic.com\/nr-1099.min.js\"};r=r\u0026\u0026w\u0026\u0026w[p]\u0026\u0026!\/CriOS\/.test(navigator.userAgent);var x=d.exports={offset:g,now:e,origin:t,features:{},xhrWrappable:r,userAgent:f};a(12);q[p]?(q[p](\"DOMContentLoaded\",h,!1),m[p](\"load\",b,!1)):(q[v](\"onreadystatechange\",c),m[v](\"onload\",b));k(\"mark\",[\"firstbyte\",g],null,\"api\");var y=0,z=a(18)},{}]},{},[\"loader\",2,10,4,3]);\nNREUM.info={beacon:\"bam.nr-data.net\",errorBeacon:\"bam.nr-data.net\",licenseKey:\"c70aec2e53\",applicationID:\"188247744\",sa:1};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar date=new Date,expires,value;date.setTime(date.getTime()+2592E6);expires=date.toUTCString();value=-1!=",["escape",["macro",3],8,16],".search(\/[?|\u0026]utm_source=([^\u0026;]+?)?criteo(\u0026|#|;|$)\/i)?\"criteo\":\"other\";document.cookie=\"__utmz\\x3d\"+value+\"; expires\\x3d\"+expires+\"; path\\x3d\/\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",24],8,16],"},{event:\"setEmail\",email:",["escape",["macro",9],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",0],8,16],"},{event:\"viewHome\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",24],8,16],"},{event:\"setEmail\",email:",["escape",["macro",9],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",0],8,16],"},{event:\"viewBasket\",item:",["escape",["macro",25],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",24],8,16],"},{event:\"setEmail\",email:",["escape",["macro",9],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",0],8,16],"},{event:\"viewList\",item:",["escape",["macro",2],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",24],8,16],"},{event:\"setEmail\",email:",["escape",["macro",9],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",0],8,16],"},{event:\"viewItem\",item:",["escape",["macro",26],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",24],8,16],"},{event:\"setEmail\",email:",["escape",["macro",9],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",0],8,16],"},{event:\"trackTransaction\",id:",["escape",["macro",27],8,16],",deduplication:",["escape",["macro",5],8,16],",item:",["escape",["macro",7],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.__lc=window.__lc||{};window.__lc.license=9081330;(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"cdn.livechatinc.com\/tracking.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ca href=\"https:\/\/www.livechatinc.com\/chat-with\/9081330\/\"\u003EChat with us\u003C\/a\u003E,\npowered by \u003Ca href=\"https:\/\/www.livechatinc.com\/?welcome\" rel=\"noopener\" target=\"_blank\"\u003ELiveChat\u003C\/a\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:120727,hjsv:5};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _sf_async_config=_sf_async_config||{};_sf_async_config.uid=",["escape",["macro",28],8,16],";_sf_async_config.domain=\"konga.com\";(function(){window._sf_endpt=(new Date).getTime();var a=document.createElement(\"script\");a.setAttribute(\"language\",\"javascript\");a.setAttribute(\"type\",\"text\/javascript\");a.setAttribute(\"src\",\"\/\/static.chartbeat.com\/js\/chartbeat.js\");document.body.appendChild(a)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"keyword\" content=\"QJ_Vgb19j9WydSVZ1ZDKSPudSa4\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"289330097889280\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E \n\u003Cnoscript\u003E\u003Cimg height=\"0\" width=\"0\" border=\"0\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289330097889280\u0026amp;ev=NoScript\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6010886266753\",{value:\"0.00\",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6010886266753\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=",["escape",["macro",10],8,16],";window.dataLayer=window.dataLayer||[];dataLayer.push({userId:a})},50);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Edocument.write(unescape(\"\\x3cscript id\\x3d'pap_x2s6df8d' src\\x3d'\"+(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"konga.postaffiliatepro.com\/scripts\/jo3dhla' type\\x3d'text\/javascript'\\x3e%3C\/script%3E\"));\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003EPostAffTracker.setAccountId(\"default1\");try{PostAffTracker.track()}catch(a){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Etry{var __scP=\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\",__scS=document.createElement(\"script\");__scS.type=\"text\/javascript\";__scS.async=!0;__scS.src=__scP+\"d16fk4ms6rqz1v.cloudfront.net\/capture\/UAT\/konga.js\";document.getElementsByTagName(\"head\")[0].appendChild(__scS)}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/javascript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"1000496419991\",properties:{pixelId:\"16037\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"google-site-verification\" content=\"DrZSr4I7b4ITB-LaLUcDahBERJWU6G-8LLU_m0FxrK8\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l51qm\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"0\" width=\"0\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=l51qm\u0026amp;p_id=Twitter\"\u003E\n\u003Cimg height=\"0\" width=\"0\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=l51qm\u0026amp;p_id=Twitter\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"pushState"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gaEvent"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gaEvent"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"productDetailView"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"productDetailView"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"impressions"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"impressions"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"removeFromCart"
    },{
      "function":"_sw",
      "arg0":["macro",20],
      "arg1":"\/checkout\/successful\/"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"((.*)utm_source=(.*))|((.*)gclid=(.*))"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"\/cart\/overview"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"\/category"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"\/search"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"\/product"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"\/checkout\/successful\/"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"\/checkout\/complete-order"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",2],["add",0,24,25,34,9,10,11,12,13,14,15,16]],
    [["if",3,4],["add",1]],
    [["if",5,6],["add",2]],
    [["if",7,8],["add",3]],
    [["if",9,10],["add",4]],
    [["if",11,12],["add",5]],
    [["if",13,14],["add",6]],
    [["if",15,16],["add",7]],
    [["if",1,17],["add",8]],
    [["if",18],["add",17,26,27,28,29,30,31,32,33]],
    [["if",19,20],["add",18]],
    [["if",2,21],["add",19]],
    [["if",2,22],["add",20]],
    [["if",2,23],["add",21]],
    [["if",2,24],["add",21]],
    [["if",2,25],["add",22]],
    [["if",2,26],["add",23]],
    [["if",18,27],["add",35]]]
},
"runtime":[
[],[]
]
};
var f,aa=this,da=function(){if(null===ba){var a;a:{var b=aa.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&ca.test(d)){a=d;break a}}a=null}ba=a||""}return ba},ca=/^[\w+/_-]+[=]{0,2}$/,ba=null,ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},fa=function(a,b){function c(){}c.prototype=b.prototype;a.Yg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Hg=function(a,c,g){for(var d=Array(arguments.length-2),
e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ja=function(a,b){this.C=a;this.$e=b};ja.prototype.rf=function(){return this.C};ja.prototype.getData=function(){return this.$e};ja.prototype.getData=ja.prototype.getData;ja.prototype.getType=ja.prototype.rf;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ma=function(){this.za={};this.Sa=!1};ma.prototype.get=function(a){return this.za["dust."+a]};ma.prototype.set=function(a,b){!this.Sa&&(this.za["dust."+a]=b)};ma.prototype.has=function(a){return this.za.hasOwnProperty("dust."+a)};var na=function(a){var b=[],c;for(c in a.za)a.za.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ma.prototype.remove=function(a){!this.Sa&&delete this.za["dust."+a]};ma.prototype.N=function(){this.Sa=!0};var n=function(a){this.Da=new ma;this.i=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.i[Number(b)]=a[Number(b)]:this.Da.set(b,a[b]))};f=n.prototype;f.toString=function(){for(var a=[],b=0;b<this.i.length;b++){var c=this.i[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};f.set=function(a,b){if("length"==a){if(!ka(b))throw Error("RangeError: Length property must be a valid integer.");this.i.length=Number(b)}else ka(a)?this.i[Number(a)]=b:this.Da.set(a,b)};
f.get=function(a){return"length"==a?this.length():ka(a)?this.i[Number(a)]:this.Da.get(a)};f.length=function(){return this.i.length};f.ca=function(){for(var a=na(this.Da),b=0;b<this.i.length;b++)a.push(b+"");return new n(a)};f.remove=function(a){ka(a)?delete this.i[Number(a)]:this.Da.remove(a)};f.pop=function(){return this.i.pop()};f.push=function(a){return this.i.push.apply(this.i,Array.prototype.slice.call(arguments))};f.shift=function(){return this.i.shift()};
f.splice=function(a,b,c){return new n(this.i.splice.apply(this.i,arguments))};f.unshift=function(a){return this.i.unshift.apply(this.i,Array.prototype.slice.call(arguments))};f.has=function(a){return ka(a)&&this.i.hasOwnProperty(a)||this.Da.has(a)};n.prototype.unshift=n.prototype.unshift;n.prototype.splice=n.prototype.splice;n.prototype.shift=n.prototype.shift;n.prototype.push=n.prototype.push;n.prototype.pop=n.prototype.pop;n.prototype.remove=n.prototype.remove;n.prototype.getKeys=n.prototype.ca;
n.prototype.get=n.prototype.get;n.prototype.set=n.prototype.set;var oa=function(){function a(a,b){c[a]=b}function b(){c={};h=!1}var c={},d,e,g={},h=!1,k={add:a,dd:function(a,b,c){g[a]||(g[a]={});g[a][b]=c},create:function(g){var k={add:a,assert:function(a,b){if(!h){var k=c[a]||d;k&&k.apply(g,Array.prototype.slice.call(arguments,0));e&&e.apply(g,Array.prototype.slice.call(arguments,0))}},reset:b};k.add=k.add;k.assert=k.assert;k.reset=k.reset;return k},Bd:function(a){return g[a]?(b(),c=g[a],!0):!1},Ea:function(a){d=a},Fa:function(a){e=a},reset:b,Md:function(a){h=
a}};k.add=k.add;k.addToCache=k.dd;k.loadFromCache=k.Bd;k.registerDefaultPermission=k.Ea;k.registerGlobalPermission=k.Fa;k.reset=k.reset;k.setPermitAllAsserts=k.Md;return k};var pa=function(){function a(a,c){if(b[a]){if(b[a].sb+c>b[a].max)throw Error("Quota exceeded");b[a].sb+=c}}var b={},c=void 0,d=void 0,e={Tf:function(a){c=a},ed:function(){c&&a(c,1)},Uf:function(a){d=a},aa:function(b){d&&a(d,b)},og:function(a,c){b[a]=b[a]||{sb:0};b[a].max=c},qf:function(a){return b[a]&&b[a].sb||0},reset:function(){b={}},Ue:a};e.onFnConsume=e.Tf;e.consumeFn=e.ed;e.onStorageConsume=e.Uf;e.consumeStorage=e.aa;e.setMax=e.og;e.getConsumed=e.qf;e.reset=e.reset;e.consume=e.Ue;return e};var qa=function(a,b,c){this.O=a;this.I=b;this.ia=c;this.i=new ma};f=qa.prototype;f.add=function(a,b){this.i.Sa||(this.O.aa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b))};f.set=function(a,b){this.i.Sa||(this.ia&&this.ia.has(a)?this.ia.set(a,b):(this.O.aa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};f.get=function(a){return this.i.has(a)?this.i.get(a):this.ia?this.ia.get(a):void 0};
f.has=function(a){return!!this.i.has(a)||!(!this.ia||!this.ia.has(a))};f.L=function(){return this.O};f.N=function(){this.i.N()};qa.prototype.has=qa.prototype.has;qa.prototype.get=qa.prototype.get;qa.prototype.set=qa.prototype.set;qa.prototype.add=qa.prototype.add;var ra=function(){},sa=function(a){return"function"==typeof a},ta=function(a){return"string"==typeof a},ua=function(a){return"number"==typeof a&&!isNaN(a)},va=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},xa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ya=function(a,b){if(a&&va(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},za=function(a,b){if(!ua(a)||
!ua(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ba=function(a){return Math.round(Number(a))||0},Da=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ea=function(a){var b=[];if(va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ga=function(){return(new Date).getTime()},Ha=function(){this.prefix="gtm.";this.values={}};Ha.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ha.prototype.get=function(a){return this.values[this.prefix+a]};Ha.prototype.contains=function(a){return void 0!==this.get(a)};var Ia=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ja=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ka=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},La=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ma=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};var r=function(a,b){ma.call(this);this.Cd=a;this.lf=b};fa(r,ma);var Oa=function(a,b){for(var c,d=0;d<b.length&&!(c=Na(a,b[d]),c instanceof ja);d++);return c},Na=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof r))throw Error("Attempting to execute non-function "+b[0]+".");return c.o.apply(c,[a].concat(b.slice(1)))};r.prototype.toString=function(){return this.Cd};r.prototype.getName=function(){return this.Cd};r.prototype.getName=r.prototype.getName;r.prototype.ca=function(){return new n(na(this))};
r.prototype.getKeys=r.prototype.ca;r.prototype.o=function(a,b){var c,d={H:function(){return a},evaluate:function(b){var c=a;return va(b)?Na(c,b):b},Pa:function(b){return Oa(a,b)},L:function(){return a.L()},J:function(){c||(c=a.I.create(d));return c}};a.L().ed();return this.lf.apply(d,Array.prototype.slice.call(arguments,1))};r.prototype.invoke=r.prototype.o;var Pa=function(){ma.call(this)};fa(Pa,ma);Pa.prototype.ca=function(){return new n(na(this))};Pa.prototype.getKeys=Pa.prototype.ca;var Qa=/^([a-z]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,Ra={Fn:"function",Map:"Object",List:"Array"},Ta=function(a,b){for(var c=0;c<a.length;c++){var d=Qa.exec(a[c]);if(!d)throw Error("Internal Error");var e=d[1],g="!"===d[2],h=d[3],k=b[c],l=typeof k;if(null===k||"undefined"===l){if(g)throw Error("Required argument "+e+" not supplied.");}else if("*"!==h){var m=typeof k;k instanceof r?m="Fn":k instanceof n?m="List":k instanceof Pa&&(m="Map");if(m!=h)throw Error("Argument "+e+" does not match required type "+
(Ra[h]||h)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ua=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Va=function(a){if(null==a)return String(a);var b=Ua.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Wa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Xa=function(a){if(!a||"object"!=Va(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Wa(a,"constructor")&&!Wa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Wa(a,b)},x=function(a,b){var c=b||("array"==Va(a)?[]:{}),d;for(d in a)if(Wa(a,d)){var e=a[d];"array"==Va(e)?("array"!=Va(c[d])&&(c[d]=[]),c[d]=x(e,c[d])):Xa(e)?(Xa(c[d])||(c[d]={}),c[d]=x(e,c[d])):c[d]=e}return c};var Ya=function(a){if(a instanceof n){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Ya(a.get(d)));return b}if(a instanceof Pa){for(var e={},g=a.ca(),h=g.length(),k=0;k<h;k++)e[g.get(k)]=Ya(a.get(g.get(k)));return e}return a instanceof r?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Za(b[c]);var d=new qa(pa(),oa());return Ya(a.o.apply(a,[d].concat(b)))}:a},Za=function(a){if(va(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Za(a[c]));return new n(b)}if(Xa(a)){var d=
new Pa,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Za(a[e]));return d}if("function"===typeof a)return new r("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Ya(this.evaluate(c[d]));return Za(a.apply(a,c))});var g=typeof a;if(null===a||"string"===g||"number"===g||"boolean"===g)return a};var ab={control:function(a,b){return new ja(a,this.evaluate(b))},fn:function(a,b,c){var d=this.H(),e=this.evaluate(b);if(!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");var g=Array.prototype.slice.call(arguments,2);this.L().aa(a.length+g.length);return new r(a,function(){return function(a){for(var b=new qa(d.O,d.I,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof ja)return c[h];for(var p=e.get("length"),q=
0;q<p;q++)q<c.length?b.set(e.get(q),c[q]):b.set(e.get(q),void 0);b.set("arguments",new n(c));var t=Oa(b,g);if(t instanceof ja)return"return"===t.C?t.getData():t}}())},list:function(a){var b=this.L();b.aa(arguments.length);for(var c=new n,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.aa(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.L(),c=new Pa,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",g=this.evaluate(arguments[d+
1]),h=e.length;h+="string"===typeof g?g.length:1;b.aa(h);c.set(e,g)}return c},undefined:function(){}};var bb=function(){this.O=pa();this.I=oa();this.Qa=new qa(this.O,this.I)};f=bb.prototype;f.Z=function(a,b){var c=new r(a,b);c.N();this.Qa.set(a,c)};f.cd=function(a,b){ab.hasOwnProperty(a)&&this.Z(b||a,ab[a])};f.L=function(){return this.O};f.zb=function(){this.O=pa();this.Qa.O=this.O};f.lg=function(){this.I=oa();this.Qa.I=this.I};f.M=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.uc(c)};
f.uc=function(a){for(var b,c=0;c<arguments.length;c++){var d=Na(this.Qa,arguments[c]);b=d instanceof ja||d instanceof r||d instanceof n||d instanceof Pa||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};f.N=function(){this.Qa.N()};bb.prototype.makeImmutable=bb.prototype.N;bb.prototype.run=bb.prototype.uc;bb.prototype.execute=bb.prototype.M;bb.prototype.resetPermissions=bb.prototype.lg;bb.prototype.resetQuota=bb.prototype.zb;
bb.prototype.getQuota=bb.prototype.L;bb.prototype.addNativeInstruction=bb.prototype.cd;bb.prototype.addInstruction=bb.prototype.Z;var cb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var db={sg:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof n)for(var g=arguments[e],h=0;h<g.length();h++)c.push(g.get(h));else c.push(arguments[e]);return new n(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.o(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.o(a,this.get(e),e,this)&&d.push(this.get(e));return new n(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.o(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var g=e;g<d;g++)if(this.has(g)&&this.get(g)===
b)return g;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var g=e;0<=g;g--)if(this.has(g)&&this.get(g)===b)return g;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.o(a,this.get(e),e,this));return new n(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=0;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");var h;for(h=0;h<d;h++)if(this.has(h)){e=this.get(h);g=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=g;k<d;k++)this.has(k)&&(e=b.o(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=d-1;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
var h;for(h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);g=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=g;0<=k;k--)this.has(k)&&(e=b.o(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=cb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?
d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],g=b;g<c;g++)e.push(this.get(g));return new n(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.o(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=cb(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.o(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var y={vd:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},eb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),fb=new ja("break"),gb=new ja("continue");y.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};y.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
y.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=xa(eb,b))return Za(a[b].apply(a,cb(c)));throw Error("TypeError: "+b+" is not a function");
}if(a instanceof n){if(a.has(b)){var d=a.get(b);if(d instanceof r){var e=cb(c);e.unshift(this.H());return d.o.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=xa(db.sg,b)){var g=cb(c);g.unshift(this.H());return db[b].apply(a,g)}}if(a instanceof r||a instanceof Pa){if(a.has(b)){var h=a.get(b);if(h instanceof r){var k=cb(c);k.unshift(this.H());return h.o.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof r?a.getName():a.toString();if("hasOwnProperty"==
b)return a.has.apply(a,cb(c))}throw Error("TypeError: Object has no '"+b+"' property.");};y.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.H();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d};y["break"]=function(){return fb};y["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof ja)return d}};
y["continue"]=function(){return gb};y.af=function(a,b,c){var d=new n;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var g=[y.vd.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.H().set(a,this.evaluate(g))};y.df=function(a,b){return this.evaluate(a)/this.evaluate(b)};y.hf=function(a,b){return this.evaluate(a)==this.evaluate(b)};y.jf=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
y.nf=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.H();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var g=this.Pa(c);if(g instanceof ja){if("break"==g.C)break;if("return"==g.C)return g}}else if(b instanceof Pa||b instanceof n||b instanceof r)for(var h=b.ca(),k=h.length(),l=0;l<k;l++){d.set(a,h.get(l));var m=this.Pa(c);if(m instanceof ja){if("break"==m.C)break;if("return"==m.C)return m}}};y.get=function(a){return this.H().get(this.evaluate(a))};
y.pd=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof Pa||a instanceof n||a instanceof r?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c};y.sf=function(a,b){return this.evaluate(a)>this.evaluate(b)};y.tf=function(a,b){return this.evaluate(a)>=this.evaluate(b)};y.Af=function(a,b){return this.evaluate(a)===this.evaluate(b)};
y.Bf=function(a,b){return this.evaluate(a)!==this.evaluate(b)};y["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.Pa(d);if(e instanceof ja)return e};y.Jf=function(a,b){return this.evaluate(a)<this.evaluate(b)};y.Kf=function(a,b){return this.evaluate(a)<=this.evaluate(b)};y.Of=function(a,b){return this.evaluate(a)%this.evaluate(b)};y.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};y.Pf=function(a){return-this.evaluate(a)};y.Qf=function(a){return!this.evaluate(a)};
y.Rf=function(a,b){return this.evaluate(a)!=this.evaluate(b)};y["null"]=function(){return null};y.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};y.Id=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};y.Jd=function(a){return this.evaluate(a)};y.quote=function(a){return Array.prototype.slice.apply(arguments)};y["return"]=function(a){return new ja("return",this.evaluate(a))};
y.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof r||a instanceof n||a instanceof Pa)&&a.set(b,c);return c};y.rg=function(a,b){return this.evaluate(a)-this.evaluate(b)};
y["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!va(b)||!va(c))throw Error("Error: Malformed switch instruction.");for(var d,e=!1,g=0;g<b.length;g++)if(e||a===this.evaluate(b[g]))if(d=this.evaluate(c[g]),d instanceof ja){var h=d.C;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof ja&&("return"==d.C||"continue"==d.C)))return d};
y.ug=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};y["typeof"]=function(a){a=this.evaluate(a);return a instanceof r?"function":typeof a};y.undefined=function(){};y["var"]=function(a){for(var b=this.H(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
y["while"]=function(a,b,c,d){var e,g=this.evaluate(d);if(this.evaluate(c)&&(e=this.Pa(g),e instanceof ja)){if("break"==e.C)return;if("return"==e.C)return e}for(;this.evaluate(a);){e=this.Pa(g);if(e instanceof ja){if("break"==e.C)break;if("return"==e.C)return e}this.evaluate(b)}};var ib=function(){this.ud=!1;this.F=new bb;hb(this);this.ud=!0};ib.prototype.Gf=function(){return this.ud};ib.prototype.isInitialized=ib.prototype.Gf;ib.prototype.M=function(a){this.F.I.Bd(String(a[0]))||(this.F.I.reset(),this.F.I.Md(!0));return this.F.uc(a)};ib.prototype.execute=ib.prototype.M;ib.prototype.N=function(){this.F.N()};ib.prototype.makeImmutable=ib.prototype.N;
var hb=function(a){function b(a,b){e.F.cd(a,String(b))}function c(a,b){e.F.Z(String(d[a]),b)}var d=y.vd,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",y.add);c("AND",y.and);c("APPLY",y.apply);c("ASSIGN",y.assign);c("BREAK",y["break"]);c("CASE",y["case"]);c("CONTINUE",y["continue"]);c("DEFAULT",y["case"]);c("DEFN",y.af);c("DIVIDE",y.df);c("EQUALS",y.hf);c("EXPRESSION_LIST",y.jf);c("FOR_IN",y.nf);c("GET",y.get);c("GET_INDEX",
y.pd);c("GET_PROPERTY",y.pd);c("GREATER_THAN",y.sf);c("GREATER_THAN_EQUALS",y.tf);c("IDENTITY_EQUALS",y.Af);c("IDENTITY_NOT_EQUALS",y.Bf);c("IF",y["if"]);c("LESS_THAN",y.Jf);c("LESS_THAN_EQUALS",y.Kf);c("MODULUS",y.Of);c("MULTIPLY",y.multiply);c("NEGATE",y.Pf);c("NOT",y.Qf);c("NOT_EQUALS",y.Rf);c("NULL",y["null"]);c("OR",y.or);c("POST_DECREMENT",y.Id);c("POST_INCREMENT",y.Id);c("PRE_DECREMENT",y.Jd);c("PRE_INCREMENT",y.Jd);c("QUOTE",y.quote);c("RETURN",y["return"]);c("SET_PROPERTY",y.setProperty);
c("SUBTRACT",y.rg);c("SWITCH",y["switch"]);c("TERNARY",y.ug);c("TYPEOF",y["typeof"]);c("VAR",y["var"]);c("WHILE",y["while"])};ib.prototype.Z=function(a,b){this.F.Z(a,b)};ib.prototype.addInstruction=ib.prototype.Z;ib.prototype.L=function(){return this.F.L()};ib.prototype.getQuota=ib.prototype.L;ib.prototype.zb=function(){this.F.zb()};ib.prototype.resetQuota=ib.prototype.zb;ib.prototype.Ea=function(a){this.F.I.Ea(a)};ib.prototype.Fa=function(a){this.F.I.Fa(a)};
ib.prototype.qb=function(a,b,c){this.F.I.dd(a,b,c)};var jb=function(){this.wb={}};jb.prototype.get=function(a){return this.wb.hasOwnProperty(a)?this.wb[a]:void 0};jb.prototype.add=function(a,b){if(this.wb.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(!b)throw"Attempting to add an undefined function: "+a+".";var c=new r(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.N();this.wb[a]=c};
jb.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var z=window,A=document,kb=navigator,lb=A.currentScript&&A.currentScript.src,mb=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},nb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ob=function(a,b,c){var d=A.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;nb(d,b);c&&(d.onerror=c);da()&&d.setAttribute("nonce",da());var e=A.getElementsByTagName("script")[0]||A.body||A.head;
e.parentNode.insertBefore(d,e);return d},pb=function(){if(lb){var a=lb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},qb=function(a,b){var c=A.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=A.body&&A.body.lastChild||A.body||A.head;d.parentNode.insertBefore(c,d);nb(c,b);void 0!==a&&(c.src=a);return c},rb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=
function(){d.onerror=null;c&&c()};d.src=a},sb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},tb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},B=function(a){z.setTimeout(a,0)},vb=function(a){var b=A.getElementById(a);if(b&&ub(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(ub(document.all[a][c],"id")==a)return document.all[a][c];return b},ub=function(a,b){return a&&b&&a.attributes&&
a.attributes[b]?a.attributes[b].value:null},wb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},yb=function(a){var b=A.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},zb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ab=function(a){kb.sendBeacon&&kb.sendBeacon(a)||rb(a)};var Bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Cb=/:[0-9]+$/,Db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")==b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Fb=function(a,b,c,d,e){var g,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(z.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":g=Eb(a);break;case "protocol":g=k;break;case "host":g=(a.hostname||z.location.hostname).replace(Cb,
"").toLowerCase();if(c){var l=/^www\d*\./.exec(g);l&&l[0]&&(g=g.substr(l[0].length))}break;case "port":g=String(Number(a.hostname?a.port:z.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":g="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=g.split("/");0<=xa(d||[],m[m.length-1])&&(m[m.length-1]="");g=m.join("/");break;case "query":g=a.search.replace("?","");e&&(g=Db(g,e));break;case "extension":var p=a.pathname.split(".");g=1<p.length?p[p.length-1]:"";g=g.split("/")[0];
break;case "fragment":g=a.hash.replace("#","");break;default:g=a&&a.href}return g},Eb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},E=function(a){var b=document.createElement("a");a&&(Bb.test(a),b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Ib=function(){this.Ua=new ib;var a=new jb;a.addAll(Gb());Hb(this,function(b){return a.get(b)})},Gb=function(){return{callInWindow:Jb,callLater:Kb,copyFromWindow:Lb,createQueue:Nb,createArgumentsQueue:Ob,encodeURI:Pb,encodeURIComponent:Qb,getReferrer:Rb,getUrl:Sb,getUrlFragment:Tb,isPlainObject:Ub,injectHiddenIframe:Vb,injectScript:Wb,logToConsole:Xb,queryPermission:Yb,removeUrlFragment:Zb,replaceAll:$b,sendPixel:ac,setInWindow:bc}};Ib.prototype.M=function(a){return this.Ua.M(a)};
Ib.prototype.execute=Ib.prototype.M;var Hb=function(a,b){a.Ua.Z("require",b)};Ib.prototype.Ea=function(a){this.Ua.Ea(a)};Ib.prototype.Fa=function(a){this.Ua.Fa(a)};Ib.prototype.qb=function(a,b,c){this.Ua.qb(a,b,c)};function Jb(a,b){Ta(["path:!string"],[a]);for(var c=a.split("."),d=z,e=d[c[0]],g=1;e&&g<c.length;g++)d=e,e=e[c[g]];if("function"==Va(e)){for(var h=[],k=1;k<arguments.length;k++)h.push(Ya(arguments[k]));e.apply(d,h)}}
function Kb(a){Ta(["fn:!Fn"],arguments);var b=this.H();B(function(){a instanceof r&&a.o(b)})}function Lb(a){Ta(["path:!string"],arguments);this.J().assert("access_globals","read",a);var b=a.split("."),c=z,d;for(d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c||null===c)return;return Za(c[b[d]])}function Rb(){return A.referrer}
function Sb(a,b,c,d){Ta(["component:!string","stripWww:?boolean","defaultPages:?List","queryKey:?string"],arguments);this.J().assert("get_url",a,d);var e=z.location.href,g;if(c){g=[];for(var h=0;h<c.length();h++){var k=c.get(h);"string"==typeof k&&g.push(k)}}return Fb(E(e),a,b,g,d)}function Tb(a){Ta(["url:!string"],arguments);return Fb(E(a),"fragment")}function Ub(a){return a instanceof Pa}
function Vb(a,b){Ta(["url:!string","onSuccess:?Fn"],arguments);this.J().assert("inject_hidden_iframe",a);var c=this.H();qb(a,function(){b instanceof r&&b.o(c)})}var cc={};
function Wb(a,b,c,d){Ta(["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);this.J().assert("inject_script",a);var e=this.H(),g=function(){b instanceof r&&b.o(e)},h=function(){c instanceof r&&c.o(e)};if(d){var k=d;cc[k]?(cc[k].onSuccess.push(g),cc[k].onFailure.push(h)):(cc[k]={onSuccess:[g],onFailure:[h]},g=function(){for(var a=cc[k].onSuccess,b=0;b<a.length;b++)B(a[b]);a.push=function(a){B(a);return 0}},h=function(){for(var a=cc[k].onFailure,b=0;b<a.length;b++)B(a[b]);
cc[k]=null},ob(a,g,h))}else ob(a,g,h)}function Xb(){try{this.J().assert("logging")}catch(c){return}for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Ya(a[b]);console.log.apply(console,a)}function Zb(a){return Eb(E(a))}function $b(a,b,c){Ta(["string:!string","regex:!string","replacement:!string"],arguments);return a.replace(new RegExp(b,"g"),c)}
function ac(a,b,c){Ta(["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);this.J().assert("send_pixel",a);var d=this.H();rb(a,function(){b instanceof r&&b.o(d)},function(){c instanceof r&&c.o(d)})}function bc(a,b,c){Ta(["path:!string","value:?*","overrideExisting:?boolean"],arguments);this.J().assert("access_globals","readwrite",a);var d=a.split("."),e=z,g;for(g=0;g<d.length-1;g++)if(e=e[d[g]],void 0===e)return!1;return void 0===e[d[g]]||c?(e[d[g]]=Ya(b),!0):!1}
function Nb(a){Ta(["path:!string"],arguments);this.J().assert("access_globals","readwrite",a);var b=dc(a),c=a.split(".").pop(),d=b[c];void 0===d&&(d=[],b[c]=d);return Za(function(){if(!sa(d.push))throw Error("Object at "+a+" in window is not an array.");fc(arguments);d.push.apply(d,Array.prototype.slice.call(arguments,0))})}
function Ob(a,b){Ta(["functionPath:!string","arrayPath:!string"],arguments);this.J().assert("access_globals","readwrite",a);this.J().assert("access_globals","readwrite",b);var c=dc(a),d=a.split(".").pop(),e=c[d];if(e&&!sa(e))return null;if(e){var g=e;e=function(){fc(arguments);g.apply(g,Array.prototype.slice.call(arguments,0))};return Za(e)}var h;e=function(){if(!sa(h.push))throw Error("Object at "+b+" in window is not an array.");h.push.call(h,arguments)};c[d]=e;var k=dc(b),l=b.split(".").pop();
h=k[l];void 0===h&&(h=[],k[l]=h);return Za(function(){fc(arguments);e.apply(e,Array.prototype.slice.call(arguments,0))})}function fc(a){for(var b=0;b<a.length;b++){var c=a[b];c&&ea(c)&&Object.defineProperty(c,"gtm",{value:{fromContainer:!0}})}}function dc(a){for(var b=a.split("."),c=z,d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c)throw Error("Path "+a+" does not exist.");return c}
function Yb(a,b){Ta(["permission:!string"],[a]);try{return this.J().assert.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}}function Pb(a){Ta(["uri:!string"],arguments);return encodeURI(a)}function Qb(a){Ta(["uri:!string"],arguments);return encodeURIComponent(a)};
var gc=[],hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ic=function(a){return hc[a]},jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,oc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},pc=function(a){return oc[a]};
gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(nc,pc)+"'"}};var xc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,yc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},zc=function(a){return yc[a]};gc[16]=function(a){return a};var Bc,Cc=[],Dc=[],Ec=[],Fc=[],Hc=[],Ic={},Jc,Kc,Lc,Mc=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Nc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!Ic[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Ic[b](d):Bc(b,d)},Pc=function(a,b,c,d){c=c||[];d=d||ra;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Oc(a[g],b,c,d));return e},
Qc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ic[b];return c?c.b||0:0},Oc=function(a,b,c,d){if(va(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Oc(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Cc[h];if(!k||b(k))return;c[h]=!0;try{var l=Pc(k,b,c,d);e=Nc(l);Lc&&(e=Lc.We(e,l))}catch(D){d(h,D),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=2)e[Oc(a[m],
b,c,d)]=Oc(a[m+1],b,c,d);return e;case "template":e=[];for(var p=!1,q=1;q<a.length;q++){var t=Oc(a[q],b,c,d);Kc&&(p=p||t===Kc.kb);e.push(t)}return Kc&&p?Kc.Xe(e):e.join("");case "escape":e=Oc(a[1],b,c,d);if(Kc&&va(a[1])&&"macro"===a[1][0]&&Kc.Hf(a))return Kc.$f(e);e=String(e);for(var u=2;u<a.length;u++)gc[a[u]]&&(e=gc[a[u]](e));return e;case "tag":var v=a[1];if(!Fc[v])throw Error("Unable to resolve tag reference "+v+".");return e={kd:a[2],index:v};case "zb":var w={arg0:a[2],arg1:a[3],ignore_case:a[5]};
w["function"]=a[1];var C=Rc(w,b,c,d);a[4]&&(C=!C);return C;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Rc=function(a,b,c,d){try{return Jc(Pc(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Sc=null,Wc=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Sc=Tc(a,Uc()||function(){});for(var e=0;e<Dc.length;e++){var g=Dc[e],h=Vc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}var m=[];for(e=0;e<Fc.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Vc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Sc(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Sc(e[c]);if(null===
d)return null;if(d)return!1}return!0};var Tc=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Rc(Ec[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Xc,Yc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Ge&&(h["fix_"+k]=!0),h.ld=h.ld||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=q.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,D:b.D,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||g.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],D:d,Za:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},t=function(){for(var b in l)if(l[b].test(a)){var c=q[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.ld&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.zd=function(){return this[this.length-1]};d.ic=function(a){var b=this.zd();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.Ve=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Za=b.test(a.tagName)||a.Za);return a},g=t,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.ic("TABLE")?(a="<TBODY>"+a,m()):h.Mg&&c.test(e)&&d.Ve(e)?d.ic(e)?k():(a="</"+b.tagName+">"+a,m()):b.Za||d.push(b)},endTag:function(a){d.zd()?h.kf&&!d.ic(a.tagName)?k():d.pop():h.kf&&(g(),m())}},m=function(){var b=a,c=e(g());a=b;if(c&&
l[c.type])l[c.type](c)};t=function(){m();return e(g())}}();return{append:function(b){a+=b},eg:t,Sg:function(a){for(var b;(b=t())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Tg:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.Zg="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Vg=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.$g=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.D){var d=a.D[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Za?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.Lg=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Le=a.Le||!b[h]&&h;Xc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function g(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(u){var b=[];c(a,function(a){b.push(a)});return b}}var k={xe:a,ye:a,ze:a,Ae:a,He:a,Ie:function(a){return a},done:a,error:function(a){throw a;},ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var g=a.getAttribute(e);return b(g)?String(g):g}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,$a:d.defaultView||d.parentWindow,ya:d,yb:Xc("",{Ge:!0}),Xb:[b],qc:"",sc:d.createElement(b.nodeName),Xa:[],la:[]});a(this.sc,"proxyof",0)}g.prototype.write=function(){[].push.apply(this.la,arguments);for(var a;!this.tb&&this.la.length;)a=this.la.shift(),"function"===typeof a?this.Pe(a):this.Cc(a)};g.prototype.Pe=function(a){var b={type:"function",value:a.name||a.toString()};this.mc(b);a.call(this.$a,this.ya);this.Fd(b)};
g.prototype.Cc=function(a){this.yb.append(a);for(var b,c=[],d,e;(b=this.yb.eg())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.Ag(c);d&&this.uf(b);e&&this.vf(b)};g.prototype.Ag=function(a){var b=this.Me(a);b.bd&&(b.cc=this.qc+b.bd,this.qc+=b.dg,this.sc.innerHTML=b.cc,this.xg())};g.prototype.Me=function(a){var b=this.Xb.length,d=[],e=[],g=[];c(a,function(a){d.push(a.text);if(a.D){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.D.id&&"ps-style"!==a.D.id&&g.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Za?" />":">"))}}else e.push(a.text),g.push("endTag"===a.type?a.text:"")});return{ah:a,raw:d.join(""),bd:e.join(""),dg:g.join("")}};g.prototype.xg=function(){for(var c,d=[this.sc];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.Xb[a(c,"id")]=c,a(c,"id",null));var g=c.parentNode&&a(c.parentNode,"proxyof");
g&&this.Xb[g].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};g.prototype.uf=function(a){var b=this.yb.clear();b&&this.la.unshift(b);a.src=a.D.src||a.D.Eg;a.src&&this.Xa.length?this.tb=a:this.mc(a);var c=this;this.zg(a,function(){c.Fd(a)})};g.prototype.vf=function(a){var b=this.yb.clear();b&&this.la.unshift(b);a.type=a.D.type||a.D.Fg||"text/css";this.Bg(a);b&&this.write()};g.prototype.Bg=function(a){var b=this.Oe(a);this.Ff(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.ya.createTextNode(a.content)))};g.prototype.Oe=function(a){var b=this.ya.createElement(a.tagName);b.setAttribute("type",a.type);d(a.D,function(a,c){b.setAttribute(a,c)});return b};g.prototype.Ff=function(a){this.Cc('<span id="ps-style"/>');var b=this.ya.getElementById("ps-style");b.parentNode.replaceChild(a,b)};g.prototype.mc=function(a){a.Vf=this.la;this.la=[];this.Xa.unshift(a)};g.prototype.Fd=function(a){a!==this.Xa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Xa.shift(),this.write.apply(this,a.Vf),!this.Xa.length&&this.tb&&(this.mc(this.tb),this.tb=null))};g.prototype.zg=function(a,b){var c=this.Ne(a),d=this.pg(c),e=this.options.xe;a.src&&(c.src=a.src,this.ng(c,d?e:function(){b();e()}));try{this.Ef(c),a.src&&!d||b()}catch(F){this.options.error(F),b()}};g.prototype.Ne=function(a){var b=this.ya.createElement(a.tagName);d(a.D,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};g.prototype.Ef=function(a){this.Cc('<span id="ps-script"/>');
var b=this.ya.getElementById("ps-script");b.parentNode.replaceChild(a,b)};g.prototype.ng=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};g.prototype.pg=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.ig&&a.src&&a.hasAttribute("async"))};
return g}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.ye(),a.stream=c.apply(null,a),b.ze())}function c(c,g,k){function l(a){a=k.Ie(a);w.write(a);k.Ae(a)}w=new p(c,k);w.id=d++;w.name=k.name||w.id;var m=c.ownerDocument,q={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var t=w.$a.onerror||a;w.$a.onerror=function(a,b,c){k.error({Pg:a+
" - "+b+":"+c});t.apply(w.$a,arguments)};w.write(g,function(){e(m,q);w.$a.onerror=t;k.done();w=null;b()});return w}var d=0,m=[],w=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=g(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Ng?c[0]:c;var h=[c,d,e];c.Zf={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.He(h);m.push(h);w||b();return c.Zf},{streams:{},Rg:m,Gg:p})}();Yc=l.postscribe}})();var Zc={},$c=null;Zc.s="GTM-PFGQ893";Zc.ob="as3";var ad="www.googletagmanager.com/gtm.js";var bd=ad,cd=null,dd=null,ed="//www.googletagmanager.com/a?id="+Zc.s+"&cv=23",fd={},gd={},hd=function(){var a=$c.sequence||0;$c.sequence=a+1;return a};var H=function(a,b,c,d){return(2===id()||d||"http:"!=z.location.protocol?a:b)+c},id=function(){var a=pb(),b;if(1===a)a:{var c=bd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=A.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var jd=!1;var J=function(){var a=function(a){return{toString:function(){return a}}};return{Gc:a("convert_case_to"),Hc:a("convert_false_to"),Ic:a("convert_null_to"),Jc:a("convert_true_to"),Kc:a("convert_undefined_to"),sa:a("function"),ne:a("instance_name"),oe:a("live_only"),pe:a("malware_disabled"),qe:a("once_per_event"),Yc:a("once_per_load"),Zc:a("setup_tags"),se:a("tag_id"),$c:a("teardown_tags")}}();var ld=new Ha,md={},pd={set:function(a,b){x(nd(a,b),md)},get:function(a){return od(a,2)},reset:function(){ld=new Ha;md={}}},od=function(a,b){return 2!=b?ld.get(a):qd(a)},qd=function(a,b,c){var d=a.split(".");return sd(d)},sd=function(a){for(var b=md,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var vd=function(a,b){ld.set(a,b);x(nd(a,b),md)},nd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var wd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),xd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},yd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var zd=function(a){var b=od("gtm.whitelist");var c=b&&Ma(Ea(b),xd),d=od("gtm.blacklist")||od("tagTypeBlacklist")||[];
wd.test(z.location&&z.location.hostname)&&(d=Ea(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Ma(Ea(d),yd),g={};return function(h){var k=h&&h[J.sa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=gd[k]||[],m=a(k);if(b){var p;if(p=m)a:{if(0>xa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>xa(c,l[q])){p=
!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var u;if(!(u=0<=xa(e,k)))a:{for(var v=l||[],w=new Ha,C=0;C<e.length;C++)w.set(e[C],!0);for(var D=0;D<v.length;D++)if(w.get(v[D])){u=!0;break a}u=!1}t=u}return g[k]=!m||t}};var Cd={We:function(a,b){b[J.Gc]&&"string"===typeof a&&(a=1==b[J.Gc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(J.Ic)&&null===a&&(a=b[J.Ic]);b.hasOwnProperty(J.Kc)&&void 0===a&&(a=b[J.Kc]);b.hasOwnProperty(J.Jc)&&!0===a&&(a=b[J.Jc]);b.hasOwnProperty(J.Hc)&&!1===a&&(a=b[J.Hc]);return a}};var Dd=function(a,b,c){this.Yf=a;this.Wf=b;this.Nf=c};fa(Dd,Error);Dd.prototype.getParameters=function(){return this.Wf};var Ed=function(a){var b=$c.zones;!b&&a&&(b=$c.zones=a());return b},Fd={active:!0,isWhitelisted:function(){return!0}};var Gd=!1,Hd=0,Id=[];function Jd(a){if(!Gd){var b=A.createEventObject,c="complete"==A.readyState,d="interactive"==A.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Gd=!0;for(var e=0;e<Id.length;e++)B(Id[e])}Id.push=function(){for(var a=0;a<arguments.length;a++)B(arguments[a]);return 0}}}function Kd(){if(!Gd&&140>Hd){Hd++;try{A.documentElement.doScroll("left"),Jd()}catch(a){z.setTimeout(Kd,50)}}}var Ld=function(a){Gd?a():Id.push(a)};var Md=function(){function a(a){return!ua(a)||0>a?0:a}if(!$c._li&&z.performance&&z.performance.timing){var b=z.performance.timing.navigationStart,c=ua(pd.get("gtm.start"))?pd.get("gtm.start"):0;$c._li={cst:a(c-b),cbt:a(cd-b)}}};var Nd=!1,Od=function(){return z.GoogleAnalyticsObject&&z[z.GoogleAnalyticsObject]};var Pd=function(a){z.GoogleAnalyticsObject||(z.GoogleAnalyticsObject=a||"ga");var b=z.GoogleAnalyticsObject;if(!z[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);z[b]=c}Md();return z[b]},Qd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Od();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Rd=!1;var Xd=function(a){};function Wd(a,b){b.containerId=Zc.s;return{type:a,value:b}};
var Yd=function(){return"&tc="+Fc.filter(function(a){return a}).length},Zd="0.005000">Math.random(),$d=function(){var a=0,b=0;return{If:function(){if(2>a)return!1;1E3<=Ga()-b&&(a=0);return 2<=a},gg:function(){1E3<=Ga()-b&&(a=0);a++;b=Ga()}}},ae="",be=function(){ae=[ed,"&v=3&t=t","&pid="+za(),"&rv="+Zc.ob].join("")},ce={},de="",ee=void 0,fe={},ge={},he=void 0,ie=null,je=1E3,ke=function(){var a=ee;return void 0===a?"":[ae,ce[a]?"":"&es=1",fe[a],Yd(),de,"&z=0"].join("")},le=function(){he&&
(z.clearTimeout(he),he=void 0);void 0===ee||ce[ee]&&!de||(ge[ee]||ie.If()||0>=je--?ge[ee]=!0:(ie.gg(),rb(ke()),ce[ee]=!0,de=""))},me=function(a,b,c){if(Zd&&!ge[a]&&b){a!==ee&&(le(),ee=a);var d=c+String(b[J.sa]||"").replace(/_/g,"");de=de?de+"."+d:"&tr="+d;he||(he=z.setTimeout(le,500));2022<=ke().length&&le()}};function ne(a,b,c,d,e,g){var h=Fc[a],k=oe(a,b,c,d,e,g);if(!k)return null;var l=Oc(h[J.Zc],g.fa,[],pe());if(l&&l.length){var m=l[0];k=ne(m.index,b,k,1===m.kd?e:k,e,g)}return k}
function oe(a,b,c,d,e,g){function h(){if(k[J.pe])d();else{var b=Pc(k,g.fa,[],l),e=!1;b.vtp_gtmOnSuccess=function(){if(!e){e=!0;me(g.id,Fc[a],"5");c()}};b.vtp_gtmOnFailure=function(){if(!e){e=!0;me(g.id,Fc[a],"6");d()}};b.vtp_gtmTagId=k.tag_id;me(g.id,k,"1");try{Nc(b)}catch(F){Xd(F);
me(g.id,k,"7");e||(e=!0,d())}}}var k=Fc[a];if(g.fa(k))return null;var l=pe(),m=Oc(k[J.$c],g.fa,[],l);if(m&&m.length){var p=m[0],q=ne(p.index,b,c,d,e,g);if(!q)return null;c=q;d=2===p.kd?e:q}if(k[J.Yc]||k[J.qe]){var t=k[J.Yc]?Hc:b,u=c,v=d;if(!t[a]){h=Ja(h);var w=qe(a,t,h);c=w.V;d=w.Aa}return function(){t[a](u,v)}}return h}
function qe(a,b,c){var d=[],e=[];b[a]=re(d,e,c);return{V:function(){b[a]=se;for(var c=0;c<d.length;c++)d[c]()},Aa:function(){b[a]=te;for(var c=0;c<e.length;c++)e[c]()}}}function re(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function se(a){a()}function te(a,b){b()}function pe(){return function(a,b){Xd(b)}};function ue(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ja(function(){b++;d&&b>=c&&a()})},Ee:function(){d=!0;b>=c&&a()}}}function ve(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Od,k=b.Od;g=h>k?1:h<k?-1:0}return g}
function we(a,b){if(!Zd)return;var c=function(a){var d=b.fa(Fc[a])?"3":"4",g=Oc(Fc[a][J.Zc],b.fa,[],ra);g&&g.length&&c(g[0].index);me(b.id,Fc[a],d);var h=Oc(Fc[a][J.$c],b.fa,[],ra);h&&h.length&&c(h[0].index)};c(a);}var xe=!1;function Uc(){return function(a,b){Xd(b)}};var ye=function(a,b){var c=Mc(a,b),d;for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Fc.push(c);return Fc.length-1};var O={Hb:"event_callback",Ib:"event_timeout"};var ze={},Be=function(a){var b=Zc.s;return function(){var c=arguments[0];if(c&&(ze[c]||ze.all)){var d=a.apply(void 0,Array.prototype.slice.call(arguments,0));ze[c]&&Ae(b,c,ze[c],d);ze.all&&Ae(b,c,ze.all,d)}}};
function Ae(a,b,c,d){for(var e=0;e<c.length;e++){var g=void 0,h="An in-page policy denied the permission request";try{g=c[e].call(void 0,a,b,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!g)throw new Dd(b,{},h);}};var Ce=/[A-Z]+/,De=/\s/,Ee=function(a){if(ta(a)&&(a=a.trim(),!De.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ce.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}};var Fe=null,Ge={},He={},Ie;function Je(){Fe=Fe||!$c.gtagRegistered;$c.gtagRegistered=!0;return Fe}var Ke=function(a,b){var c={event:a};b&&(c.eventModel=x(b),b[O.Hb]&&(c.eventCallback=b[O.Hb]),b[O.Ib]&&(c.eventTimeout=b[O.Ib]));return c};
function Le(a){if(void 0===He[a.id]){var b;switch(a.prefix){case "UA":b=ye("gtagua",{trackingId:a.id});break;case "AW":b=ye("gtagaw",{conversionId:a});break;case "DC":b=ye("gtagfl",{targetId:a.id});break;case "GF":b=ye("gtaggf",{conversionId:a});break;case "G":b=ye("get",{trackingId:a.id,isAutoTag:!0});break;case "HA":b=ye("gtagha",{conversionId:a});break;default:return}if(!Ie){var c=Mc("v",{name:"send_to",dataLayerVersion:2});Cc.push(c);Ie=["macro",Cc.length-1]}var d={arg0:Ie,arg1:a.id,ignore_case:!1};
d[J.sa]="_lc";Ec.push(d);var e={"if":[Ec.length-1],add:[b]};e["if"]&&(e.add||e.block)&&Dc.push(e);He[a.id]=b}}
var Ne={config:function(a){},
event:function(a){var b=a[1];if(ta(b)&&!(3<a.length)){var c;if(2<a.length){if(!Xa(a[2]))return;c=a[2]}var d=Ke(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js",
"gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];c&&ea(c)&&c.gtm&&c.gtm.fromContainer||(ze[b]||(ze[b]=[]),ze[b].push(c))}},set:function(a){var b;2==a.length&&Xa(a[1])?b=x(a[1]):3==a.length&&ta(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=x(b),b.event="gtag.set",b._clear=!0,b}},Me=Ja(function(){});var Oe=!1,Pe=[];function Qe(){if(!Oe){Oe=!0;for(var a=0;a<Pe.length;a++)B(Pe[a])}};var Re=[],Se=!1,Ye=function(a){var b=a.eventCallback,c=Ja(function(){sa(b)&&B(function(){b(Zc.s)})}),d=a.eventTimeout;d&&z.setTimeout(c,Number(d));return c},Ze=function(){for(var a=!1;!Se&&0<Re.length;){Se=!0;delete md.eventModel;var b=Re.shift();if(sa(b))try{b.call(pd)}catch(Te){}else if(va(b)){var c=b;if(ta(c[0])){var d=c[0].split("."),e=d.pop(),g=c.slice(1),h=od(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,g)}catch(Te){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&ta(b[0])){var l=Ne[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){Se=!1;continue}}var m;var p=void 0,q=b,t=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(t&&vd(p,void 0),vd(p,q[p]));var u=q.event;if(u){var v=q["gtm.uniqueEventId"];v||(v=hd(),q["gtm.uniqueEventId"]=v,vd("gtm.uniqueEventId",v));dd=u;var w;var C,D,F=q,I=F.event,P=F["gtm.uniqueEventId"],X=$c.zones;D=X?X.checkState(Zc.s,P):Fd;if(D.active){var G=Ye(F);c:{var S=D.isWhitelisted;
if("gtm.js"==I){if(xe){C=!1;break c}xe=!0}var Q=P,M=I;if(Zd&&!ge[Q]&&ee!==Q){le();ee=Q;de="";var K=fe,ha=Q,L,U=M;L=0===U.indexOf("gtm.")?encodeURIComponent(U):"*";K[ha]="&e="+L+"&eid="+Q;he||(he=z.setTimeout(le,500))}var ia=zd(S),V={id:P,name:I,callback:G||ra,fa:ia,Wa:[]};V.Wa=Wc(ia);for(var Ca,Sa=V,$a=ue(Sa.callback),Ad=[],Mb=[],xb=0;xb<Fc.length;xb++)if(Sa.Wa[xb]){var Ue=Fc[xb];var ec=$a.add();try{var Ve=ne(xb,Ad,ec,ec,ec,Sa);Ve?Mb.push({Od:xb,b:Qc(Ue),M:Ve}):(we(xb,Sa),ec())}catch(Te){ec()}}$a.Ee();Mb.sort(ve);for(var Bd=0;Bd<Mb.length;Bd++)Mb[Bd].M();Ca=0<Mb.length;if("gtm.js"===I||"gtm.sync"===I)d:{}if(Ca){for(var ih={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Gc=0;Gc<V.Wa.length;Gc++)if(V.Wa[Gc]){var Xe=Fc[Gc];if(Xe&&!ih[Xe[J.sa]]){C=!0;break c}}C=!1}else C=Ca}w=C?!0:!1}else w=!1;dd=null;m=w}else m=!1;a=m||a}Se=!1}return!a},$e=function(){var a=Ze();try{var b=z["dataLayer"].hide;if(b&&void 0!==b[Zc.s]&&b.end){b[Zc.s]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},af=function(){var a=mb("dataLayer",[]),b=mb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Id.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Pe.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Re.push.apply(Re,b);300<this.length;)this.shift();return Ze()};Re.push.apply(Re,a.slice(0));
B($e)};var bf={};bf.kb=new String("undefined");
var cf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===bf.kb?b:a[d]);return c.join("")}};cf.prototype.toString=function(){return this.resolve("undefined")};cf.prototype.valueOf=cf.prototype.toString;bf.te=cf;bf.Vb={};bf.Xe=function(a){return new cf(a)};var df={};bf.hg=function(a,b){var c=hd();df[c]=[a,b];return c};bf.fd=function(a){var b=a?0:1;return function(a){var c=df[a];if(c&&"function"===typeof c[b])c[b]();df[a]=void 0}};bf.Hf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};bf.$f=function(a){if(a===bf.kb)return a;var b=hd();bf.Vb[b]=a;return'google_tag_manager["'+Zc.s+'"].macro('+b+")"};bf.Mf=function(a,b,c){a instanceof bf.te&&(a=a.resolve(bf.hg(b,c)),b=ra);return{cc:a,V:b}};var ef=new Ha,ff=function(a,b){function c(a){var b=E(a),c=Fb(b,"protocol"),d=Fb(b,"host",!0),e=Fb(b,"port"),g=Fb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0};
function gf(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<e.length;g++)if(b[e[g]]){d=b[e[g]](c);break a}}catch(v){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=xa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var q=a.ignore_case?"i":void 0;try{var t=String(c)+q,u=ef.get(t);u||(u=new RegExp(c,q),ef.set(t,u));p=u.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ff(b,c)}return!1};var hf=function(){return!1};function jf(a,b){Ta(["key:!string","dataLayerVersion:?number"],arguments);this.J().assert("read_data_layer",a);return Za(od(a,b||2))}function kf(){return(new Date).getTime()}function lf(a){return Ba(Ya(a))}function mf(a){return null===a?"null":void 0===a?"undefined":a.toString()}function nf(a,b){Ta(["min:!number","max:!number"],arguments);return za(a,b)}
function of(a,b,c){Ta(["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);for(var d=new Pa,e=!1,g=0;g<a.length();g++){var h=a.get(g);h instanceof Pa&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var pf=function(){var a=new jb,b=Gb();hf()&&(b.injectScript=ra,b.injectHiddenIframe=ra);a.addAll({callLater:b.callLater,copyFromDataLayer:jf,copyFromWindow:b.copyFromWindow,createQueue:b.createQueue,createArgumentsQueue:b.createArgumentsQueue,encodeUri:b.encodeURI,encodeUriComponent:b.encodeURIComponent,generateRandom:nf,getTimestamp:kf,getUrl:b.getUrl,injectHiddenIframe:b.injectHiddenIframe,injectScript:b.injectScript,logToConsole:b.logToConsole,makeInteger:lf,makeString:mf,makeTableMap:of,queryPermission:b.queryPermission,
sendPixel:b.sendPixel,setInWindow:b.setInWindow});return function(b){return a.get(b)}};var qf;function rf(){var a=data.runtime||[];qf=new Ib;Bc=function(a,b){sf(b);var c=new Pa,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Za(b[d]));var e=qf.M([a,c]);e instanceof ja&&"return"===e.C&&(e=e.getData());return Ya(e)};Jc=gf;Hb(qf,pf());for(var b=0;b<a.length;b++){var c=a[b];if(!va(c)||3>c.length){if(0===c.length)continue;break}qf.M(c)}}function sf(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;sa(b)&&(a.gtmOnSuccess=function(){B(b)});sa(c)&&(a.gtmOnFailure=function(){B(c)})}
function tf(a){var b={},c=function(a){throw uf(a,{},"The requested permission is not configured.");};qf.Ea(c);qf.Fa(Be(function(){var a=arguments[0];return a&&b[a]?b[a].apply(void 0,Array.prototype.slice.call(arguments,0)):{}}));for(var d in a)if(a.hasOwnProperty(d)){var e=a[d],g=!1,h;for(h in e)if(e.hasOwnProperty(h)){g=!0;var k=vf(h,e[h]);qf.qb(d,h,k.assert);b[h]||(b[h]=k.ba)}g||qf.qb(d,"default",c)}}
function vf(a,b){var c=Mc(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=uf;return Nc(c)}function uf(a,b,c){return new Dd(a,b,c)};var wf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var xf=encodeURI,R=encodeURIComponent,yf=function(a,b){if(!a)return!1;var c=Fb(E(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var zf=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null},Af=function(){return!1};var Bf=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||ub(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Cf=function(a){$c.hasOwnProperty("autoEventsSettings")||($c.autoEventsSettings={});var b=$c.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Df=function(a,b,c,d){var e=Cf(a),g=Ia(e,b,d);e[b]=
c(g)},Ef=function(a,b,c){var d=Cf(a);return Ia(d,b,c)};var Gf=function(a,b){if(!Ff)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!A.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);return null},Hf=!1;
if(A.querySelectorAll)try{var If=A.querySelectorAll(":root");If&&1==If.length&&If[0]==A.documentElement&&(Hf=!0)}catch(a){}var Ff=Hf;var Jf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Mf=function(a,b,c,d){var e=Kf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Lf(e,function(a){return a.ef},b);if(1===e.length)return e[0].id;e=Lf(e,function(a){return a.Xf},c);return e[0]?e[0].id:void 0}},Pf=function(a,b,c,d,e,
g){c=c||"/";var h=d=d||"auto",k=c;if(Nf.test(document.location.hostname)||"/"===k&&Of.test(h))return!1;g&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toUTCString()+"; ");if("auto"===d){var p=!1,q;a:{var t=[],u=document.location.hostname.split(".");if(4===u.length){var v=u[u.length-1];if(parseInt(v,10).toString()===v){q=["none"];break a}}for(var w=u.length-2;0<=w;w--)t.push(u.slice(w).join("."));t.push("none");
q=t}for(var C=q,D=0;D<C.length&&!p;D++)p=Pf(a,b,c,C[D],e);return p}d&&"none"!==d&&(m+="domain="+d+";");var F=document.cookie;document.cookie=m;return F!=document.cookie||0<=Jf(a).indexOf(b)};function Lf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Kf(a,b){for(var c=[],d=Jf(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),ef:1*k[0]||1,Xf:1*k[1]||1}))}}return c}var Of=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Nf=/(^|\.)doubleclick\.net$/i;var Qf=function(){for(var a=kb.userAgent+(A.cookie||"")+(A.referrer||""),b=a.length,c=z.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ga()/1E3)].join(".")},Tf=function(a,b,c,d){var e=Rf(b);return Mf(a,e,Sf(c),d)},Uf=function(a,b,c,d){var e=""+Rf(c),g=Sf(d);1<g&&(e+="-"+g);return[b,e,a].join(".")};
function Rf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function Sf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Vf=["1"],Wf={},Zf=function(a,b,c){var d=Xf(a);if(!Wf[d]&&!Yf(d,b,c)){var e=Qf(),g=Uf(e,"1",b,c);Pf(d,g,c,b,new Date(Ga()+7776E6));Yf(d,b,c)}};function Yf(a,b,c){var d=Tf(a,b,c,Vf);d&&(Wf[a]=d);return d}function Xf(a){return(a||"_gcl")+"_au"};function $f(){for(var a=ag,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function bg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var ag,cg,dg=function(a){ag=ag||bg();cg=cg||$f();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(p=64));b.push(ag[l],ag[m],ag[p],ag[q])}return b.join("")},eg=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=cg[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ag=ag||bg();cg=cg||
$f();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var fg;function gg(a,b){if(!a||b===A.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var hg=function(){var a=mb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ig=/(.*?)\*(.*?)\*(.*)/,jg=/^https?:\/\/[^/]*cdn\.ampproject\.org\//,kg=/^(?:www\.|m\.|amp\.)+/,lg=/([^?#]+)(\?[^#]*)?(#.*)?/,mg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,og=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(dg(String(d))))}var e=b.join("*");return["1",ng(e),e].join("*")},ng=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,
Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=fg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}fg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^fg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},qg=function(){return function(a){var b=E(z.location.href),c=b.search.replace("?",""),d=Db(c,"_gl",!0)||"";a.query=pg(d)||{};var e=Fb(b,"fragment").match(mg);a.fragment=pg(e&&e[3]||"")||{}}},pg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c=ig.exec(a);if(c&&"1"===c[1]){var d=c[3],e;a:{for(var g=c[2],h=0;h<b;++h)if(g===ng(d,h)){e=!0;break a}e=!1}if(e){for(var k={},l=d?d.split("*"):[],m=0;m<l.length;m+=2)k[l[m]]=eg(l[m+1]);return k}}}}catch(p){}};
function rg(a,b,c){function d(a){var b=a,c=mg.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=lg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function sg(a,b,c){for(var d={},e={},g=hg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&gg(k.domains,b)&&(k.fragment?Ka(e,k.callback()):Ka(d,k.callback()))}if(La(d)){var l=og(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],q=!1,t=0;t<p.length;t++){var u=p[t];if("_gl"===u.name){u.setAttribute("value",l);q=!0;break}}if(!q){var v=A.createElement("input");v.setAttribute("type","hidden");v.setAttribute("name","_gl");v.setAttribute("value",
l);a.appendChild(v)}}else if("post"===m){var w=rg(l,a.action);Bb.test(w)&&(a.action=w)}}}else tg(l,a,!1)}if(!c&&La(e)){var C=og(e);tg(C,a,!0)}}function tg(a,b,c){if(b.href){var d=rg(a,b.href,void 0===c?!1:c);Bb.test(d)&&(b.href=d)}}
var ug=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||sg(e,e.hostname,!1)}}catch(h){}},vg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=Fb(E(b.action),"host");sg(b,c,!0)}}catch(d){}},wg=function(a,b,c,d){var e=hg();e.init||(sb(A,"mousedown",ug),sb(A,"keyup",ug),sb(A,"submit",vg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};hg().decorators.push(g)},xg=function(){var a=A.referrer;if(!jg.test(a))return!1;var b=A.location.hostname,c=a.replace(jg,"").split("/"),d=c[1],e="s"===d?decodeURIComponent(c[2]):decodeURIComponent(d);return b.replace(kg,"")===e.replace(kg,"")},yg=function(a,b){return!1===a?!1:a||b||xg()};var zg=/^\w+$/,Ag=/^[\w-]+$/,Bg=/^~?[\w-]+$/,Cg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"},Eg=function(a){var b=Jf(a,A.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return Dg(c)};function Fg(a){return a&&"string"==typeof a&&a.match(zg)?a:"_gcl"}
var Gg=function(a){if(a){if("string"==typeof a){var b=Fg(a);return{dc:b,aw:b,gf:b,ha:b}}if(a&&"object"==typeof a)return{dc:Fg(a.dc),aw:Fg(a.aw),gf:Fg(a.gf),ha:Fg(a.ha)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl",ha:"_gcl"}},Ig=function(){var a=E(z.location.href),b=Fb(a,"query",!1,void 0,"gclid"),c=Fb(a,"query",!1,void 0,"gclsrc"),d=Fb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Db(e,"gclid");c=c||Db(e,"gclsrc")}return Hg(b,c,d)};
function Hg(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(Ag))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Jg(a,b){function c(a,b){var c=Kg(a,d);c&&Pf(c,b,g,e,k,!0)}b=b||{};var d=Gg(b.prefix),e=b.domain||"auto",g=b.path||"/",h=Ga(),k=new Date(h+7776E6),l=Math.round(h/1E3),m=function(a){return["GCL",l,a].join(".")};a.aw&&(!0===b.dh?c("aw",m("~"+a.aw[0])):c("aw",m(a.aw[0])));a.dc&&c("dc",m(a.dc[0]));a.gf&&c("gf",m(a.gf[0]));a.ha&&c("ha",m(a.ha[0]))}
var Kg=function(a,b){var c=Cg[a];if(void 0!==c){var d=b[a];if(void 0!==d)return d+c}},Lg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)},Mg=function(a,b,c,d,e){if(va(b)){var g=Gg(e);wg(function(){for(var b={},c=0;c<a.length;++c){var d=Kg(a[c],g);if(d){var e=Jf(d,A.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},Dg=function(a){return a.filter(function(a){return Bg.test(a)})};var Ng=/^\d+\.fls\.doubleclick\.net$/;function Og(a){var b=E(z.location.href),c=Fb(b,"host",!1);if(c&&c.match(Ng)){var d=Fb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var Pg=function(a){var b=Og("gclaw");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.aw){var d=Ig().aw||[];if(0<d.length)return d}var e=Kg("aw",c);return e?Eg(e):[]},Qg=function(a){var b=Og("gcldc");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.dc){var d=Ig().dc||[];if(0<d.length)return d}var e=Kg("dc",c);return e?Eg(e):[]},Rg=function(a){var b=Gg(a);if("_gcl"==b.ha){var c=Ig().ha||[];if(0<c.length)return c}return Eg(b.ha+"_ha")},Sg=function(){var a=Og("gac");if(a)return decodeURIComponent(a);
for(var b=[],c=A.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var g=c[e].match(d);g&&b.push({xc:g[1],value:g[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].xc]||(h[b[k].xc]=[]),h[b[k].xc].push({timestamp:l[1],pf:l[2]}))}var m=[],p;for(p in h)if(h.hasOwnProperty(p)){for(var q=[],t=h[p],u=0;u<t.length;u++)q.push(t[u].pf);q=Dg(q);q.length&&m.push(p+":"+q.join(","))}return m.join(";")},Tg=function(a,
b,c){Zf(a,b,c);var d=Wf[Xf(a)],e=Ig().dc||[];if(d&&0<e.length){var g=$c.joined_au=$c.joined_au||{},h=a||"_gcl";if(!g[h]){for(var k=!1,l=0;l<e.length;l++){var m="https://adservice.google.com/ddm/regclk";m+="?gclid="+e[l]+"&auiddc="+d;Ab(m);k=!0}if(k){var p=Xf(a);if(Wf[p]){var q=Uf(Wf[p],"1",b,c);Pf(p,q,c,b,new Date(Ga()+7776E6))}g[h]=!0}}}};var Vg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ug()};function Ug(){if(3===Zc.ob.length)return"g";return"G"}function Wg(){return"w"}
var Xg=function(a){var b=Zc.s.split("-"),c=b[0].toUpperCase(),d=Vg[c]||"i",e=a&&"GTM"===c?b[1]:"";return(3===Zc.ob.length?"2"+Wg():"")+d+Zc.ob+e};var dh=!!z.MutationObserver,eh=void 0,fh=function(a){if(!eh){var b=function(){var a=A.body;if(a)if(dh)(new MutationObserver(function(){for(var a=0;a<eh.length;a++)B(eh[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;sb(a,"DOMNodeInserted",function(){b||(b=!0,B(function(){b=!1;for(var a=0;a<eh.length;a++)B(eh[a])}))})}};eh=[];A.body?b():B(b)}eh.push(a)};var gh=/\./g,hh=/\*/g;var Dh=z.clearTimeout,Eh=z.setTimeout,T=function(a,b,c){if(hf()){b&&B(b)}else return ob(a,b,c)},Fh=function(){return z.location.href},Gh=function(a){return Fb(E(a),"fragment")},W=function(a,b){return od(a,b||2)},Hh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return z["dataLayer"].push(a)},Ih=function(a,b){z[a]=b},Y=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},Jh=function(a,
b,c){return Jf(a,b,void 0===c?!0:!!c)},Kh=function(a,b,c){var d={prefix:a,path:b,domain:c},e=Ig();Jg(e,d)},Lh=function(a,b,c,d){var e=qg(),g=hg();g.data||(g.data={query:{},fragment:{}},e(g.data));var h={},k=g.data;k&&(Ka(h,k.query),Ka(h,k.fragment));for(var l=Gg(b),m=0;m<a.length;++m){var p=a[m];if(void 0!==Cg[p]){var q=Kg(p,l),t=h[q];if(t){var u=Math.min(Lg(t),Ga()),v;b:{for(var w=u,C=Jf(q,A.cookie),D=0;D<C.length;++D)if(Lg(C[D])>w){v=!0;break b}v=!1}v||
Pf(q,t,c,d,new Date(u+7776E6),!0)}}}var F={prefix:b,path:c,domain:d};Jg(Hg(h.gclid,h.gclsrc),F);},Mh=function(a,b,c,d,e){Mg(a,b,c,d,e);},Nh=function(a,b){if(hf()){b&&B(b)}else qb(a,b)},Oh=function(a){return!!Ef(a,"init",!1)},Ph=function(a){Cf(a).init=!0},Qh=function(a,b,c){var d=(void 0===c?
0:c)?"www.googletagmanager.com/gtag/js":bd;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));T(H("https://","http://",d))};
var Sh=bf.Mf;var ei=function(a,b,c){this.n=a;this.t=b;this.p=c},fi=function(){this.c=1;this.e=[];this.p=null};function gi(a){var b=$c,c=b.gss=b.gss||{};return c[a]=c[a]||new fi}var hi=function(a,b){gi(a).p=b},ii=function(a,b,c){var d=Math.floor(Ga()/1E3);gi(a).e.push(new ei(b,d,c))},ji=function(a){};var ri=window,si=document,ti=function(a){var b=ri._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ri["ga-disable-"+a])return!0;try{var c=ri.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Jf("AMP_TOKEN",si.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var yi=function(a){if(1===gi(a).c){gi(a).c=2;var b=encodeURIComponent(a);ob(("http:"!=z.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},zi=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=Y("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.b=0})(function(a){return a.vtp_value})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.b=0})(function(){return dd})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.b=0})(function(a){var b=W("gtm.referrer",1)||A.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fb(E(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Eb(E(String(b))):String(b)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=Y(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.b=0})(function(a){return Jh(a.vtp_name,W("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.g="u";Z.__u.h=!0;Z.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:W("gtm.url",1))||Fh();var d=b[a("vtp_component")];return d&&"URL"!=d?Fb(E(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):Eb(E(String(c)))})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;x(zf(l.vtp_fieldsToSet,"fieldName","value"),e);x(zf(l.vtp_contentGroup,"index","group"),g);x(zf(l.vtp_dimension,"index","dimension"),h);x(zf(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=x(l);b=x(b,m)}x(zf(b.vtp_fieldsToSet,"fieldName","value"),e);x(zf(b.vtp_contentGroup,
"index","group"),g);x(zf(b.vtp_dimension,"index","dimension"),h);x(zf(b.vtp_metric,"index","metric"),k);var p=Pd(b.vtp_functionName),q="",t="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(t=b.vtp_trackerName,q=t+"."):(t="gtm"+hd(),q=t+".");var u={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},w=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];p.apply(window,b)},C=function(a,b){return void 0===b?b:a(b)},D=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&w("set",a+c,b[c])},F=function(){
var a=function(a,b,c){if(!Xa(b))return!1;for(var d=Ia(Object(b),c,[]),e=0;d&&e<d.length;e++)w(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=W("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!Xa(c))return;c=Object(c);var d=Ia(e,"currencyCode",c.currencyCode);void 0!==d&&w("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){w("ec:setAction","promo_click",c.promoClick.actionField);
return}for(var g="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<g.length;h++){var k=c[g[h]];if(k){a("ec:addProduct",k,"products");w("ec:setAction",g[h],k.actionField);break}}},I=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&u[e]||!c&&void 0===u[e])){var g=v[e]?Da(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},P={name:t};I(e,P,!0);p("create",b.vtp_trackingId||
c.trackingId,P);w("set","&gtm",Xg(!0));(function(a,c){void 0!==b[c]&&w("set",a,b[c])})("nonInteraction","vtp_nonInteraction");D("contentGroup",g);D("dimension",h);D("metric",k);var X={};I(e,X,!1)&&w("set",X);var G;b.vtp_enableLinkId&&w("require","linkid","linkid.js");w("set","hitCallback",function(){var a=e&&e.hitCallback;sa(a)&&
a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(w("require","ec","ec.js"),F());var S={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:C(String,b.vtp_eventLabel||c.label),eventValue:C(Ba,b.vtp_eventValue||c.value)};I(G,S,!1);w("send",S);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(w("require","ec","ec.js"),F());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var Aa="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","displayfeatures",void 0,{cookieName:Aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var N=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:N})}G?w("send","pageview",G):w("send","pageview");}if(!a){var la=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(la="internal/"+la);a=!0;T(H("https:","http:","//www.google-analytics.com/"+la,e&&e.forceSSL),function(){var a=Od();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.b=0}();






Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.b=0})(function(a){var b=x(a),c=b;c[J.sa]=null;c[J.ne]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:Fh()}function b(b,c){sb(b,"hashchange",function(b){c({source:"hashchange",state:null,ka:Gh(a(b))})})}function c(b,c){sb(b,"popstate",function(b){c({source:"popstate",state:b.state,ka:Gh(a(b))})})}function d(a,b,c){var d=b.history,e=d[a];if(sa(e))try{d[a]=function(b,g,h){e.apply(d,[].slice.call(arguments,0));c({source:a,state:b,ka:Gh(Fh())})}}catch(p){}}function e(){var a={source:null,
ka:Gh(Fh()),state:Y("history").state||null};return function(b){var c=a,d={};d[c.source]=!0;d[b.source]=!0;if(!d.popstate||!d.hashchange||c.ka!=b.ka){var e={event:"gtm.historyChange","gtm.historyChangeSource":b.source,"gtm.oldUrlFragment":a.ka,"gtm.newUrlFragment":b.ka,"gtm.oldHistoryState":a.state,"gtm.newHistoryState":b.state};a=b;Hh(e)}}}(function(a){Z.__hl=a;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.b=0})(function(a){var g=Y("self");if(!Oh("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",
g,k);Ph("hl")}B(a.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=Y("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){Md();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Xg()},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?W(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&
(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,T("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.b=0}();

Z.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=A.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var p=d.getAttribute("data-gtmsrc");p&&(m.src=p,nb(m,e));b.insertBefore(m,null);p||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(t){B(h)}}}var b=function(a,b,c){Ld(function(){var d,e=$c;e.postscribe||(e.postscribe=Yc);d=e.postscribe;var g={done:b},m=A.createElement("div");m.style.display="none";m.style.visibility="hidden";A.body.appendChild(m);try{d(m,a,g)}catch(p){B(c)}})};var c=function(d){if(A.body){var e=
d.vtp_gtmOnFailure,g=Sh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.cc,k=g.V;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(A.body,yb(h),k,e)()}else Eh(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.b=0}();



var Ai={};Ai.macro=function(a){if(bf.Vb.hasOwnProperty(a))return bf.Vb[a]},Ai.onHtmlSuccess=bf.fd(!0),Ai.onHtmlFailure=bf.fd(!1);Ai.dataLayer=pd;Ai.callback=function(a){fd.hasOwnProperty(a)&&sa(fd[a])&&fd[a]();delete fd[a]};Ai.Je=function(){$c[Zc.s]=Ai;gd=Z.a;Kc=Kc||bf;Lc=Cd};
Ai.Df=function(){$c=z.google_tag_manager=z.google_tag_manager||{};if($c[Zc.s]){var a=$c.zones;a&&a.unregisterChild(Zc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Cc.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Fc.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Ec.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},t=0;t<p.length;t++)q[p[t][0]]=Array.prototype.slice.call(p[t],1);Dc.push(q)}Ic=Z;var u=data.permissions||{};rf();tf(u);Ai.Je();
af();Gd=!1;Hd=0;if("interactive"==A.readyState&&!A.createEventObject||"complete"==A.readyState)Jd();else{sb(A,"DOMContentLoaded",Jd);sb(A,"readystatechange",Jd);if(A.createEventObject&&A.documentElement.doScroll){var v=!0;try{v=!z.frameElement}catch(C){}v&&Kd()}sb(z,"load",Jd)}Oe=!1;"complete"===A.readyState?Qe():sb(z,"load",Qe);
a:{if(!Zd)break a;be();ee=void 0;fe={};ce={};he=void 0;ge={};de="";ie=$d();z.setInterval(be,864E5);}cd=(new Date).getTime()}};Ai.Df();

})()
