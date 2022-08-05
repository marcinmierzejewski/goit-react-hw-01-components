import styles from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {

  return (
    <section className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar} src={avatar} alt={username} />
        <p className={styles.name}> {username} </p>
        <p className={styles.tag}> @{tag} </p>
        <p className={styles.location}> {location} </p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}> Followers </span>
          <span className={styles.quantity}> {stats.followers} </span>
        </li>
        <li>
          <span className={styles.label}> Views </span>
          <span className={styles.quantity}> {stats.views} </span>
        </li>
        <li>
          <span className={styles.label}> Likes </span>
          <span className={styles.quantity}> {stats.likes} </span>
        </li>
      </ul>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};