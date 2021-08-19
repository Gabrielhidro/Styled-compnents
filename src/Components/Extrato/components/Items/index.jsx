import React from "react";
import Item from './Item';
import ImageFilter from '../../../ImageFilter'
import { Items } from "./Item/styles";



export default (props) => {
  return (
    <Items>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Items>
  );
};
