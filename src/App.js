import rocks from './images/creps.png'
import './App.css';

function App() {
  return (
    <div class= "landing">
      <h1 class ="title">
        Stable Diffusion 🚀
      </h1>
      <p>Type in a full descriptive sentence, as if you were writing a caption for a photo. Include as much detail as you see fit, including colors, styles, and emotions. Then click Generate to get your image.</p>
      <div class= "input-area">
        <input type= "text" placeholder= "Search for an image"></input><button>Generate</button>
      </div>
      <img src={rocks} alt="img" />







    </div>
  );
}

export default App;
