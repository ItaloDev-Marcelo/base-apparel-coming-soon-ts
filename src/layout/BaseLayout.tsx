import Section  from '../components/Section'
import Form from '../components/Form'
const BaseLayout = () => {
  return (
    <main>
       <div>
          <Section>
            <Form/>
          </Section>
       </div>
    </main>
  )
}

export default BaseLayout