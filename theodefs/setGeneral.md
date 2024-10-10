---
mathLink-blocks:
    carthesianProd: $\text{Carthesian product}$
    setLaws: $\text{basic set operation laws}$
    supDef: $\text{supremum}$
    infDef: $\text{infimum}$
---

>[!faq] Carthesian product
> The 2-fold Cartesian product generates a set of all ordered pairs (aka. 2-tuple $(\bigstar,\dagger)\neq(\dagger,\bigstar)$):
>$$A\times B:=\{\,(a,b)\,|\,a\in A\land b\in B\,\}$$
^carthesianProd

### Basic set laws
$$
\begin{align}
A\cap A=A& \\
A\cup A=A& \tag{Idempotence}
\end{align}$$
^setIdem

$$
\begin{align}
A\cap B=B\cap A&  \\
A\cup B=B\cup A&  \tag{Commutativity}
\end{align}$$
^setCommu

$$
\begin{align}
A\cap (B\cap C)=(A\cap B)\cap C& \\
A\cup (B\cup C)=(A\cup B)\cup C& \tag{Associativity}
\end{align}$$
^setAss

$$
\begin{align}
A\cap (A\cup B)=A& \\
A\cup (A\cap B)=A& \tag{Absorption}
\end{align}$$
^setAbs

$$
\begin{align}
A\cap (B\cup C)=(A\cap B)\cup (A\cap C)& \\
A\cup (B\cap C)=(A\cup B)\cap (A\cup C) \tag{Distributivity}
\end{align}$$
^setDistri

$$
\begin{align}
A\subseteq B \\
\Leftrightarrow A\cap B=A \\
\Leftrightarrow A\cup B=B&\tag{Consistency} \\
\end{align}$$
^setConsist

> [!faq] Definition: Supremum
> An upper bound $\varepsilon\in P$ of a subset $S\subseteq (P,\preceq)$ is any element for which the following holds:$$
> \forall x\in S\;(\;x\leq\varepsilon\;) $$
> The upper bound $\varepsilon'$ is called the supremum $\triangledown$ of $S$, when:$$
> \forall\varepsilon\in P\;(\;\triangledown\leq\varepsilon\;)$$
^supDef

> [!faq] Definition: Infimum
> A lower bound $\varepsilon\in P$ of a subset $S\subseteq (P,\preceq)$ is any element for which the following holds:$$
> \forall x\in S\;(\;x\geq \varepsilon\;) $$
> The  lower bound $\varepsilon'$ is called the infimum $\vartriangle$ of $S$, when:$$
> \forall \varepsilon\in P\;(\;\vartriangle\geq \varepsilon\;)$$
^infDef