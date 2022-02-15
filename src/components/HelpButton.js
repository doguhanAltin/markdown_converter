import React from "react";
import { useDispatch} from 'react-redux'
import { helpText, updateText } from "../redux/ConverterSlice";
import './helpButton.css'

function HelpButton() {
 const dispatch  = useDispatch();
  return <div><button onClick={()=>dispatch(helpText())}>?</button></div>;
}

export default HelpButton;
