[]/* <-- make latex plugin interpreter skip this file

This directory is a customization of the default setup provided by https://github.com/artisticat1/obsidian-latex-suite/. The default latex snippets are pruned to a basic configuration and split up into several files according to their functionality to make customization and maintenance easier. Open this README in a .md reader like obsidian.

## Snippet reference ([source](https://github.com/artisticat1/obsidian-latex-suite/tree/main?tab=readme-ov-file#snippets))
### Snippets

_Snippets_ are shortcuts that allow you to insert certain text based on certain triggers. For example, the default snippet (modified from src):
```js
{trigger: "l", replacement: "$$0$", options: "t"}
```
will open the in-place latex mode when the letter `l` is followed by a `tab` (but only outside of latex blocks, as indicated by option `t`).

#### Snippet structure
```javascript
{
  trigger: string | RegExp,
  replacement: string,
  options: string,
  priority?: number,
  description?: string,
  flags?: string,
}
```

- `trigger` : The text that triggers this snippet.
    - Triggers can also be regular expressions. [See here for more info.](https://github.com/artisticat1/obsidian-latex-suite/blob/main/DOCS.md#regex-snippets)
- `replacement` : The text to replace the `trigger` with.
    - Replacements can also be JavaScript functions. [See here for more info.](https://github.com/artisticat1/obsidian-latex-suite/blob/main/DOCS.md#function-snippets)
- `options` : See below.
- `priority` (optional): This snippet's priority. Snippets with higher priority are run first. Can be negative. Defaults to 0.
- `description` (optional): A description for this snippet.
- `flags` (optional): Flags for regex snippets.
#### Options
- `t` : Text mode. Only run this snippet outside math
- `m` : Math mode. Only run this snippet inside math. Shorthand for both `M` and `n`
- `M` : Block math mode. Only run this snippet inside a `$$ ... $$` block
- `n` : Inline math mode. Only run this snippet inside a `$ ... $` block
- `A` : Auto. Expand this snippet as soon as the trigger is typed. If omitted, the Tab key must be pressed to expand the snippet
- `r` : [Regex](https://github.com/artisticat1/obsidian-latex-suite/blob/main/DOCS.md#regex-snippets). The `trigger` will be treated as a regular expression
- `v` : [Visual](https://github.com/artisticat1/obsidian-latex-suite/blob/main/DOCS.md#visual-snippets). Only run this snippet on a selection. The trigger should be a single character
- `w` : Word boundary. Only run this snippet when the trigger is preceded (and followed by) a word delimiter, such as `.`, `,`, or `-`.
- `c` : Code mode. Only run this snippet inside a ` ``` ... ``` ` block

>Insert **tabstops** for the cursor to jump to by writing "$0", "$1", etc. in the `replacement`.

make latex plugin interpreter skip this file -->*/