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
  }
  h3 {
    font-size: 1.5rem;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }
  p {
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }
  li {
    font-size: 1.2rem;
  }
`;
 
export default GlobalStyle;