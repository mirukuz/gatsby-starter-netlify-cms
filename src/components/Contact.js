import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  background-color: #F5F5F5;
  margin: 0 auto;
  grid-gap:  24px 100px;
  grid-template-rows: auto auto 24px;
  grid-template-columns: minmax(24px,auto) minmax(auto, 600px) minmax(auto, 700px) minmax(24px,auto);
  grid-template-areas:
    ". heading heading ."
    ". description form ."
    ". . . .";
`;

const Heading = styled.h1`
  grid-area: heading;
  margin: 24px auto;
`;

const Description = styled.div`
  grid-area: description;
`;

const Form = styled.div`
  grid-area: form;
`;

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

const Contact = () => {
    return (
        <MaxWidthContainer id="contact">
            <Heading>
                Free Consultation
            </Heading>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.
            </Description>
            <Form>
                <FormElement>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input name="name" />
                </FormElement>
                <FormElement>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input name="email" />
                </FormElement>
                <FormElement>
                    <label htmlFor="enquiry">
                      Enquiry
                    </label>
                    <textarea name="enquiry" />
                </FormElement>
            </Form>
        </MaxWidthContainer>
    )
}

export default Contact;