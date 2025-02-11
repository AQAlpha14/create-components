import React from 'react'
import ApiAction from '../actions/ApiAction'

export default async function Api(){
    const data = await Api(ApiAction.ADMIN_API)
    const posts = await data.json()
  return (
    <>
    <div>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
    </>
  )
}

