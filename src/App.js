import User from './components/Social-profile/Profile';
import user from './data/social-profile/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data/statistics/data.json';
import FriendList from './components/Friend-list/Friend-list';
import friends from './data/friend-list/friends.json';
import TransactionHistory from './components/Transaction-history/Transactions';
import transactions from './data/transaction-history/transactions.json';
import { Container } from './components/Container/container.styled';

export default function App() {
  return (
    <div>
      <Container>
        <User
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}
