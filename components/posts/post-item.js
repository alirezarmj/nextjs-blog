import Image from "next/image";
import Link from "next/link";


const PostItem = (props) => {
    const { title, excert, image, date, slug } = props.post;
    const formattedDate = new Date(date).toLocaleString('en-US',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    const imagePath = `/images/posts/${slug}/${image}`
    return (
        <li className="mx-auto">
            <Link href={`/posts/${slug}`} className="flex flex-col m-3">
                <div>
                    <Image className="object-fill w-full" src={imagePath} alt={title} width={300} height={200}  />
                </div>
                <div className="bg-zinc-800 text-white flex flex-col justify-center py-10 px-2 text-center gap-2">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <time className="italic">{formattedDate}</time>
                    <p className="font-bold text-md">{excert}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem