import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  // This would be replaced with actual data fetching
  const post = {
    title: 'Sample Blog Post',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h2>Subheading</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
    date: 'March 28, 2024',
    author: {
      name: 'John Doe',
      imageUrl: '/assets/author.jpg',
      bio: 'A passionate writer and developer.',
    },
    imageUrl: '/assets/screenshot-desktop.jpg',
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={post.author.imageUrl}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {post.author.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </p>
            </div>
          </div>
        </header>

        <div
          className="prose prose-lg dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            About the Author
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{post.author.bio}</p>
        </div>
      </div>
    </article>
  )
} 