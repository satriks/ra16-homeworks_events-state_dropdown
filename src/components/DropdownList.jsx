const DropdownList = ({active, onActive }) => {
  
    return (
        <button className="main__btn" onClick={() => onActive(!active)}>{"account settings"}</button>
        
        )
}

export default DropdownList