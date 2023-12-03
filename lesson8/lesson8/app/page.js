"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Home() {

const router=useRouter();
//event diye routing korle ta navigation
//link diye routing korle ta linking
//dependency hocche dev and production duitar jonno
//but dev depe.. hocce only dev er jonno
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>this is home page</h1>
    <Link href="/login">Go to login page</Link>
    <Link href="/about">Go to about page</Link>
    <button onClick={()=>router.push("/contact")}>Go to contact</button>
    </main>
  )
}
