import Homepage from '@/common/module/Home'

export default function Home({ params: { locale } }) {
  return (
    <div className='flex justify-center'>
      <div id="locale-diagnostic" style={{ display: 'none' }}>{locale}</div>
      <Homepage />
    </div>
  )
}
