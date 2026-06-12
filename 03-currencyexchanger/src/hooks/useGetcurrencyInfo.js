import { useState, useEffect } from 'react'

function useGetCurrencyInfo(money, currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    if (!money || !currency) return

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[money]))
      .catch((error) => {
        console.error('Currency fetch failed:', error)
      })
  }, [money, currency])

  return data
}

export default useGetCurrencyInfo