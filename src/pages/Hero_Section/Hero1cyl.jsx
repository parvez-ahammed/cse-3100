import React, { useRef } from 'react'
import { useTexture} from '@react-three/drei';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const Hero1cyl = () => {
  let tex=useTexture("./image.png");
  let cyl =useRef(null);
 useFrame((state,delta)=>{
    cyl.current.rotation.y+=delta*0.5
 })
  return (
    <group rotation={[0,1.4,0]}>
             <mesh ref={cyl} >
               <cylinderGeometry args={[2,2,2,60,60,true]}/>
               <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
             </mesh></group>
  )
}

export default Hero1cyl


