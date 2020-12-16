import styled from 'styled-components'

export const BtnToggle = styled.button`
  position: absolute;
  top: 10px;
  z-index: 80;
  right: 0;
  background: red;
  border-radius: 50%;
  padding: 5px;
  background: #fff;
  right: 10px;
  border: 1px solid #8a8a8a;
  outline: none;
  cursor: pointer;
  > svg {
    color: #2b83cb;
  }
  &:hover {
      background: #2b83cb;
      > svg {
          color: #fff;
      }
  }
`
