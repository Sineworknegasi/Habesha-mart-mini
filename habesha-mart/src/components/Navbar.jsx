import "./Navbar.css";
import { FaUser } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartWithItems from "./CartWithItems";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../pages/ProductPage";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);

  const { cartItem } = useContext(CartContext);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <i
          onClick={() => setMobileNav(!mobileNav)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
        <div className="mobile-links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="/" >Home</Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
            Product
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/lamps">
            lamps
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="about">About</Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="blog">Blog</Link>
          <Link onClick={() => setMobileNav(!mobileNav)}
            to="contact">Contact</Link>
          <Link onClick={() => setMobileNav(!mobileNav)}
            to="login">
              <FiLogIn />Login
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)}
            to="signup">
              <FaUser />SignUp
          </Link>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      {/* cart */}
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">
            Your Shopping Cart ({cartItem.length})
          </h2>
          <i onClick={openCart} className="fa-sharp fa-solid fa-xmark"></i>
        </div>

        <div className="cart-body">
          {cartItem.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <img
                onClick={scrollToTop}
                src='https://images.squarespace-cdn.com/content/v1/59f0a6e9f09ca487886b21e2/1527236501791-PL8UQJXN2C3M3GIMCX7R/Artboard+Landscap.png'
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                Product
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="about">ABout</Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="blog">Blog</Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="contact">Contact</Link>
            </div>
            <div className="nav-links">
            <Link onClick={() => window.scrollTo(0, 0)} to="login">
                <FiLogIn />
                <p className="hovers1">Login</p>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="signup">
                <FaUser />
                <p className="hovers2">Sign up</p>
              </Link>
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`fa-solid fa-cart-shopping ${cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                  }`}
              ></i>
            </div>
            <div className="hamburger-menu">
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`fa-solid fa-cart-shopping hamburger-cart ${cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                  }`}
              ></i>
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="fa-solid fa-bars hamburger-hamb"
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
