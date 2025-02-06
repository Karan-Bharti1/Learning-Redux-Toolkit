import { useSelector } from "react-redux"

const Posts=()=>{
    const posts=useSelector(state=>{
     return   state.posts
    })
    console.log(posts)
 return(
    <div>
        {posts.posts.map(post=>(
        <div key={post.postId}>
            <h2>{post.caption}</h2><p>Likes: {post.likes}</p></div>
    ))}
    </div>
 )   
}
export default Posts;
