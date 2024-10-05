#### poset: $(A,\preceq)$
- A binary relation $\preceq$ on set $A$ that is RAT
	- [[binary_relations]]
#### semi-lattice
- a poset
- commutative, idempotent semigroup
- single binary operator
**join-semilattice**: $\langle S,\lor \rangle$
- suprema: has a unique least upper bound for $\forall xy\in S$ (the join)
- partial order given by $x\leq y\Leftrightarrow x\lor y=y$
- bounded by least element, if it exists: $\exists e\forall x\in S\;(\;x\lor e=x\;)\;$
**meet-semilattice**: $\langle S,\land \rangle$
- infima: has a unique greatest lower bound for $\forall xy\in S$ (the meet)
- partial order given by $x\leq y\Leftrightarrow x\land y=x$
- bounded by greatest element, if it exists: $\exists e\forall x\in S\;(\;x\land e=x\;)\;$
#### lattice: $\langle L,\land,\lor \rangle$
- Is a meet- and join-semilattice (two binary operators)
- binary operators additionally obey *absorption laws*
	- $\forall ab\in L\;(\;a\lor (a\land b)=a=a\land (a\lor b)\;)\;$
#### bounded lattice: $\langle L,\land,\lor,\bot,\top \rangle$
- A lattice
- must have a least element and a greatest element:$$\exists\bot\top\,\forall x\in L\;(\;\bot\leq x\leq\top\;)\;$$
- $\bot$ is thus the id element for the join and $\top$ is the id element for the meet
#### complete lattice
- A bounded lattice
- Has suprema and infima for all subsets
#### algebraic lattice
- a complete lattice
- todo: compact elements
	- https://math.stackexchange.com/questions/3095111/what-is-a-compact-element
	- https://www.pls-lab.org/en/Compact_element_(order)
#### (ortho-)complemented lattice

#### (semi-)modular lattice
#### distributive lattice
#### toset
#### (pseudo-)boolean lattice

