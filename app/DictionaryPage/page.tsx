import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loading from '../component/loading'
const Dictionary  = dynamic(()=> import("../component/Dictionary"), {ssr:false, loading: ()=><Loading/>})

export default function page() {
  return (
    <Suspense>
      <Dictionary/>
    </Suspense>
  )
}
