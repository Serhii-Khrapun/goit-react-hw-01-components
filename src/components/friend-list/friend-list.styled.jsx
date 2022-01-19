import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
`

export const FriendListEl = styled.li`
  display: flex;
  align-items: center;
  padding-left: 30px;
  width: 432px;
  height: 80px;
  border: 1px solid black;
  
  :not(:last-child) {
  margin-bottom: 20px;
}
`

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.isOnline === true) {
        return 'green'
    }
    else {
        return 'red'
    }
  }}
`

export const Avatar = styled.img`
  margin-left: 30px;
`

export const UserName = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-left: 30px;
`