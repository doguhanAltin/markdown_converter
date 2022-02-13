import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
const markdown = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`

function App() {
  return (
    <div className="App">
 <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
    </div>
  );
}

export default App;
