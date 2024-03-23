import type { NextPage } from "next"
import { useState } from "react"
import useAuth from "../../utils/useAuth"
import Head from "next/head"

const CreateItem: NextPage = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_HOST}/api/item/create`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title: title,
          description: description,
          createDate: new Date().toLocaleString(),
        })
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch (err) {
      alert("アイテム作成失敗")
    }
  }

  const loginUser = useAuth()

  if (loginUser) {
    return (
      <div>
        <Head><title>アイテム作成</title></Head>
        <h1 className="page-title">アイテム作成</h1>
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="タイトル" required />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" rows={15} placeholder="内容"></textarea>
          <button>作成</button>
        </form>
      </div>
    )
  } else {
    return <h1>ログインしてください</h1>
  }
}

export default CreateItem