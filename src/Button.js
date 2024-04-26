// import { useState } from 'react';
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './Button.css';
// import './all.css';
// import { evaluate } from 'mathjs';
// function Buttons() {
//     let [value, setValue] = useState('');
//     let [hasDot, setHasDot] = useState('false');
//     const [history, setHistory] = useState([]);
//     const [isHistoryVisible, setIsHistoryVisible] = useState(false);

//     let operators = ['-', '+', '*', '/'];
//     const checkValue = (text) => {
//         if (text === "%") return "/";
//         return text
//     }
//     const getValue = (e) => {
//         let input = checkValue(e.target.innerText);
//         if (input === ".") {
//             if (hasDot === true) return;
//             else setHasDot(true);
//         }

//         if (operators.includes(input)) {
//             setHasDot(false);
//         }
//         setValue(value + input)
//     }

//     const handleCalculate = () => {
//         if (value !== '') {
//             const result = evaluate(value);
//             setHistory([...history, { expression: value, result: result }]);
//             setValue('');
//             setHasDot(false);
//         }
//     }


//     const getResult = () => {
//         if (value !== '') {
//             handleCalculate();
//         }

//         const delet = () => {
//             setValue('');
//             setHasDot(false);
//         }

//         const deletOne = () => {
//             if (value.endsWith('.')) {
//                 setHasDot(false);
//             }
//             setValue(value.slice(0, -1));
//         }

//         const toggleHistory = () => {
//             if (value !== '') {
//                 handleCalculate();
//             }
//             setIsHistoryVisible(!isHistoryVisible);
//         }

//         return (
//             <div className="container-fluid d-flex align-items-center justify-content-center">
//                 <div className="calculator">
//                     <div className=''>
//                         <i className="fa-solid fa-clock-rotate-left" onClick={toggleHistory}></i>
//                     </div>
//                     <div className="histories" style={{ display: isHistoryVisible ? 'block' : 'none' }}>
//                         <ul>
//                             {history.map((item, index) => (
//                                 <li key={index}>
//                                     <span>{item.expression} = {item.result}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="screen col d-flex align-items-center "><h2>{value}</h2> </div>
//                     <div className="row buttons"></div>
//                     <form action="">
//                         <div className="row ">
//                             <div onClick={deletOne} className="col cal-btn">C</div>
//                             <div onClick={delet} className="col-6 cal-btn">Clear</div>
//                             <div onClick={getValue} className="col cal-btn color">%</div>
//                         </div>
//                         <div className="row">
//                             <div onClick={getValue} className="col cal-btn">7</div>
//                             <div onClick={getValue} className="col cal-btn">8</div>
//                             <div onClick={getValue} className="col cal-btn">9</div>
//                             <div onClick={getValue} className="col cal-btn color">*</div>
//                         </div>
//                         <div className="row">
//                             <div onClick={getValue} className="col cal-btn">4</div>
//                             <div onClick={getValue} className="col cal-btn">5</div>
//                             <div onClick={getValue} className="col cal-btn">6</div>
//                             <div onClick={getValue} className="col cal-btn color">-</div>
//                         </div>
//                         <div className="row">
//                             <div onClick={getValue} className="col cal-btn">1</div>
//                             <div onClick={getValue} className="col cal-btn">2</div>
//                             <div onClick={getValue} className="col cal-btn">3</div>
//                             <div onClick={getValue} className="col cal-btn color">+</div>
//                         </div>
//                         <div className="row">
//                             <div onClick={getValue} className="col cal-btn">0</div>
//                             <div onClick={getValue} className="col cal-btn">.</div>
//                             <div onClick={getResult} className="col-6 color2 cal-btn">=</div>
//                         </div>
//                     </form>
//                 </div >

//             </div >
//         )
//     }
// }
// export default Buttons;

import { useState } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Button.css';
import './all.css';
import { evaluate } from 'mathjs';

function Buttons() {
    const [value, setValue] = useState('');
    const [hasDot, setHasDot] = useState(false);
    const [history, setHistory] = useState([]);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);

    const operators = ['-', '+', '*', '/'];

    const checkValue = (text) => {
        if (text === "%") return "/";
        return text;
    }

    const getValue = (e) => {
        let input = checkValue(e.target.innerText);
        if (input === ".") {
            if (hasDot) return;
            else setHasDot(true);
        }

        if (operators.includes(input)) {
            setHasDot(false);
        }
        setValue(value + input);
    }

    const handleCalculate = () => {
        if (value !== '') {
            const result = evaluate(value);
            setHistory([...history, { expression: value, result: result }]);
            setValue(String(result));
            setHasDot(false);
        }
    }

    const getResult = () => {
        if (value !== '') {
            handleCalculate();
        }
    }

    const delet = () => {
        setValue('');
        setHasDot(false);
    }

    const deleteOne = () => {
        if (value.endsWith('.')) {
            setHasDot(false);
        }
        setValue(value.slice(0, -1));
    }


    return (
        <div className="calculate-container rounded d-flex align-items-center justify-content-center">
            <div className="calculator">
                <div className="screen col d-flex align-items-center "><h2>{value}</h2> </div>
                <div className="row buttons"></div>
                <form action="">
                    <div className="row ">
                        <div onClick={deleteOne} className="col cal-btn">C</div>
                        <div onClick={delet} className="col-6 cal-btn">Clear</div>
                        <div onClick={getValue} className="col cal-btn color">%</div>
                    </div>
                    <div className="row">
                        <div onClick={getValue} className="col cal-btn">7</div>
                        <div onClick={getValue} className="col cal-btn">8</div>
                        <div onClick={getValue} className="col cal-btn">9</div>
                        <div onClick={getValue} className="col cal-btn color">*</div>
                    </div>
                    <div className="row">
                        <div onClick={getValue} className="col cal-btn">4</div>
                        <div onClick={getValue} className="col cal-btn">5</div>
                        <div onClick={getValue} className="col cal-btn">6</div>
                        <div onClick={getValue} className="col cal-btn color">-</div>
                    </div>
                    <div className="row">
                        <div onClick={getValue} className="col cal-btn">1</div>
                        <div onClick={getValue} className="col cal-btn">2</div>
                        <div onClick={getValue} className="col cal-btn">3</div>
                        <div onClick={getValue} className="col cal-btn color">+</div>
                    </div>
                    <div className="row">
                        <div onClick={getValue} className="col cal-btn">0</div>
                        <div onClick={getValue} className="col cal-btn">.</div>
                        <div onClick={getResult} className="col-6 color2 cal-btn">=</div>
                    </div>
                </form>
            </div >
            <div className="histories custom-scroll">
                <h3>History</h3>
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>
                            <span>{item.expression} = {item.result}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}
export default Buttons;
