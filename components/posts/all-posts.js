import PostsGrid from "./posts-grid"


const AllPosts = (props) => {
  return (
    <section>
        <h1 className="text-center font-bold text-6xl p-10">All Posts</h1>
        <PostsGrid posts={props.posts} style="max-w-[1240px] w-full grid px-24 md:grid-cols-2 mx-auto gap-4 "/>
    </section>
  )
}

export default AllPosts