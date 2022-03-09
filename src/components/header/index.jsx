

function Header(props){



   

    return(
        <header>
            <h3>hola header</h3>
            <input value={props.location} onChange={e => props.setLocation(e.target.value)} onKeyPress={props.searchLoc}  placeholder="busca ciudad"></input>
        </header>
    )
}

export default Header