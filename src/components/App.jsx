import { Profile } from './profile/Profile';
import user from '../data/user.json';

import { Statistics } from './statistics/Statistics';
import data from '../data/data.json';

import { FriendsList } from './friendsList/FriendsList';
import friends from '../data/friends.json';

import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transaction from '../data/transaction.json';

import { Wrapper } from './wrapper/Wrapper';

export const App = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React homework 1</h1>
      <Wrapper
        titleSection="Profile on the social"
        content={
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        }
      />

      <Wrapper
        titleSection="Statistics section"
        content={<Statistics titleStats="Upload Stats" uploadStats={data} />}
      />

      <Wrapper
        titleSection="Friends list"
        content={<FriendsList listFriends={friends} />}
      />

      <Wrapper
        titleSection="Transaction history"
        content={<TransactionHistory items={transaction} />}
      />
    </>
  );
};
