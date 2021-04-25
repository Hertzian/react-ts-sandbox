import { BasicTypes } from './typescript/BasicTypes'
import { ObjectsLiterals } from './typescript/ObjectsLiterals'
import { Functions } from './typescript/Functions'
import { Counter } from './components/Counter'
import { CountHook } from './components/CountHook'
import { Login } from './components/Login'

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
      <Login />
    </div>
  )
}

export default App
