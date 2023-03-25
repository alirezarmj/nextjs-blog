import AllPosts from "@/components/posts/all-posts"
import { getAllPosts } from "@/helper/posts-util"


const AllPostPages = (props) => {
  // const dummyList = [
  //   {
  //     title: 'Getting Started With Nextjs',
  //     slug: 'getting-started-with-nextjs1',
  //     image: 'nextjs.jpg',
  //     excert: 'Nextjs is a React framework for production-it makes building fullstack React Apps and Sites a breeze and ships with built-in SSR',
  //     date: '2021-02-10',
  //   },
  //   {
  //     title: 'Getting Started With Nextjs',
  //     slug: 'getting-started-with-nextjs2',
  //     image: 'nextjs.jpg',
  //     excert: 'Nextjs is a React framework for production-it makes building fullstack React Apps and Sites a breeze and ships with built-in SSR',
  //     date: '2022-02-10',
  //   },
  //   {
  //     title: 'Getting Started With Nextjs',
  //     slug: 'getting-started-with-nextjs3',
  //     image: 'nextjs.jpg',
  //     excert: 'Nextjs is a React framework for production-it makes building fullstack React Apps and Sites a breeze and ships with built-in SSR',
  //     date: '2023-02-10',
  //   },
  //   {
  //     title: 'Getting Started With Nextjs',
  //     slug: 'getting-started-with-nextjs4',
  //     image: 'nextjs.jpg',
  //     excert: 'Nextjs is a React framework for production-it makes building fullstack React Apps and Sites a breeze and ships with built-in SSR',
  //     date: '2024-02-10',
  //   },
  // ]
 
  return (
    <AllPosts posts={props.allPosts}/>
  )
}



export function getStaticProps(){
  const allPosts=getAllPosts();
  return {
    props:{
      allPosts
    }
  }

}

export default AllPostPages