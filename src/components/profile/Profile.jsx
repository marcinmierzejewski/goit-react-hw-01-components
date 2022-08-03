import styles from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const profileClasses = [styles.profile];

  return (
    <div className={profileClasses}>
      <div>
        <img src={avatar} alt={username} />
        <p> {username} </p>
        <p> @{tag} </p>
        <p> {location} </p>
      </div>
      <ul>
        <li>
          <span> Followers </span>
          <span> {stats.followers} </span>
        </li>
        <li>
          <span> Views </span>
          <span> {stats.views} </span>
        </li>
        <li>
          <span> Likes </span>
          <span> {stats.likes} </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};