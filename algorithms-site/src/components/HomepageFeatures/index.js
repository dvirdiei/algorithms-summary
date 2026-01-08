import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'אלגוריתמים חמדניים',
    summary: 'בחירות מקומיות עם הוכחת נכונות, אינטואיציה ברורה ודוגמאות מפורקות צעד-צעד.',
    to: '/docs/greedy-algorithms',
    icon: '⚡',
    accent: '#ffd369',
  },
  {
    title: 'עצי הופמן',
    summary: 'דחיסת נתונים בעזרת עצים בינאריים - קודים קצרים לתווים תכופים, אופטימליות מובטחת.',
    to: '/docs/huffman-coding',
    icon: '🌳',
    accent: '#64f6c8',
  },
  {
    title: 'תכנות דינמי',
    summary: 'מפרקים בעיות גדולות לטבלה אחת מסודרת, עם שחזור הפתרון וסיבוכיות מדויקת.',
    to: '/docs/dynamic-programming',
    icon: '🧮',
    accent: '#8deaff',
  },
  {
    title: 'עץ פורש מינימלי',
    summary: 'אלגוריתמי קרוסקל ופרים לחיבור גרף בעלות מינימלית - תכונת החתך והמעגלים.',
    to: '/docs/minimum-spanning-tree',
    icon: '🌲',
    accent: '#a78bfa',
  },
  {
    title: 'מסלולים קצרים',
    summary: 'דייקסטרה, בלמן-פורד, DAG ופלויד-וורשל - מציאת הדרך הקצרה בגרפים ממוקשלים.',
    to: '/docs/shortest-paths',
    icon: '🛤️',
    accent: '#f472b6',
  },
  {
    title: 'רשתות זרימה',
    summary: 'פורד-פולקרסון ואדמונדס-קארפ לזרימה מקסימלית, רדוקציה לזיווג דו-צדדי.',
    to: '/docs/flow-networks',
    icon: '🌊',
    accent: '#38bdf8',
  },
  {
    title: 'תורת הסיבוכיות',
    summary: 'מחלקות P ו-NP, השאלה הפתוחה P=NP?, בעיות הכרעה מול אופטימיזציה ו-NP-Complete.',
    to: '/docs/complexity-theory',
    icon: '🧠',
    accent: '#f97316',
  },
  {
    title: 'רדוקציות פולינומיות',
    summary: 'כלי מרכזי להשוואת קושי בעיות - רדוקציה A ≤ₚ B, טרנזיטיביות והוכחות NP-Completeness.',
    to: '/docs/reductions',
    icon: '🔗',
    accent: '#fbbf24',
  },
  {
    title: 'בעיות NP-Complete קלאסיות',
    summary: 'SAT, 3-SAT, Clique, Vertex Cover, TSP, Subset Sum ועוד - עם רדוקציות גרפיות מפורטות.',
    to: '/docs/np-complete-problems',
    icon: '🎯',
    accent: '#22c55e',
  },
];

function Feature({title, summary, to, icon, accent}) {
  return (
    <Link className={styles.card} to={to} style={{'--accent': accent}}>
      <div className={styles.circleWrap}>
        <div className={styles.circle}>
          <span className={styles.icon}>{icon}</span>
        </div>
        <span className={styles.wave} />
      </div>
      <Heading as="h3" className={styles.heading}>
        {title}
      </Heading>
      <p className={styles.summary}>{summary}</p>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
