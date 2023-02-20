import './HeaderDiv.css';
import Login from './WName/Sheader/Login';
import Shead from './WName/Sheader/Shead';
import Userdiv from './WName/Sheader/User';
import WName from './WName/WName';

function HeaderDiv(){


    return(
    <div className='HeaderDiv'>
        <WName>

        </WName>
        <Shead></Shead>
        <Userdiv>

        </Userdiv>
        <Login>
            
        </Login>

    </div>
    );   
}

export default HeaderDiv;