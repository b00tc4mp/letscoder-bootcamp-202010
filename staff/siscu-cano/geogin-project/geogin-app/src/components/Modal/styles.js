import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  .modal {
    background: #fff;
    margin: 0 auto;
    top: 0;
    bottom: 50px;
    position: fixed;
    left: 0;
    right: 0;
    max-width: 500px;
  }
  button {
    position: absolute;
    margin: 0 auto;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px; 
    z-index: 999;
    width: 100%;
    padding: 8px 5px;
    background: #634056;
    background: linear-gradient(rgb(22 137 254),rgb(16 63 197 / 70%));
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
    max-width: 40%;
    > svg {
    vertical-align: middle;
    } 
  }
  .leaflet-container {
      width: 100%;
      height: 100%;
  }
`
