import styled from 'styled-components'
import profileBg from '../../assets/images/profile.jpg'

export const ProfileWrapper = styled.div`
  header {
    position: relative;
    background-image: url(${profileBg});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  header:before {
    content: '';
    background-color: #0457814f;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -42px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  figure {
    border-bottom: 4px solid #2c6eb7;
    margin: 0;
  }
  figcaption {
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-family: 'Patrick Hand';
    background: #035782;
    margin: 14px 0 0 0;
    text-shadow: 4px 2px #00000052;
    padding-bottom: 4px;
  }
  .profile__image {
    height: 130px;
    width: 130px;
    border-radius: 50%;
    border: 5px solid #4d6b8f;
    margin-top: 20px;
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    object-fit: cover;
    object-position: top;
    background: #2e5267;
  }
  .additional-info {
    display: flex;
    gap: 20px;
    justify-content: space-around;
    background: #ccc;
    border-bottom: 1px solid #0764b5;
    > div {
      border-right: 1px solid #a2a2a2;
      padding: 20px 10px;
      flex: 1;
      text-align: center;
      > svg {
        vertical-align: middle;
        color: #2e5267;
      }
      span {
        padding: 3px 8px;
        border-radius: 10px;
        margin: 0 0 0 4px;
        font-size: 18px;
        color: #3f4257;
      }
      em {
        font-size: 11px;
        font-style: normal;
      }
    }
  }

  .modify-info {
    padding: 20px;
    h2 {
      color: #035782;
    }
    label {
      margin: 0 0 6px 0;
      display: block;
      color: #2e5267;
      font-size: 11px;
    }
    input {
      width: 100%;
      padding: 8px 4px 8px 10px;
      margin-bottom: 15px;
      border: 1px solid #4e3043;
      border: 1px solid rgba(78, 48, 67, 0.8);
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
        inset 0 1px 1px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-out;
      font-family: 'Raleway', 'Lato', Arial, sans-serif;
      color: #035782;
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
          inset 0 1px 1px rgba(0, 0, 0, 0.1),
          0 0 0 3px rgba(255, 255, 255, 0.15);
        outline: none;
      }
    }

    .btn {
      margin-top: 20px;
      width: 100%;
      padding: 8px 5px;
      background: -webkit-linear-gradient(top, #bfd255 0%,#8eb92a 84%,#72aa00 51%,#9ecb2d 100%);
      border-radius: 5px;
      border: 1px solid #3e8464;
      box-shadow: inset 0 1px rgba(255, 255, 255, 0.4),
        0 2px 1px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.3s ease-out;
      color: #eaffec;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
      font-size: 16px;
      font-weight: bold;
      font-family: 'Raleway', 'Lato', Arial, sans-serif;
      text-decoration: none;
      font-weight: 400;
      text-shadow: 0px -2px #7db10e;
      span {
        font-size: 12px;
      }
      svg {
        vertical-align: baseline;
        margin-right: 4px;
      }
      &:hover,
      &:focus {
        outline: none;
      }
      &.disabled {
        pointer-events: none;
        opacity: .6;
        cursor: pointer;
        background: #e0e0e0;
        text-shadow: none;
        color: #909090;
      }
    }
  }
  .fileContainer {
    padding: 0;
    border: 1px solid #2c6eb7;
    .chooseFileButton {
      background: #035782;
    }
  }
  .password-wrapper {
    position: relative;
    .icon-visibility {
      position: absolute;
      right: 8px;
      top: 50%;

      transform: translateY(-50%);
      display: inline-block;
      svg {
        vertical-align: middle;
      }
    }
  }
`
