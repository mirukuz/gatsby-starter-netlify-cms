import React from "react";
import styled from "styled-components";

const Item = styled.div`
  white-space: normal;
  height: 200px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 12px;
  display: inline-grid;
  grid-template-rows: 25px 25px auto 1fr;
  grid-template-columns: 40px 1fr;
  grid-template-areas:
    "photo author"
    "photo time"
    "rating rating"
    "comments comments";
`;

const Photo = styled.img`
  grid-area: photo;
  width: 40px;
  height 40px;
`;

const Time = styled.div`
  grid-area: time;
`;

const Rating = styled.div`
  grid-area: rating;
`;

const Author = styled.h4`
  grid-area: author;
  font-weight: 600;
`;

const Comments = styled.div`
  grid-area: comments;
`;

export const CarouselItem = ({ photo, author, time, comments, rating }) => {
    return (
        <Item>
            <Photo src={photo}/>
            <Time>{time}</Time>
            <Author>{author}</Author>
            <Comments>
                {comments}
            </Comments>
        </Item>
    );
  };