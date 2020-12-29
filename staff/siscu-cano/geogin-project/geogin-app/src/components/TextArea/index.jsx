import React from 'react'
import { TextAreaWrapper } from './styles'

export const TextArea = ({ labelText, placeholder, value, name, onChange }) => {
  return (
    <TextAreaWrapper>
      <label>{labelText}</label>
      <textarea
        style={{ display: 'block' }}
        cols='40'
        rows='5'
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </TextAreaWrapper>
  )
}
