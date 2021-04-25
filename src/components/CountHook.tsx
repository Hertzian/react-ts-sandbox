import { useCounter } from '../hooks/useCounter'

export const CountHook = () => {
  const { value, add } = useCounter(100)

  return (
    <>
      <h3>
        Counter with hook: <small>{value}</small>
      </h3>
      <button className='btn btn-primary' onClick={() => add(1)}>
        +1
      </button>
      &nbsp;
      <button className='btn btn-primary' onClick={() => add(-1)}>
        -1
      </button>
    </>
  )
}
