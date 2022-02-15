import './App.css';

import TextForm from './components/TextForm';
import MarkdownText from './components/MarkdownText';
import HelpButton from './components/HelpButton';


function App() {
  return (
    <div className="App">
      <h1>Text to Markdown</h1>
<div style={{display:"flex"}}>
<TextForm />
 <MarkdownText />
</div>
    </div>
  );
}

export default App;
