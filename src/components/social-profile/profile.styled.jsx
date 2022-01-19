import styled from '@emotion/styled';

export const Profile = styled.div`
  width: 430px;
  border: 1px solid rgba(139, 131, 131, 0.2);
  border-radius: 3px;
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  background-color: white;
`

export const Avatar = styled.img`
  width: 160px;
  border-radius: 50%;
`

export const Name = styled.p`
  padding: 5px;
  font-size: 24px;
  font-weight: 700;
`

export const TagLocation = styled.p`
  color: grey;
  font-size: 20px;
  font-weight: normal;
`

export const Label = styled.span`
  color: grey;
  font-size: 22px;
  text-transform: capitalize;
`

export const Quantity = styled.span`
  font-size: 22px;
  font-weight: 700;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`

export const ListEl = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: rgb(221, 221, 221);
  border: 1px solid rgb(173, 173, 173);
`