import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
 
const GlobalStyle = createGlobalStyle`
  ${reset}
  h1 {
    font-family: 'Oswald', Helvetica, Sans-Serif;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }
  h1 {
    font-size: 3rem;
    line-height: 4rem;
  }
  h3 {
    font-size: 1.5rem;
    line-height: 1.95rem;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }
  p {
    font-size: 1.2rem;
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
`;
 
export default GlobalStyle;