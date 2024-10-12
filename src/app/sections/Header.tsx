import Image from 'next/image'

const Header = () => {
  return (
    <header className='mb-10 h-1/6 bg-gradient-to-b from-[#141519] to-transparent mx-auto pt-4'>
      <Image
        src='/cluedo_logo.webp'
        alt='cluedo logo'
        width={300}
        height={300}
        className='p-2'
      />
    </header>
  )
}

export default Header
