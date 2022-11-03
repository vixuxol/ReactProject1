import React from 'react';
import styles from './userblock.css';
import { EColor, Text } from '../../../Text';
import { IconAnon } from '../../../icons';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a className = {styles.userBox}>
      <div className = {styles.avatarBox}>
        {avatarSrc
          ? <img src = {avatarSrc} alt = "user avatar" className = {styles.avatarImage} />
          : <IconAnon />
        }
      </div>

      <div className = {styles.username}>
        <Text size = {20} color = {username ? EColor.black : EColor.grey99}> {username || 'Аноним'} </Text>
      </div>
    </a>
  );
}
