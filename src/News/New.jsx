import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import '../News/New.css'

function News({val} ) {
    const [value,setValue] = useState([])
    

    useEffect (() =>{
console.log(val,"Hai")



// if(val.toLowerCase()==="tesla"){
  
// axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-09-21&sortBy=publishedAt&apiKey=fcb4c06f75f7460599749935ed01c5c6")  
// .then( (res) => setValue(res.data.articles)) 

// }
// else if(val.toLowerCase()==="sports"){
  
//   axios.get("https://newsapi.org/v2/everything?q=sports&from=2022-09-21&sortBy=publishedAt&apiKey=fcb4c06f75f7460599749935ed01c5c6")  
//   .then( (res) => setValue(res.data.articles)) 
  
//   }
//   else if(val.toLowerCase()==="cars"){
  
//     axios.get("https://newsapi.org/v2/everything?q=cars&from=2022-09-21&sortBy=publishedAt&apiKey=fcb4c06f75f7460599749935ed01c5c6")  
//     .then( (res) => setValue(res.data.articles)) 
    
//     }

   
//       else if(val.toLowerCase()==="network"){
  
//         axios.get("https://newsapi.org/v2/everything?q=network&from=2022-09-21&sortBy=publishedAt&apiKey=fcb4c06f75f7460599749935ed01c5c6")  
//         .then( (res) => setValue(res.data.articles)) 
        
//         }
  
  
//     else if(val.toLowerCase()==="india"){
// axios.get("https://newsapi.org/v2/everything?q=india&from=2022-09-21&sortBy=publishedAt&apiKey=fcb4c06f75f7460599749935ed01c5c6")  
// .then( (res) => setValue(res.data.articles)) 
//     }


axios.get(`https://newsapi.org/v2/everything?q=${val}&apiKey=da390c1e28ce463c9c6827337312ad6e`)  
.then( (res) => setValue(res.data.articles)) 


    },[val])

    const vars=value.map((req ) =>{

        return(
         <div className="App col-3 py-3 px-4">
<Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={req.urlToImage} />
      <Card.Body>
        <Card.Title> {req.title} </Card.Title>
        <Card.Text >
      {req.description}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <div>
        <a href={req.url} >View Details </a>
        </div>

      </Card.Body>
    </Card>

         </div>
        )
    }
    
    )

    return(
        <div className="row">

{vars}


        </div>
    )

}

export default News;