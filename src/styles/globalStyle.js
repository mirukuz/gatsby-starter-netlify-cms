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
  p {
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;