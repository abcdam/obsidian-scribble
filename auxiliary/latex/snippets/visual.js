[
        // Visual operations
	{trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
	{trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "mA"},
	{trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
	{trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},

    {trigger: "s", replacement: "\\;", options: "m"},
    {trigger: "ss", replacement: "\\quad", options: "m"},
    {trigger: "sss", replacement: "\\qquad", options: "m"},

    // Brackets
    /*
	
	{trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
	{trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1},
	{trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA"},
	{trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
	{trigger: "mod", replacement: "|$0|$1", options: "mA"},
    */
	{trigger: "(", replacement: "(${VISUAL})", options: "mA"},
    {trigger: "(", replacement: "\\;(\\;$0\\;)\\; $1", options: "mA"},
    {trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
	{trigger: "{", replacement: "{$0}$1", options: "mA"},
/*
	{trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
	{trigger: "[", replacement: "[$0]$1", options: "mA"},
	{trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
	{trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
	{trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
	{trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
	{trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},
    */
]