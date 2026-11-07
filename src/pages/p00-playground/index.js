import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../app/features/counter/counterSlice.js';

import C01_NAV_BAR from '../../components/c01-nav-bar/c01-nav-bar';

import main_png from '../p00-playground/assets/main.webp';
import './index.scss';

const P00_PLAYGROUND = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div className="p00-playground">
        <C01_NAV_BAR />
        <img style={{ width: '100%', height: 'auto' }} src={main_png} alt="main" />
        <h1 style={{ textAlign: 'center' }}>... I love you :* ...</h1>
        <h3 style={{ textAlign: 'center' }}>... bin dran auf deine Website ;) ...</h3>

        <div className="p00-lower-container">
          <div className="p00-button" onClick={() => dispatch(increment())}>
            Add
          </div>
          <div>
            counter value: {count}
            </div>
          <div className="p00-button" onClick={() => dispatch(decrement())}>
            Subtract
          </div>
        </div>
    </div>

    );  
}

export default P00_PLAYGROUND;