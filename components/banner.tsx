'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-3 md:right-15 md:w-auto z-60">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
            <div className=" inline-flex">
              <a
                className="font-small hover:underline "
                href="https://www.linkedin.com/company/primeqasolutions/"
                target="_blank"
                rel="noreferrer"
              >
                 <span> PrimeQA Solutions</span>
              </a>{' '}
            </div>
            
          </div>
        </div>
      )}
    </>
  )
}
