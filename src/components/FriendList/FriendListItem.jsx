import React from 'react';
import PropTypes from 'prop-types';

import { Item, Image, Chip } from './FriendList.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <Item>
      <Chip isOnline={isOnline}></Chip>
      <Image src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
