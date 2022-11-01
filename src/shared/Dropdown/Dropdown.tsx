import React from 'react';
import styles from './dropdown.css';

// эта кнопка при нажатии на которою список будет открываться
interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean; // чтобы список контролировался сверху
    onOpen ?: () => void;
    onClose ?: () => void;

}


const NOOP = () => {};
// будет регулировать что угодно из чего угодно 
export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen =NOOP }: IDropdownProps) {
  const[isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen); // открыт ли наш список 
  
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]); //можно убраь лишнее срабатывание написанным хуком isMounted
  
  const handleOpen = () => {
    if(isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }
  return (
    //от div-ов можно избавиться, но тогда придется познакомиться с такими хуками, 
    // как UseRef и порталами
    <div className = {styles.container}>
      <div onClick = {handleOpen}>
        { button }
      </div>
      {isDropdownOpen && (
        <div className = {styles.listContainer}>
            <div onClick = {() => setIsDropdownOpen(false)} className = {styles.list}> 
            { children }
            </div>
        </div>
      )}
    </div>
  );
}

//причем такой элемент широкого пользования должен уметь работать, как controlled, так и uncontrolled
// Компонент становится управляемым, когда вы устанавливаете его значение используй props.

// тут управлять компонентом будет isOpen (которое если передается, то сверху)