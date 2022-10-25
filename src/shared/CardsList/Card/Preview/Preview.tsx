import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className = {styles.preview}>
        <img 
          className = {styles.previewImg}
          src = "https://cdn.dribbble.com/users/4567268/screenshots/19724290/media/b154bf6942032e9d68051287f435d960.png?compress=1&resize=450x338&vertical=top"
      />
      </div>
  );
}
