import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles(){
return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, ''); //remove file extention and this is slug of post
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent); //matter split content of file into metaData and content
  
    const postData = {
        slug: postSlug,
        ...data,
        content,
    }
    return postData
}

export function getAllPosts() {
    const postsFiles = getPostsFiles()
    const allPosts = postsFiles.map(postFile => {
        return getPostData(postFile)
    })
    const sortedPosts = allPosts.sort((postA, postB) => postA.data > postB.data ? -1 : 1)
    return sortedPosts
}
export function getFeaturedPosts(){
    const allPosts=getAllPosts();
    const featuredPosts=allPosts.filter(post=>post.isFeatured);
    return featuredPosts;
}