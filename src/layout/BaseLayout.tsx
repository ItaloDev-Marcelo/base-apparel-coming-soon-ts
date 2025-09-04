import Section  from '../components/Section'
import Form from '../components/Form'
import hero from '../assets/images/hero-mobile.jpg';
import heroDesk from '../assets/images/hero-desktop.jpg'
import Nav from '../components/Nav';
const BaseLayout = () => {
  return (
    <main className='flex flex-col-reverse xl:flex-row xl:justify-around text-b xl:bg-none
      bg-gradient-to-br from-[#FFFFFF] to-[#FFF5F5]'>
       <div className='xl:p-10  xl:bg-[url(/src/assets/images/bg-pattern-desktop.svg)] bg-cover'>
          <div className='hidden xl:block ml-27 my-4'><Nav/></div>
          <Section>
            <Form/>
          </Section>
       </div>
       <div>
          <figure>
              <div className='xl:hidden my-5 mx-5'><Nav/></div>
              <img src={hero} alt='' className='xl:hidden w-full' />
              <img src={heroDesk} alt=''  className=' hidden xl:block w-[800px] h-[100vh]  ' />
          </figure>
       </div>
    </main>
  )
}

export default BaseLayout