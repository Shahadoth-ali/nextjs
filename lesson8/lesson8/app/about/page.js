


import Link from "next/link"


const page = () => {
  return (
    <div>
      <h1>this is about page</h1>
      <Link href="/">go home</Link>
      <br />
      <Link href="/about/aboutcollege">Go College page</Link>
      <br />
      <Link href="/about/aboutstudent">Go student page</Link>
    </div>
  )
}

export default page
