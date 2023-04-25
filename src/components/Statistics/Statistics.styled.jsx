import styled from '@emotion/styled';
import { getHexColors } from 'utils/getHexColors';

export const Section = styled.div`
  margin-bottom: 20px;
  max-width: 100%;
  border: 1px solid black;
  border-radius: 8px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 25px;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;

  justify-content: center;
  padding: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 100px;

  border-radius: 8px;
  font-size: 20px;

  background-color: ${getHexColors};
`;

export const Span = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
