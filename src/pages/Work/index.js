import Box from '../../components/Box';
import '@ptkdev/webcomponent-instagram-widget';

import './index.css';

export default function Work() {
  return (
    <Box>
      <h2>Work</h2>
      <p>Lorem lipsum</p>

      <div className="images">
        <instagram-widget
          username="@roman.schejbal"
          grid="3x3"
          force-square="yes"
          items-limit="9"
          image-width="100%"
          image-height="100%"
          border-corners="2"
          border-spacing="10px"
        />
      </div>

      {/* <div className="images">
        {images.map((url) => (
          <div className="image">
            <img src={url} />
          </div>
        ))}
      </div> */}
    </Box>
  );
}
