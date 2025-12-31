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
