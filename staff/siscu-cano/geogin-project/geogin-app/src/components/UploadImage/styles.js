import styled from 'styled-components'

export const UploadImageWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 80%;
  margin: 0 auto;
  min-width: 320px;
  .preview {
    width: 100%;
    margin-top: 30px;
    border: 1px solid #ccc;
    max-width: 100%;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    img {
      max-width: 100%;
      display: inline-block;
      margin: 0 auto;
      opacity: 0.7;
      max-height: 180px;
      transform: scale(0.6);
    }
  }
  .fileContainer {
    border: 1px solid #ccc;
  }

  .small-upload .fileContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
    box-shadow: none;
    position: inherit;
    width: 100%;
    padding: 8px 4px 8px 10px;
    margin-bottom: 15px;
    border: 1px solid #4e3043;
    border: 1px solid rgba(78, 48, 67, 0.8);
    background: rgb(255 255 255);
    border-radius: 2px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 1px 1px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: rgb(13 107 202);
    font-size: 13px;
    position: absolute;
    left: 0;
    right: 0;
  }

  .small-upload .fileContainer .chooseFileButton {
    top: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    background: transparent;
    color: #696868;
  }
`
