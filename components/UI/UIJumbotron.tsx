import React from 'react';
import styled from "@emotion/styled";
import { COLORS } from "../../common/colors";

interface Props extends UiJumbotronContainerProps {
  children: React.ReactElement;
}

interface UiJumbotronContainerProps {
  height?: string | number;
  width?: string | number;
  image?: StaticImageData;
}

const Container = styled.div<UiJumbotronContainerProps>(({ width, height, image }) => ({
  width,
  height,
  backgroundImage: `linear-gradient(${COLORS.jumbotronOpacityIsZeroFiveColor}, ${COLORS.jumbotronOpacityIsZeroFiveColor}), url(${image.src})`,
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  borderBottomLeftRadius: '10rem'
}));

const UIJumbotron: React.FunctionComponent<Props> = ({ children, height, image }) => {
  console.log('image', image);
  return (
      <Container height={height} image={image}>
        {children}
      </Container>
  );
};

export default React.memo(UIJumbotron);
