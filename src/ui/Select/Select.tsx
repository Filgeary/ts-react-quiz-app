import React from 'react'
import cls from './Select.module.css'

type Props = {
  title: string
  value: number
  options: number[]
  onChangeSelect: (evt: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = (props: Props) => {
  const { title, value, options, onChangeSelect } = props
  const htmlForValue = `${title}-${Math.random().toFixed(5)}`

  return (
    <div className={cls.wrapper}>
      <label htmlFor={htmlForValue}>{title}</label>
      <select id={htmlForValue} value={value} onChange={onChangeSelect}>
        {options.map((option, idx) => {
          return (
            <option key={idx} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select
