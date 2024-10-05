### conceptual
- Cartesian product generates a set of all ordered pairs (aka. 2-tuple $(\bigstar,\dagger)\neq(\dagger,\bigstar)$) from involved components.$$
A\times B=\{\,(a,b)\,|\,a\in A\land b\in B\,\} 
$$

- An $(A,B)$- binary relation $\rho$ from domain set $A$ to codomain set $B$ is a subset of $A\times B$. 
- A binary relation $\rho$ on set $A$ is a subset of $A\times A$, aka. homogeneous relation.
- $a\;\rho \;b\Leftrightarrow(a,b)\in\rho$
- inverse/converse: $$\forall a\in A\,\forall b\in B\;(\;a\rho b\leftrightarrow b\hat{\rho}a\;)\;$$
- composition: $$\begin{align}
\rho \subseteq A\times B,\sigma \subseteq B\times C, \text{ then} \\
a\,\rho\sigma \,c\Leftrightarrow \exists b\in B\;(\;a\rho b\land b\sigma c\;)\;
\end{align}

$$

### some properties
$$
\begin{align}
id\subseteq\rho &\Leftrightarrow  \forall a\in A\;(\;a\rho a\;)\;\tag{reflexive} \\
\rho=\hat{\rho}&\Leftrightarrow \forall a\forall b\in A\;(\;a\rho b\leftrightarrow b\rho a\; )\tag{symmetric} \\
\rho \cap \hat{\rho}\subseteq id&\Leftrightarrow \forall a\forall b\in A\;(\;(a\rho b\land b\rho a)\to a=b )\tag{antisymmetric} \\
\rho ^{2}\subseteq\rho &\Leftrightarrow \forall abc\in A\;(\;(a\rho b\land b\rho c)\to a\rho c )\tag{transitive}
\end{align}
$$