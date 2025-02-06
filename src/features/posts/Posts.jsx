import { useDispatch, useSelector } from "react-redux"
import { likeButtonPressed } from "./postSlice"
const Posts=()=>{
    const dispatch=useDispatch()
    const posts=useSelector(state=>{
     return   state.posts
    })
    console.log(posts)
 return(
    <div>
        {posts.posts.map(post=>(
        <div key={post.postId}>
            <h2>{post.caption}</h2><button onClick={()=>dispatch(likeButtonPressed(post.postId))}>Likes: {post.likes}</button></div>
    ))}
    </div>
 )   
}
export default Posts;
