// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🎯 אלגוריתמים חמדניים',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'greedy-algorithms',
      },
      items: [
        {
          type: 'link',
          label: '• תרמיל הגב בשברים',
          href: '/docs/greedy-algorithms#fractional-knapsack'
        },
        {
          type: 'link',
          label: '• תזמון פעילויות',
          href: '/docs/greedy-algorithms#activity-selection'
        },
        {
          type: 'link',
          label: '• תזמון תדלוק (SJF)',
          href: '/docs/greedy-algorithms#fuel-station'
        },
         {
          type: 'link',
          label: '• סיכום קצר',
          href: '/docs/greedy-algorithms#summary'
        },
      ],
    },
    {
      type: 'category',
      label: '🌳 עצי הופמן',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'huffman-coding',
      },
      items: [
        {
          type: 'link',
          label: '• קוד קבוע vs משתנה',
          href: '/docs/huffman-coding#fixed-vs-variable'
        },
        {
          type: 'link',
          label: '• פענוח קוד',
          href: '/docs/huffman-coding#decoding'
        },
        {
          type: 'link',
          label: '• בניית עץ הופמן',
          href: '/docs/huffman-coding#huffman-tree'
        },
        {
          type: 'link',
          label: '• דוגמה מלאה',
          href: '/docs/huffman-coding#example'
        },
        {
          type: 'link',
          label: '• יישומים בעולם האמיתי',
          href: '/docs/huffman-coding#applications'
        },
      ],
    },
    {
      type: 'category',
      label: '⚡ תכנות דינמי',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'dynamic-programming',
      },
      items: [
        {
          type: 'link',
          label: '• מושגי יסוד',
          href: '/docs/dynamic-programming#core-concepts'
        },
        {
          type: 'link',
          label: '• פיבונאצ\'י',
          href: '/docs/dynamic-programming#fibonacci-example'
        },
        {
          type: 'link',
          label: '• תרמיל 0/1',
          href: '/docs/dynamic-programming#knapsack-example'
        },
        {
          type: 'link',
          label: '• LCS - תת-רצף משותף',
          href: '/docs/dynamic-programming#lcs-example'
        },
        {
          type: 'link',
          label: '• כפל מטריצות',
          href: '/docs/dynamic-programming#matrix-chain-example'
        },
        {
          type: 'link',
          label: '• תבניות נפוצות',
          href: '/docs/dynamic-programming#common-patterns'
        },
        {
          type: 'link',
          label: '• אופטימיזציות',
          href: '/docs/dynamic-programming#optimization-tricks'
        },
        {
          type: 'link',
          label: '• סיכום קצר',
          href: '/docs/dynamic-programming#summary'
        },
      ],
    },
    {
      type: 'category',
      label: '🌲 עץ פורש מינימלי',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'minimum-spanning-tree',
      },
      items: [
        {
          type: 'link',
          label: '• חתך וקשת קלה',
          href: '/docs/minimum-spanning-tree#cut-property'
        },
        {
          type: 'link',
          label: '• אלגוריתם קרוסקל',
          href: '/docs/minimum-spanning-tree#kruskal'
        },
        {
          type: 'link',
          label: '• אלגוריתם פרים',
          href: '/docs/minimum-spanning-tree#prim'
        },
        {
          type: 'link',
          label: '• תכונת המעגלים',
          href: '/docs/minimum-spanning-tree#cycle-property'
        },
        {
          type: 'link',
          label: '• סיכום והשוואה',
          href: '/docs/minimum-spanning-tree#summary'
        },
      ],
    },
    {
      type: 'category',
      label: '🛤️ מסלולים קצרים',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'shortest-paths',
      },
      items: [
        {
          type: 'link',
          label: '• אלגוריתם דייקסטרה',
          href: '/docs/shortest-paths#dijkstra'
        },
        {
          type: 'link',
          label: '• בלמן-פורד',
          href: '/docs/shortest-paths#bellman-ford'
        },
        {
          type: 'link',
          label: '• מסלולים ב-DAG',
          href: '/docs/shortest-paths#dag-shortest'
        },
        {
          type: 'link',
          label: '• פלויד-וורשל',
          href: '/docs/shortest-paths#floyd-warshall'
        },
        {
          type: 'link',
          label: '• סיכום והשוואה',
          href: '/docs/shortest-paths#summary'
        },
      ],
    },
    {
      type: 'category',
      label: '🌊 רשתות זרימה',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'flow-networks',
      },
      items: [
        {
          type: 'link',
          label: '• רשת שארית',
          href: '/docs/flow-networks#residual-network'
        },
        {
          type: 'link',
          label: '• Max-Flow Min-Cut',
          href: '/docs/flow-networks#max-flow-min-cut'
        },
        {
          type: 'link',
          label: '• פורד-פולקרסון',
          href: '/docs/flow-networks#ford-fulkerson'
        },
        {
          type: 'link',
          label: '• אדמונדס-קארפ',
          href: '/docs/flow-networks#edmonds-karp'
        },
        {
          type: 'link',
          label: '• זיווג דו-צדדי',
          href: '/docs/flow-networks#bipartite-matching'
        },
        {
          type: 'link',
          label: '• סיכום והשוואה',
          href: '/docs/flow-networks#summary'
        },
      ],
    },
    {
      type: 'category',
      label: '🧠 תורת הסיבוכיות',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'complexity-theory',
      },
      items: [
        {
          type: 'link',
          label: '• מחלקת P',
          href: '/docs/complexity-theory#class-p'
        },
        {
          type: 'link',
          label: '• מחלקת CO-P',
          href: '/docs/complexity-theory#class-co-p'
        },
        {
          type: 'link',
          label: '• מחלקת NP',
          href: '/docs/complexity-theory#class-np'
        },
        {
          type: 'link',
          label: '• מחלקת CO-NP',
          href: '/docs/complexity-theory#class-co-np'
        },
        {
          type: 'link',
          label: '• NP-Complete',
          href: '/docs/complexity-theory#np-complete'
        },
        {
          type: 'link',
          label: '• P = NP?',
          href: '/docs/complexity-theory#p-vs-np'
        },
        {
          type: 'link',
          label: '• הכרעה vs אופטימיזציה',
          href: '/docs/complexity-theory#decision-vs-optimization'
        },
        {
          type: 'link',
          label: '• סיכום',
          href: '/docs/complexity-theory#summary'
        },
      ],
    },
    {
      type: 'category',
      label: '🔗 רדוקציות',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'reductions',
      },
      items: [
        {
          type: 'link',
          label: '• רדוקציה פולינומית',
          href: '/docs/reductions#polynomial-reduction'
        },
        {
          type: 'link',
          label: '• דוגמה: HAM-PATH לְ HAM-CYCLE',
          href: '/docs/reductions#hamiltonian-example'
        },
        {
          type: 'link',
          label: '• תכונות רדוקציות',
          href: '/docs/reductions#reduction-types'
        },
        {
          type: 'link',
          label: '• סיכום',
          href: '/docs/reductions#summary'
        },
      ],
    },
    {
      type: 'category',
      label: '🎯 בעיות NP-Complete',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'np-complete-problems',
      },
      items: [
        {
          type: 'link',
          label: '• SAT',
          href: '/docs/np-complete-problems#sat'
        },
        {
          type: 'link',
          label: '• 3-SAT',
          href: '/docs/np-complete-problems#3sat'
        },
        {
          type: 'link',
          label: '• Clique',
          href: '/docs/np-complete-problems#clique'
        },
        {
          type: 'link',
          label: '• Vertex Cover',
          href: '/docs/np-complete-problems#vertex-cover'
        },
        {
          type: 'link',
          label: '• Hamiltonian Cycle',
          href: '/docs/np-complete-problems#hamiltonian'
        },
        {
          type: 'link',
          label: '• TSP',
          href: '/docs/np-complete-problems#tsp'
        },
        {
          type: 'link',
          label: '• Subset Sum',
          href: '/docs/np-complete-problems#subset-sum'
        },
        {
          type: 'link',
          label: '• Partition',
          href: '/docs/np-complete-problems#partition'
        },
        {
          type: 'link',
          label: '• Integer Knapsack',
          href: '/docs/np-complete-problems#knapsack'
        },
        {
          type: 'link',
          label: '• Bin Packing',
          href: '/docs/np-complete-problems#bin-packing'
        },
      ],
    },
    
  ],
};

export default sidebars;


