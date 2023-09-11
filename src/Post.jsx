export default function Post({post}){

    return(
        <div className="text-left">
          <p className=" text-2xl font-bold">{post.id}</p>
          <p>{post.title}</p>
        </div>
    )
}
