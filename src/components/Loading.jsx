import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/loading.json';
import '../css/loading.css'
export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh'
    }}>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
}
