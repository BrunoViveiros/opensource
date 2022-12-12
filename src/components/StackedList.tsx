import styled from 'styled-components'

export const StackedList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`
export const ListHeader = styled.li`
  border-top: 1px solid #d5d5d5;
  padding: 8px 16px;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.gray['200']};
  color: ${(props) => props.theme.colors.gray['600']};
`
export const ListItem = styled.li`
  border-top: 1px solid #d5d5d5;
  padding: 12px 16px;
`
