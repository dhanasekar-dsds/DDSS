import Button from '../../Buttons/Buttons';
import './Product.css';

function Product() {

    return (
        <div className='Product'>

            <img src='https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg'>

            </img>
            <div className='des'>
                <span className='Pname'>
                    Iphone 14 Pro<br></br></span>
            </div>
            <div className='PP'>
            ₹21650.00
            </div>
                <div className='det'>
                    Colour: Purple
                </div>
                <div className='buttons'>
             <Button>
                
             </Button>
          
                </div>

        </div>
    );
}
export default Product;