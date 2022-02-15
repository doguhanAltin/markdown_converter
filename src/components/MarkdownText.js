import React from 'react'
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './markdownText.css'
function MarkdownText() {
    const item = useSelector((state) => state.converter.text);
  return (
    <>  <ReactMarkdown className="markdown" children={item} remarkPlugins={[remarkGfm]} /></>
  )
}

export default MarkdownText