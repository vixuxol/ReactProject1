import React from 'react';
import styles from './menuitemslist.css';
import { BlockIcon, WarningIcon } from '../../../../icons';
import { EColor, Text } from '../../../../Text';


interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className = {styles.menuItemsList}>
      <li className = {styles.menuItem}>
        <BlockIcon />
        <Text size = {12} color = {EColor.grey99}>Скрыть</Text>
      </li>

      <div className = {styles.divider}></div>

      <li className = {styles.menuItem}>
        <WarningIcon />
        <Text size = {12} color = {EColor.grey99}>Пожаловаться</Text>
      </li>

    </ul>
  );
}
