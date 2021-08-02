import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import styled from 'styled-components';

const StyledUnity = styled.div`
 width: 90%;
 height: 90vh;
 margin: 0 auto;
 border: 2px solid black;
`;

const unityContext = new UnityContext({
  loaderUrl: "build/demo.loader.js",
  dataUrl: "build/demo.data",
  frameworkUrl: "build/demo.framework.js",
  codeUrl: "build/demo.wasm",
});

export default function App() {
  return (
    <StyledUnity>
      <Unity unityContext={unityContext} style={{
        height: "95%",
        width: "95%",
        margin: "0 auto",
        background: "grey",
      }} />  
    </StyledUnity>
  ) 
}