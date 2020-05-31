import React,{Fragment} from "react";
import Spinn from './spinner.gif'

export const Spinner = () => <Fragment>
    <img src={Spinn} alt='loading...' style={{width: '200px', margin: 'auto', display: 'block'}} />
</Fragment>;
export default Spinner;
