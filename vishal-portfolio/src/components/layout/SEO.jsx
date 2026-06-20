import { Helmet } from 'react-helmet-async'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vishal Kumar',
  jobTitle: 'Full Stack Developer',
  url: 'https://vishal-portfolio.netlify.app',
  sameAs: [
    'https://github.com/vishalsharmabaddi',
    'https://linkedin.com/in/vishal-kumar-35ab5525a',
  ],
  knowsAbout: ['Java', 'Spring Boot', 'React', 'JavaScript'],
}

function SEO() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  )
}

export default SEO
