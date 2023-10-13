import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.brand = 'Tiger of Sweden'
    this.title = 'Leonard coat'
    this.description = 'Minimalistic coat in cotton-blend'
    this.descriptionFull = 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.'
    this.price = 399
    this.currency = '£'
  }

  ShopItemFunc() {
    return (
      <div class="main-content">
      <h2>{this.brand}</h2>
      <h1>{this.title}</h1>
      <h3>{this.description}</h3>
      <div class="description">
          {this.descriptionFull}
      </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{this.currency}{this.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
  </div>
    )
  }

  render() {
    return (
    <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
              {this.ShopItemFunc()}
        </div>
    </div>
  )
}
}
export default App;
