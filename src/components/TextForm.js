import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux'
import { updateText } from '../redux/ConverterSlice'
import HelpButton from './HelpButton';
import './textForm.css'
function TextForm() {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const item = useSelector((state) => state.converter.text);
    useEffect(()=>{
        dispatch(updateText(text))
    },[text,dispatch])

  return (
      <div className='textDiv'>
      <HelpButton />
    <textarea  cols="num" rows="num" className='textInput' onChange={(e)=>setText(e.target.value)} value={item} placeholder='Write Something'/ ></div>
  )
}

export default TextForm