import { useEffect, useState, useRef } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResList, Users as Us } from '../interfaces/reqRes'

export const Users = () => {
  const [users, setUsers] = useState<Us[]>([])
  const pageRef = useRef(1)
  console.log('refff', pageRef)

  useEffect(() => {
    loadUsers()
  }, [])

  const userReq = async () => {
    try {
      const res = await reqResApi.get<ReqResList>('/users', {
        params: { page: pageRef.current }
      })

      //console.log(res.data.data)
      return res.data.data
    } catch (err) {
      console.error(err)
    }
  }

  const loadUsers = async () => {
    const res: any = await userReq()

    if (res.length >= 1) {
      setUsers(res)
      pageRef.current++
    }
    if (res.length === 0) {
      console.log('no more  registers')
      return
    }

    setUsers(res)
  }

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
      <button className='btn btn-primary ms-4' onClick={loadUsers}>
        Next
      </button>
    </>
  )
}
