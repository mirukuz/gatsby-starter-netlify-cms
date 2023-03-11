import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }


  h1 {
    font-size: 2.5rem;
    line-height: 3.25rem;
    font-family: 'Oswald', Helvetica, Sans-Serif;

    @media only screen and (min-width: 960px) {
      font-size: 3rem;
      line-height: 4rem;
    }
  }

  h2 {
    font-size: 1.8rem;
    line-height: 2.3rem;
    margin-top: 0.8rem;
    font-family: 'Oswald', Helvetica, Sans-Serif;
    @media only screen and (min-width: 960px) {
      font-size: 2rem;
      line-height: 2.6rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    line-height: 1.69rem;
    margin-top: 0.7rem;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
    @media only screen and (min-width: 960px) {
      font-size: 1.5rem;
    line-height: 1.95rem;
    }
  }

  h4 {
    font-size: 1.2rem;
    line-height: 1.45rem;
    margin-top: 0.6rem;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }

  p, span, label, a, strong {
    font-size: 1rem;
    line-height: 1.3rem;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
    @media only screen and (min-width: 960px) {
      font-size: 1.2rem;
      line-height: 1.56rem;
    }
  }
  p {
    margin-top: 0.5rem;
  }
  strong {
    font-weight: 600;
  }
  li {
    font-size: 1.2rem;
    line-height: 1.56rem;
  }
  button {
    font-family: 'Oswald', Helvetica, Sans-Serif;
    font-size: 1.2rem;
    line-height: 1.56rem;
  }

  input, textarea {
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
