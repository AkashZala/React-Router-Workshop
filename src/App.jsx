import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home';
import Users from './Users';
import Posts from './Posts';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  
  const loc = useLocation();
  const { pathname } = loc;

  useEffect(()=>{
    const fetchUsers = async () => {
      const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
      setPosts(response.data)
    } 
    fetchPosts();
  }, []);

  return (
    <>
    <nav>
    <Link to='/' className={ pathname === '/' ? 'selected' : ''}>Home</Link>
    <Link to='/users' className={ pathname === '/users' ? 'selected' : ''}>Users ({ users.length })</Link>
    <Link to='/posts' className={ pathname === '/posts' ? 'selected' : ''}>Posts ({ posts.length })</Link>
    </nav>

    
      <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/users' element={ <Users users={ users }/> }/>
      <Route path='/posts' element={ <Posts posts={ posts }/> }/>
      </Routes>
    
    </>
  )
}

export default App
