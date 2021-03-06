import React from 'react';

class Button extends React.Component {
  consolePraTestar(buttonTextCapturadoDepoisQueOBotÃ£oFoiRenderizado) {
    window.alert(
      `Clicou no botÃ£o
    '${buttonTextCapturadoDepoisQueOBotÃ£oFoiRenderizado
        .target
        .innerText}'`)
  }

  render() {
    const { buttonText, buttonColor } = this.props;
    return (
      <button onClick={this.consolePraTestar} className={buttonColor}>{buttonText}</button>
    );
  }
}

export default Button;