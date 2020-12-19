import { createGlobalStyle } from 'styled-components'
import bgBottomSplash from './assets/images/bg-splashscreen-bottom.png'

export const GlobalStyle = createGlobalStyle`

// Import Google Fonts
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

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
  background-color: ${({ theme }) => theme.colors.body_bg};
  font-family: 'Lato', sans-serif;
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

#app {
  min-height: 100vh;
  max-width: ${({ theme }) => theme.colors.app_width}; 
  background-color: ${({ theme }) => theme.colors.app_bg};
  margin: 0 auto;
  > div[tabindex='-1'] {
    height: 100vh;
  }
}


.Toastify__toast-container {
  max-width: 460px;
  width: 100%;
  span {
    font-size: 13px;
    font-family: 'Patrick Hand';
    margin-left: 4px;
  }
  svg {
    vertical-align: middle;
    margin-right: 4px;
  }
}
.Toastify__toast {
  font-size: 12px;
}
.Toastify__toast--success {
  background: #bbe4b1;
  box-shadow: 5px 4px #7ff43654;
  span {
    color: #1d9c22;  }
}
}
.Toastify__toast--error {
  background: #fd958a;
  box-shadow: 5px 4px #f4443654;
  span {
    color: #9c1d1d;
  }
}
.Toastify__close-button {
  color: rgb(0 0 0 / 26%);
}

// Pages
.splashscreen {
  > div {
      background: url(${bgBottomSplash}) center bottom no-repeat;
      margin:  0 auto;
      background-size: contain;
  > div > div {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.profile {
  #app{
    background: linear-gradient(to bottom, #88bfe8 0%,#70b0e0 100%);
  }
}

`
