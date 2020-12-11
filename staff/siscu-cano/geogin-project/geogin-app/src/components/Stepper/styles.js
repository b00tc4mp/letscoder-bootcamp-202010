import styled from 'styled-components'

export const StepperWrapper = styled.div`
  .Stepper {
    position: relative;
    display: table;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  .Stepper__step {
    position: relative;
    display: table-cell;
    text-align: center;
    padding: 0.5rem;
  }

  .Stepper__label {
    display: none;
    z-index: 2;
  }

  .Stepper__indicator {
    position: relative;
    display: block;
    z-index: 2;
  }

  .Stepper__info {
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid #e3e8ec;
    border-radius: 50%;
    background-color: #e3e8ec;
    font-size: 1.25rem;
    line-height: 2.5rem;
    text-align: center;
    color: #fff;
    z-index: 2;
  }

  .Stepper__step:after {
    top: auto;
    bottom: 1.75rem;
  }

  .Stepper__step:after {
    content: ' ';
    position: absolute;
    left: 50%;
    top: 1.75rem;
    width: 100%;
    height: 0.125rem;
    background-color: #e3e8ec;
    z-index: 1;
  }

  .Stepper__step:last-child:after {
    display: none;
  }
  // Complete
  .Stepper__step.is-complete .Stepper__label {
    color: #a6b6c3;
  }

  .Stepper__step.is-complete .Stepper__info {
    border-color: #bfdeaa;
    background-color: #a9d2a1d9;
  }

  // Active
  .Stepper__step.is-active .Stepper__info {
    border-color: #627c90;
    background-color: #627c90;
  }
  .Stepper__step.is-active .Stepper__label {
    color: #627c90;
  }
`
