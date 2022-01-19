import styled from '@emotion/styled';

export const Transaction = styled.table`
  width: 630px;
  margin-top: 20px;
  background-color: white;
  border-radius: 7px;
  border: 1px solid grey;
  text-align: center;
`

export const TransactionHead = styled.th`
  padding-top: 18px;
  padding-bottom: 18px;
  color: white;
  background-color: #07cce6;
  border-left: 1px solid rgb(250, 250, 250, 0.5);
  text-transform: uppercase;
`

export const TransactionBody = styled.td`
padding-top: 15px;
  padding-bottom: 15px;
  color: gray;
  border-left: 1px solid rgba(128, 128, 128, 0.15);
`

export const TransactionLine = styled.tr`
:nth-of-type(2n) {
  background-color: rgb(226, 226, 226);
}
`