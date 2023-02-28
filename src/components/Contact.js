import React, { useState } from "react";
import styled from "styled-components";
import { SecondaryButton } from "./Button";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  background-color: #f5f5f5;
  margin: 0 auto;
  padding-bottom: 48px;
  grid-template-columns:
    minmax(24px, auto) minmax(auto, 960px)
    minmax(24px, auto);
  grid-template-areas:
    ". heading ."
    ". description ."
    ". socialmedia ."
    ". form .";

  @media only screen and (min-width: 960px) {
    grid-template-rows: auto auto 1fr;
    grid-template-columns:
      minmax(24px, auto) minmax(auto, 600px) minmax(auto, 700px)
      minmax(24px, auto);
    grid-template-areas:
      ". heading heading ."
      ". description form ."
      ". socialmedia form .";
  }
`;

const Heading = styled.h1`
  grid-area: heading;
  margin: 48px auto;
`;

const Description = styled.p`
  grid-area: description;
`;

const SocialMedia = styled.div`
  grid-area: socialmedia;
  margin-top: 24px;
  display: flex;
`;

const Card = styled.div`
  margin-right: 24px;
  display: flex;
  flex-direction: column;
`;

const Name = styled(Link)`
  margin-bottom: 12px;
  text-decoration: none;
  color: black;
`;

const Form = styled.form`
  grid-area: form;
  display: grid;
  grid-template-rows: auto 150px auto;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  grid-template-areas:
    "name ."
    "enquiry enquiry"
    "button .";
`;

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  height: 150px;
  &:focus {
    outline: none;
  }
`;

const Contact = ({ socialmedia }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const beforeSubmit = (event) => {
    event.preventDefault();
    const subject = "Enquiry from " + name;
    window.location.href =
      "mailto:info@bennyauproperties.com.au?subject=" +
      subject +
      "&body=" +
      message;
  };
  return (
    <MaxWidthContainer id="contact">
      <Heading>Free Consultation</Heading>
      <Description>
        Feel free to contact us at <br />
        info@bennyauproperties.com.au <br />
        <br />
        Or via these social media accounts
      </Description>
      <SocialMedia>
        {socialmedia &&
          socialmedia.map(({ name, qr, link }) => (
            <Card>
              <Name to={link}>{name}</Name>
              <GatsbyImage image={getImage(qr) || qr} />
            </Card>
          ))}
      </SocialMedia>
      <Form onSubmit={beforeSubmit}>
        <FormElement style={{ gridArea: "name" }}>
          <Label htmlFor="subject">Name</Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="subject"
          />
        </FormElement>
        <FormElement style={{ gridArea: "enquiry" }}>
          <Label htmlFor="body">Enquiry</Label>
          <TextArea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="body"
          />
        </FormElement>
        <SecondaryButton
          type="submit"
          style={{ gridArea: "button", marginTop: 16 }}
        >
          Send
        </SecondaryButton>
      </Form>
    </MaxWidthContainer>
  );
};

export default Contact;
