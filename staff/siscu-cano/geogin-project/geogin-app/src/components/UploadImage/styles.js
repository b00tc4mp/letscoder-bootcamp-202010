import styled from 'styled-components'

export const UploadImageWrapper = styled.div`
  display: block;
  max-width: 100%;
  .preview {
    width: 100%;
    margin-top: 30px;
    border: 1px solid #ccc;
    max-width: 100%;
    box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.05);
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    height: 200px;
    position: relative;
    background: #fff;
    img {
    display: inline-block;
    opacity: 0.8;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
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
  }

  .small-upload .chooseFileButton {
    top: 0;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    background: transparent;
    color: #696868;
    margin: 0;
    text-align: left;
  }
  .small-upload .uploadIcon {
    width: 30px;
    height: 30px;
  }
  
`
