import PostsGrid from "../posts/posts-grid"


const FeaturedPosts = (props) => {
  return (
    <div >
        <h1 className="text-center p-8 font-bold text-6xl">Featured Posts</h1>
        <PostsGrid posts={props.posts} style="max-w-[1240px] w-full grid  lg:grid-cols-3 md:grid-cols-2 mx-auto gap-4 "/>
    </div>
  )
}

export default FeaturedPosts