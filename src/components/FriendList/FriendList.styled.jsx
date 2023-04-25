import styled from '@emotion/styled';

// function changeColor({ isOnline }) {
//   return isOnline ? 'green' : 'red';
// }

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 6px;
  margin-bottom: 20px;
  width: 360px;
  border-radius: 8px;
  box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(186, 190, 204) 1px 1px 1px;
  background-color: rgb(233, 237, 255);

  font-size: 18px;
  line-height: 1.2;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Chip = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 15px;

  ${'' /* background-color: ${changeColor}; */}

  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }}
`;
