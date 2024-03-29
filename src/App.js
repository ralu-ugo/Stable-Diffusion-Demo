// import rocks from './images/creps.png'
import "./App.css";
import React from "react";
import { createContext, useState } from "react";
// import { useEffect } from 'react';

export const ThemeContext = createContext(null);
function App() {
  const [inputValue, setinputValue] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState();
  const [loading, setloading] = React.useState(false);
  const [theme, setTheme] = useState("light");
  const engineId = "stable-diffusion-v1-5";
  const apiHost = "https://api.stability.ai";
  const url = `${apiHost}/v1alpha/generation/${engineId}/text-to-image`;
  const apiKey = "sk-MnNX05YvL3g65Fa9K2YLMmhlfALIVORvIncs5nxYhoQyaSHs";
  console.log(theme);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  if (!apiKey) throw new Error("Missing Stability API key.");
  const getResponse = async () => {
    // preventDefault();
    setloading(true);
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({
        cfg_scale: 7,
        clip_guidance_preset: "FAST_BLUE",
        height: 512,
        width: 512,
        samples: 1,
        steps: 50,
        text_prompts: [
          {
            text: inputValue,
            weight: 1,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data);
        setloading(false);
        // setinputValue("");
      });
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <div className="top">
          <label
            className="switch"
            style={{ marginLeft: "24px" }}
            onChange={toggleTheme}
          >
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="body">
          <div className="left">
            <h1 className="title">Stable Diffusion</h1>
            <div className="input-area">
              <input
                className={theme}
                id="input"
                type="text"
                onChange={(e) => setinputValue(e.target.value)}
                value={inputValue}
              />
              <button
                className={theme}
                onClick={inputValue.length > 0 ? getResponse : null}
              >
                {loading ? "Loading..." : "Generate"}
              </button>
            </div>
            <p className="desc">
              Type in a full descriptive sentence, as if you were writing a
              caption for a photo. Include as much detail as you see fit,
              including colors, styles, and emotions. Then click Generate to get
              your image.
            </p>
          </div>
          <div className="right">
            <div className="img">
              {imageUrl ? (
                <div>
                  <img
                    src={`data:image/png;base64,
                ${imageUrl.artifacts[0].base64}`}
                    alt={inputValue}
                    style={{ boxShadow: "3px 3px 6px black" }}
                  />
                  {console.log(inputValue)}
                  <span>
                    <h5>{inputValue}</h5>
                  </span>
                </div>
              ) : loading ? (
                <div>
                  <img
                    src={require("./images/loader.gif")}
                    alt={"Loading"}
                    // style={{ width: "512px", height: "512px" }}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {/* <div>Image Container</div> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
