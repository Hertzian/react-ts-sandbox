import { useEffect, useState, useRef } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResList, Users as Us } from '../interfaces/reqRes'

const useUsers = () => {
  const [users, setUsers] = useState<Us[]>([])
  const pageRef = useRef(1)

  useEffect(() => {
    nextUsers()
  }, [])

  const userReq = async () => {
    try {
      const res = await reqResApi.get<ReqResList>('/users', {
        params: { page: pageRef.current }
      })

      if (res.data.data.length > 0) {
        setUsers(res.data.data)
      } else {
        pageRef.current--
        console.log('No more registers')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const prevUsers = () => {
    if (pageRef.current > 1) {
      pageRef.current--
      userReq()
    }
  }

  const nextUsers = async () => {
    pageRef.current++
    userReq()
  }

  return { users, nextUsers, prevUsers }
}

export default useUsers
