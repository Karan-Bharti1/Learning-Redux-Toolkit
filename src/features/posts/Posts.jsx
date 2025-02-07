import { useDispatch, useSelector } from "react-redux"
import { likeButtonPressed,fetchPosts } from "./postSlice"
import { useEffect } from "react"
const Posts=()=>{
    const dispatch=useDispatch()
    const{status,posts,error}=useSelector(state=>{
     return   state
    })
    useEffect(()=>{
     dispatch(fetchPosts())
    },[dispatch])
    console.log(posts)
 return(
    <div>
        {status==="loading"&& <p>Loading...</p>}
        {error && <p>{error}</p>}
        {posts.posts.map(post=>(
        <div key={post.postId}>
            <h2>{post.caption}</h2><button onClick={()=>dispatch(likeButtonPressed(post.postId))}>Likes: {post.likes}</button></div>
    ))}
    </div>
 )   
}
export default Posts;
