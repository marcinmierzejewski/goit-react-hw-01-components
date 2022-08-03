// import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ titleStats, uploadStats }) => {
  return (
    <div>
      {titleStats && (<h2>titleStats</h2>)}
      <ul>
        {uploadStats.map(stats => (
          <li key={stats.id}>
            {stats.label}
            {stats.percentage}
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  uploadStats: PropTypes.array,
};
