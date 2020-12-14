import styled from 'styled-components'

export const PrintItemWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 60%;
  margin: 0 auto 40px auto;
  .print-source {
    display: none;
  }
  @media print {
  .print-source {
    display: block;
  }
}
`
