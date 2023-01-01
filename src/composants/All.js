import {useState, useEffect} from 'react'
import uuid from 'react-uuid';
import Form from './Form'
import Menu from './Menu'
import unlock from '../images/unlock.svg'
import lock from '../images/lock.svg'
import edit from '../images/edit.svg'
import del from '../images/del.svg'


function All() {
  
  const[taches, setTaches] = useState([
    {id:uuid(), tache : 'Programmer', check: false, serure : false},
    {id:uuid(), tache : 'Jouer a la ps4', check: false, serure : false},
    {id:uuid(), tache : 'Voyager', check: false, serure : true},
  ])
  
  const[tacheUser, setTacheUser] = useState('')
  const[modal, setModal] = useState(false)
  const[modalChamp, setModalChamp] = useState(false)
  const[alertSerure, setAlertSerure] = useState(false)
  const[toggle, setToggle] = useState(true)
  const[editItem, setEditItem] = useState(null)
  const[load, setLoad] = useState(null)

  
  useEffect(()=>{

    setLoad(true)

    setTimeout(()=>{
      setLoad(false)
    }, 2000)

  }, [])

  const alerte = () =>{
    setAlertSerure(false)        
  }

  const editer = (id)=>{
    let newEdit = taches.find((i)=>{
      return i.id === id
    })

    setToggle(false)
    setTacheUser(newEdit.tache)
    setEditItem(id)

 
  }

  const serure = (id)=>{
    setTaches(
      taches.map((i)=>{
        if(i.id === id){
          return {...i, serure : !i.serure}
        }
        if(i.serure === false){
          setAlertSerure(false)
        }
        return i
      })
    )
  }

  const effacer = (id) =>{

    setTaches(
     
      taches.filter((i)=>i.id !== id)  
      
    )
     
    
  }

  const handleTaches = (val)=>{

    const tache = taches.map((i)=>i.tache)
    
    if(tacheUser && !toggle){

      setTaches(
          taches.map((i)=>{
        if(i.id === editItem){
          return{...i, tache : tacheUser}
        }
        return i
      })
      )

      setToggle(true)
   
    }
    
    else{
      
      if(val !== ''){
      
        if(tache.indexOf(val) === -1){
          
          setTaches(
            [...taches, {id:uuid(), tache : val, check: false, serure : false}]
          )
          setModal(false)
        }

        else{
          setModal(true)
        }
        setModalChamp(false)
      }
      else{
        setModalChamp(true)
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

  const s = alertSerure
  console.log(s)

  return (
    <>

      {
        modalChamp === true 
        
        ? 
          <div className="alert ets alert-warning" role="alert">
            Champ vide !!<br />
            Entrer une tache svp !
          </div>
        : <></>
      }
      {
        modal === true 
        
        ? 
          <div className="alert ets alert-warning" role="alert">
            Tache existante !!
          </div>
        : <></>
      }
      <Form 
        handleTaches={handleTaches}
        tacheUser={tacheUser}
        setTacheUser={setTacheUser}
        toggle={toggle}

      />  

      <Menu />
      
      {
        load 
        
        ?
        
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        </div>

        :

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

                    {
                      i.serure === false ? <img src={unlock}className='ms-auto' alt='unlock' width={25} onClick={()=>serure(i.id)}/>

                      : <img src={lock}className='ms-auto' alt='lock' width={25} onClick={()=>serure(i.id)}/>
                  
                    }
                  
                    <img 
                      
                      src={edit} 
                      alt='edit' 
                      width={25}
                      onClick={()=>editer(i.id)}
                    
                    />

                    <img 
                      src={del} 
                      alt='del' 
                      width={25}  
                      onClick={i.serure === false?()=>effacer(i.id):alerte}
                    />
                
                  </li>
                )
              })}

            </ul>
         
          </div>
        </div>
      }
  
    </>
  )
}

export default All
