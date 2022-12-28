import {useState} from 'react'
import uuid from 'react-uuid';
import Form from './Form'
import Menu from './Menu'

function All() {
  
  const[taches, setTaches] = useState([])

  const handleTaches = (val)=>{
    setTaches(
      [...taches, {id:uuid(), tache : val}]
    )
  } 
 
  return (
    <>
      <Form handleTaches={handleTaches}/>  
      <Menu />

      <div class="tab-content" id="ex1-content">
        <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
          aria-labelledby="ex1-tab-1">

          <ul class="list-group mb-0">
          
            {taches.map((i)=>{
              return(
                <li key={i.id} className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                  style={{backgroundColor: '#f4f6f7'}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label ms-2" for="flexCheckDefault">
                    { i.tache}
                  </label>
                </li>
              )
            })}

          </ul>

        </div>
      </div>
   
    </>
  )
}

export default All
