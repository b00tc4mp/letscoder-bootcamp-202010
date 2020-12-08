import styled from 'styled-components'

export const DefaultLayout = styled.div`
   background: #f3f7ff;
    width: 90%;
    margin: 0 auto;
    border-radius: 8px;
    border: 4px solid #b1d8ff85;
    height: calc(100% - 35px);
    max-height: 100%;
    padding: 20px;
    > div {
        max-height: 100%;
        height: calc(100% - 50px);
        position: relative;
    }
    h1 {
        color: #1689fe;
        font-size: 28px;
        margin: 0 auto;
        text-align: center;
        margin: 0 0 20px 0;
        text-shadow: 2px 2px #d0e1f5;
        font-family: 'Patrick Hand',cursive;
    }
    ul {
        margin-bottom: 40px;
    }
    .description {
        font-size: 14px;
    }
    .btn {
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
      &.btn-previous {
        position: absolute;
        bottom: 10px;
        left: 0px;
        vertical-align: middle;
      }
      &.btn-next {
        position: absolute;
        bottom: 10px;
        right: 0px;
      }
    }

    .switch-wrapper {
      display: flex;
      align-items: center;
      font-size: 15px;
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
  padding-top: 20px;
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

.rc-progress-line {
  margin-bottom: 20px;
}

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
