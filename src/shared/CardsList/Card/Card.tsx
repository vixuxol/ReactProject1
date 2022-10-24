import React from 'react';
import styles from './card.css';

export function Card() {
  return (
    <li className = {styles.card}>
      <div className = {styles.textContent}>
        <div className = {styles.metaData}>
          <div className = {styles.userLink}>
            <img 
              className = {styles.avatar}
              src = "https://cdn.dribbble.com/userupload/2849252/file/original-33ff253d7387513b53962b1c6f611f2b.jpg?compress=1&resize=450x338&vertical=top"
              alt = "avatar"
            />
            <a href = "#user-url" className = {styles.username}>Кто-то ктотовский</a> 
          </div>
          <span className = {styles.createdAt}>4 часа назад</span>
        </div>
        <h2 className = {styles.title}>
          <a href = "#post-url" className = {styles.postLink}>Очень много интересного про Хэллуин</a>
        </h2>
      </div>
      <div className = {styles.preview}>
        <img 
          className = {styles.previewImg}
          src = "https://cdn.dribbble.com/users/4567268/screenshots/19724290/media/b154bf6942032e9d68051287f435d960.png?compress=1&resize=450x338&vertical=top"
      />
      </div>
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
      <div className = {styles.content}>
        
      </div>
    </li>
  );
}
