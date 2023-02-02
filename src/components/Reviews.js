import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Carousel, { CarouselItem } from "./Carousel";

const reviews = [
  {
    author_name: "Luke Archibald",
    author_url:
      "https://www.google.com/maps/contrib/113389359827989670652/reviews",
    language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
    rating: 1,
    relative_time_description: "a week ago",
    text: "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running.",
    time: 1652286798,
  },
  {
    author_name: "Tevita Taufoou",
    author_url:
      "https://www.google.com/maps/contrib/105937236918123663309/reviews",
    language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
    rating: 1,
    relative_time_description: "6 months ago",
    text: "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out",
    time: 1637215605,
  },
  {
    author_name: "Jordy Baker",
    author_url:
      "https://www.google.com/maps/contrib/102582237417399865640/reviews",
    language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
    rating: 1,
    relative_time_description: "4 months ago",
    text: "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this.",
    time: 1641389490,
  },
  {
    author_name: "Prem Rathod",
    author_url:
      "https://www.google.com/maps/contrib/115981614018592114142/reviews",
    language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AATXAJyEQpqs4YvPPzMPG2dnnRTFPC4jxJfn8YXnm2gz=s128-c0x00000000-cc-rp-mo",
    rating: 1,
    relative_time_description: "4 months ago",
    text: "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc.",
    time: 1640159655,
  },
  {
    author_name: "Husuni Hamza",
    author_url:
      "https://www.google.com/maps/contrib/102167316656574288776/reviews",
    language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "7 months ago",
    text: "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616",
    time: 1633197305,
  },
];
const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  margin: 0 auto;
  grid-gap: 24px 100px;
  grid-template-rows: auto auto 24px;
  grid-template-columns: minmax(24px, auto) minmax(auto, 1300px) minmax(
      24px,
      auto
    );
  grid-template-areas:
    ". heading ."
    ". carousel ."
    ". . .";
`;

const Heading = styled.h1`
  grid-area: heading;
  margin: 24px 0;
`;


const Contact = () => {
  return (
    <MaxWidthContainer>
      <Heading>Reviews</Heading>
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </MaxWidthContainer>
  );
};

export default Contact;
