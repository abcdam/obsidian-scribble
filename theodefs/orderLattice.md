---
mathLink-blocks:
    poset: $\text{poset}$
    semilat: $\text{semi-lattice}
---

> [!faq] Poset: $(A,\preceq)$
> A [[orderRelations#^binRelConcept]] $\preceq$ on set $A$ that is RAT:
> - [[orderRelations#^reflx]]
> - [[orderRelations#^antisymm]]
> - [[orderRelations#^transit]]
^poset

>[!faq] Semi-lattice
>- Is a [[#^poset]]
>- Is a [[binop#^commutat]], [[binop#^idempot]] [[group_like#^magmaTable|$\text{semigroup}$]]
>
> **A single binary operator:**
>
> >[!faq] join-semilattice: $\langle S,\lor \rangle$
> >- A [[setGeneral#^supDef]] exists for all pairs (the join):
> >$$\forall ab\;\exists \triangledown\in S\;(\;(a\lor b)= \triangledown_{\{a,b\}}\;)$$
> >- The partial order is induced by: $$a\leq b\Leftrightarrow a\lor b=b$$
> >- It can be bounded by the least element, if it exists: $$\exists \bot\forall a\in S\;(\;a\lor \bot=a\;)\;$$
>
>>[!faq] meet-semilattice: $\langle S,\land \rangle$
> >- An [[setGeneral#^infDef]] exists for all pairs (the meet): 
> >$$\forall ab\,\exists\vartriangle\in S\;(\;(a\land b)\;=\vartriangle_{\{a,b\}} \,)
> >$$ 
> >- The partial order is induced by: $$a\leq b\Leftrightarrow a\land b=a$$
> It can be bounded by the greatest element, if it exists: $$\exists \top\,\forall a\in S\;(\;a\land \top=a\;)\;$$
^semilat

> [!faq] lattice: $\langle L,\land,\lor \rangle$
> - Is a meet- and join-semilattice (two binary operators).
> - The operators interact through *absorption laws*$$\forall ab\in L\;(\;a\lor (a\land b)=a=a\land (a\lor b)\;)\;$$
^lattice

>[!faq] bounded lattice: $\langle L,\land,\lor,\bot,\top \rangle$
A lattice
must have a least element and a greatest element:$$\exists\bot\top\,\forall x\in L\;(\;\bot\leq x\leq\top\;)\;$$
$\bot$ is thus the id element for the join and $\top$ is the id element for the meet


>[!faq] complete lattice
A bounded lattice
Has suprema and infima for all subsets


>[!faq] algebraic lattice
a complete lattice
todo: compact elements
 https://math.stackexchange.com/questions/3095111/what-is-a-compact-element
 https://www.pls-lab.org/en/Compact_element_(order)


>[!faq] (ortho-)complemented lattice


>[!faq] (semi-)modular lattice


>[!faq] distributive lattice


>[!faq] toset


>[!faq] (pseudo-)boolean lattice

