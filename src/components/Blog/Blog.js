import './Blog.css';
import axios from "axios";
import React from 'react';
import { useState } from "react";
import { Component } from 'react';
import {BlogCard} from './components/BlogCard';
import {AddPostForm} from './components/AddPostForm.js';

export class Blog extends Component {
    state = {
        showBlog: true,
        showAddForm: false,
        blogArr: []
    };
    componentDidMount(){
        axios.get('https://63708fe208218c267e017d80.mockapi.io/ArrDima')
        .then((response) => {
            this.setState({
                blogArr: response.data
            })
        })
        .catch((err) =>{
            console.log(err)
        })

    }
    render() {
        const blogPosts = this.state.blogArr.map((item, pos) => {
            return(
                <BlogCard
                description={item.description}
                key = {item.id}
                title = {item.title}

                liked = {item.liked}
                likePost = {() => this.likePost(pos)}
                deletePost = {() => this.deletePost(pos)}
                />
            )
        });


return(
    <>
    <button className='openCloseBlogBtn' onClick={this.handleAddFormShow}>
        Создать пост
    </button>
    <div className='posts'>{blogPosts}</div>   
    </>
    )
    }
}