import { useParams, Link } from 'react-router-dom'

const Post = ({ posts }) => {
    const params = useParams();
    const postId = params.id * 1;

    const post = posts.find(post => postId === post.id)

    if (!post) {
        return null;
    }
    return (
        <div className='postContainer'>
            <Link to='/posts' className='goBack'>
                Back to All Posts
            </Link>
            <div className='post'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
}

export default Post