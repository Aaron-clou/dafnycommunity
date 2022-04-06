(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{539:function(s,a,n){"use strict";n.r(a);var e=n(18),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"序列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#序列"}},[s._v("#")]),s._v(" 序列")]),s._v(" "),n("p",[s._v("序列是一种表示有序列表的内置Dafny类型。它们可以用来表示许多有序集合，包括列表、队列、堆栈等。序列是一种不可变的值类型:它们一旦创建就不能被修改。从这个意义上说，它们类似于Java和Python等语言中的字符串，只是它们可以是任意类型的序列，而不仅仅是字符。序列类型如下:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   seq<int>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("例如，对于一个整数序列。例如，这个函数将一个序列作为参数:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("predicate sorted(s: seq<int>)\n{\n   forall i,j :: 0 <= i < j < |s| ==> s[i] <= s[j]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("序列的长度写成|s|，如上量词所示。使用与数组相同的方括号语法访问序列的特定元素。还请注意，该函数不需要读取子句来访问序列。这是因为序列不是存储在堆上的;它们是值，因此函数在访问它们时不需要声明。序列最强大的属性是注释和函数可以创建和操作序列。例如，另一种表示排序性的方法是递归:如果第一个元素比其他元素小，而其余元素都已排序，则整个数组都已排序:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("predicate sorted2(s: seq<int>)\n{\n   0 < |s| ==> (forall i :: 0 < i < |s| ==> s[0] <= s[i]) &&\n               sorted2(s[1..])\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("年代的符号(1 . .是将序列切片。它的意思是从第一个元素开始，取元素直到最后。这不会修改s，因为序列是不可变的。相反，它创建了一个新的序列，除了第一个元素之外，所有元素都按相同的顺序排列。这类似于整数的加法，因为原始值没有改变，只是创建了新的值。切片表示法是:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   s[i..j]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在"),n("code",[s._v("0 <= i <= j <= |s|")]),s._v("这个范围中Dafny将强制执行这些索引边界。结果序列将恰好有"),n("code",[s._v("j-i")]),s._v("元素，并且将从元素"),n("code",[s._v("s[i]")]),s._v("开始，如果结果非空，则将连续地遍历序列。这意味着索引j处的元素被排除在切片之外，这反映了用于常规索引的相同的半开区间。")]),s._v(" "),n("p",[s._v("序列也可以使用显示表示法从其元素构造:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" var s := [1, 2, 3];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在这里，我们在一些命令式代码中有一个整数序列变量，其中包含元素1、2和3。这里使用了类型推断来获得序列是整数之一的事实。这种表示法允许我们构造空序列和单例序列:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[] // the empty sequence, which can be a sequence of any type\n   [true] // a singleton sequence of type seq<bool>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("切片表示法和显示表示法可以用来检查序列的属性:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var s := [1, 2, 3, 4, 5];\n   assert s[|s|-1] == 5; //access the last element\n   assert s[|s|-1..|s|] == [5]; //slice just the last element, as a singleton\n   assert s[1..] == [2, 3, 4, 5]; // everything but the first\n   assert s[..|s|-1] == [1, 2, 3, 4]; // everything but the last\n   assert s == s[0..] == s[..|s|] == s[0..|s|]; // the whole sequence\n}\n   var s := [1, 2, 3, 4, 5];\n   assert s[|s|-1] == 5; //access the last element\n   assert s[|s|-1..|s|] == [5]; //slice just the last element, as a singleton\n   assert s[1..] == [2, 3, 4, 5]; // everything but the first\n   assert s[..|s|-1] == [1, 2, 3, 4]; // everything but the last\n   assert s == s[0..] == s[..|s|] == s[0..|s|] == s[..]; // the whole sequence\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("到目前为止，对序列最常见的操作是获取第一个和最后一个元素，以及获取除第一个和最后一个元素以外的所有元素，因为这些通常用于递归函数，如上面的"),n("code",[s._v("sorted2")]),s._v("。除了通过访问或切片来解构序列外，序列还可以使用加号(+)进行连接:\n但是Z3定理证明者不会意识到这一点，除非它被一个声明事实的断言提示(关于为什么这是必要的更多信息，请参阅引理/归纳法)。\n序列还支持in和!in操作符，用于测试序列中的包含情况:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var s := [1, 2, 3, 4, 5];\n   assert 5 in s;\n   assert 0 !in s;\n}\n   assert 5 in s; // using s from before\n   assert 0 !in s;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("这还允许我们在不关心索引的情况下，对序列中的元素进行量化。例如，我们可以要求一个序列只包含该序列的下标元素:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var p := [2,3,1,0];\n   assert forall i :: i in p ==> 0 <= i < |s|;\n}\n   var p := [2,3,1,0];\n   assert forall i :: i in p ==> 0 <= i < |s|;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这是序列中每个单独元素的属性。如果我们想让多个元素相互关联，就需要量化指标，如第一个例子所示。")]),s._v(" "),n("p",[s._v("有时我们想使用序列来模拟数组的可更新特性。虽然我们不能改变原来的序列，但我们可以创建一个新序列，其中除了更新的元素外，所有元素都是相同的:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var s := [1,2,3,4];\n   assert s[2 := 6] == [1,2,6,4];\n}\n   s[i := v] // replace index i by v in seq s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("当然，下标i必须是数组的下标。这个语法只是可以通过常规切片和访问操作完成的操作的快捷方式。你能填写下面的代码吗?")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function update(s: seq<int>, i: int, v: int): seq<int>\n   requires 0 <= index < |s|\n   ensures update(s, i, v) == s[i := v]\n{\n   s[..i] + [v] + s[i+1..]\n   // This works by concatenating everything that doesn't\n   // change with the singleton of the new value.\n}\nfunction update(s: seq<int>, i: int, v: int): seq<int>\n   requires 0 <= index < |s|\n   ensures update(s, i, v) == s[i := v]\n{\n   // open in the editor to see the answer.\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("你也可以用数组的元素组成一个序列。这是使用与上面相同的“slice”表示法完成的:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var a := new int[3]; // 3 element array of ints\n   a[0], a[1], a[2] := 0, 3, -1;\n   var s := a[..];\n   assert s == [0, 3, -1];\n}\n var a := new int[3]; // 3 element array of ints\n   a[0], a[1], a[2] := 0, 3, -1;\n   var s := a[..];\n   assert s == [0, 3, -1];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("为了获得数组的一部分，可以像常规切片操作一样给出边界:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var a := new int[3]; // 3 element array of ints\n   a[0], a[1], a[2] := 0, 3, -1;\n   assert a[1..] == [3, -1];\n   assert a[..1] == [0];\n   assert a[1..2] == [3];\n}\n   assert a[1..] == [3, -1];\n   assert a[..1] == [0];\n   assert a[1..2] == [3];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("因为序列支持in和!in，这个操作为我们提供了一种简单的方法来表示“"),n("code",[s._v("element not in array")]),s._v("”属性，即将这个转变为")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("forall k :: 0 <= k < a.Length ==> elem != a[k]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这个：")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("elem !in a[..]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("此外，边界很容易包括:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("forall k :: 0 <= k < i ==> elem != a[k]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("和以下这个是一样的：")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("elem !in a[..i]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);