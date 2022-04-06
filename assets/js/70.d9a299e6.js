(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{554:function(t,e,a){"use strict";a.r(e);var r=a(18),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Keyword(s)")])]),t._v(" "),a("th",[a("strong",[t._v("What it does")])]),t._v(" "),a("th",[a("strong",[t._v("Snippet")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("var")]),t._v(" "),a("td",[t._v("declares variables")]),t._v(" "),a("td",[t._v("var nish: int;var m := 5;\tinferred type var i: int, j: nat;var x, y, z: bool := 1, 2, true;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v(":=")]),t._v(" "),a("td",[t._v("assignment")]),t._v(" "),a("td",[t._v("z := false;x, y := x+y, x-y;\t/* parallel assignment */")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("if..else")]),t._v(" "),a("td",[t._v("conditional statement")]),t._v(" "),a("td",[t._v("if z { x := x + 1; }\t/* braces are* / else{ y := y - 1; } /* mandatory */")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("if..then..else")]),t._v(" "),a("td",[t._v("conditional expression")]),t._v(" "),a("td",[t._v("m := if x < y then x else y;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("while forall")]),t._v(" "),a("td",[t._v("loops")]),t._v(" "),a("td",[t._v("while x > y { x := x - y; } forall i | 0 <= i < m { Foo(i); }")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("method returns")]),t._v(" "),a("td",[t._v("subroutines")]),t._v(" "),a("td",[t._v("/* Without a return value*/ method Hello() { print “Hello Dafny”; } /*With a return value */  method Norm2(x: real, y: real) returns (z: real)\t/*  return values */  {\t/* must be named */ z := x * x + y * y;}/* Multiple return values */  method Prod(x: int) returns(dbl: int, trpl: int){ dbl, trpl := x * 2, x * 3; }")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("class")]),t._v(" "),a("td",[t._v("object classes")]),t._v(" "),a("td",[t._v("class Point\t/* classes contain */{\t/* variables and methods */ var x: real, y: real method Dist2(that: Point) returns (z: real)  requires that != null { z := Norm2(x - that.x, y - that.y); }}")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("array")]),t._v(" "),a("td",[t._v("typed arrays")]),t._v(" "),a("td",[t._v("var a := new bool[2];a[0], a[1] := true, false;method Find(a: array<int>, v: int)  returns (index: int)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Keyword(s)")]),t._v(" "),a("th",[t._v("What it does")]),t._v(" "),a("th",[t._v("Snippet")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("requires")]),t._v(" "),a("td",[t._v("precondition")]),t._v(" "),a("td",[t._v("method Rot90(p: Point) returns (q: Point) requires p != null{ q := new Point; q.x, q.y := -p.y, p.x; }")])]),t._v(" "),a("tr",[a("td",[t._v("ensures")]),t._v(" "),a("td",[t._v("postcondition")]),t._v(" "),a("td",[t._v("method max(a: nat, b: nat) returns (m: nat) ensures m >= a\t/* can have as many */ ensures m >= b\t/* as you like */{ if a > b { m := a; } else { m := b; } }")])]),t._v(" "),a("tr",[a("td",[t._v("assert assume")]),t._v(" "),a("td",[t._v("inline propositions")]),t._v(" "),a("td",[t._v("assume x > 1;assert 2 * x + x / x > 3;")])]),t._v(" "),a("tr",[a("td",[t._v("! && || ==> <== <==>")]),t._v(" "),a("td",[t._v("logical connectives")]),t._v(" "),a("td",[t._v("assume (z || !z) && x > y;assert j < a.Length ==> a[j]*a[j] >= 0;assert !(a && b) <==> !a || !b;")])]),t._v(" "),a("tr",[a("td",[t._v("forall exists")]),t._v(" "),a("td",[t._v("logical quantifiers")]),t._v(" "),a("td",[t._v("assume forall n: nat :: n >= 0; assert forall k :: k + 1 > k;\t/* inferred k:int */")])]),t._v(" "),a("tr",[a("td",[t._v("function predicate")]),t._v(" "),a("td",[t._v("pure definitions")]),t._v(" "),a("td",[t._v("function min(a: nat, b: nat): nat{\t/* body must be an expression */ if a < b then a else b }predicate win(a: array<int>, j: int) requires a != null{\t/* just like function(...): bool */ 0 <= j < a.Length }")])]),t._v(" "),a("tr",[a("td",[t._v("modifies")]),t._v(" "),a("td",[t._v("framing (for methods)")]),t._v(" "),a("td",[t._v("method Reverse(a: array<int>)\t/* not allowed to */ modifies a\t/* assign to “a” otherwise */")])]),t._v(" "),a("tr",[a("td",[t._v("reads")]),t._v(" "),a("td",[t._v("framing (for functions)")]),t._v(" "),a("td",[t._v("predicate Sorted(a: array<int>)\t/* not allowed to */  reads a\t/* refer to “a[_]” otherwise */")])]),t._v(" "),a("tr",[a("td",[t._v("invariant")]),t._v(" "),a("td",[t._v("loop invariants")]),t._v(" "),a("td",[t._v("i := 0;while i < a.Length invariant 0 <= i <= a.Length invariant forall k :: 0 <= k < i ==> a[k] == 0{  a[i], i := 0, i + 1;  } assert forall k :: 0 <= k < a.Length ==> a[k] == 0;")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);