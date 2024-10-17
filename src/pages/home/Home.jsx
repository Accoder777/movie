import React, { useEffect, useMemo, useState } from 'react'
import BodyTop from '../../components/bodyTop/BodyTop'
import styles from './home.module.css'
import FilmsDisplay from '../../components/filmDisplay/FilmsDisplay'

const Home = () => {
  const [Inputvalue, setInputValue] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const [connectionErr, setConnnectionErr] = useState(false)
  const [moviesData, setMoviesData] = useState([])

  useEffect(()=>{
    setIsloading(true)
    const getData= async()=>{
      try {
       const req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${'11694079f6d1983b2953b608a4975390'}`);
       if(!req.ok) throw new Error("Error occured");

       const data =  await req.json();
       const newArr = (data.results)
       setMoviesData(newArr)
       
     } catch (error) {
        setConnnectionErr(true)
        console.error(error)
     } finally{
      setIsloading(false)
     }
    }
    getData()
  },[])

  const seaurchData = useMemo(()=>{
    return moviesData.filter((film)=> film.title.toLowerCase().includes(Inputvalue.toLowerCase()));
  },[moviesData,Inputvalue])

  

  return (
    <>
      <BodyTop BodyTopTitle={"MaileHereko"} BodyTopDesc={"List of movies and TV Shows, I, Pramod Poudel have watched till date.Explore what I have watched and also feel free to make a suggestion. 😉"} value={Inputvalue} setValue={setInputValue} />
      <div className={styles.container}>
        <div className={styles.internalNav}></div>
        <h1 className={styles.filmCounter}>All <span>({moviesData.length})</span></h1>
        {
          isLoading ? (
            <div>Loading...</div>
          ) : connectionErr ? (
            <div>Connection error occurred</div>
          ) : (
            <FilmsDisplay filmData={seaurchData} />
          )
        }

      </div>
    </>
  )
}

export default Home