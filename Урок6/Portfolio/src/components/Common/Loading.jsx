import React from 'react';
import preloader from '../img/preloader.svg'

class Loading extends React.Component {

  render() {
    return (
      <div>
        <img src={preloader} />
      </div>
    )
  }
}
export default Loading;