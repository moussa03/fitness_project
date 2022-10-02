import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import Button from '@mui/material/Button';
import banner from '../assets/images/banner.png'
import Styles from "../assets/css/Navbar.module.css"
import Logo from '../assets/images/Logo.png';
import Grid from '@mui/material/Grid';
import StyleNavbar from '../assets/css/Navbar.module.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import { UseTheme } from './Custom_theme';
import CardImage from '../assets/css/Card.module.css'
import bodyPartImage from '../assets/icons/body-part.png' 
import TargetImage from '../assets/icons/target.png'
import EquipementImage from '../assets/icons/equipment.png'
// import ExerciceVideo from './ExerciceVideo';
import ExerciceVideo from '../Components/ExerciceVideo';
import SimilarExercices from '../Components/SimilarExercices';
import { useEffect,useState } from 'react';
import { fetchdata } from '../Utils/FetchData';
import { useParams } from 'react-router-dom';
import { UseTheme } from '../Components/Custom_theme';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:"none",
  backgroundColor:"#F5F5F5"
}));

 
const Details = () => {  

    
  const [SearchValue,Search,SearchExercice,SetExercice,handleSearch,bodyParts,SetbodyParts,bodyPart,SetbodyPart,ApiUrl,ApiOptions,YoutubeApioptions,SearchYoutubeApi]=UseTheme();
  const [ExerciceDetails,SetExerciceDetails]=useState({});
  const [Searchvideos,Setsearchvideos]=useState([]);
  const [TargetMuscle,SetTargetmuscle]=useState([]);
  const [Targetequipement,SetTargetequipement]=useState([]);
  const [LoadSpin,Setloadspin]=useState(false);

  const {id}=useParams();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  
      const fetchExercisesData = async () => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
  
        const exerciseDetailData = await fetchdata(`${exerciseDbUrl}/exercises/exercise/${id}`, ApiOptions);
        SetExerciceDetails(exerciseDetailData);
  
        const exerciseVideosData = await fetchdata(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, YoutubeApioptions);
        Setsearchvideos(exerciseVideosData.contents);
  
        const targetMuscleExercisesData = await fetchdata(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, ApiOptions);
        SetTargetmuscle(targetMuscleExercisesData);
  
        const equimentExercisesData = await fetchdata(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, ApiOptions);
        SetTargetequipement(equimentExercisesData);
      };
      fetchExercisesData();
      Setloadspin(true);
    }, [id]);
    console.log(LoadSpin);
    const ExtraDetails=[
        {
          icon:bodyPartImage,
          name:ExerciceDetails.bodyPart  
        },
        {
          icon:TargetImage,
          name:ExerciceDetails.target  
        },
        {
            icon:EquipementImage,
            name:ExerciceDetails.equipment
        }
    ]

  return (
    <>
    <Grid container  spacing={3} >
    <Grid item xs={12} sm={6} md={6} lg={6} 
  sx={{display:{
    // xs:"none",
    sm:"block"
  
  }}}
  >
    
    <Item>
    <img src={ExerciceDetails.gifUrl} width="80%" height="auto" className={CardImage.image_category}/>
    </Item>
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={6}>
    <Item backgroundColor="#F5F5F5" >
      <Typography
     
      sx={
        {
        textAlign:"start",
        ml:"20px",
        fontSize:{
          xs:"20px",
          sm:"30px"
        },
        color:"#F44336",
        fontWeight:"bold",
        // fontFamily:"Inter",
        mt:{
         xs:"10px",
         sm:"170px"
       }}}
      >{ExerciceDetails.name}</Typography>
            
    

    {ExtraDetails.map((item)=>(
      <Stack key={item.name} display="flex" direction="row" alignItems="center" >
        <Button>
          <img src={item.icon}/>
        </Button>
        <Typography variant="h5" fontWeight="bold" sx={{color:"#2C3E50"}}>{item.name}</Typography>
      </Stack>
    ))}
    </Item>
    </Grid>
  
    </Grid>
    <></>
     <ExerciceVideo  ExerciceDetails={ExerciceDetails} SearchedVideos={Searchvideos} /> 
     <SimilarExercices SimilarTarget={TargetMuscle} SimilarEquipment={Targetequipement} isLoading={LoadSpin}/>

     
    
    </>
  )
}

export default Details