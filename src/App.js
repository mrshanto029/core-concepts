import React,{useState,useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const products = 
  [{name:'Photoshop',price:'$99.99'},
   {name:'Illustrator',price:'$69.99'},
   {name:'PDF maker',price:'$9.99'}
];
    return (
      <div className = "App" >
       
       <header className = "App-header" >
       <p>I am a React Person</p>
        {
          products.map(product=><Product product={product}></Product>)
        } 
        <Counter> </Counter>
        <Users> </Users>
        </header>
      </div> 
    );
}
function Users()
{
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
  <div>
    <h3>Dynamic Users :{users.length}</h3>
    <ul>
      {
        users.map(user=><li>{user.name}</li>)
      }
    </ul>
  </div>
)
}
function Counter()
{
  const [count , setCount] = useState[10];
  const handleIncrease= () =>{
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Product(props)
{
  var productStyle = {
    border:'1px solid gray',
    borderRadius :'5px',
    backgroundColor :'lightgray',
    height:'200px',
    weight:'200px',
    float:'left',
    paddingBottom:'5px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name} </h3>
      <h5>{props.product.price} </h5>
      <button >Buy Now</button>
    </div>
  )
}

// function Person(props)
// {
//   var personStyle = {
//     border:'5px solid red',
//     backgroundColor:'yellow'
//   }
//   return (
//   <div style={personStyle}>
//    <h1>Name : {props.name}</h1>
//    <h3>Student of {props.name}</h3>
//    </div>
//    )
// }

export default App;