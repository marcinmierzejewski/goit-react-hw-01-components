import { Profile } from './profile/Profile';
import user from '../data/user.json';

import { Statistics } from './statistics/Statistics';
import data from '../data/data.json';

import { FriendsList } from './friendsList/FriendsList';
import friends from '../data/friends.json';

import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transaction from '../data/transaction.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        titleStats='Upload Stats'
        uploadStats={data}
      />

      <FriendsList
        listFriends={friends}
      />

      <TransactionHistory
        items={transaction}
      />


    </>
  );
};
