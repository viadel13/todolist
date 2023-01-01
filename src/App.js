import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import All from './composants/All'
import Active from './composants/Active'
import Completed from './composants/Completed'
import Error from './composants/Error'


function App() {
  
  const[loader, setLoader] = useState(null)
  const[compteur, setCompteur] = useState(0)

  useEffect(()=>{
    setLoader(true)
    const interval = setInterval(() => {
      if(compteur < 100){
        setCompteur(prevState=>prevState + 1)
      }
      else{
        setLoader(false)
      }
    }, 100)

    return()=>clearInterval(interval)
    
  },[compteur])

  
  return (
    <div className='vh-100 gradient-custom'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col col-xl-10'>
            {
              loader 
              ?     
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated " style={{width : `${compteur}%`}}>{compteur} %</div>
              </div> 
              
              :

              <div className='card'>
                <div className='card-body p-5'>
                  <Switch>
                    <Route exact path="/" component={All} />
                    <Route path="/Active" component={Active} />
                    <Route path="/Completed" component={Completed} />
                    <Route component={Error} />
                  </Switch>
                </div>
              </div>
            
            }
            
          </div>
        </div>
      
      </div>
   
    </div>
  )
}

export default App
 