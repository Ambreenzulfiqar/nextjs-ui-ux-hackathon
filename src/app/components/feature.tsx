'use client';

import Image from 'next/image';

interface Post {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  comments: number;
}

const posts: Post[] = [
  {
    id: 1,
    image: '/images/featured1.png',
    category: 'Google Trending New',
    title: 'Loudest à la Madison #1 (L’Integral)',
    description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
  },
  {
    id: 2,
    image: '/images/featured2.png',
    category: 'Google Trending New',
    title: 'Loudest à la Madison #1 (L’Integral)',
    description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
  },
  {
    id: 3,
    image: '/images/featured3.png',
    category: 'Google Trending New',
    title: 'Loudest à la Madison #1 (L’Integral)',
    description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
  },
];

export default function FeaturedPosts() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Featured Posts</h2>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">{post.category}</p>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-1">{post.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>📅 {post.date}</span>
                <span>💬 {post.comments} comments</span>
              </div>
              <a href="#" className="text-blue-500 font-semibold mt-3 inline-block">Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
