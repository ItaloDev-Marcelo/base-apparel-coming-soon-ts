import React from 'react'

interface HeaderProps {children:React.ReactNode}

const Section = ({children}:HeaderProps) => {
  return (
    <section>
        <div>
            <h1>
                <span>we're</span> <br/>
                <span>coming soon</span>
            </h1>
            <p>Hello fellow shoppers! We're currently building our new fashion store. 
             Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </div>
        {children}
    </section>
  )
}

export default Section