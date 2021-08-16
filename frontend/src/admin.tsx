import React, {useEffect, useState} from 'react';
import './App.css';
import Posts from './components/admin/posts'
import {PostLoading} from './components/postLoading';
import axiosInstance from './axios';

export default function Admin() {
  const [appData, setAppData]=useState({
    loading:false,
    posts:null 
  });
  const PostLoadingFC=PostLoading(Posts)
//   const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

  const apiUrl="http://localhost:8000/api/";

  const loadPostData=async ()=>{
    axiosInstance.get("").then((res) => {
			const allPosts = res.data;
			setAppData({ loading: false, posts: allPosts });
			console.log(res.data);
		});
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
