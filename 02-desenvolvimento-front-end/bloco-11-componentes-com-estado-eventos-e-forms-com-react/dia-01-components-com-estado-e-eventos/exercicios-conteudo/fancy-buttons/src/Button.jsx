import React from 'react';

class Button extends React.Component {
  consolePraTestar(buttonTextCapturadoDepoisQueOBotãoFoiRenderizado) {
    window.alert(
      `Clicou no botão
    '${buttonTextCapturadoDepoisQueOBotãoFoiRenderizado
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