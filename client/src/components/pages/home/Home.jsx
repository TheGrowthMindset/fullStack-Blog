import { useEffect, useState} from 'react'
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import "./home.css";
import axios from "axios"


function Home() {
  // Fetching Posts 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // cannot fetch axios directly because we are going to use async function
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      console.log(res)
    }
    fetchPosts()
  }, [])
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Home