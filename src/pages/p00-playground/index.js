import C01_NAV_BAR from '../../components/c01-nav-bar/c01-nav-bar';

import main_png from '../p00-playground/assets/main.webp';

const P00_PLAYGROUND = () => {
  return (
    <div>
        <C01_NAV_BAR />
        <img style={{ width: '100%', height: 'auto' }} src={main_png} alt="main" />
        <h1 style={{ textAlign: 'center' }}>... I love you :* ...</h1>
        <h3 style={{ textAlign: 'center' }}>... bin dran auf deine Website ;) ...</h3>
    </div>

    );  
}

export default P00_PLAYGROUND;