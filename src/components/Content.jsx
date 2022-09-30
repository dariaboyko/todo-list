import React from 'react';
import styled from 'styled-components/native';
const ContentView = styled.View`
`;
 const Content = props => {
  return (
    <ContentView>
      {props.children}
    </ContentView>
  );
};
export default Content;