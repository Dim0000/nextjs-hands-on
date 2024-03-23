import type { NextPage, GetServerSideProps } from "next"
import Link from "next/link"
import Head from "next/head"
import { ReadAllDataType } from "../utils/types"

const ReadAllItems: NextPage<ReadAllDataType> = (props) => {
  return (
    <div>
      <Head><title>Next-diary</title></Head>
      <div className="grid-container-in">
        {props.allItems.map(item =>
          <Link href={`/item/${item._id}`} key={item._id}>
            <div className="texts-area">
              <h2>{item.title}</h2>
              <hr />
              <p>作成者:{item.name}<br></br>作成日:{item.createDate}<br></br>更新日:{item.updateDate}</p>
              <hr />
              <p>{item.description.substring(0, 80)}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
export default ReadAllItems

export const getServerSideProps: GetServerSideProps<ReadAllDataType> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL_HOST}/api/item/readall`)
  const allItems = await response.json()
  return {
    props: allItems
  }
}