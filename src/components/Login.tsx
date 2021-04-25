import { useReducer, useEffect } from 'react'

interface AuthState {
  validate: boolean
  token: string | null
  userName: string
  name: string
}

const initialState: AuthState = {
  validate: true,
  token: null,
  userName: '',
  name: ''
}

type LoginPayload = { userName: string; name: string }

type AuthAction =
  | { type: 'logout' }
  | { type: 'login'; payload: LoginPayload }
  | { type: 'valid' }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validate: false,
        token: null,
        userName: '',
        name: ''
      }

    case 'login':
      const { userName, name } = action.payload

      return {
        validate: false,
        token: 'tokensillo123',
        userName,
        name
      }

    case 'valid':
      return {
        ...state,
        validate: true
      }

    default:
      return state
  }
}

export const Login = () => {
  //const [state, dispatch] = useReducer(authReducer, initialState)
  const [{ validate, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  )

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500)
  }, [])

  const login = () => {
    dispatch({ type: 'valid' })

    setTimeout(() => {
      dispatch({
        type: 'login',
        payload: { name: 'Eduardo', userName: 'Hertzian' }
      })
    }, 1000)
  }

  const logout = () => dispatch({ type: 'logout' })

  if (validate) {
    return (
      <>
        <h3>Login</h3>
        <div className='alert alert-info'>Validating...</div>{' '}
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className='alert alert-success'>Welcome as: {name}</div>
      ) : (
        <div className='alert alert-danger'>Unauthenticated...</div>
      )}

      {token ? (
        <button className='btn btn-danger' onClick={logout}>
          Logout
        </button>
      ) : (
        <button className='btn btn-primary me-3' onClick={login}>
          Login
        </button>
      )}
    </>
  )
}
