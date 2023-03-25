import PostHeader from "./post-header"

import ReactMarkdown from "react-markdown"
// import Image from "next/image"
const PostContent = (props) => {
    const{post}=props
    // const DUMMY_POST = {
    //     title: 'Getting Started With Nextjs',
    //     slug: 'getting-started-with-nextjs1',
    //     image: 'nextjs.jpg',
    //     date: '2021-02-10',
    //     content: '# This is a first post'
    // }
    // const customRenderers={
    //     paragraph(paragraph){
    //         const{node}=paragraph;
    //         if(node.children[0].type==='image'){
    //             const image=node.children[0]
    //             return (
    //                 <div>
    //                     <Image 
    //                     src={`/images/posts/${post.slug}/${image.url}`}
    //                     alt={image.alt}
    //                     width={600}
    //                     height={300}
    //                     />
    //                 </div>
    //             )
    //         }
    //         return <p>{paragraph.children}</p>
    //     }
    // }
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <div className="max-w-[60%] h-fit mx-auto rounded-md mt-8 p-20 bg-purple-200 text-purple-900">
            <PostHeader title={post.title} image={imagePath} />
            <hr className='w-full border-white border-b-4 mb-6' />
          <ReactMarkdown >
          {post.content}
          </ReactMarkdown>
                
            
        </div>
    )
}

export default PostContent