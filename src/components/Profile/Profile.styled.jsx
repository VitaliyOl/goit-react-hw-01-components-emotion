import styled from '@emotion/styled';

export const ContainerAvatar = styled.div`
  display: block;
  width: 100%;
  max-width: 480px;

  margin-left: auto;
  margin-right: auto;
`;

export const ThumbAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  font-size: 25px;
`;

export const AvatarImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const AvatarList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const AvatarItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
`;
