import Post from '@/app/ui/components/posts/Post';
import { notFound } from 'next/navigation';
import { getPosts } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();

  const post = posts?.find((post) => post.id === params.id);
  console.log('id :', params.id)
  console.log('posts:', post)

  if (!post) {
    notFound();
    // return <div>Post not found</div>;
  }

  return (
    <>
      <h1>Post</h1>
      <Post id={''} title={''} content={''} date={''} {...post} />
    </>)
}