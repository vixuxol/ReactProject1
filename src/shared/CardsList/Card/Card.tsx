import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';


export function Card() {
  return (
    <li className = {styles.card}>
      <TextContent></TextContent>
      <Preview></Preview>
      <Menu></Menu>
      <Controls></Controls>
    </li>
  );
}
