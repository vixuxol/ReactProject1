import React from 'react';
import styles from './menu.css';

export function Menu() {
  return (
    <div className = {styles.menu}>
    <button className = {styles.menuButton}>
    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z"/>
      <circle cx="2.5" cy="2.5" r="2.5" fill = "#D9D9D9"/>
      <circle cx="2.5" cy="10" r="2.5" fill = "#D9D9D9" />
      <circle cx="2.5" cy="17.5" r="2.5" fill = "#D9D9D9"/>
    </svg>
    </button>
  </div>
  );
}
