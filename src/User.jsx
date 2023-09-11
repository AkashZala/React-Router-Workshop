import { useParams, Link } from "react-router-dom";

const User = ({ users }) => {
    const params = useParams();
    const id = params.id*1;
    const user = users.find(user => user.id === id)

    if (!user) {
        return null;
    }
    return(
      <div>
        <Link to='/users'>Back to all users</Link>
        <h1>{ user.name }</h1>
        <h2>{user.company.name}</h2>
        <p>Email: { user.email }</p>
        <p>Phone: { user.phone }</p>
        <p>Website: { user.website }</p>
        <p>Username: { user.username }</p>
        
      </div>
    );
  }

  export default User;