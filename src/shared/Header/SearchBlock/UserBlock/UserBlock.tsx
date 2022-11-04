import React from 'react';
import styles from './userblock.css';
import { EColor, Text } from '../../../Text';
import { IconAnon } from '../../../icons';
import { Break } from '../../../Break';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a  href = {`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&state=random_string&redirect_uri=http://localhost:3000&scope=read submit identity`}
        className = {styles.userBox}
    >
      <div className = {styles.avatarBox}>
        {avatarSrc
          ? <img src = {avatarSrc} alt = "user avatar" className = {styles.avatarImage} />
          : <IconAnon />
        }
      </div>
      <Break size = {4}></Break>
      <div className = {styles.username}>
        <Text size = {20} color = {username ? EColor.black : EColor.grey99}> {username || 'Аноним'} </Text>
      </div>
    </a>
  );
}
