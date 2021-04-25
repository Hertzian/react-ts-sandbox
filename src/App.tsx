import { BasicTypes } from './typescript/BasicTypes'
import { ObjectsLiterals } from './typescript/ObjectsLiterals'
import { Functions } from './typescript/Functions'
import { Counter } from './components/Counter'
import { CountHook } from './components/CountHook'

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS-React</h1>
      <hr />
      <BasicTypes />
      <ObjectsLiterals />
      <Functions />
      <Counter />
      <CountHook />
    </div>
  )
}

export default App
