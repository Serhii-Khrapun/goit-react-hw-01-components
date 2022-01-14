import PropTypes from 'prop-types';

export default function FriendList({friends}) {
   return(
    <ul className="friend-list">
        {friends.map(({id,isOnline,name,avatar})=>
         <li key={id} className="item">
         <span className="status"></span>
         <img className="avatar" src={avatar} alt="User avatar" width="48" />
         <p className="name">{name}</p>
       </li>
        )}
  </ul>
   ) 
}
FriendList.propTypes = {
    isOnline: PropTypes.bool,
    name: PropTypes.string,
    avatar: PropTypes.string
}