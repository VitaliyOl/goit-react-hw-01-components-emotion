import PropTypes from 'prop-types';

import {
  ContainerAvatar,
  AvatarImage,
  ThumbAvatar,
  AvatarList,
  AvatarItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ContainerAvatar>
      <ThumbAvatar>
        <AvatarImage src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </ThumbAvatar>

      <AvatarList>
        <AvatarItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </AvatarItem>
        <AvatarItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </AvatarItem>
        <AvatarItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </AvatarItem>
      </AvatarList>
    </ContainerAvatar>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
