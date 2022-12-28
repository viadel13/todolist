import {useState} from 'react'
import uuid from 'react-uuid';
import Form from './Form'
import Menu from './Menu'
import unlock from '../images/unlock.svg'
import edit from '../images/edit.svg'
import del from '../images/del.svg'


function All() {
  
  const[taches, setTaches] = useState([])
  const[modal, setModal] = useState(false)

  const handleTaches = (val)=>{

    const tache = taches.map((i)=>i.tache)
 
    if(val !== ''){
      
      if(tache.indexOf(val) === -1){
        
        setTaches(
          [...taches, {id:uuid(), tache : val, check: false}]
        )
        setModal(false)
      }

      else{
        setModal(true)
      }

    }
  } 
  
  const handleCheck = (id) =>{

    setTaches(
      taches.map((i)=>{
        if(i.id === id){
          return {...i, check:!i.check}
        }

        return i
      })
    )   

  }
 
  return (
    <>
      {
        modal === true 
        
        ? 
          <div className="alert ets alert-warning" role="alert">
            Tache existante !!
          </div>
        : <></>
      }
      <Form handleTaches={handleTaches}/>  
      <Menu />

      <div className="tab-content" id="exContent">
        <div className="tab-pane fade show active" id="ex1Tabs1" role="tabpanel"
          aria-labelledby="exTab1">

          <ul className="list-group mb-0">

            {taches.map((i)=>{
              return(
                <li key={i.id} className="list-group-item d-flex align-items-center border-0 mb-4 rounded"
                  style={{backgroundColor: '#d4e7f1'}}>
                  
                  <input 
                    className="form-check-input" 
                    type="checkbox" value={i.tache} 
                    onClick={()=>handleCheck(i.id)}
                  />
             
                  <label className="form-check-label ms-2">
                    {
                      i.check === true ? (<s>{i.tache}</s>) : i.tache
                    }
                  </label>
        
                  <img src={unlock}className='ms-auto' alt='unclock' width={25}/>
                  <img src={edit} alt='edit' width={25}/>
                  <img src={del} alt='del' width={25}/>
               
                 
            
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
