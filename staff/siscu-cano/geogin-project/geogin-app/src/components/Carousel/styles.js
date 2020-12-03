import styled from 'styled-components'

export const CarouselWrapper = styled.div`

  & {
    --page-number: 1;
    zoom: 0.9;
    max-height: 100%;
    width: 360px;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 auto;

    & .slider {
      width: 300%;
      height: 100%;
      display: flex;
      background-color: #fff;
      margin-left: calc(-360px * (var(--page-number) - 1));
      transition: margin-left 400ms;

      .slide {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 462px;

        h1 {
          padding: 0 20px;
          margin: 24px 0 0 0;
          font-family: 'Patrick Hand', cursive;
          font-size: 30px;
          color: #00bcc2;
          text-align: center;
        }

        .img {
          max-width: 300px;
          margin: 0 auto;
          height: auto;
        }

        p {
          margin: 20px;
          max-width: 250px;
          font-size: 16px;
          font-size: 19px;
          line-height: 1.5em;
          text-align: center;
          color: #9e9e9e;
        }
      }
    }

    & .controls {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      background-color: #fff;
      form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 20px;
        input[type='radio'] {
          outline: none;
          margin: 0 5px;
          opacity: 0;
        }

        input[type='radio'] + label {
          position: relative;
          top: -1px;
          left: -17px;
          height: 10px;
          width: 10px;
          border-radius: 100%;
          border: 1px solid #ced7e6;
          transition: border 300ms, background 300ms;
        }

        input[type='radio']:checked + label {
          border: 1px solid #a5e24d;
          background-color: #a5e24d;
        }
      }

      a.btn-next {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 60px;
        height: 65px;
        background: #a5e24d;
        color: white;
        font-family: sans-serif;
        font-size: 23px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }

  .thumbnail {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('https://s9.postimg.org/mv4hbyhhr/thumbnail.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: none;
  }
`
