import rocks from './images/creps.png'
import './App.css';

function App() {
  return (
    <div class= "landing">
      <h1 class ="title">
        Stable Diffusion 🚀
      </h1>
      <p>This react application leverages the model trained by Stability AI and Runway ML
        to generate images using the Stable Diffusion Deep Learning model.
        The model can be found via github here Github Repo.
      </p>
      <div class= "input-area">
        <input type= "text" placeholder= "Search for an image"></input><button>Generate</button>
      </div>
      <img src={rocks} alt="img" />







    </div>
  );
}

export default App;
