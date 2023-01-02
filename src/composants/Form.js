function Form({handleTaches, tacheUser, setTacheUser, toggle}) {
  
  const handleTache = (e) =>{
    setTacheUser(e.target.value)
  }

  const sendTache = (e)=>{
    e.preventDefault();
    handleTaches(tacheUser)
    setTacheUser('')
  }

  return (
    <form className="mb-4" onSubmit={sendTache}>
        <div className="form-outline flex-fill">
            <input type="text" className="form-control mb-4" value={tacheUser} onChange={handleTache} maxLength='15' required/>
            <input 
              type="submit" 
              className="btn btn-info" 
              value={
                toggle ? 'Ajouter' : 'Modifier'
              }
            />
        </div>
    </form>
  )
}

export default Form
