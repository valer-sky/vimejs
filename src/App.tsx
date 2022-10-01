import React, { useEffect, useRef } from 'react';
import './App.scss';
import { Player, Video, DefaultUi, usePlayerContext } from '@vime/react';

// Default theme.
import '@vime/core/themes/default.css';

// Optional light theme (extends default).
import '@vime/core/themes/light.css';

// Custom UI component.
import TapSidesToSeek from './TapSidesToSeek';
import VimeYoutube from './components/VimeYoutube/VimeYoutube';

function App() {
  // Obtain a ref if you need to call any methods.
  const player = useRef<HTMLVmPlayerElement>(null);

  const onPlaybackReady = () => {
    // ...
  };

  // If you prefer hooks :)
  const [currentTime] = usePlayerContext(player, 'currentTime', 0);

  useEffect(() => {
    console.log(currentTime);
  }, [currentTime]);

  return (
    <div id="container">
      <h1>Vime.js videoplayer example</h1>
      <Player playsinline ref={player} onVmPlaybackReady={onPlaybackReady}>
        <Video poster="https://media.vimejs.com/poster.png">
          <source
            data-src="https://media.vimejs.com/720p.mp4"
            type="video/mp4"
          />
        </Video>
        <DefaultUi>
          {/* Custom UI Component. */}
          <TapSidesToSeek />
        </DefaultUi>
      </Player>
      <h1>The contrived example above loads a video from LogRocket’s YouTube channel using the VimeYoutube</h1>
      <VimeYoutube />
      <br>
      
      </br>
    </div>
  );
}

export default App;
