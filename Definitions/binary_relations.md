---
mathLink-blocks:
    binRelConcept: $\text{binary relation}$
    setLaws: $\text{basic set operation laws}$
    reflx: $\text{reflexive}$
    antireflz: $\text{antireflexive}$
    asymm: $\text{asymmetric}$
    symm: $\text{symmetric}$
    transit: $\text{transitive}$
    connec: $\text{connected}$
    strongConnec: $\text{strongly connected}$
    dense: $\text{dense}$
    antisymm: $\text{antisymmetric}$
---

> [!info] Binary relation conceptual
> ![[relationGeneral#^binRelDef]]
> - A homogeneous relation $\rho$ (a binary relation **on** a set $A$) is a subset of $A\times A$.
> - Is written as $a\;\rho \;b\Leftrightarrow(a,b)\in\rho$
^binRelConcept

#### Homogenous relation - Some possible properties
- Reflexivity
$$
id\subseteq\rho \Leftrightarrow  \forall a\in A\;(\;a\rho a\;)
$$
^reflx

- Antireflexivity
$$
id\cap\rho =\emptyset\Leftrightarrow \forall a\in A\;(\;\neg(a\rho a)\; )
$$
^antireflz

- Asymmetry
$$
\rho \cap \hat{\rho }=\emptyset\Leftrightarrow \forall ab\in A\;(\;a\rho b\to \neg(b\rho a)\; )
$$
^asymm

- Symmetry
$$
\rho=\hat{\rho}\Leftrightarrow \forall a\forall b\in A\;(\;a\rho b\leftrightarrow b\rho a\; )
$$
^symm

- Antisymmetry
$$
\rho \cap \hat{\rho}\subseteq id\Leftrightarrow \forall a\forall b\in A\;(\;(a\rho b\land b\rho a)\to a=b \;)
$$
^antisymm

- Transitivity
$$
\rho ^{2}\subseteq\rho\Leftrightarrow \forall abc\in A\;(\;(a\rho b\land b\rho c)\to a\rho c )
$$
^transit

- Connectivity
$$
A\times A\setminus id\subseteq\rho \cup \hat{\rho}\Leftrightarrow \forall ab\in A\;(\;a\neq b\to (a\rho b\lor b\rho a)\;)
$$
^connec

- Strong connectivity
$$
A\times A \subseteq\rho\cup\hat{\rho}\Leftrightarrow \forall ab\in A\;(\;a\rho b\lor b\rho a\;)
$$
^strongConnec

- Density
$$
\rho \subseteq\rho ^{2}\Leftrightarrow \forall ab\;\exists c\in A\;(\;a\rho b\to (a\rho c\land c\rho b)\;)
$$
^dense