import { useState } from 'react'

export const useCounter = (initVal: number = 10) => {
  const [value, setValue] = useState<number>(initVal)

  const add = (num: number) => {
    setValue(value + num)
  }

  return {
    value,
    add
  }
}
