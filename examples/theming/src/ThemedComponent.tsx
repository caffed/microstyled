import styled from '@caffedpkg/microstyled';

const ThemedComponent = styled.div`
  font-size: 24px;
  color: grey;
  &:hover {
    color: blue;
  }
`;

export default ThemedComponent;
