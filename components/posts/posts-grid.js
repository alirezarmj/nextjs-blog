import PostItem from "./post-item"


const PostsGrid = (props) => {
    const { posts,style } = props
    return (
        <ul className={style}>
            {posts.map(item =>( <PostItem post={item} key={item.slug} />))}
        </ul>
    )
}

export default PostsGrid