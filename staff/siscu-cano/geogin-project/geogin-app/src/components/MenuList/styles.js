import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const MenuListWrapper = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 40px;
`

export const Link = styled(LinkRouter)`
  cursor: pointer;
  font-size: 20px;
  border: none;
  margin: 15px 15px 30px;
  border-top: 3px solid rgba(255, 255, 255, 0.3);
  color: #fff !important;
  border-radius: 6px;
  padding: 8px 15px 10px;
  background: #92cc7b;
  margin: 0 auto 30px auto;
  border-bottom: 3px solid rgba(40, 117, 29, 0.5);
  text-shadow: 2px 2px #4390437d;
  display: block;
  min-width: 276px;
  text-decoration: none;
  &[aria-current] {
    box-shadow: 0px 0px 24px #ff00ff69 inset;
    font-weight: bold;
  }
`
