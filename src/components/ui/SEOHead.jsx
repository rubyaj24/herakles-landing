import { useEffect } from 'react'

const upsertMeta = (attr, name, content) => {
  if (!content) return
  const selector = attr === 'name' ? `meta[name="${name}"]` : `meta[property="${name}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const SEOHead = ({
  title = 'Herakles Racing',
  description = 'Herakles Racing from College of Engineering Trivandrum - student BAJA racing team',
  keywords = 'BAJA racing, CET, Herakles Racing',
  image = '/logo.svg',
  url = typeof window !== 'undefined' ? window.location.href : 'https://heraklesracing.cet.ac.in',
  jsonLd = null
}) => {
  useEffect(() => {
    if (title) document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'author', 'Herakles Racing Team')
    upsertMeta('name', 'robots', 'index, follow')

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')

    upsertMeta('property', 'twitter:card', 'summary_large_image')
    upsertMeta('property', 'twitter:title', title)
    upsertMeta('property', 'twitter:description', description)
    upsertMeta('property', 'twitter:image', image)

    // canonical link
    let link = document.head.querySelector("link[rel='canonical']")
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)

    // JSON-LD structured data
    if (jsonLd) {
      let script = document.head.querySelector("script[type='application/ld+json']#seo-jsonld")
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'seo-jsonld'
        document.head.appendChild(script)
      }
      script.text = JSON.stringify(jsonLd)
    }

    return () => {
      // leave meta tags in place (they're useful site-wide); do not remove
    }
  }, [title, description, keywords, image, url, jsonLd])

  return null
}

export default SEOHead
