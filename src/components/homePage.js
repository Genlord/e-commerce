import { React, useState, useEffect, useRef } from 'react';

import IconButton from '@material-ui/core/IconButton';

import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import HomeImg1 from './homeImg1.png';
import HomeImg2 from './homeImg2.png';
import HomeImg3 from './homeImg3.png';


const imgData = [
       {
         img1: [HomeImg1, HomeImg2, HomeImg3],
        
         title: ['Cards', 'Cpus', 'Other'],
         author: 'author',
         featured: true,
         cols: 2,
         id: 0,
       },
       {
        img1: [HomeImg2, HomeImg3, HomeImg1],
        title: ['Cpus', 'Other', 'Cards'],
        author: 'author',
        featured: false,
        cols: 1,
        id: 1,
       },
       {
        img1: [HomeImg3, HomeImg1, HomeImg2],
        title: ['Other', 'Cards', 'Cpus'],
        author: 'author',
        featured: false,
        cols: 1,
        id: 2,
       },
     ];


     


export default function HomePage() {
    const [imgNum, setImgNum] = useState(0);

    

    const fadeImg = useRef();

    const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    
    setActive(!isActive);
  };

    const changeImg = () => {
      setTimeout(() => Date())
       
     }

     useEffect(() => {
      

       setTimeout(() => {
         if (imgNum === 2) {
           setImgNum(0)
         } else if (imgNum === 0) {
           setImgNum(1)
         } else if (imgNum === 1) {
           setImgNum(2)
         }
       }, 8000)

        handleToggle()
        
     }, [imgNum])

     
    return (
      <div className='homeContainer'>
        <GridList cellHeight={300} cols={2} style={{ width: 1000, height: 800}}>
          {imgData.map((item) => (
            <GridListTile key={item.id} cols={item.cols || 1}>
              <img src={item.img1[imgNum]} alt={item.title} className={`imggg, ${isActive ? 'fadeee' : 'fadee'}`} ref={fadeImg} key={+new Date()}/>
              <GridListTileBar
              title={item.title[imgNum]}
              subtitle={item.title}
              
              actionIcon={
                <IconButton>
                  <Link to={() => {
                    if (item.img1[imgNum] === HomeImg1) {

                      return '/shop'
                    } else if (item.img1[imgNum] === HomeImg2) {
                      return '/cpu'
                    } else if (item.img1[imgNum] === HomeImg3) {
                      return '/idk'
                    }
                  }} className='menuLinks'>Shop</Link>
                </IconButton>
              }/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
}
