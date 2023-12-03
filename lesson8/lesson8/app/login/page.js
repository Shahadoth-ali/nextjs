"use client";

import Link from "next/link"
import { useRouter } from "next/navigation"


const page = () => {

  const router=useRouter();
const navigate=(page)=>{
router.push("/login/"+page)
}

  return (
    <div>
     <h1 className="heading"> this is login page</h1>
     <Link href="/">Go home</Link>
     <br />
     <br />
<button onClick={()=>navigate("loginteacher")}>Go to teacher login</button>
<br />
<button onClick={()=>navigate("loginstudent")}>Go to student login</button>
    </div>
  )
}

export default page
