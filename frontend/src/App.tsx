import React, {useEffect, useState} from 'react';
import './App.css';
import Posts from './components/Post/Posts'
import {PostLoading} from './components/PostLoading'

function App() {
  const [isLoading, setIsLoading]=useState(false)
  const [appData, setAppData]=useState({
    loading:false,
    posts:null 
  });
  const PostLoadingFC=PostLoading(Posts)
  const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

  const apiUrl="http://localhost:8000/api/";

  const loadPostData=async ()=>{
    await wait(10000);
    fetch(apiUrl).then((response)=>response.json())
                  .then((data)=>{
                    console.log(data)
                    setAppData({posts:data, loading:false})
                    console.log(appData.posts)
                  })
                  .catch((err:Error)=>console.log(err));
    }
  useEffect(()=>{
    setAppData((prev)=>({...prev, loading:true}))
    loadPostData();
  },[]);
  return (
    <div className="App">
    <h1>Latest Posts</h1>
    <PostLoadingFC loading={appData.loading} posts={appData.posts} />
  </div>
  );
}

export default App;
