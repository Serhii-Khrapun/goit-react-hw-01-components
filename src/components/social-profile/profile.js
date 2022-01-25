import PropTypes from 'prop-types';
import {
  Profile,
  Description,
  Avatar,
  Name,
  TagLocation,
  Label,
  Quantity,
  List,
  ListEl,
} from './profile.styled';

export default function User({ userName, tag, location, avatar, stats }) {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{userName}</Name>
        <TagLocation>@{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </Description>

      <List>
        <ListEl>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListEl>
        <ListEl>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ListEl>
        <ListEl>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListEl>
      </List>
    </Profile>
  );
}
User.propTypes = {
  avatar: PropTypes.string,
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
