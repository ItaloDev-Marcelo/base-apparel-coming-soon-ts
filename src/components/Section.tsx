import React from 'react'

interface HeaderProps {children:React.ReactNode}

const Section = ({children}:HeaderProps) => {
  return (
    <section className='my-2 p-4 md:p-10 xl:p-0 relative xl:left-27 xl:top-22 flex-col  '>
        <div className='text-center xl:text-left mb-4 xl:w-[60%]'>
            <h1 className='text-[2.5em]  leading-[37px] mb-7'>
                <span className='tracking-[3px] text-Pink-0' >we're</span> <br />
                <span className='tracking-[2px] text-Gray-0'>coming  <br className='hidden xl:block'/> soon</span>
            </h1>
            <p className='md:px-30 xl:px-0 text-Pink-0 '>Hello fellow shoppers! We're currently building our new fashion store. 
             Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </div>
        {children}
    </section>
  )
}

export default Section