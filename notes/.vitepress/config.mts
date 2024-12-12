import { withMermaid } from "vitepress-plugin-mermaid";
import mdFootnote from "markdown-it-footnote";
import mdMathJax3 from "markdown-it-mathjax3";
import mdkatex from "markdown-it-katex";

const tags = [
    "mjx-container",
    "math",
    "maction",
    "maligngroup",
    "malignmark",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mi",
    "mlongdiv",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mscarries",
    "mscarry",
    "mscarries",
    "msgroup",
    "mstack",
    "mlongdiv",
    "msline",
    "mstack",
    "mspace",
    "msqrt",
    "msrow",
    "mstack",
    "mstack",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "semantics",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mspace",
    "mtext",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "msqrt",
    "mstyle",
    "mmultiscripts",
    "mover",
    "mprescripts",
    "msub",
    "msubsup",
    "msup",
    "munder",
    "munderover",
    "none",
    "maligngroup",
    "malignmark",
    "mtable",
    "mtd",
    "mtr",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "msline",
    "msrow",
    "mstack",
    "maction",
    "semantics",
    "annotation",
    "annotation-xml",
];

// https://vitepress.dev/reference/site-config
export default withMermaid({
    mermaid: {},
    mermaidPlugin: {
        class: "mermaid my-class",
    },
    vite: {
        server: {
            host: "0.0.0.0",
        },
    },
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/cs408-notes/resources/logo.png",
                type: "image/png",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
            },
        ],
    ],
    title: "Math Notes",
    description: "Some knowledge of advanced mathematics...",
    markdown: {
        math: false,
        lineNumbers: false,
        toc: {
            level: [2, 3, 4],
        },
        config: (it) => {
            const fakeMd = {
                inline: {
                    ruler: {
                        after(a, b, c) {
                            it.inline.ruler.after(a, b, c);
                        },
                    },
                },
                block: {
                    ruler: {
                        after(...args) {},
                    },
                },
                renderer: {
                    rules: new Proxy(
                        {},
                        {
                            get(target, p) {
                                return it[p];
                            },
                            set(target, p: string, newValue) {
                                if (p !== "math_block") {
                                    it.renderer.rules[p] = newValue;
                                }
                                return true;
                            },
                        }
                    ),
                },
            };

            it.use(mdMathJax3 as any, {
                options: {
                    format: {
                        output: "svg",
                    },
                },
            });
            mdkatex(fakeMd);
            it.use(mdFootnote);
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tags.includes(tag),
            },
        },
    },
    base: "/cs408-notes",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/resources/logo.png",
        search: {
            provider: "local",
        },
        nav: [
            {
                text: "Home",
                link: "/",
            },
            {
                text: "Intro",
                link: "/quick-start",
            },
        ],
        sidebar: [
            {
                text: "计算机网络",
                collapsed: true,
                items: [],
            },
            {
                text: "计算机组成原理",
                collapsed: true,
                items: [],
            },
            {
                text: "数据结构与算法",
                collapsed: true,
                items: [],
            },
            {
                text: "操作系统",
                collapsed: true,
                items: [],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/KuzunohaChitose" },
            { icon: "twitter", link: "https://twitter.com" },
            { icon: "youtube", link: "https://youtube.com" },
        ],
    },
});
