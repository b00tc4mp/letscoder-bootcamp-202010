import styled from 'styled-components'

export const DefaultLayout = styled.div`
  background: linear-gradient(to bottom, #f3f7ff 0%,#f3f7ff 44%,#d8e5ff 100%);
  margin: 0 auto;
  height: 100%;
  max-height: 100%;
  padding: 10px 30px 100px 30px;
  > div {
    max-height: 100%;
    height: 100%;
    position: relative;
  }
  h1 {
    color: #1689fe;
    font-size: 25px;
    margin: 0 auto;
    text-align: center;
    margin: 0 0 20px 0;
    text-shadow: 2px 2px #d0e1f5;
    font-family: 'Patrick Hand', cursive;
  }
  ul {
    margin-bottom: 40px;
  }
  .description {
    font-size: 14px;
    margin: 10px 0 24px 0;
    line-height: 1.3;
  }
  .btn {
    width: 100%;
    padding: 8px 5px;
    background: #634056;
    background: linear-gradient(rgb(22 137 254), rgb(16 63 197 / 70%));
    border-radius: 5px;
    border: 1px solid #4e3043;
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.4),
      0 2px 1px rgba(0, 0, 0, 0.1);
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
    &.btn-previous {
      position: absolute;
      bottom: 25px;
      left: 0px;
      vertical-align: middle;
    }
    &.btn-next {
      position: absolute;
      bottom: 25px;
      right: 0px;
    }
    &.new {
      position: inherit;
      display: block;
      width: auto;
      max-width: none;
      background: linear-gradient(rgb(32 220 38), rgb(27 133 14 / 70%));
      text-shadow: 1px 1px #099d1b;
      border-color: #099d1b;
      width: 100%;
      svg {
        margin-right: 4px;
        width: 16px;
      }
    }
  }

  .switch-wrapper {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #636363;
    > div {
      display: flex;
      margin-right: 10px;
    }
  }

  .wizard-steps {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 15px;
    > div {
      position: relative;
      height: 100%;
    }
  }

  .wizard-buttons {
    padding-top: 75px;
  }

  .wizard-enter {
    opacity: 0.01;
  }

  .wizard-enter.wizard-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .wizard-exit {
    opacity: 1;
  }

  .wizard-exit.wizard-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  .time-input {
    width: 100%;
    padding: 8px 4px 8px 10px;
    margin-bottom: 15px;
    border: 1px solid #4e3043;
    border: 1px solid rgba(78, 48, 67, 0.8);
    background: rgb(255 255 255);
    border-radius: 2px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 1px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: rgb(13 107 202);
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
  }
  .game-feature {
    position: relative;
    display: flex;
    width: 100%;
    height: 90px;
    background-color: #fff;
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
    gap: 10px;
    border: 1px solid #d8d8d8;
    padding: 4px;
    img {
      max-width: 150px;
    }
    &__title {
      font-size: 13px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-weight: bold;
      color: #3572b1;
      margin: 10px 44px 4px 0;
    }
    &__title {
      margin-top: 0;
    }
    &__tag {
      background: linear-gradient(#92bca6, #a2ccb6);
      display: inline-block;
      padding: 3px 4px;
      border-radius: 10px;
      color: #264f38;
      border: 1px solid #2f5740;
      margin: 0 10px 0 0;
      font-size: 9px;
      font-family: 'Lato';
    }
    &__description {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &__time {
      width: 197px;
      height: 91px;
      overflow: hidden;
      position: absolute;
      top: -1px;
      right: 0px;
      > div {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        font: bold 15px Sans-Serif;
        line-height: 18px;
        color: #e9ea7b;
        text-align: center;
        text-transform: uppercase;
        position: relative;
        padding: 4px 0;
        left: -3px;
        top: 14px;
        width: 353px;
        background-color: #6daaab;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        -webkit-letter-spacing: 0.5px;
        -moz-letter-spacing: 0.5px;
        -ms-letter-spacing: 0.5px;
        letter-spacing: 0.5px;
        box-shadow: -3px 5px 6px -5px rgba(0, 0, 0, 0.5);
        outline: 1px dotted #e5e82c;
        outline-offset: -4px;
        background-image: radial-gradient(
          circle farthest-side,
          #ff1c1a,
          #bf0b00
        );
        text-shadow: 2px 1px 0px rgba(0, 0, 0, 0.2);
      }
    }
    &__time:before {
      content: '';
      position: absolute;
      left: 0px;
      top: 100%;
      z-index: -1;
      border-left: 4px solid #bf0b00;
      border-right: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-top: 4px solid #bf0b00;
    }
    &__time:after {
      content: '';
      position: absolute;
      right: 7px;
      top: 100%;
      z-index: -1;
      border-left: 4px solid transparent;
      border-right: 4px solid #bf0b00;
      border-bottom: 4px solid transparent;
      border-top: 4px solid #bf0b00;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 4px 8px 10px;
  margin-bottom: 15px;
  border: 1px solid #4e3043;
  border: 1px solid rgba(78, 48, 67, 0.8);
  background: rgb(255 255 255);
  border-radius: 2px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  font-family: 'Raleway', 'Lato', Arial, sans-serif;
  color: rgb(13 107 202);
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
