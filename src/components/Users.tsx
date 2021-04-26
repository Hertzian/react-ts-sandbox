import useUsers from '../hooks/useUsers'
import { Users as Us } from '../interfaces/reqRes'

export const Users = () => {
  const { users, prevUsers, nextUsers } = useUsers()

  const UserItem = ({ id, avatar, first_name, email }: Us) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            style={{ width: 50, borderRadius: 100 }}
            src={avatar}
            alt={first_name}
          />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Users:</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{users.map((user: Us) => UserItem(user))}</tbody>
      </table>
      <button className='btn btn-primary' onClick={prevUsers}>
        Prev
      </button>
      <button className='btn btn-primary ms-4' onClick={nextUsers}>
        Next
      </button>
    </>
  )
}
