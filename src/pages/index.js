import client from '../lib/sanity';
import PostCard from '../components/PostCard'; // Correctly import PostCard here

// Fetch posts from Sanity
export async function getStaticProps() {
  // Sanity GROQ query to fetch posts
  const query = `*[_type == "post"]{
    title,
    slug,
    "author": author->name,
    "category": category->title,
    mainImage
  }`;
  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
}

// Home component
export default function Home({ posts }) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Code For Med AI Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.slug.current} post={post} />
      ))}
    </div>
  );
}
