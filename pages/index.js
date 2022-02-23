import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Home({ data: {slip} }) {
  const { id, advice } = slip;
  const router = useRouter()
  return (
    <div className="bg-[#323a49] h-screen flex font-body items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-[#4e5d73] w-[90%] md:w-1/2 p-9 shadow-xl rounded-xl text-center'>
        <div>
          <h5 className='mb-3 text-[#52ffa8] uppercase font-semibold'>Advice #{id}</h5>
          <p className='text-white text-[22px] font-semibold p-3'>
            "
            {advice}
            "
          </p>

          <div className='border border-gray-300 mb-5' />

          <div className='hover:bg-gray-200/40 p-3 w-12 mx-auto rounded-full'>
            <img src="/images/icon-dice.svg" alt="icon-dice" className='mx-auto cursor-pointer' onClick={() => router.push('/')} />
          </div>
        </div>
      </main>
    </div>
  )
};

export async function getServerSideProps() {
  const data = await fetch('https://api.adviceslip.com/advice').then(res => res.json())

  return {
    props: {
      data,
    }
  }
}