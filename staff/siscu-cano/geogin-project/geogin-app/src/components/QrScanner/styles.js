import styled from 'styled-components'

export const QrReaderWrapper = styled.div`
  .qr-scanner {
    max-width: 100%;
    section > div {
      box-shadow: rgb(0 137 255 / 50%) 0px 0px 0px 5px inset !important;
      &:after {
        content: '🕵🏻‍♀️ Escanea aquí el QR que encuentres para validarlo 🕵🏻‍♀️';
        position: absolute;
        display: block;
        bottom: -34px;
        background: #1689fe;
        padding: 5px;
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
        left: 50%;
        transform: translateX(-50%);

        width: 265px;
        text-align: center;
      }
    }
  }
  .looser {
    font-size: 19px;
    color: #fff;
    font-family: 'Lato';
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    max-width: 70%;
    text-align: center;
    margin: 30px auto 0 auto;
  }
  .winner {
    font-size: 19px;
    color: #fff;
    font-family: 'Lato';
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    max-width: 70%;
    text-align: center;
    margin: 30px auto 0 auto;
    &:before {
        content: '🏆';
        font-size: 32px;
        vertical-align: middle;
        margin-right: 10px;
    }
    &:after {
        content: '🏆';
        font-size: 32px;
        vertical-align: middle;
        margin-left: 10px;
    }
  }
`
