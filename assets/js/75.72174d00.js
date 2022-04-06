(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{559:function(e,a,t){"use strict";t.r(a);var n=t(18),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Dafny Power User:\nCalling Lemmas Automatically")]),e._v(" "),t("p",[e._v("K. Rustan M. Leino")]),e._v(" "),t("p",[e._v("Manuscript KRML 265, 8 June 2019")]),e._v(" "),t("p",[t("strong",[e._v("Abstract.")]),e._v(" Some properties of a function are more useful than others. If you have proved such a property as a lemma, you may want to have it be applied automatically. This note considers ways to achieve something like that in Dafny.")]),e._v(" "),t("p",[e._v("On "),t("a",{attrs:{href:"https://github.com/Microsoft/dafny/issues/231",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Microsoft/dafny/issues/231"),t("OutboundLink")],1),e._v(", a Dafny user asked:")]),e._v(" "),t("blockquote",[t("p",[e._v("Is there a way in Dafny to mark a lemma as “automatic” and add it to the knowledge base of z3 ?")]),e._v(" "),t("p",[e._v("For student homeworks, we often stumble on specifications that are just a bit too complex for Dafny to prove, and require some hand-crafted asserts or lemmas.")]),e._v(" "),t("p",[e._v("It would be nice if we could define those lemmas to augment boogie/z3 search space with domain-specific knowledge, avoiding the need to explain to our students how lemmas work, and the tedious and difficult task to find and use the required lemmas.")]),e._v(" "),t("p",[e._v("Is something like an {:auto} annotation feasible ? Can we augment the .bpl axiomatization ?")])]),e._v(" "),t("p",[e._v("Here is an example that shows the issue. Suppose you declare a function and prove a property about it:")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function FibFib(n: nat): nat {\n  if n == 0 then 0\n  else if n == 1 then 2\n  else FibFib(n-2) + FibFib(n-1)\n}\n\nlemma FibFibIsEven(n: nat)\n  ensures FibFib(n) % 2 == 0\n{\n  // automatically proved by induction\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("For your application, it may be crucial that "),t("code",[e._v("FibFib")]),e._v(" always returns an even number. Using the declarations above, you would then have to call the lemma "),t("code",[e._v("FibFibIsEven")]),e._v(" every time you use the function. This is tedious. Is there some way to instruct Dafny to automatically apply "),t("code",[e._v("FibFibIsEven")]),e._v(" whenever it's needed?")]),e._v(" "),t("p",[e._v("No, there's no such feature in Dafny. (VCC had such a feature, for example.) In some situations, such automation may work well. In other situations, it may cause the lemma to be invoked too many times (say, an infinite number of times), which is problematic.")]),e._v(" "),t("p",[e._v("If you have an interest in trying out some kind of "),t("code",[e._v("{:autoLemma}")]),e._v(" feature, please feel free to play around with the open Dafny sources. In the present state, I have four suggestions that you may try, and which may alleviate some of the tedium you're experiencing.")]),e._v(" "),t("h3",{attrs:{id:"uber-lemmas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uber-lemmas"}},[e._v("#")]),e._v(" Uber Lemmas")]),e._v(" "),t("p",[e._v("One suggestion is to create an “uber lemma” that collects the statements of several other lemmas. For example, if you already have:")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("lemma Lemma0(x: X) ensures P0(x) { ... }\nlemma Lemma1(x: X) ensures P1(x) { ... }\nlemma Lemma2(x: X) ensures P2(x) { ... }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("then you can combine them into one:")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("lemma Everything(x: X)\n  ensures P0(x) && P1(x) && P2(x)\n{\n  Lemma0(x: X);\n  Lemma1(x: X);\n  Lemma2(x: X);\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("This lets you get all 3 properties by calling a single lemma.")]),e._v(" "),t("h3",{attrs:{id:"aggregate-lemma-invocations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-lemma-invocations"}},[e._v("#")]),e._v(" Aggregate Lemma Invocations")]),e._v(" "),t("p",[e._v("Another suggestion is to invoke a lemma on many values at the same time. Given:")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("lemma LemmaForOneX(x: X) ensures P(x) { ... }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("you can invoke this lemma for all values of "),t("code",[e._v("X")]),e._v(" simultaneously:")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("forall x {\n  LemmaForOneX(x);\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("By placing this "),t("code",[e._v("forall")]),e._v(" statement at the beginning of some code you're trying to prove, you have in effect called it for every imaginable value of "),t("code",[e._v("X")]),e._v(". You can of course also tuck this statement into a lemma of its own and then call this one lemma:")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("lemma LemmaForEveryX()\n  ensures forall x :: P(x)\n{\n  forall x {\n    LemmaForOneX(x);\n  }\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("In many cases, this will work fine. In other cases, the verifier may not realize that you have called the lemma on the value that needs the individual lemma, so you may still need to invoke "),t("code",[e._v("LemmaForOneX")]),e._v(" manually. Also, Dafny takes measure to avoid “matching loops” in the quantifiers generated for the lemma calls above (“matching loops” are what can cause an infinite number of uses of the lemmas). However, the mechanism is not perfect, so this added automation may in some cases cause degraded performance.")]),e._v(" "),t("h3",{attrs:{id:"function-postconditions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-postconditions"}},[e._v("#")]),e._v(" Function Postconditions")]),e._v(" "),t("p",[e._v("A third suggestion is to declare some of the most useful properties of a function in the postcondition of the function, rather than in a separate lemma. For example, instead of:")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function F(x: X): int { ... }\nlemma AboutF(x: X)\n  ensures F(x) % 2 == 0\n{ ... }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("you can declare:")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function F(x: X): int\n  ensures F(x) % 2 == 0\n{ ... }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("To obtain the property stated by the lemma, you must call the lemma. In contrast, any property stated in the postcondition of a function is automatically applied every time you call the function.")]),e._v(" "),t("p",[e._v("As I've mentioned, more information can help the verifier do more things automatically, but too much information can also overwhelm and confuse the verifier. Therefore, my suggestion is to use function postconditions only for those properties that you think every user of the function will need. Properties needed more rarely are better off declared in lemmas that have to be manually invoked.")]),e._v(" "),t("p",[e._v("Also, there are limits to what you can write in a function postcondition. In particular, what you write must “terminate”. In practice, this means you may have problems mentioning the function applied to other arguments in the postcondition. For example,")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("predicate R(x: X, y: X)\n  // commutativity:\n  ensures R(x, y) <==> R(y, x)\n  // transitivity:\n  ensures forall z :: R(x, z) && R(z, y) ==> R(x, y)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("is not admitted, because there are self-referential non-terminating (that is, infinitely recursive) calls in the postcondition. Thus, properties like commutativity and transitivity always need to be stated as separate lemmas.")]),e._v(" "),t("h3",{attrs:{id:"basic-premium-function-pairs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-premium-function-pairs"}},[e._v("#")]),e._v(" Basic/premium function pairs")]),e._v(" "),t("p",[e._v("A function postcondition conveniently provides all users of a function with the property that it states, alleviating the need to call the lemma explicitly. If the property is not interesting for all users, a fourth suggestion is to declare two functions. The "),t("em",[e._v("basic")]),e._v(" function gives the actual definition of the function and an accompanying lemma states the property about it. The "),t("em",[e._v("premium")]),e._v(" function calls the basic function and states the property as its postcondition, which is proved by a call to the lemma.")]),e._v(" "),t("div",{staticClass:"language-dafnyx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function F(x: X): int { ... }\nlemma AboutF(x: X)\n  ensures F(x) % 2 == 0\n{ ... }\n\nfunction F_premium(x: X): int\n  ensures F_premium(x) % 2 == 0\n{ AboutF(x); F(x) }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("Users can now choose: a call to "),t("code",[e._v("F_premium")]),e._v(" obtains both the value of the function and the proved property, whereas a call to "),t("code",[e._v("F")]),e._v(" obtains only the value. If you expect the premium version to be more popular than the basic version, you can of course rename "),t("code",[e._v("F")]),e._v(" and "),t("code",[e._v("F_premium")]),e._v(" to "),t("code",[e._v("F_basic")]),e._v(" and "),t("code",[e._v("F")]),e._v(", respectively.")]),e._v(" "),t("p",[e._v("Other than the postcondition, the two functions are synonyms. Semantically. A note of caution is that the mechanism the verifier uses as a guide to its use of quantifiers is syntactic. Therefore, which of the two functions you use in the body of a quantifier can make a difference in when the verifier decides to instantiate the quantifier. For this reason, I suggest you use the basic version of the function inside any quantifier you write.")]),e._v(" "),t("h4",{attrs:{id:"acknowledgments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgments"}},[e._v("#")]),e._v(" Acknowledgments")]),e._v(" "),t("p",[e._v("Bryan Parno provided the fourth suggestion of wrapping a basic version of a function and its lemma into a premium version of the function.")])])}),[],!1,null,null,null);a.default=s.exports}}]);