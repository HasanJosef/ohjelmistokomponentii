import * as React from 'react';

 
function App() {
  const [count, setCount] = React.useState(0) 
 
  const laskuri = () =>{
    setCount(count +1) 
  }
 
  return (
    <div>
      <p>Nykyinen arvo: {count}</p>
      <button onClick={laskuri}>Kasvata Lukemaa</button> {}
    </div>
  )
}

export default App;