import img1 from '../assets/images/img1.jpg'
export function Home (){

  return (
    <div className="mx-auto rounded-md">
      <div className='relative w-full h-34'>
        <img src={img1} alt='img1' className='w-[50%] rounded-md'/>
        <div className='absolute right-32 rounded-md bg-[#BACEC1] top-[30%] w-[50%] h-40 p-10'>hello hello </div>
      </div>
    </div>
  )
}