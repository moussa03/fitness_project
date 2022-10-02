import React from "react";
import { createContext } from 'react';
import { useContext,useState } from "react";
import { ApiOptions} from '../Utils/FetchData'
import {YoutubeApioptions} from '../Utils/FetchData';
import {fetchdata} from '../Utils/FetchData'
import { useEffect} from "react";
import { useParams } from "react-router-dom";

const ThemeContext=createContext();// initialize hooks 
const ApiUrl="https://exercisedb.p.rapidapi.com";
const SearchYoutubeApi="https://youtube-search-and-download.p.rapidapi.com";

export function UseTheme(){
    return useContext(ThemeContext); //use hook 
}


export  function CustomProvier({children}){
  const [SearchValue,Search]=useState("");
  const [SearchExercice,SetExercice]=useState([]);
  const [bodyParts,SetbodyParts]=useState([]);
  const [bodyPart,SetbodyPart]=useState('all');
  const [Searchvideos,Setsearchvideos]=useState([]);
  const newLocal = '#1A2027';
  
//   useEffect(()=>{
//     const FetchExerciceDetail=async()=>{
//      const FetchDetailsExercice=await fetchdata(`${ApiUrl}/exercises/exercise/${id}`,ApiOptions);
//      SetExerciceDetails(FetchDetailsExercice);
//      const SearchVideoExercice=await fetchdata(`${SearchYoutubeApi}/search?query=${ExerciceDetails.name}`,YoutubeApioptions)
//      Setsearchvideos(SearchVideoExercice);
//     }
//     FetchExerciceDetail();
//  },[id])
  
 useEffect(()=>{

  const SearchedBodypart=async()=>{
    let SearchDataBodypart=[];
    if(bodyPart==='all'){
        SearchDataBodypart=await fetchdata('https://exercisedb.p.rapidapi.com/exercises',ApiOptions);
    }
    else {
       SearchDataBodypart=await fetchdata( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,ApiOptions);
    }
    SetExercice(SearchDataBodypart);
  }
  SearchedBodypart();
 
 },[bodyPart]);
 useEffect(()=>{
   const FetchExerciceData=async () =>{
    const Databodypart=await fetchdata("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",ApiOptions);
    console.log(Databodypart);
    SetbodyParts(['all',...Databodypart]);
   
   }
   
   FetchExerciceData();
 },[])
  const handleSearch=async()=>{
       if(SearchValue){
        const ExerciceData=await fetchdata("https://exercisedb.p.rapidapi.com/exercises",ApiOptions);
         const SearchdExercices=ExerciceData.filter((item)=>{
           return item.name.includes(SearchValue)
             || item.bodyPart.includes(SearchValue)
             || item.equipment.includes(SearchValue)
             || item.target.includes(SearchValue)
         });
         Search('');
         SetExercice(SearchdExercices);
       
    
       }
  }
    
return(
    <ThemeContext.Provider value={[SearchValue,Search,SearchExercice,SetExercice,handleSearch,bodyParts,SetbodyParts,bodyPart,SetbodyPart,ApiUrl,ApiOptions,YoutubeApioptions,SearchYoutubeApi,Searchvideos,Setsearchvideos]}>
            {children}
    </ThemeContext.Provider>
    )

}