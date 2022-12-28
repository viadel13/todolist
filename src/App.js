import React from 'react'
import { Switch, Route } from 'react-router-dom'
import All from './composants/All'
import Active from './composants/Active'
import Completed from './composants/Completed'
import Error from './composants/Error'

function App() {
  return (
    <div className='vh-100 gradient-custom'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col col-xl-10'>
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
          </div>
        </div>
      
      </div>
   
    </div>
  )
}

export default App
 