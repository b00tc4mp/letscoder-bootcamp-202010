import styled from 'styled-components'

export const SliderWrapper = styled.div`
    background: #fff;
    border-radius: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
    right: 40px;

  .slick-dots {
    bottom: -40px;
  }
  .slick-dots li button:before {
    font-size: 12px;
    color: #a3ff1e;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #a3ff1e;
  }

  h1 {
    padding: 0 20px;
    margin: 24px 0 0 0;
    font-family: 'Patrick Hand', cursive;
    font-size: 30px;
    color: #b3b4b5;
    text-align: center;
  }

  .img {
    max-width: 300px;
    margin: 0 auto;
    height: auto;
  }

  p {
    margin: 20px;
    font-size: 16px;
    font-size: 19px;
    line-height: 1.5em;
    text-align: center;
    color: #9e9e9e;
  }
`
