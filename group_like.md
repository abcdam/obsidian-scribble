
$$\begin{align}
\forall ab\in A\;&(\;a\bullet b\in A\;) \tag{closure} \\
\forall abc\in A\;&(\;(a\bullet b)\bullet c=a\bullet (b\bullet c)\;)\; \tag{associative} \\ \\
\forall ab \,\exists xy\in A,\;\text{such that}& \\
&a\bullet x= b \qquad\text{ (rh division)}\\
&y\bullet a=b  \qquad\text{ (lh division)} \tag{LS} \\ \\
\exists e\forall a \in A\;&(\;e\bullet a=a=a\bullet e\;)\; \tag{identity} \\ \\
\exists e\,\forall a\,\exists xy\in A,\text{ such that}&  \\
&a\bullet x=e \qquad\text{ (rh inverse)}\\
&y\bullet a=e \qquad\text{ (lh inverse)}\tag{inverse} \\ \\
\forall ab\in A\;&(\;a\bullet b=b\bullet a\;)\; \tag{commutative}
\end{align}
$$
---

|                                           |   Closure    | Associativity |      Id      |      LS      |   Inverse    | Commutative  |
| ----------------------------------------- | :----------: | :-----------: | :----------: | :----------: | :----------: | :----------: |
| **partial magma**                         |              |               |              |              |              |              |
| **magma**: $(M,\bullet)$                  | $\checkmark$ |               |              |              |              |              |
| **semigroup**: $(S,\bullet)$              | $\checkmark$ | $\checkmark$  |              |              |              |              |
| **unital magma**: $(U,\bullet)$           | $\checkmark$ |               | $\checkmark$ |              |              |              |
| **quasigroup**: $(Q,\bullet)$             | $\checkmark$ |               |              | $\checkmark$ |              |              |
| **associative quasigroup**: $(A,\bullet)$ | $\checkmark$ | $\checkmark$  |              | $\checkmark$ |              |              |
| **loop**: $(L,\bullet)$                   | $\checkmark$ |               | $\checkmark$ | $\checkmark$ | $\checkmark$ |              |
| **monoid**: $(M,\bullet)$                 | $\checkmark$ | $\checkmark$  | $\checkmark$ |              |              |              |
| **group**:$(G,\bullet)$                   | $\checkmark$ | $\checkmark$  | $\checkmark$ | $\checkmark$ | $\checkmark$ |              |
| **abelian group**: $(A,\bullet)$          | $\checkmark$ | $\checkmark$  | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ |

```
Abelian_Group extends Group
Group extends Loop, Monoid, Associative_Quasigroup
Monoid extends Semigroup, Unital_Magma
Loop extends Quasigroup, Unital_Magma
Associative_Quasigroup extends Quasigroup, Semigroup
Semigroup extends Magma
Unital_Magma extends Magma
Quasigroup extends Magma
Magma extends Partial_Magma
```
