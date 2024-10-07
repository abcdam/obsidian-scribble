---
mathLink-blocks:
    boclosure: $\text{closed}$
    assoc: $\text{associative}$
    LS: $\text{Latin square}$
    ident: $\text{identity}$
    invers: $\text{inverse}$
    commutat: $\text{commutative}$
    idempot: $\text{idempotent}$
---


### Binary Operator

>[!faq] Binary operator
>- A 2-ary function is a binary operator that accepts two elements and maps them to a third element:
>$$
>f:(A\times B)\rightarrow S
>$$
>- The binary operation operates on a set if the codomain and both domains are the same set:$$
>f:(S\times S)\rightarrow S$$

### Binary operator - Some possible properties

$$
\forall ab\in A\;(\;a\bullet b\in A\;) \tag{closure}
$$
^boclosure

$$
\forall abc\in A\;(\;(a\bullet b)\bullet c=a\bullet (b\bullet c)\;)\; \tag{associative}
$$
^assoc

$$
\begin{align}
\forall ab \,\exists xy\in A,\;\text{such that}& \\ &a\bullet x= b \qquad\text{ (rh division)}\\ &y\bullet a=b \qquad\text{ (lh division)}\tag{LS}
\end{align}
$$
^LS

$$
\exists e\forall a \in A\;(\;e\bullet a=a=a\bullet e\;)\; \tag{identity}\\  \\
$$
^ident

$$\begin{align}
\exists e\,\forall a\,\exists xy\in A,\text{ such that}  \\ &a\bullet x=e \qquad\text{ (rh inverse)}\\ &y\bullet a=e \qquad\text{ (lh inverse)} \tag{inverse}
\end{align}
$$
^invers

$$
\forall ab\in A\;(\;a\bullet b=b\bullet a\;)\; \tag{commutative}
$$
^commutat

$$
\forall x\in A\;(\;x\bullet x=x\; )\tag{idempotent}
$$
^idempot
