import styled from '@emotion/styled';

export const Container = styled.section`
  background-color: white;
  margin-top: 20px;
  width: 432px;
  overflow: hidden;
  text-align: center;
  border: 1px solid rgba(139, 131, 131, 0.2);
`

export const Title = styled.h2`
  padding: 30px;
  color: black;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
`

export const StatList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`

export const StatEl = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 100%;
  border: 1px solid rgba(139, 131, 131, 0.2);
`

export const Label = styled.span`
  color: black;
  font-size: 16px;
  margin-bottom: 5px;
`

export const Percentage = styled.span`
  color: black;
  font-size: 22px;
  font-weight: 500;
`