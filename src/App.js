import { useEffect, useState } from 'react';
import './index.css';
import Fruit from './components/Fruit';

function App() {

  const [fruits, setFruits] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    async function getFruit(){
      let request = await fetch("https://fruit-api-sanjeevmidda.vercel.app");
      let response = await request.json();
  
      setFruits(response.fruits);
      console.log(fruits);

      setStatus(true);
    }

    getFruit();
  },[])
    

  return (
    <div className="App">

      <h3>FRUITS</h3>
      <div className="fruits">

        {
          status &&
          fruits.map((fruitItem, index) => {
            return <Fruit name={fruitItem.name} color={fruitItem.color} quantity={fruitItem.quantity} img = {fruitItem.img} key={index}/>
          })
        }

      </div>
    </div>
  );
}

export default App;
