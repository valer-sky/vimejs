import React from 'react';
import { Player, Youtube } from '@vime/react';

function VimeYoutube() {
  return (
    <Player controls>
      <Youtube videoId="1GFbKYQhDMU" />
      {/* ... */}
    </Player>
  );
}

export default VimeYoutube;