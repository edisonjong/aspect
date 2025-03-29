import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  title: string
  excerpt: string
  imageUrl: string
  date: string
  author: {
    name: string
    imageUrl: string
  }
  slug: string
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  imageUrl,
  date,
  author,
  slug,
}) => {
  return (
    <article className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
      <Link href={`/blog/${slug}`}>
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center space-x-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={author.imageUrl}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {author.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
          </div>
          <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{excerpt}</p>
        </div>
      </Link>
    </article>
  )
}

export default PostCard 