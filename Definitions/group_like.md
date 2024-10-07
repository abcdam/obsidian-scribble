---
mathLink-blocks:
    magmaTable: $\text{Magma overview of operator properties}$
    magmaDef: $\text{magma}$
    semigDef: $\text{semigroup}$
    unitMagmaDef: $\text{unital magma}$
    partMagmaDef: $\text{partial magma}$
    quasiGDef: $\text{quasigroup}$
    assQDef: $\text{associative quasigroup}$
    loopDef: $\text{loop}$
    monoidDef: $\text{monoid}$
---

| *operator property ->*                    | [[binop#^boclosure]]|[[binop#^assoc]]|[[binop#^ident]] |[[binop#^LS]] |[[binop#^invers]]| [[binop#^commutat]]  |
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

> [!faq] Partial magma: $(G,\circ)$
> - The closure property is not required.
> ->The operator $\circ$ on the set $G$ is a partial [[binop#^binopDef]].
^partMagmaDef

>[!faq] Magma: $(M,\bullet)$
>- A stricter [[#^partMagmaDef]].
>1) ![[binop#^boclosure]]
^magmaDef

>[!faq] Semigroup: $(S,\bullet)$
>- A stricter [[#^magmaDef]].
>2) ![[binop#^assoc]]
^semigDef

>[!faq] Unital Magma: $(U,\bullet)$
>- A stricter [[#^magmaDef]].
>3) ![[binop#^ident]]
^unitMagmaDef

>[!faq] Quasigroup: $(Q,\bullet)$
>- A stricter [[#^magmaDef]].
>4) ![[binop#^LS]]
^quasiGDef

>[!faq] Associative Quasigroup: $(A,\bullet)$
>- A combination of [[#^quasiGDef]] and [[#^semigDef]].
^assQDef

>[!faq] Loop: $(L,\bullet)$
>- A combination of [[#^quasiGDef]] and [[#^unitMagmaDef]].
>- This combination imposes the $\text{inverse}$ property implicitly:
>5) ![[binop#^invers]]
^loopDef

>[!faq] Monoid: $(M,\bullet)$
>- A combination of [[#^semigDef]] and [[#^unitMagmaDef]].
^monoidDef