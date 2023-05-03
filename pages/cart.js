import Head from 'next/head'
import Cartnav from  '@/components/Cartnav'
import Cartsum from '@/components/Cartsum'

export default function Cart() {
  return (
    <>
      <Head>
        <title>Chipssss</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cartnav/>
      <Cartsum/>
    </>
  )
}
