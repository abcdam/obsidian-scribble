[
    {trigger: "===", replacement: "\\equiv", options: "mA"},
    {trigger: "!=", replacement: "\\neq", options: "mA"},
	{trigger: ">=", replacement: "\\geq", options: "mA"},
	{trigger: "<=", replacement: "\\leq", options: "mA"},
	{trigger: ">>", replacement: "\\gg", options: "mA"},
	{trigger: "<<", replacement: "\\ll", options: "mA"},
	{trigger: "simm", replacement: "\\sim", options: "mA"},
	{trigger: "sim=", replacement: "\\simeq", options: "mA"},
    {trigger: "prop", replacement: "\\propto", options: "mA"},

    //propositional logic
    {trigger: "and", replacement: "\\land", options: "mA"},
    {trigger: "or", replacement: "\\lor", options: "mA"},
    {trigger: "not", replacement: "\\neg", options: "mA"},

    // Quantifiers
    {trigger: "eist", replacement: "\\exists", options: "mA"},
    {trigger: "fall", replacement: "\\forall", options: "mA"},


    {trigger: "<->", replacement: "\\leftrightarrow ", options: "mA"},
    {trigger: "iff", replacement: "\\Leftrightarrow ", options: "mA"},
	{trigger: "->", replacement: "\\to", options: "mA"},
	{trigger: "|>", replacement: "\\mapsto", options: "mA"},
    {trigger: "=>", replacement: "\\implies", options: "mA"},
	{trigger: "=<", replacement: "\\impliedby", options: "mA"},

    // general sets
	{trigger: "isect", replacement: "\\cap", options: "mA"},
	{trigger: "union", replacement: "\\cup", options: "mA"},
	{trigger: "inn", replacement: "\\in", options: "mA"},
	{trigger: "notin", replacement: "\\not\\in", options: "mA"},
    {trigger: "\\\\\\", replacement: "\\setminus", options: "mA"},
    {trigger: "sub=", replacement: "\\subseteq", options: "mA"},
    {trigger: "sup=", replacement: "\\supseteq", options: "mA"},
	{trigger: "eset", replacement: "\\emptyset", options: "mA"},

	{trigger: "defset", replacement: "$0=\\{\\,$1\\,|\\,$2\\,\\} $3", options: "mA"},

    // lattices
    {trigger: "poser", replacement: "\\preceq $0", options: "mA"},
    {trigger: "latlike", replacement: "\\langle $0 \\rangle $1", options: "mA"},
	
]