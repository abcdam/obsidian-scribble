---
mathLink-blocks:
    magmaTable: $\text{Magma overview of operator properties}$
---

| *operator property ->*                    | [[binop#^boclosure]]  |  [[binop#^assoc]]   |      [[binop#^ident]]      |      [[binop#^LS]]      |   [[binop#^invers]]    | [[binop#^commutat]]  |
|:----------------------------------------- |:------------:|:------------:|:------------:|:------------:|:------------:|:------------:|
| **partial magma**                         |              |              |              |              |              |              |
| **magma**: $(M,\bullet)$                  | $\checkmark$ |              |              |              |              |              |
| **semigroup**: $(S,\bullet)$              | $\checkmark$ | $\checkmark$ |              |              |              |              |
| **unital magma**: $(U,\bullet)$           | $\checkmark$ |              | $\checkmark$ |              |              |              |
| **quasigroup**: $(Q,\bullet)$             | $\checkmark$ |              |              | $\checkmark$ |              |              |
| **associative quasigroup**: $(A,\bullet)$ | $\checkmark$ | $\checkmark$ |              | $\checkmark$ |              |              |
| **loop**: $(L,\bullet)$                   | $\checkmark$ |              | $\checkmark$ | $\checkmark$ | $\checkmark$ |              |
| **monoid**: $(M,\bullet)$                 | $\checkmark$ | $\checkmark$ | $\checkmark$ |              |              |              |
| **group**: $(G,\bullet)$                   | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ |              |
| **abelian group**: $(A,\bullet)$          | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ |
^magmaTable








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