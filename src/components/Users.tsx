import { useEffect, useState } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResList, Users as Us } from '../interfaces/reqRes'

export const Users = () => {
  const [users, setUsers] = useState<Us>([])

  useEffect(() => {
    reqResApi
      .get<ReqResList>('/users')
      .then((res) => {
        console.log(res.data.data)
      })
      .catch(console.log('error'))
  }, [])

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
        <tbody></tbody>
      </table>
    </>
  )
}
