import React, { useState, useContext, useEffect } from 'react';
import PresetContext from '../../context/preset/presetContext';
import GuideContext from '../../context/guide/guideContext';

const DateItemWeb = () => {
  const presetContext = useContext(PresetContext);
  const guideContext = useContext(GuideContext);
  const { year, setYear, addMonth, month } = presetContext;
  const { guide, setGuide } = guideContext;
  const [prevYear, setPrevYear] = useState(null);
  const [nextYear, setNextYear] = useState(null);
  const [LocalMonth, setLocalMonth] = useState(null);

  useEffect(() => {
    year === null && setYear('2021');
    year === null && setLocalMonth('2021');
    month !== null && setLocalMonth(month);
    LocalMonth === null && setLocalMonth(year);
    year !== null && setPrevYear(parseInt(year - 1).toString());
    year !== null && setNextYear((parseInt(year) + parseInt(1)).toString());
  }, [month, year, LocalMonth, prevYear, nextYear, setYear]);

  const onClick = (e) => {
    if (e.target.value !== undefined) {
      if (isNaN(e.target.value)) {
        // month pressed
        addMonth(e.target.value);
        setLocalMonth(e.target.value);
      } else {
        // previous year arrow pressed
        if (e.target.value.toString() === prevYear.toString()) {
          setYear(prevYear);
          addMonth(null);
          setLocalMonth(e.target.value);
        }
        // next year arrow pressed
        if (e.target.value.toString() === nextYear.toString()) {
          setYear(nextYear);
          addMonth(null);
          setLocalMonth(e.target.value);
        }
      }
    }
    // year pressed
    if (e.target.value === year) {
      if (guide === '12') {
        setYear('2021');
        setGuide((parseInt(guide) + 1).toString());
      } else {
        addMonth(e.target.value);
        setYear(e.target.value);
      }
    }
  };

  return (
    <div data-tooltip={guide === '2' ? 'This is the datemenu. Here you navigate in your timeline' : null} className={'datemenu'}>
      <ul>
        <button onClick={onClick} className='btn-Datemenu' value={prevYear} name={prevYear}>
          {parseInt(year) === prevYear || year === prevYear ? <strong className='text-dark'>{`<`}</strong> : `<`}
        </button>
      </ul>
      <ul>
        <button
          onClick={onClick}
          className={guide === '3' || guide === '12' ? 'btn-Datemenu guide__step3and4' : 'btn-Datemenu'}
          data-tooltip={guide === '3' || guide === '12' ? 'Here you navigate to Year' : null}
          value={year}
          name={year}
        >
          {LocalMonth && year && LocalMonth.toString() === year.toString() ? (
            <strong className='text-dark'>{` ${year}`}</strong>
          ) : (
            ` ${year}`
          )}
        </button>
      </ul>
      <ul>
        <button
          onClick={onClick}
          className={guide === '4' ? 'btn-Datemenu guide__step3and4' : 'btn-Datemenu'}
          data-tooltip={guide === '4' ? 'Here you navigate to Month by pressing any month' : null}
          value='January'
          name='January'
        >
          {LocalMonth === 'January' ? <strong className='text-dark'>January</strong> : 'January'}
        </button>
      </ul>
      <ul>
        <button onClick={onClick} className='btn-Datemenu' value='February' name='February'>
          {LocalMonth === 'February' ? <strong className='text-dark'>February</strong> : 'February'}
        </button>
      </ul>
      <ul>
        <button onClick={onClick} className='btn-Datemenu' value='March' name='March'>
          {LocalMonth === 'March' ? <strong className='text-dark'>March</strong> : 'March'}
        </button>
      </ul>
      <ul>
        <button onClick={onClick} className='btn-Datemenu' value='April' name='April'>
          {LocalMonth === 'April' ? <strong className='text-dark'>April</strong> : 'April'}
        </button>
      </ul>
      <ul>
        <button onClick={onClick} className='btn-Datemenu' value='May' name='May'>
          {LocalMonth === 'May' ? <strong className='text-dark'>May</strong> : 'May'}
        </button>
      </ul>
      <ul>
        {' '}
        <button onClick={onClick} className='btn-Datemenu' value='June' name='June'>
          {LocalMonth === 'June' ? <strong className='text-dark'>June</strong> : 'June'}
        </button>
      </ul>
      <ul>
        {' '}
        <button onClick={onClick} className='btn-Datemenu' value='July' name='July'>
          {LocalMonth === 'July' ? <strong className='text-dark'>July</strong> : 'July'}
        </button>
      </ul>
      <ul>
        {' '}
        <button onClick={onClick} className='btn-Datemenu' value='August' name='August'>
          {LocalMonth === 'August' ? <strong className='text-dark'>August</strong> : 'August'}
        </button>
      </ul>
      <ul>
        {' '}
        <button onClick={onClick} className='btn-Datemenu' value='September' name='September'>
          {LocalMonth === 'September' ? <strong className='text-dark'>September</strong> : 'September'}
        </button>
      </ul>
      <ul>
        {' '}
        <button onClick={onClick} className='btn-Datemenu' value='October' name='October'>
          {LocalMonth === 'October' ? <strong className='text-dark'>October</strong> : 'October'}
        </button>
      </ul>
      <ul>
        {' '}
        <button onClick={onClick} className='btn-Datemenu' value='November' name='November'>
          {LocalMonth === 'November' ? <strong className='text-dark'>November</strong> : 'November'}
        </button>
      </ul>
      <ul>
        {' '}
        <button onClick={onClick} className='btn-Datemenu' value='December' name='December'>
          {LocalMonth === 'December' ? <strong className='text-dark'>December</strong> : 'December'}
        </button>
      </ul>
      <ul>
        <button onClick={onClick} className='btn-Datemenu' value={nextYear} name={nextYear}>
          {LocalMonth && nextYear && LocalMonth.toString() === nextYear.toString() ? <strong className='text-dark'>{`>`}</strong> : `>`}
        </button>
      </ul>
    </div>
  );
};
export default DateItemWeb;
