import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useGetCurrencyInfo from './hooks/useGetcurrencyInfo'

function App() {
  const [money, setMoney] = useState('')
  const [currency, setCurrency] = useState('usd')
  const currencyInfo = useGetCurrencyInfo('usd')
  console.log(currencyInfo)
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <InputBox label={"from"} currency={currency} money={money}/>
      <button className='bg-blue-500 text-white p-1.5 rounded-lg hover:bg-blue-600'>swap</button>
      <InputBox label={"to"} currency={currency} money={money}/>
    </div>
  )
}

export default App
