import User from './components/social-profile/profile';
import user from './data/social-profile/user.json';
import Statistics from './components/statistics/statistics';
import data from './data/statistics/data.json';
import FriendList from './components/friend-list/friend-list';
import friends from './data/friend-list/friends.json';
import TransactionHistory from './components/transaction-history/transactions';
import transactions from './data/transaction-history/transactions.json';
import { Container } from './components/container/container.styled';

export default function App() {
  return (
    <div>
      <Container>
        <User
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}
