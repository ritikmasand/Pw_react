import { useFetcher, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const post = {
    id: params.id,
    title: "My blog post",
    likes: 3,
  };
  return post;
}

export async function action({ request }) {
  const formData = await request.formData();
  const likePostID = formData.get("like");

  console.log(`Post ${likePostID} liked!`);
  return { success: true };
}

export default function Post() {
  const post = useLoaderData();
  const fetcher = useFetcher();

  return (
    <div>
      <h2> {post.title} </h2>
      <p> {post.likes} </p>

      <fetcher.Form method="post">
        <button type="submit" name="like" value={post.id}>
          Like
        </button>
      </fetcher.Form>
  
    {fetcher.data?.success && <p>✅ Like Submitted:</p>}
    </div>
  );
}
