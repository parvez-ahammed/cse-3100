import React from 'react';
import { Canvas } from '@react-three/fiber';
import {Bloom , EffectComposer} from "@react-three/postprocessing";
import Hero1cyl from "./Hero1cyl";
const Hero1 = () => {
  return (
     
      
      <Canvas flat camera={{fov:65}} className=''>
        <ambientLight />
        <Hero1cyl />

      </Canvas>
   

  );
};

export default Hero1;
