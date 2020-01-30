# markdown-parser
**Markdown -> HTML, simplified**

*From*: [https://3pg.xyz](https://3pg.xyz)

## What is this?
I got bored so I made this. 
The markdown functionality is very simple, and is easily extendible.
This uses extended syntax to convert bootstrap warnings.

## How to use
1) Import -> `<script src="/parser.js" type="module"></script>`
2) Parse
```html
<script src="/parser.js" type="module"></script>
<script type="module">
  import Parser from "/parser.js"
  
  const md = document.getElementById("md"); 
  const parsed = new Parser().parse(md.innerHTML);
  md.innerHTML = parsed;
</script>
```

## Guide
markdown-parser Cheat Sheet

### Inline
| Element        | Markdown           |
| :------------ |:---------------|
| Bold      | `**bold**` |
| Italic      | `*italic*`      |

### Block
| Element        | Markdown           |
| :------------ |:---------------|
| Single Line Code      | ``` `code` ```      |
| Code Block      | ` ```code``` `      |
| H1      | `# Text`      |
| H2      | `## Text`      |
| H3      | `### Text`      |
| H4      | `#### Text`      |
| H5      | `##### Text`      |
| Image      | `![alt](src)`       |
| Anchor Tag      | `[text](href)`       |
| Horizontal Rule      | `---`       |
| List      | `+`       |
| Paragraph      |       |

### Bootstrap
| Element        | Markdown           |
| :------------ |:---------------|
| Info Alert      | `[i] text` |
| Warning Alert      | `[!] text!`      |
| Danger Alert      | `[!!] text!`      |
