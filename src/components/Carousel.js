import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import RightChevron from "../img/right-chevron.js"
import LeftChevron from "../img/left-chevron.js"

const Container = styled.div`
  position: relative;
  grid-area: carousel;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 360px;
  margin: 24px auto;
`;

const Inner = styled.div`
  transition: transform 0.3s;
  white-space: nowrap;
`;

const Left = styled.button`
  position: absolute;
  top: 45%;
  left: 0;
  width: 48px;
  height: 48px;
  padding-top: 4px;
  padding-right: 8px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #e1e4ea;
  
  &:hover {
    background-color: #e1e4ea;
    cursor: pointer;
  }
`;

const Right = styled.button`
  position: absolute;
  top: 45%;
  right: 0;
  width: 48px;
  height: 48px;
  padding-top: 4px;
  padding-left: 8px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #e1e4ea;

  &:hover {
    background-color: #e1e4ea;
    cursor: pointer;
  }
`;

const Carousel = ({ children, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <Container>
      <Wrapper
        {...handlers}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {React.Children.map(children, (child, index) => {
            const { photo, author, comments } = child.props;
            return React.cloneElement(child, { photo, author, comments });
          })}
        </Inner>
        <Left
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <LeftChevron />
        </Left>
        <Right
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <RightChevron />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Carousel;
