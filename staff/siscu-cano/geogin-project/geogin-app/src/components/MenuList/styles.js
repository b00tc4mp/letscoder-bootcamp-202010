import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const MenuListWrapper = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 80%;
    margin: 0 auto;

    .menu-icon {
      display: inline-block;
      margin: 0 10px 0 20px;
      vertical-align: middle;
    }
`

export const Link = styled(LinkRouter)`
 width: 100%;
  padding: 8px 5px;
  background: #634056;
  background: linear-gradient(rgba(99, 64, 86, 0.5), rgba(76, 49, 65, 0.7));
  border-radius: 5px;
  border: 1px solid #4e3043;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.4), 0 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-out;
  color: white;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  font-size: 16px;
  font-weight: bold;
  font-family: 'Raleway', 'Lato', Arial, sans-serif;
  text-decoration: none;
  span {
    font-size: 12px;
  }
`
