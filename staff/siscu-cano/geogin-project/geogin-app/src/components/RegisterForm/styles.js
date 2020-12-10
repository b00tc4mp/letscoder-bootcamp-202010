import styled from 'styled-components'

export const Form = styled.form`
  width: 300px;
  margin: 0 auto 30px;
  padding: 10px;
  position: relative;
  font-family: 'Raleway', 'Lato', Arial, sans-serif;
  color: white;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 4px 8px 10px;
  margin-bottom: 15px;
  border: 1px solid #4e3043;
  border: 1px solid rgba(78, 48, 67, 0.8);
  background: rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  font-family: 'Raleway', 'Lato', Arial, sans-serif;
  color: #fff;
  font-size: 13px;
  ::placeholder {
    color: rgba(37, 21, 26, 0.5);
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.15);
  }
  :hover {
    border-color: #333;
  }
  :focus {
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(255, 255, 255, 0.15);
    outline: none;
  }
`

export const Button = styled.button`
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
`

export const Title = styled.h1`
  margin-top: 40px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-family: Arial, sans-serif;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
  span {
    font-size: 12px;
  }
`
