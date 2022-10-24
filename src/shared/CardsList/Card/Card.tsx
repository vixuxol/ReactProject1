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
              src = "https:/"
              alt = "avatar"
            />
            <a href = "#user-url" className = {styles.username}>Дмитрий Гришин</a> 
          </div>
          <span className = {styles.createdAt}>4 часа назад</span>
        </div>
        <h2 className = {styles.title}>
          <a href = "#post-url" className = {styles.postLink}>Следует, отметить, что новая модель организационной деятельности....</a>
        </h2>
      </div>
      <div className = {styles.preview}>
        <img 
          className = {styles.previewImg}
          src = "https://cdn.dribbble.com/users/4567268/screenshots/19724290/media/b154bf6942032e9d68051287f435d960.png?compress=1&resize=450x338&vertical=top"
      />
      </div>
      <div className = {styles.menu}></div>
      <div className = {styles.content}></div>
    </li>
  );
}
