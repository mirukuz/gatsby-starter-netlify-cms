import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
 
const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }


  h1 {
    font-size: 3rem;
    line-height: 4rem;
    font-family: 'Oswald', Helvetica, Sans-Serif;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.6rem;
    margin-top: 0.8rem;
    font-family: 'Oswald', Helvetica, Sans-Serif;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.95rem;
    margin-top: 0.7rem;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }

  h4 {
    font-size: 1.2rem;
    line-height: 1.45rem;
    margin-top: 0.6rem;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }

  p, span {
    font-size: 1.2rem;
    line-height: 1.56rem;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }
  p {
    margin-top: 0.5rem;
  }
  strong {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.56rem;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
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