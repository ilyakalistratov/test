import React from 'react';
import ConvertToRuble from './ConvertToRuble';
import ConvertToDollar from './ConvertToDollar';

const convert = (sum, currency) => {
  if (Number.isNaN(sum) || sum === '') {
    return '';
  } else if (currency === 'r') {
    return (65.83 * sum).toFixed(2)
  } else if (currency === 'd') {
    return (sum / 65.83).toFixed(2)
  }
}

class ConvertContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: '', currency: 'r' }
  }
  handleRubleChange = (e) => {
    this.setState({ sum: e.target.value, currency: 'r' })
  }
  handleDollarChange = (e) => {
    this.setState({ sum: e.target.value, currency: 'd' })
  }

  render() {
    const { currency, sum } = this.state;
    const rubble = currency === 'r' ? sum : convert(sum, 'r');
    const dollar = currency === 'd' ? sum : convert(sum, 'd');
    return (
      <div style={{ marginBottom: '30px' }}>
        <h2><i>Currency converter (конвертер валют)</i></h2>
        <ConvertToRuble rubble={rubble} handleRubleChange={this.handleRubleChange} />
        <ConvertToDollar dollar={dollar} handleDollarChange={this.handleDollarChange} />
      </div>
    )
  }
}
export default ConvertContainer;
