import type { NextPage, GetServerSideProps } from "next"
import { useState } from "react"
import useAuth from "../../../utils/useAuth"
import Head from "next/head"
import { ReadSingleDataType } from "../../../utils/types"

const UpdateItem: NextPage<ReadSingleDataType> = (props) => {
  const [title, setTitle] = useState(props.singleItem.title)
  const [description, setDescription] = useState(props.singleItem.description)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_HOST}/api/item/update/${props.singleItem._id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title: title,
          description: description,
          updateDate: new Date().toLocaleString(),
        })
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch (err) {
      alert("アイテム編集失敗")
    }
  }

  const loginUser = useAuth()

  if (loginUser === props.singleItem.email) {
    return (
      <div>
        <Head><title>アイテム編集</title></Head>
        <h1 className="page-title">アイテム編集</h1>
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="タイトル" required />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" rows={15} placeholder="内容"></textarea>
          <button>編集</button>
        </form>
      </div>
    )
  } else {
    return <h1>権限がありません</h1>
  }
}

export default UpdateItem

export const getServerSideProps: GetServerSideProps<ReadSingleDataType> = async (context) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL_HOST}/api/item/${context.query.id}`)
  const singleItem = await response.json()

  return {
    props: singleItem
  }
}