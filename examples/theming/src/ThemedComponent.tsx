import microstyled from '@caffedpkg/microstyled';

const ThemedComponent = microstyled.div`
  font-size: 24px;
  color: grey;
  &:hover {
    color: blue;
  }
`;

export default ThemedComponent;
