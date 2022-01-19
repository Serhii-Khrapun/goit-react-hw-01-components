import PropTypes from 'prop-types';
import {
  List,
  FriendListEl,
  Avatar,
  UserName,
  Status,
} from './friend-list.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <FriendListEl key={id}>
          <Status isOnline={isOnline}></Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <UserName>{name}</UserName>
        </FriendListEl>
      ))}
    </List>
  );
}
FriendList.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
