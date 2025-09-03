import React from 'react'

interface HeaderProps {children:React.ReactNode}

const Section = ({children}:HeaderProps) => {
  return (
    <section className='my-2 p-4 relative left-25 top-17 '>
        <div className='text-center xl:text-left  w-[60%]'>
            <h1 className='text-[2.5em]  leading-[37px] mb-7'>
                <span className='tracking-[3px]' >we're</span> <br />
                <span className='tracking-[2px]'>coming  <br className='hidden xl:block'/> soon</span>
            </h1>
            <p className=''>Hello fellow shoppers! We're currently building our new fashion store. 
             Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </div>
        {children}
    </section>
  )
}

export default Section