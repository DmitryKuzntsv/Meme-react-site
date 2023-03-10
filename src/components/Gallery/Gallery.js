import {React, useState } from 'react';
import './Gallery.scss';
import { useEffect } from 'react';
import { Collection } from './Collection.jsx';
import { json } from 'react-router-dom';

export const Gallery = () =>{
    const cats = [
        {"name":"Hihi-Haha"},
        {"name":"Райан Гослинг"},
        {"name":"Ржумен"}
    ]
const [searchValue, setSearchValue] = useState('');
const [categoryId, setCategoryId] = useState(0);
const [collections, setCollections] = useState([]);
useEffect(()=>{
    fetch(`https://63ccf526fba6420d4d66201b.mockapi.io/gallery?${
         categoryId ? `category=${categoryId}` : '' }`,
         console.log(categoryId)
    )
    .then((res)=> res.json())
    .then((json)=> {
        setCollections(json);

    })
    .catch((err)=>{
        console.warn(err);

        alert('ошибка')
    });
}, [categoryId]);
return (
    <div className="Gallery">
        <h1>Наша галерея</h1>
        <div className="top">
            <ul className="tags">
             {cats.map((obj, i)=>(
                <li
                onClick = {()=> setCategoryId(i)}
                className={categoryId===i? 'active':''}
                key = {obj.name}>
                    {obj.name}
                </li>
             ))}
            </ul>
            
            <input value = {searchValue}
            onChange={e => setSearchValue(e.target.value)}
            className="search-input"
            placeholder="Поиск по названию"
            />
        </div>
        <div className="content">
            {collections
            .filter((obj)=> obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj, index)=>(
                <Collection key={index} name ={obj.name} images = {obj.photos}/>
            ))}
        </div>
    </div>
  );
}

