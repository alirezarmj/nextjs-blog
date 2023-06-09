import FeaturedPosts from "@/components/home-page/featured-posts"
import Hero from "@/components/home-page/hero"
import { getFeaturedPosts } from "@/helper/posts-util"


const HomePage = (props) => {
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
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}




export function getStaticProps(){
  const featuredPosts=getFeaturedPosts();
  return {
    props:{
      posts:featuredPosts
    }
  }
}






export default HomePage