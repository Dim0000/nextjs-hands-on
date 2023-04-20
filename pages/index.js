import Link from "next/link"
import Head from "next/head"

const ReadAllItems = (props) => {
  return (
    <div>
      <Head><title>Next-diary</title></Head>
      <div className="grid-container-in">
        {props.allItems.map(item =>
          <Link href={`/item/${item._id}`} key={item._id}>
            <div className="texts-area">
              <h2>{item.title}</h2>
              <p>{item.description.substring(0, 80)}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
export default ReadAllItems

export const getServerSideProps = async () => {
  const response = await fetch("https://nextjs-diary-app.vercel.app/api/item/readall")
  const allItems = await response.json()
  return {
    props: allItems
  }
}