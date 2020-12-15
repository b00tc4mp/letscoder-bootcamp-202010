import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const MenuListWrapper = styled.div`
  padding: 24px;
  .Menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 80%;
    margin: 0 auto;
    &-Icon {
      display: inline-block;
      margin: 0 10px 0 20px;
    }
  }
  h2 {
    margin: 40px 0 10px 0;
    display: block;
    color: #fff;
    text-align: center;
  }
  h3 {
    margin: 0 0 30px 0;
    display: block;
    color: #fff;
    text-align: center;
    font-weight: bold;
    color: #333;
    font-size: 21px;
    letter-spacing: 1px;
  }
  p {
    color: #63e9ff;
    width: 70%;
    text-align: center;
    margin: 0 auto;
    font-size: 11px;
  }
  .qr-game {
    display: block;
    margin: 0 auto 20px auto;
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

export const Title = styled.h1`
  margin-top: 40px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-family: Arial, sans-serif;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
  span {
    font-size: 22px;
  }
`
