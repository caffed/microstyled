import microstyled from '@caffedpkg/microstyled';

export const ThemedComponent = microstyled.div`
  /**
   * block comment
   */
  font-size: 24px;
  color: grey; // line comment
  &:hover {
    color: blue;
  }
`;

export const SmallText =  microstyled.div`
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
