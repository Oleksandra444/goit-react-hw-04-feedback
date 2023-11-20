import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  /* font-family: 'Open Sans', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
a {
  text-decoration: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}


img {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}


*{
  scroll-behavior: smooth;
}
button {cursor: pointer}
`;