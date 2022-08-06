import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  const { item, active, disabled, userAvatar, userName } = styles;

  return (
    <li className={item}>
      <span className={isOnline ? active : disabled}></span>
      <img className={userAvatar} src={avatar} alt="User avatar" width="48" />
      <p className={userName}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
