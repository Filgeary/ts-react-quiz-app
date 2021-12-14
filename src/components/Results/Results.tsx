import React from 'react'
import cls from './Results.module.css'

const Results = () => {
  return (
    <div className={cls.wrapper}>
      <h2>Total Results</h2>

      <ul className={cls.list}>
        <li className={cls.item}>✅ Text 1 </li>
        <li className={cls.item}>👎 Text 2 </li>
      </ul>
    </div>
  )
}

export default Results
