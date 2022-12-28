import {useState} from 'react'

function Form({handleTaches}) {
  
  const[tacheUser, setTacheUser] = useState('')

  const handleTache = (e) =>{
    setTacheUser(e.target.value)
  }

  const sendTache = (e)=>{
    e.preventDefault();
    handleTaches(tacheUser)
  }

  return (
    <form className="mb-4" onSubmit={sendTache}>
        <div className="form-outline flex-fill">
            <input type="text" className="form-control mb-4" value={tacheUser} onChange={handleTache} maxLength='15' />
            <input type="submit" className="btn btn-info" value='Ajouter'/>
        </div>
 
  </form>
  )
}

export default Form
