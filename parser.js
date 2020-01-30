export default class Parser
{
    get rules()
    {
        return {
            inline:
            {
                italic: /\*(?<=\*)(.*)(?=\*)\*/gm,
                bold: /\*\*(.*)\*\*/gm
            },
            block:
            {
                ul: /^[+|-](.*)/gm,
                a: /\[(.*)\]\((.*)\)/gm,
                preCode: /\```(.*?)\```/gs,
                code: /\`(.*?)\`/g,
                h1: /^# (.*)/gm,
                h2: /^## (.*)/gm,
                h3: /^### (.*)/gm,
                h4: /^#### (.*)/gm,
                h5: /^##### (.*)/gm,
                hr: /---+/gm,
                img: /\!\[(.*)\]\((.*)\)/gm,
                p: /^\n+/gm
            },
            bootstrap:
            {
                info: /^\[i\](.*)/gm,
                warning: /^\[!\](.*)/gm,
                danger: /^\[!!\](.*)/gm
            }
        }
    }
    constructor(){}

    /** @param {*} text markdown to convert */
    parse(text)
    {
        const rules = this.rules;
        return text
            .replace(rules.inline.bold, `<strong>$1</strong>`) 
            .replace(rules.inline.italic, `<em>$1</em>`) 
            .replace(rules.block.preCode, `<pre><code>$1</code></pre>`)
            .replace(rules.block.code, `<code>$1</code>`)    
            .replace(rules.block.h1, `<h1>$1</h1>`)
            .replace(rules.block.h2, `<h2>$1</h2>`)
            .replace(rules.block.h3, `<h3>$1</h3>`)
            .replace(rules.block.h4, `<h4>$1</h4>`)
            .replace(rules.block.h5, `<h5>$1</h5>`)
            .replace(rules.block.img, `<img src="$2" alt="$1">`)
            .replace(rules.block.a, `<a href="$2">$1</a>`)
            .replace(rules.block.hr, `<hr>`)
            .replace(rules.block.ul, `<ul><li>$1</li></ul>`)
            .replace(rules.block.p, `</p><p>`)
            .replace(rules.bootstrap.info, `<div class="alert alert-info">ℹ$1</div>`)
            .replace(rules.bootstrap.warning, `<div class="alert alert-warning">⚠$1</div>`)
            .replace(rules.bootstrap.danger, `<div class="alert alert-danger">☢$1</div>`);
    }
}
