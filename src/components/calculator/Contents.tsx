import React, { HtmlHTMLAttributes } from 'react';
import '../../style/Calculator.css';

const App: React.FC = () => {
  const [display, setDisplay] = React.useState<string>('');

  const onClickHandler: React.MouseEventHandler<HTMLUListElement> = e => {
    const {
      dataset: { value },
    } = e.target as HTMLUListElement;

    let result: string = '';

    switch (value) {
      case 'divide':
        result = '/';
        break;
      case 'multiply':
        result = '*';
        break;
      case 'subtract':
        result = '-';
        break;
      case 'plus':
        result = '+';
        break;
      case 'result':
        setDisplay(calculate(display));
        return;
      default:
        result = value + '';
        break;
    }
    setDisplay(display + result);
    result = '';
  };

  const calculate = (reqDisplay: string): string => {
    // setDisplay('')
    let firstNum = 0;
    let result: number = 0;

    let index = 0;
    for (let i = 0; i < reqDisplay.length; i++) {
      if (isNaN(parseInt(reqDisplay.charAt(i)))) {
        index = i;
        break;
      }
    }
    result = firstNum;

    let f = parseInt(reqDisplay.substring(0, index));
    let l = parseInt(reqDisplay.substring(index + 1, reqDisplay.length));
    result = reqDisplay.charAt(index) === '+' ? f + l : f - l;

    return `${result}`;
  };

  return (
    <section>
      <div className="container">
        <div className="calcu_container">
          <div className="calcu_result">
            <p>{display}</p>
          </div>
          <div className="numbers_input">
            <ul onClick={onClickHandler}>
              <li data-value="1">1</li>
              <li data-value="2">2</li>
              <li data-value="3">3</li>
              <li data-value="divide">/</li>
              <li data-value="4">4</li>
              <li data-value="5">5</li>
              <li data-value="6">6</li>
              <li data-value="multiply">x</li>
              <li data-value="7">7</li>
              <li data-value="8">8</li>
              <li data-value="9">9</li>
              <li data-value="subtract">-</li>
              <li data-value="0">0</li>
              <li data-value="plus">+</li>
              <li data-value="result">=</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
