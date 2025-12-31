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
          label: '• חמש אבני הבניין',
          href: '/docs/dynamic-programming#building-blocks'
        },
        {
          type: 'link',
          label: '• 5 צעדים לניצחון',
          href: '/docs/dynamic-programming#five-steps'
        },
        {
          type: 'link',
          label: '• דוגמאות מרכזיות',
          href: '/docs/dynamic-programming#examples'
        },
      ],
    },
  ],
};

export default sidebars;
