import React from 'react';
import ReactDOM from 'react-dom';

import ImageGallery from '../src/ImageGallery';

const images = [
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg',
    thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1t.jpg',
    originalClass: 'featured-slide',
    thumbnailClass: 'featured-thumb',
    description: 'Custom class for slides & thumbnails'
  },
  {
    thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/3v.jpg',
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/3v.jpg',
    embedUrl: 'https://www.youtube.com/embed/iNJdPyoqt8U?autoplay=1&showinfo=0',
    description: 'Render custom slides within the gallery',
  },
  {
    thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg',
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg',
    embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/2.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/2t.jpg'
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/3.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/3t.jpg'
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4t.jpg'
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/5.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/5t.jpg'
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6t.jpg'
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/7.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/7t.jpg'
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/8.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/8t.jpg'
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/9.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/9t.jpg'
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/10.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/10t.jpg'
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/11.jpg',
    thumbnail:'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/11t.jpg'
  }
]

function renderItem(item) {
  return (
    <div className='image-gallery-image'>
      <div
        className={'img'}
        style={{backgroundImage: 'url('+item.original+')'}}
        alt={item.originalAlt}
      />
      {
        item.description &&
          <span className='image-gallery-description'>
            {item.description}
          </span>
          }
        </div>
  )
}

ReactDOM.render(
  <ImageGallery items={images} renderItem={renderItem}/>,
    document.getElementById('container')
)
