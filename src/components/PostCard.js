import Image from 'next/image';

export default function PostCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      {post.mainImage && (
        <div className="h-48 w-full relative">
          <Image
            src={post.mainImage}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-600 mb-4">By {post.author}</p>
        <p className="text-gray-800">Category: {post.category}</p>
      </div>
    </div>
  );
}
