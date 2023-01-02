import {Link} from 'react-router-dom'

const Menu = () =>{
    return(
        <>
            <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" to="/" role="tab"
                    aria-controls="ex1-tabs-1" aria-selected="true">Tout</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" to="/Active" role="tab"
                    aria-controls="ex1-tabs-2" aria-selected="false">En cours</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" to="/Completed" role="tab"
                    aria-controls="ex1-tabs-3" aria-selected="false">Complet</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu;