import Box from '../../components/Box';
import '@ptkdev/webcomponent-instagram-widget';

import './index.css';

const images = [
  'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
  'https://images.unsplash.com/photo-1520848315518-b991dd16a625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
  'https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/reserve/OnRKhvlFQ2uJNSx5O3cc_DSC00560.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=1950&q=',
];

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
