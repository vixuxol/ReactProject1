import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
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
      <span className = {styles.createdAt}>
        <span className = {styles.publishedLabel}>Опубликовано </span>
        4 часа назад
      </span>
    </div>
    <h2 className = {styles.title}>
      <a href = "#post-url" className = {styles.postLink}>Очень много интересного про Хэллуин. Прямо очень-очень-очень много. Прямо очень-очень-очень много.Прямо очень-очень-очень много</a>
    </h2>
  </div>
  );
}
