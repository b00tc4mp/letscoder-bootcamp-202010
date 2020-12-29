import styled from 'styled-components'

export const PrintItemWrapper = styled.div`
  display: none;
  max-width: 100%;
  padding: 40px;
  text-align: center;

  .logo {
    display: block;
    margin: 0 auto 60px auto;
    width: 180px;
  }
  h1 {
    font-size: 22px;
  }
  .card {
    margin-top: 40px;
  }
  .card-qr {
    display: block;
    width: 200px;
    margin: 0 auto;
  }

  @media print {
    display: block;
    .print-source {
      display: block;
    }
  }
`
