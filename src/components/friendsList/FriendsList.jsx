import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';
import { FriendsListItem } from 'components/friendsListItem/FriendsListItem';

export const FriendsList = ({ listFriends }) => {
  const { friends } = styles;

  return (
    <ul className={friends}>
      {listFriends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  listFriends: PropTypes.array.isRequired,
};
