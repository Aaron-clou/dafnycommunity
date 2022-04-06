(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{520:function(s,n,a){"use strict";a.r(n);var e=a(18),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"引理-计算序列中非负元素的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引理-计算序列中非负元素的个数"}},[s._v("#")]),s._v(" 引理-计算序列中非负元素的个数")]),s._v(" "),a("p",[s._v("方法"),a("code",[s._v("count(a)")]),s._v("的作用是：输入一个整型序列"),a("code",[s._v("a")]),s._v("，返回"),a("code",[s._v("a")]),s._v("中非负元素的个数。")]),s._v(" "),a("p",[s._v("在Dafny中表示序列"),a("code",[s._v("a")]),s._v("长度的方法为"),a("code",[s._v("|a|")]),s._v("，再结合序列的切片和递归的思路，容易写出下面的"),a("code",[s._v("count()")]),s._v("方法：当"),a("code",[s._v("a")]),s._v("的长度为0时返回0，否则将"),a("code",[s._v("a")]),s._v("分割成第一个元素和剩下的元素，对单个元素可直接判断它的非负性，对多个元素则对它递归求解，最后返回它们的和。")]),s._v(" "),a("div",{staticClass:"language-dafny line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function count(a :seq<int>): nat   // 返回序列a中非负元素个数\n{\n    if |a| == 0 then 0 else\n    (if a[0] >= 0 then 1 else 0) + count(a[1..])\n}\n\nmethod m1(){\n    assert count([0, -1, 1] + [-1, 2]) == 3;    // error!\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("对于上面的"),a("code",[s._v("count()")]),s._v("用类似"),a("code",[s._v("assert count([1, -1, 0]) == 2")]),s._v("这样的断言是可以验证通过的，但是如果用类似"),a("code",[s._v("assert count([0, -1, 1] + [-1, 2]) == 3")]),s._v("这样涉及序列拼接的断言是不能验证通过的，其原因在于序列拼接的"),a("code",[s._v("+")]),s._v("和"),a("code",[s._v("count()")]),s._v("中整型的"),a("code",[s._v("+")]),s._v("含义不同，"),a("code",[s._v("count()")]),s._v("并没有规定参数中序列的“相加”。")]),s._v(" "),a("p",[s._v("为了让Dafny能够验证上述断言，我们需要引进引理"),a("code",[s._v("lemma")]),s._v("，一种用于证明某种性质以供后续验证的方法。")]),s._v(" "),a("p",[s._v("在上述断言中，我们使用"),a("code",[s._v("count()")]),s._v("时默认了它对于"),a("code",[s._v("+")]),s._v("的分配性质，因此我们需要对于它的分配性先给出证明，以使Dafny能够正确识别有关断言，如下。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 引理\nlemma Distributive(a: seq<int>, b: seq<int>)    // 证明'+'对于count()是可分配的\n    ensures count(a + b) == count(a) + count(b)\n{\n    if a == []\n    {\n        assert a + b == b;\n    }   \n    else\n    {\n        Distributive(a[1..], b);\n        assert a + b == [a[0]] + (a[1..] + b);\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("分配律性质需要确保"),a("code",[s._v("count(a + b) == count(a) + count(b)")]),s._v("，这是我们想要的结果。首先，若序列"),a("code",[s._v("a")]),s._v("为空，则验证断言"),a("code",[s._v("a + b == b")]),s._v("，否则切去"),a("code",[s._v("a")]),s._v("的首位元素，递归调用"),a("code",[s._v("Distributive()")]),s._v("，即验证后面所有序列的分配性，验证断言"),a("code",[s._v("assert a + b == [a[0]] + (a[1..] + b)")]),s._v("即序列拼接的正确性。整个递归的流程相当于是为Dafny提供了验证思路。")]),s._v(" "),a("p",[s._v("方法"),a("code",[s._v("m1")]),s._v("中，我们先调用"),a("code",[s._v("Distributive()")]),s._v("证明"),a("code",[s._v("count()")]),s._v("对于相关序列的分配律，再验证断言。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("method m1(){\n    Distributive([0, -1, 1], [-1, 2]);  // 先用引理证明分配律\n    assert count([0, -1, 1] + [-1, 2]) == 3;    \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("验证通过。")])])}),[],!1,null,null,null);n.default=t.exports}}]);