import React from 'react';

import { Container, Avatar, SuggestionData, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestions: React.FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
      <Avatar />
      <SuggestionData>
        <strong>{name}</strong>
        <span>{nickname}</span>
      </SuggestionData>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestions;
