import styled from 'styled-components'

export const NotFoundWrapper = styled.div`

.space {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.space > div {
  position: absolute;
}
.space .text {
  display: table;
  z-index: 100;
  margin-top: -100px;
  margin-left: -139px;
  width: 200px;
  height: 200px;
  color: #fff;
}
.space .text .align-middle {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.space .text h1 {
  font-size: 140px;
  line-height: 0.01em;
}
.space .text p {
  font-size: 18px;
  color: #fff;
}
.space div[class^="moon"] {
  background: url("https://i.imgur.com/0i18KL5.png");
  background-size: 50px;
  width: 50px;
  height: 50px;
  z-index: 10;
}
.space div[class^="moon"].sm {
  background-size: 30px;
  width: 30px;
  height: 30px;
}
.space .moon-1 {
  margin-top: -15px;
  margin-left: -15px;
  background-size: 50% auto;
  animation: orbit1 15s linear infinite;
}
.space .moon-2 {
  margin-top: -15px;
  margin-left: -15px;
  animation: orbit2 -6s 18s linear infinite;
}
.space .moon-3 {
  margin-top: -25px;
  margin-left: -25px;
  animation: orbit3 -12s 22s linear infinite;
}
.space .orbit-1 {
  margin-top: -100px;
  margin-left: -100px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background: #3f5468;
  z-index: 8;
}
.space .orbit-2 {
  margin-top: -190px;
  margin-left: -190px;
  width: 380px;
  height: 380px;
  border-radius: 190px;
  background: #3a4f64;
  z-index: 7;
}
.space .orbit-3 {
  margin-top: -195px;
  margin-left: -195px;
  width: 390px;
  height: 390px;
  border-radius: 195px;
  background: #374c61;
  z-index: 6;
}

@keyframes orbit1 {
  from {
    transform: rotate(0deg) translateX(100px);
  }
  to {
    transform: rotate(360deg) translateX(100px);
  }
}
@keyframes orbit2 {
  from {
    transform: rotate(0deg) translateX(190px);
  }
  to {
    transform: rotate(360deg) translateX(190px);
  }
}
@keyframes orbit3 {
  from {
    transform: rotate(0deg) translateX(195px);
  }
  to {
    transform: rotate(360deg) translateX(195px);
  }
}


`
