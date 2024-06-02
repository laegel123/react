import {useState} from "react";


export default function App() {
  const [person, setPerson] = useState({
    name: "John",
    artwork: {
      title: 'The Starry Night',
      city: 'Paris',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
     ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
     ...person,
      artwork: {
       ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
     ...person,
      artwork: {
       ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
     ...person,
      artwork: {
       ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>Name : <input type="text" value={person.name} onChange={handleNameChange}/></label>
      <label>Title : <input type="text" value={person.artwork.title} onChange={handleTitleChange}/></label>
      <label>City : <input type="text" value={person.artwork.city} onChange={handleCityChange}/></label>
      <label>Image : <input type="text" value={person.artwork.image} onChange={handleImageChange}/></label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br/>
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  )





};
