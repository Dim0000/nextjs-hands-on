import type { NextPage, GetServerSideProps } from "next"
import Link from "next/link"
import Head from "next/head"
import { ReadSingleDataType } from "../../utils/types"

const ReadSingleItem: NextPage<ReadSingleDataType> = (props) => {
  return (
    <div className="grid-container-si">
      <Head><title>{props.singleItem.title}</title></Head>
      <div>
        <h1>{props.singleItem.title}</h1>
        <hr />
        <p>作成者:{props.singleItem.name}<br></br>作成日:{props.singleItem.createDate}<br></br>更新日:{props.singleItem.updateDate}</p>
        <hr />
        <p>{props.singleItem.description}</p>
        <div>
          <Link href={`/item/update/${props.singleItem._id}`}>編集</Link>
          <Link href={`/item/delete/${props.singleItem._id}`}>削除</Link>
        </div>
      </div>
    </div>
  )
}

export default ReadSingleItem

export const getServerSideProps: GetServerSideProps<ReadSingleDataType> = async (context) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL_HOST}/api/item/${context.query.id}`)
  const singleItem = await response.json()

  return {
    props: singleItem
  }
}