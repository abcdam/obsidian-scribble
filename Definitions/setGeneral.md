---
mathLink-blocks:
    carthesianProd: $\text{Carthesian product}$
    setLaws: $\text{basic set operation laws}$
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
\end{align}
$$

$$
\begin{align}
A\cap B=B\cap A&  \\
A\cup B=B\cup A&  \tag{Commutativity}
\end{align}
$$


$$
\begin{align}
A\cap (B\cap C)=(A\cap B)\cap C& \\
A\cup (B\cup C)=(A\cup B)\cup C& \tag{Associativity}
\end{align}
$$


$$
\begin{align}
A\cap (A\cup B)=A& \\
A\cup (A\cap B)=A& \tag{Absorption}
\end{align}
$$


$$
\begin{align}
A\cap (B\cup C)=(A\cap B)\cup (A\cap C)& \\
A\cup (B\cap C)=(A\cup B)\cap (A\cup C) \tag{Associativity}
\end{align}
$$


$$
\begin{align}
A\subseteq B \\
\Leftrightarrow A\cap B=A \\
\Leftrightarrow A\cup B=B&\tag{Consistency} \\
\end{align}
$$
^setLaws