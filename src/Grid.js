import styled from 'styled-components';

import {
  alignItems,
  alignSelf,
  color,
  flex,
  flexDirection,
  flexWrap,
  fontSize,
  height,
  justifyContent,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  order,
  space,
  width
} from 'styled-system';

export const Box = styled('div')(
  {
    boxSizing: 'border-box'
  },
  space,
  color,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  fontSize,
  flex,
  order,
  alignSelf
);

Box.displayName = 'Box';

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes
};

export const Flex = styled(Box)(
  {
    display: 'flex'
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  height,
  maxWidth
);

Flex.displayName = 'Flex';

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
};
