import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestions from '../FollowSuggestions';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Busque no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestions
              name="John Doe"
              nickname="@johndoe"
            />,
            <FollowSuggestions
              name="Janet Doe"
              nickname="@janetdoe"
            />,
            <FollowSuggestions
              name="Joseph Doe"
              nickname="@josephdoe"
            />
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News/>,
            <News/>,
            <News/>,
            <News/>,
            <News/>
          ]}
        />
           <List
          title="Talvez você curta"
          elements={[
            <News/>,
            <News/>,
            <News/>,
            <News/>,
            <News/>
          ]}
        />
           <List
          title="Talvez você curta"
          elements={[
            <News/>,
            <News/>,
            <News/>,
            <News/>,
            <News/>
          ]}
        />
      </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
