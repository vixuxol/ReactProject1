import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';


export function Card() {
  return (
    <li className = {styles.card}>
      <TextContent></TextContent>
      <Preview></Preview>
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
      <div className = {styles.controls}>
        <div className = {styles.karmaCounter}>
          <button className = {styles.up}>
          <svg width = "19" height = "10" viewBox = "0 0 19 10" fill = "none">
              <path d = "M9.5 0L0 10H19L9.5 0Z" fill = "#C4C4C4"></path>
            </svg>
          </button>
          <span className = {styles.karmaValue}>234</span>
          <button className = {styles.down}>
            <svg className = {styles.down} width = "19" height = "10" viewBox = "0 0 19 10">
              <path d = "M9.5 0L0 10H19L9.5 0Z" fill = "#C4C4C4"></path>
            </svg>
          </button>
        </div>
        <button className = {styles.commentsButton}>
        <svg width = "20" height = "20" viewBox="0 0 65 65" fill = "none" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	        <path d="M36.5,2.5h16c0.6,0,1-0.4,1-1s-0.4-1-1-1h-16c-0.6,0-1,0.4-1,1S35.9,2.5,36.5,2.5z" fill = "#999999"/>
          <path d="M56.5,2.5h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1S55.9,2.5,56.5,2.5z" fill = "#999999"/>
          <path d="M63.5,45.5c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1s1-0.4,1-1v-7C64.5,45.9,64.1,45.5,63.5,45.5z" fill = "#999999"/>
          <path d="M63.5,56.5c-0.6,0-1,0.4-1,1v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1C64.5,56.9,64.1,56.5,63.5,56.5z" fill = "#999999"/>
          <path d="M46.5,60.5h-1v-1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1h-1c-0.6,0-1,0.4-1,1s0.4,1,1,1h1v1c0,0.6,0.4,1,1,1s1-0.4,1-1   v-1h1c0.6,0,1-0.4,1-1S47.1,60.5,46.5,60.5z" fill = "#D9D9D9"/>
          <path d="M2.5,11.5v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1h1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1v-1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1   h-1c-0.6,0-1,0.4-1,1s0.4,1,1,1H2.5z" fill = "#D9D9D9"/>
          <path d="M43.5,48.5V47l-4.7-3.5H21.5c-3.3,0-6-2.7-6-6v-15h-10c-2.2,0-4,1.8-4,4v22c0,2.2,1.8,4,4,4h8v9l12-9h14   C41.7,52.5,43.5,50.7,43.5,48.5z" fill = "#999999"/>
          <path d="M63.5,11.5c0-2.2-1.8-4-4-4h-38c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h18l12,9v-9h8c2.2,0,4-1.8,4-4V11.5z    M28.5,27.5c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S30.2,27.5,28.5,27.5z M40.5,27.5c-1.7,0-3-1.3-3-3s1.3-3,3-3c1.7,0,3,1.3,3,3   S42.2,27.5,40.5,27.5z M52.5,27.5c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S54.2,27.5,52.5,27.5z" fill = "#D9D9D9"/>
         </svg> 
          <span className = {styles.commentsNumber}>15</span>
        </button>
        
        <div className = {styles.actions}>
          <button className ={styles.shareButton}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill = "#C4C4C4"/>
                <polyline points="16 6 12 2 8 6" fill = "#C4C4C4"/>
                <line x1="12" y1="2" x2="12" y2="15" fill = "#C4C4C4"/>
              </svg>
          </button>
          <button className ={styles.saveButton}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill = "#C4C4C4"/>
                <polyline points="7 10 12 15 17 10" fill = "#C4C4C4"/>
                <line x1="12" y1="15" x2="12" y2="3" fill = "#C4C4C4"/>
          </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
