(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{517:function(s,e,n){"use strict";n.r(e);var t=n(18),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"寻找最大和最小数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#寻找最大和最小数"}},[s._v("#")]),s._v(" 寻找最大和最小数")]),s._v(" "),n("p",[s._v("输入两个整数，返回两个值，它们经过+/-运算后较大的数和较小的数。")]),s._v(" "),n("p",[s._v("我们在函数体中定义较大值为两者加和，较小值为两者相减。")]),s._v(" "),n("p",[s._v("在返回值"),n("code",[s._v("returns")]),s._v("里我们可以定义变量more，less，以便在函数体中使用它们。")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method Maxmin(x:int, y:int) returns (more:int, less:int)    \nensures y > 0 ==> less < x < more\nensures y < 0 ==> more < x < less  \n{\n    more := x + y;\n    less := x - y;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("其中，"),n("code",[s._v("ensures")]),s._v("代表后置条件，这里需要确保第二个数大于0时，较大数大于第一个数；第二个数小于0时，较小数大于第一个数。由于我们在函数体中定义较大值为两者加和，较小值为两者相减，显然在y < 0时是不成立的，利用这两个限定条件可以帮助Dafny判断该程序的正确性。")])])}),[],!1,null,null,null);e.default=a.exports}}]);