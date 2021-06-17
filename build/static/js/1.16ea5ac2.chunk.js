(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[1],{200:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var i=a(7),n=a(8),l=a(11),s=a(10),c=a(0),r=a.n(c),o=a(16),b=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bi-coin-value"},this.getFormattedValue()," ",this.props.coinName?this.props.coinName:o.a.blockchain.coinName.toUpperCase())}},{key:"getFormattedValue",value:function(){var e=this.props.value/1e9;return e<1&&0!==e?e.toFixed(9).split("").reduceRight((function(e,t){return"0"===t&&0===e.length||e.push(t),e}),[]).reverse().join(""):e.toString()}}]),a}(r.a.PureComponent)},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var i=a(7),n=a(8),l=a(11),s=a(10),c=a(201),r=a.n(c),o=a(0),b=a.n(o),m=(a(206),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=r()(this.props.timestamp);return b.a.createElement("div",{className:"bi-timestamp u-word-wrap u-word-wrap--ellipsis"},b.a.createElement("span",{className:"bi-timestamp__time"},e.format("HH:mm:ss")),b.a.createElement("span",{className:"bi-timestamp__date"},e.format("DD.MM.YYYY")))}}]),a}(b.a.PureComponent))},206:function(e,t,a){},215:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a(7),n=a(8),l=a(11),s=a(10),c=a(0),r=a.n(c),o=a(24),b=a(29),m=(a(216),a(13)),d=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(n.a)(a,[{key:"render",value:function(){var e=Math.ceil(this.props.total/this.props.limit);return e?r.a.createElement("div",{className:"bi-paginate-simple"},0===this.props.forcePage?r.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},r.a.createElement(m.m,{className:"bi-paginate-simple__btn-icon"})):r.a.createElement(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",to:this.props.getPageUrl(0)},r.a.createElement(m.m,{className:"bi-paginate-simple__btn-icon"})),0===this.props.forcePage?r.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},r.a.createElement(m.c,{className:"bi-paginate-simple__btn-icon"})):r.a.createElement(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage-1)},r.a.createElement(m.c,{className:"bi-paginate-simple__btn-icon"})),r.a.createElement("span",{className:"bi-paginate-simple__status"},r.a.createElement(o.a,{id:"components.paginate-simple.page-of",values:{current:this.props.forcePage+1,total:e}})),r.a.createElement("span",{className:"bi-paginate-simple__status bi-paginate-simple__status--mobile"},r.a.createElement(o.a,{id:"components.paginate-simple.page",values:{current:this.props.forcePage+1}})),this.props.forcePage===e-1?r.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},r.a.createElement(m.c,{className:"bi-paginate-simple__btn-icon"})):r.a.createElement(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage+1)},r.a.createElement(m.c,{className:"bi-paginate-simple__btn-icon"})),this.props.forcePage===e-1?r.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},r.a.createElement(m.m,{className:"bi-paginate-simple__btn-icon"})):r.a.createElement(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(e-1)},r.a.createElement(m.m,{className:"bi-paginate-simple__btn-icon"}))):null}}]),a}(r.a.Component)},216:function(e,t,a){},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a(7),n=a(8),l=a(11),s=a(10),c=a(31),r=a.n(c),o=a(0),b=a.n(o),m=a(29),d=(a(234),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return b.a.createElement("div",{className:"bi-limit-selector"},b.a.createElement("span",{className:"bi-limit-selector__label"},this.props.label),this.props.items.map((function(t,a){var i=r()({"bi-btn":!0,"bi-btn--flat":!0,"bi-limit-selector__item":!0,"bi-limit-selector__item--selected":t===e.props.selected});return b.a.createElement(m.Link,{className:i,key:a,to:e.props.getLimitLink(t)},t)})))}}]),a}(b.a.PureComponent))},234:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},287:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var i=a(43),n=a(7),l=a(8),s=a(34),c=a.n(s),r=a(16),o=function(){function e(){Object(n.a)(this,e)}return Object(l.a)(e,null,[{key:"getBlock",value:function(t){return c.a.get("".concat(e.apiUrl,"/").concat(t)).then((function(a){return a?a.data:Promise.reject("Block api service. Request: ".concat(e.apiUrl,"/").concat(t,"."))}))}},{key:"getBlocks",value:function(t){var a=t.limit,i=t.offset,n=t.sortBy,l=t.sortDirection,s=t.startDate,r=t.endDate;return c.a.get("".concat(e.apiUrl),{params:{endDate:r,limit:a,offset:i,sortBy:n||"height",sortDirection:l||"desc",startDate:s}}).then((function(t){return t?t.data:Promise.reject("Block api service. Request: ".concat(e.apiUrl,"."))}))}},{key:"apiUrl",get:function(){return"".concat(r.a.apiUrl,"/blocks")}}]),e}(),b={getBlocks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,a=e.offset,n=e.sortBy,l=e.sortDirection,s=e.startDate,c=e.endDate;return function(e){return e({type:i.b}),o.getBlocks({limit:t,offset:a,sortBy:n,sortDirection:l,startDate:s,endDate:c}).then((function(n){e({payload:{data:n,limit:t,offset:a},type:i.c})}))}},getBlock:function(e){var t=e.id;return function(e){return e({type:i.a}),o.getBlock(t).then((function(t){e({payload:{data:t},type:i.d})}))}}}},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var i=a(7),n=a(8),l=a(11),s=a(10),c=a(0),r=a.n(c),o=a(24),b=a(29),m=a(52),d=a(200),p=a(203),_=a(1),u=a(46),h=a.n(u),f=a(5),k=a(13),g=(a(283),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bi-blocks-table-header bi-blocks-table__row bi-table__row"},r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement(b.Link,{className:this.getSortDirectionClassName("height"),to:"/?".concat(this.getSortLink("height"))},r.a.createElement(o.a,{id:"common.block.height"}),r.a.createElement(k.F,{className:"bi-blocks-table-header__sort-icon"}),r.a.createElement(k.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),r.a.createElement(k.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"}))),r.a.createElement("div",{className:"bi-blocks-table__cell bi-blocks-table__cell--timestamp bi-table__cell"},r.a.createElement(b.Link,{className:this.getSortDirectionClassName("timestamp"),to:"/?".concat(this.getSortLink("timestamp"))},r.a.createElement(o.a,{id:"common.block.age"}),r.a.createElement(k.F,{className:"bi-blocks-table-header__sort-icon"}),r.a.createElement(k.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),r.a.createElement(k.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"}))),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement(b.Link,{className:this.getSortDirectionClassName("transactionsCount"),to:"/?".concat(this.getSortLink("transactionsCount"))},r.a.createElement(o.a,{id:"common.block.transactions"}),r.a.createElement(k.F,{className:"bi-blocks-table-header__sort-icon"}),r.a.createElement(k.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),r.a.createElement(k.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"}))),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement(b.Link,{className:this.getSortDirectionClassName("miner"),to:"/?".concat(this.getSortLink("miner"))},r.a.createElement(o.a,{id:"common.block.minedBy"}),r.a.createElement(k.F,{className:"bi-blocks-table-header__sort-icon"}),r.a.createElement(k.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),r.a.createElement(k.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"}))),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement(b.Link,{className:this.getSortDirectionClassName("minerReward"),to:"/?".concat(this.getSortLink("minerReward"))},r.a.createElement(o.a,{id:"common.block.minerReward"}),r.a.createElement(k.F,{className:"bi-blocks-table-header__sort-icon"}),r.a.createElement(k.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),r.a.createElement(k.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"}))),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement(b.Link,{className:this.getSortDirectionClassName("difficulty"),to:"/?".concat(this.getSortLink("difficulty"))},r.a.createElement(o.a,{id:"common.block.difficulty"}),r.a.createElement(k.F,{className:"bi-blocks-table-header__sort-icon"}),r.a.createElement(k.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),r.a.createElement(k.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"}))),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement(b.Link,{className:this.getSortDirectionClassName("size"),to:"/?".concat(this.getSortLink("size"))},r.a.createElement(o.a,{id:"common.block.size"}),r.a.createElement(k.F,{className:"bi-blocks-table-header__sort-icon"}),r.a.createElement(k.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),r.a.createElement(k.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"}))))}},{key:"getSortDirectionClassName",value:function(e){var t=h.a.parse(this.props.history.location.search),a=t.sortBy,i=t.sortDirection,n=["bi-blocks-table-header__sort","u-word-wrap u-word-wrap--ellipsis"];return a===e&&i&&n.push("bi-blocks-table-header__sort--".concat(i)),n.join(" ")}},{key:"getSortLink",value:function(e){var t=h.a.parse(this.props.history.location.search),a=t.sortBy,i=t.sortDirection,n="asc";return a===e&&"desc"===i?h.a.stringify(Object(_.a)(Object(_.a)({},t),{},{offset:null,sortBy:null,sortDirection:null})):(a===e&&"desc"!==i&&(n="desc"),h.a.stringify(Object(_.a)(Object(_.a)({},t),{},{offset:null,sortBy:e,sortDirection:n})))}}]),a}(r.a.Component)),E=Object(f.o)(g),v=(a(284),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bi-blocks-table"},this.props.blocks?this.renderTable():null)}},{key:"renderTable",value:function(){return r.a.createElement("div",{className:"bi-blocks-table__body bi-table"},r.a.createElement(E,null),this.props.blocks.map((function(e){return r.a.createElement("div",{className:"bi-blocks-table__row bi-table__row",key:e.id},r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement("div",{className:"bi-blocks-table__cell-name"},r.a.createElement(o.a,{id:"common.block.height"})),r.a.createElement(b.Link,{to:"/blocks/".concat(e.id)},e.height)),r.a.createElement("div",{className:"bi-blocks-table__cell bi-blocks-table__cell--timestamp bi-table__cell"},r.a.createElement("div",{className:"bi-blocks-table__cell-name"},r.a.createElement(o.a,{id:"common.block.age"})),r.a.createElement(p.a,{timestamp:e.timestamp})),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement("div",{className:"bi-blocks-table__cell-name"},r.a.createElement(o.a,{id:"common.block.transactions"})),e.transactionsCount),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement("div",{className:"bi-blocks-table__cell-name"},r.a.createElement(o.a,{id:"common.block.minedBy"})),r.a.createElement(b.Link,{to:"/addresses/".concat(e.miner.address||e.miner.name),className:"u-word-wrap u-word-wrap--ellipsis"},e.miner.name||e.miner.address)),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement("div",{className:"bi-blocks-table__cell-name"},r.a.createElement(o.a,{id:"common.block.minerReward"})),r.a.createElement(d.a,{value:e.minerReward})),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-blocks-table__cell--difficulty"},r.a.createElement("div",{className:"bi-blocks-table__cell-name"},r.a.createElement(o.a,{id:"common.block.difficulty"})),e.difficulty),r.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},r.a.createElement("div",{className:"bi-blocks-table__cell-name"},r.a.createElement(o.a,{id:"common.block.size"})),r.a.createElement("span",{className:"u-word-wrap u-word-wrap--ellipsis"},Object(m.a)(e.size,{desiredFormat:"k"}),"B")))})))}}]),a}(r.a.Component))},602:function(e,t,a){},619:function(e,t,a){},666:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(7),l=a(8),s=a(14),c=a(11),r=a(10),o=a(46),b=a.n(o),m=a(0),d=a.n(m),p=a(68),_=a.n(p),u=a(24),h=a(25),f=a(17),k=(a(602),a(26)),g=a(287),E=a(288),v=a(71),N=a(31),y=a.n(N),O=a(201),j=a.n(O),D=a(603),C=a.n(D),w=a(13),L=(a(619),function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).element=void 0,i.state={isCalendarShown:!1},i.showCalendar=i.showCalendar.bind(Object(s.a)(i)),i.hideCalendar=i.hideCalendar.bind(Object(s.a)(i)),i.setCalendar=i.setCalendar.bind(Object(s.a)(i)),i.resetCalendar=i.resetCalendar.bind(Object(s.a)(i)),i.hideOnOutsideClick=i.hideOnOutsideClick.bind(Object(s.a)(i)),i}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=y()({"bi-calendar__calendar":!0,"bi-calendar__calendar--open":this.state.isCalendarShown}),a="All time",i=!1,n={};this.props.startDate&&this.props.endDate&&(i=!0,a=j()(this.props.startDate).format("DD.MM.YYYY")+" \u2013 "+j()(this.props.endDate).format("DD.MM.YYYY"),n.value=[new Date(this.props.startDate),new Date(this.props.endDate)]);var l=y()({"bi-calendar":!0,"bi-calendar--date-set":i});return d.a.createElement("div",{className:l,ref:function(t){e.element=t}},d.a.createElement("button",{className:"bi-calendar__btn bi-btn bi-btn--flat",onClick:this.showCalendar},a),d.a.createElement("button",{className:"bi-calendar__btn-reset bi-btn bi-btn--flat",onClick:this.resetCalendar},d.a.createElement(w.j,{className:"bi-calendar__btn-reset-icon"})),d.a.createElement(C.a,Object.assign({},n,{className:t,prevLabel:d.a.createElement(w.c,{className:"bi-calendar__icon bi-calendar__icon--prev"}),nextLabel:d.a.createElement(w.c,{className:"bi-calendar__icon bi-calendar__icon--next"}),prev2Label:d.a.createElement(w.m,{className:"bi-calendar__icon bi-calendar__icon--prev"}),next2Label:d.a.createElement(w.m,{className:"bi-calendar__icon bi-calendar__icon--next"}),formatShortWeekday:function(e,t){return j()(t).format("dddd")[0]},selectRange:!0,onChange:this.setCalendar})))}},{key:"resetCalendar",value:function(){this.props.onChange(null,null)}},{key:"setCalendar",value:function(e){var t=Object(v.a)(e,2),a=t[0],i=t[1];this.props.onChange(a.getTime(),i.getTime()),this.hideCalendar()}},{key:"showCalendar",value:function(){this.setState({isCalendarShown:!0}),document.addEventListener("click",this.hideOnOutsideClick)}},{key:"hideCalendar",value:function(){this.setState({isCalendarShown:!1}),document.removeEventListener("click",this.hideOnOutsideClick)}},{key:"hideOnOutsideClick",value:function(e){e.target!==this.element&&document.contains(e.target)&&!this.element.contains(e.target)&&this.hideCalendar()}}]),a}(d.a.PureComponent)),x=a(233),P=a(215),S=a(70),B=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).params=void 0,i.onDateChange=i.onDateChange.bind(Object(s.a)(i)),i.getPageUrl=i.getPageUrl.bind(Object(s.a)(i)),i.getLimitLink=i.getLimitLink.bind(Object(s.a)(i)),i.params=i.getParams(),i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.blocks.preloaded?this.props.clearPreloadedState():this.reloadBlocks(this.params)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.getParams();JSON.stringify(t)!==JSON.stringify(this.params)&&(this.params=t,this.reloadBlocks(this.params))}},{key:"render",value:function(){return this.props.blocks.fetching?d.a.createElement(S.a,null):d.a.createElement("div",{className:"bi-data g-flex-column g-flex-column__item-fixed"},d.a.createElement(u.a,{id:"common.pages.data.title"},(function(e){return d.a.createElement(_.a,null,d.a.createElement("title",null,e))})),d.a.createElement("div",{className:"bi-data__header g-flex-column__item-fixed g-flex"},d.a.createElement("div",{className:"bi-data__title g-flex__item"},d.a.createElement(u.a,{id:"components.data.title"})),d.a.createElement("div",{className:"bi-data__filters g-flex__item-fixed"},d.a.createElement(L,{onChange:this.onDateChange,startDate:this.params.startDate,endDate:this.params.endDate}))),0===this.props.blocks.total&&!this.props.blocks.fetching&&d.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},d.a.createElement(u.a,{id:"components.data.wrong-query"})),this.props.blocks.total>0&&!this.props.blocks.fetching&&d.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},d.a.createElement(E.a,{blocks:this.props.blocks.blocks,isFetching:this.props.blocks.fetching})),this.props.blocks.total>0&&d.a.createElement("div",{className:"bi-data__footer g-flex-column__item-fixed g-flex"},d.a.createElement("div",{className:"g-flex__item-fixed"},d.a.createElement(x.a,{items:[30,60,120],selected:this.params.limit,label:d.a.createElement(u.a,{id:"components.data.show"}),getLimitLink:this.getLimitLink})),d.a.createElement("div",{className:"g-flex__item-fixed"},d.a.createElement(P.a,{total:this.props.blocks.total,limit:this.params.limit,getPageUrl:this.getPageUrl,forcePage:Math.floor(this.props.blocks.offset/this.params.limit)}))))}},{key:"onDateChange",value:function(e,t){this.reloadBlocks({endDate:t,startDate:e})}},{key:"getPageUrl",value:function(e){var t=b.a.parse(this.props.history.location.search);return t.offset=e*this.params.limit,"/?".concat(b.a.stringify(t))}},{key:"getLimitLink",value:function(e){var t=b.a.parse(this.props.history.location.search);return t.limit=e,"/?".concat(b.a.stringify(t))}},{key:"reloadBlocks",value:function(e){e=Object(i.a)(Object(i.a)(Object(i.a)({},this.params),e),{},{limit:e.limit||30,offset:e.offset||0}),Object.keys(e).forEach((function(t){null===e[t]&&delete e[t]})),this.props.getBlocks(e),0===e.offset&&delete e.offset,30===e.limit&&delete e.limit,this.props.history.push("/?".concat(b.a.stringify(e)))}},{key:"getParams",value:function(){var e=b.a.parse(this.props.history.location.search),t=e.offset,a=e.sortBy,i=e.sortDirection,n=e.startDate,l=e.endDate,s=e.limit;return t=parseInt(t,10),s=parseInt(s,10)||30,n=parseInt(n,10)||null,l=parseInt(l,10)||null,i=["asc","desc"].includes(i)?i:null,{endDate:l,limit:s,offset:t||0,sortBy:a=["height","timestamp","miner","transactionsCount","size","difficulty","minerReward"].includes(a)?a:null,sortDirection:i,startDate:n}}}]),a}(d.a.PureComponent);var U=Object(h.b)((function(e){return e}),(function(e){return Object(f.bindActionCreators)(Object(i.a)(Object(i.a)({},g.a),k.a),e)}))(B);t.default=U}}]);
//# sourceMappingURL=1.16ea5ac2.chunk.js.map