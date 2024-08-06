import Image from 'next/image'

type Props = {
  icon: string
  text: string
  className: string
}

const GenerateButton = ({ icon, text, className }: Props) => {
  return (
    <button
      className={`${className} flex border-2 rounded-xl items-center justify-center px-2 py-0.5`}
    >
      <Image src={icon} alt={text} width={50} height={50} />
      <p>{text}</p>
    </button>
  )
}

export default GenerateButton
