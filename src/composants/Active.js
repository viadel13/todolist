import React from 'react'
import Menu from './Menu'

function Active({taches}) {

  const tachesCompleted  = taches.filter((i)=>i.check === false)
  
  return (
    <>

      <Menu />
      <div className="tab-content" id="exContent">
          <div className="tab-pane fade show active" id="ex1Tabs1" role="tabpanel"
            aria-labelledby="exTab1">
            
            <ul className="list-group mb-0">
              {
                tachesCompleted.map((i)=>{
                  return<li key={i.id} className="list-group-item d-flex align-items-center border-0 mb-4 rounded"
                  style={{backgroundColor: '#d4e7f1'}}>{i.tache}</li>
                })
              }
            </ul>
           
          </div>
      </div>
    </>
  )
}

export default Active
