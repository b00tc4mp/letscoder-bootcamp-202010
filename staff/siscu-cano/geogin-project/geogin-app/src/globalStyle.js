import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body {
  border: 20px solid yellow;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  font-size: 62.5%;
  height: -webkit-fill-available;
}

body {
  margin: 0;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

main {
  display: block;
}

a {
  background-color: transparent;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}

button,
input { 
  overflow: visible;
}

button,
select { 
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}


[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

[hidden] {
  display: none;
}

`

export default GlobalStyle
