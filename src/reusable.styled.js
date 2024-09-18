// resuable.styled.js
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.bg || 'gray'};
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex: ${(props) => props.flex || '1'};
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;
`;
