import React, { HtmlHTMLAttributes } from 'react';
import '../../style/Calculator2.css';

const App: React.FC = () => {
  const [display, setDisplay] = React.useState<string>('0');
  const [process, setProcess] = React.useState<string>('');

  const onClickHandler: React.MouseEventHandler<HTMLUListElement> = e => {
    const {
      dataset: { value = '' },
    } = e.target as HTMLUListElement;

    let result: string = '';

    switch (value) {
      case 'divide':
        result = '/';
        setProcess(display + result);
        break;
      case 'multiply':
        result = '*';
        setProcess(display + result);
        break;
      case 'subtract':
        result = '-';
        setProcess(display + result);
        break;
      case 'plus':
        result = '+';
        setProcess(display + result);
        break;
      case 'result':
        setProcess(process + display + '=');
        setDisplay(calculate(process, display));
        return;
      case 'C':
        setProcess('');
        setDisplay('0');
        return;
      case 'CE':
        process !== '' && process.charAt(process.length - 1) !== '='
          ? setDisplay('0')
          : setProcess('');
        setDisplay('0');
        return;
      default:
        display === '0' ||
        (process !== '' && isNaN(parseInt(process.charAt(process.length - 1))))
          ? setDisplay(value)
          : setDisplay(display + value);
        break;
    }

    result = '';
  };

  const calculate = (reqProcess: string, reqDisplay: string): string => {
    let f = parseInt(reqProcess.substring(0, reqProcess.length - 1));
    let l = parseInt(reqDisplay);
    const formula: string = reqProcess.substring(
      reqProcess.length - 1,
      reqProcess.length
    );
    return `${calculateVal(f, l, formula)}`;
  };

  const calculateVal = (
    firstNum: number,
    lastNum: number,
    formula: string
  ): number => {
    let result: number = 0;

    switch (formula) {
      case '+':
        result = firstNum + lastNum;
        break;
      case '-':
        result = firstNum - lastNum;
        break;
      case '*':
        result = firstNum * lastNum;
        break;
      case '/':
        result = firstNum / lastNum;
        break;
    }
    return result;
  };

  return (
    <section>
      <div className="container">
        <div className="calcu_container">
          <div className="calcu_container_2">
            <div className="calcu_process">
              <p>{process}</p>
            </div>
            <div className="calcu_result">
              <p>{display}</p>
            </div>
          </div>
          <div className="numbers_input">
            <ul onClick={onClickHandler}>
              <li data-value="CE">CE</li>
              <li data-value="C">C</li>
              <li data-value="HISTORY">HISTORY</li>
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
