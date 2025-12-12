import React from 'react'

export default function Map() {
  return (
    <section className='w-full h-[90vh] mb-[120px]'>
      <iframe
        src="https://www.google.com/maps?q=tehran&z=12&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  )
}
