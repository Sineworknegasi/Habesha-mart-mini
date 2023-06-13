import "./Newsletter.css";
import {FaShippingFast} from 'react-icons/fa'
import {RiSecurePaymentLine} from 'react-icons/ri'
import {BsCash} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
function Newsletter() {
  return (
    <>
      <div className="news">
        <div className="news-text">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="cats-area">
        <div className="services container">
          <div className="animation1">
            <div>
              <div className="cat-icon">
                <FaShippingFast></FaShippingFast>
              </div>
              <div className="cat-cap">
                <h5>Fast free Delivery</h5>
                <p>Free delivery on all orders</p>
              </div>
            </div>
          </div>
          <div className="animation2">
            <div>
              <div className="cat-icon">
                <RiSecurePaymentLine></RiSecurePaymentLine>
              </div>
              <div className="cat-cap">
                <h5>Secure payment</h5>
                <p>Free delivery on all orders</p>
              </div>
            </div>
          </div>
          <div className="animation3">
            <div>
              <div className="cat-icon">
              <BsCash></BsCash>
              </div>
              <div className="cat-cap">
                <h5>Money Back Guarantee</h5>
                <p>Free delivery on all orders</p>
              </div>
            </div>
          </div>
          <div className="animation4">
            <div>
              <div className="cat-icon">
                <TbTruckDelivery></TbTruckDelivery>
              </div>
              <div className="cat-cap">
                <h5>Online Support</h5>
                <p> Free delivery on all orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
