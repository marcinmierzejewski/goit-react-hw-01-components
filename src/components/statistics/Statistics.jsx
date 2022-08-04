import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ titleStats, uploadStats }) => {
  const { statistics, title, statList, item, label, percentage } = styles;
  return (
    <section className={statistics}>
      {titleStats && <h2 className={title}>{titleStats}</h2>}
      <ul className={statList}>
        {uploadStats.map(stats => (
          <li
            className={item}
            style={{ backgroundColor: `${getRandomHexColor()}`
          }}
            key={stats.id}
          >
            <span className={label}>{stats.label}</span>
            <span className={percentage}>{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  uploadStats: PropTypes.array,
};
