import React from 'react'
import '../index.css'

const currlist = ['a', 'x', 's']

function InputBox({ label, currency, money }) {
  return (
    <div className={`${css} bg-gray-200 border-2 border-mauve-700 rounded-xl w-1/3 p-2 m-2`}>
      <div className='text-shadow-taupe-500 text-xs'>{label}</div>
      <div className='flex justify-between items-center'>
        <div>{currency}</div>
        <input type='text' value={money} onChange={()=>{}} className='w-auto text-shadow-xs rounded border-gray-500 border-2 bg-amber-50 text-shadow-gray-800' />
        <select name='currency' className='ml-2 rounded-xl border-2 border-gray-700 bg-gray-300 w-12'>
          {currlist.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
