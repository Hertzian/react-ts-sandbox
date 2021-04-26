import { useForm } from '../hooks/useForm'

export const Forms = () => {
  const { form, email, password, onChange } = useForm({
    email: 'test@test.com',
    password: '123456'
  })

  return (
    <>
      <h3>Forms</h3>
      <input
        className='form-control mt-2 mb-2'
        type='text'
        placeholder='email'
        value={email}
        onChange={({ target }) => onChange(target.value, 'email')}
      />
      <input
        className='form-control mt-2 mb-2'
        type='text'
        placeholder='password'
        value={password}
        onChange={({ target }) => onChange(target.value, 'password')}
      />
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  )
}
