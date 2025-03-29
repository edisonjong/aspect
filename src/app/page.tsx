import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-[60vh] w-full overflow-hidden rounded-lg">
          <Image
            src="/assets/screenshot-desktop.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Featured Posts Grid */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Post cards will be added here */}
      </section>

      {/* Newsletter Section */}
      <section className="mt-16 rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold">Subscribe to Newsletter</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Join me on this exciting journey as we explore the boundless world of web design together.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-700"
          />
          <button
            type="submit"
            className="rounded-lg bg-black px-6 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  )
} 