import { useState } from 'react';
import './App.css';
import MovieList from './componets/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './componets/Add';
import Search from './componets/Serach';
import { Route, Routes } from 'react-router-dom';
import Details from './componets/Details';


function App() {
  const [movies,setMovies] = useState([{
    title:'Bright',
    description: 'Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.',
    rate : 4 ,
    urlImg: 'https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg',
    trailer: "https://www.youtube.com/embed/6EZCBSsBxko"
  },
  {
    title:'Tomb Raider',
    description: 'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
    rate : 4 ,
    urlImg :'https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg',
    trailer: "https://www.youtube.com/embed/8ndhidEmUbI"
  },
  {
    title:'Black Panther',
    description: `T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.`,
    rate : 5 ,
    urlImg : 'https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg',
    trailer : "https://www.youtube.com/embed/xjDjIWPwcPU"
  }])
  const [search, setSearch] = useState('')
  const [rate, setRate]= useState(0)
  const getMovie = (movie) => { 
    setMovies([...movies,movie])
   }
   const filterMovies = () => {
     console.log(rate) 
     return movies.filter(mv=>mv.title.toLowerCase().includes(search.toLowerCase()) && mv.rate>=rate)
    }

  return (
    <div className="App">
      <p className='sear'><Search setSearch={setSearch} setRate={setRate}/></p>
      <p className='get'><Add getMovie={getMovie}/></p>
      <Routes>
        <Route path='/' element={<MovieList movies={filterMovies()}/>}/>
        <Route path='/:title' element={<Details movies={movies}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;