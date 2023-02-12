import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styled from 'styled-components';

import "./Carousel.css";

const Wrapper = styled.div`
  overflow: hidden;
  grid-area: carousel;
`;

const Inner = styled.div`
  transition: transform 0.3s;
  display: flex;
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  height: 200px;
  padding: 12px;
  border-radius: 10px;
  margin-right: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CarouselItem = ({ photo, autor, comments, width }) => {
  return (
    <Item style={{ width: width }}>
      {autor}
      {comments}
    </Item>
  );
};

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
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <Wrapper
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Inner>
        {React.Children.map(children, (child, index) => {
          const { photo, author, comments } = child.props;
          return React.cloneElement(child, { photo, author, comments, width: "300px" });
        })}
      </Inner>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
};

export default Carousel;
