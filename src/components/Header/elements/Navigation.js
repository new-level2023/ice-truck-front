import Link from "next/link";
import { Col } from "react-bootstrap";
import clsx from "clsx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navigation = ({ positionClass }) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul
        className={clsx(
          "d-flex",
          positionClass ? positionClass : "justify-content-end"
        )}
      >
        <li>
          <Link href="/" className="nav-link">
            HOME
          </Link>
        </li>
        <li className="has-children-mega">
          <Link href="/" className="nav-link">
            CATEGORY
            <IoIosArrowDown />
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">SHOP PAGE LAYOUT</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/grid-left-sidebar">Grid Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    Grid Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-left-sidebar">List Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/shop/list-right-sidebar">
                    List Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">List No Sidebar</Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">OTHER PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/other/cart">Cart</Link>
                </li>
                <li>
                  <Link href="/other/checkout">Checkout</Link>
                </li>
                <li>
                  <Link href="/other/my-account">My Account</Link>
                </li>
                <li>
                  <Link href="/other/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link href="/other/compare">Compare</Link>
                </li>
                <li>
                  <Link href="/other/order-completed">Order Completed</Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Top Models</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/product-basic/lorem-ipsum-fashion-eight">
                    Default
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-left-sidebar/lorem-ipsum-fashion-eight">
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-right-sidebar/lorem-ipsum-fashion-eight">
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-thumb-left/lorem-ipsum-fashion-eight">
                    Thumb Left
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <div className="header-banner">
                <div className="header-banner__content">
                  <div className="shop-banner">
                    <div className="banner-img overlay-bg--40">
                      <img
                        src="/assets/images/banner/shop_banner.jpg"
                        alt="shop_banner"
                      />
                    </div>
                    <div className="shop-bn-content">
                      <h5 className="text-uppercase shop-subtitle">
                        New items
                      </h5>
                      <h3 className="text-uppercase shop-title">
                        Sale 30% Off
                      </h3>
                      <Link
                        href="/shop/grid-left-sidebar"
                        className="btn btn-white rounded-0 btn-sm text-uppercase"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="/" className="nav-link">
            BRAND
            <IoIosArrowDown />
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <Link href="/shop/all-brands">
                <h3 className="sub-menu--mega__title">View All Brands</h3>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/grid-left-sidebar">Mahle</Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    Bosch
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-left-sidebar">Kella</Link>
                </li>
                <li>
                  <Link href="/shop/list-right-sidebar">
                    List Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">List No Sidebar</Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              {/* <h3 className="sub-menu--mega__title">OTHER PAGES</h3> */}
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/other/cart">Cart</Link>
                </li>
                <li>
                  <Link href="/other/checkout">Checkout</Link>
                </li>
                <li>
                  <Link href="/other/my-account">My Account</Link>
                </li>
                <li>
                  <Link href="/other/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link href="/other/compare">Compare</Link>
                </li>
                <li>
                  <Link href="/other/order-completed">Order Completed</Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              {/* <h3 className="sub-menu--mega__title">PRODUCT PAGES</h3> */}
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/product-basic/lorem-ipsum-fashion-eight">
                    Default
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-left-sidebar/lorem-ipsum-fashion-eight">
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-right-sidebar/lorem-ipsum-fashion-eight">
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-thumb-left/lorem-ipsum-fashion-eight">
                    Thumb Left
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <div className="header-banner">
                <div className="header-banner__content">
                  <div className="shop-banner">
                    <div className="banner-img overlay-bg--40">
                      <img
                        src="/assets/images/banner/shop_banner.jpg"
                        alt="shop_banner"
                      />
                    </div>
                    <div className="shop-bn-content">
                      <h5 className="text-uppercase shop-subtitle">
                        New items
                      </h5>
                      <h3 className="text-uppercase shop-title">
                        Sale 30% Off
                      </h3>
                      <Link
                        href="/shop/grid-left-sidebar"
                        className="btn btn-white rounded-0 btn-sm text-uppercase"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="/" className="nav-link">
            MAKE/MODEL
            <IoIosArrowDown />
          </Link>
          <ul className="sub-menu sub-menu--mega sub-menu--mega--with-banner">
            <li className="sub-menu--mega__column">
              {/* <h3 className="sub-menu--mega__title">SHOP PAGE LAYOUT</h3> */}
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/grid-left-sidebar">Ford</Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">Hino</Link>
                </li>
                <li>
                  <Link href="/shop/list-left-sidebar">KenWorth</Link>
                </li>
                <li>
                  <Link href="/shop/list-right-sidebar">Mack</Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">Freightliner</Link>
                </li>
                <li>
                  <Link href="/shop/all-models">View All </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">OTHER PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/other/cart">Cart</Link>
                </li>
                <li>
                  <Link href="/other/checkout">Checkout</Link>
                </li>
                <li>
                  <Link href="/other/my-account">My Account</Link>
                </li>
                <li>
                  <Link href="/other/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link href="/other/compare">Compare</Link>
                </li>
                <li>
                  <Link href="/other/order-completed">Order Completed</Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Top Models</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/product-basic/lorem-ipsum-fashion-eight">
                    Freightliner Cascadia P3
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-left-sidebar/lorem-ipsum-fashion-eight">
                    Freightliner Columbia
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-right-sidebar/lorem-ipsum-fashion-eight">
                    Freightliner M2 106
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-thumb-left/lorem-ipsum-fashion-eight">
                    Volvo VNL 670
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">PRODUCT PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/product-basic/lorem-ipsum-fashion-eight">
                    Default
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-left-sidebar/lorem-ipsum-fashion-eight">
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-right-sidebar/lorem-ipsum-fashion-eight">
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-thumb-left/lorem-ipsum-fashion-eight">
                    Thumb Left
                  </Link>
                </li>
              </ul>
            </li>
            <li className="d-lg-flex sub-menu--mega__column--banners">
              <Col lg={4}>
                <div className="header-banner p-0">
                  <img
                    src="/assets/images/banner/menu_banner1.jpg"
                    alt="menu_banner1"
                  />
                  <div className="banner-info">
                    <h6>10% Off</h6>
                    <h4>New Arrival</h4>
                    <Link href="/shop/grid-left-sidebar">Shop now</Link>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="header-banner p-0">
                  <img
                    src="/assets/images/banner/menu_banner2.jpg"
                    alt="menu_banner1"
                  />
                  <div className="banner-info">
                    <h6>10% Off</h6>
                    <h4>New Arrival</h4>
                    <Link href="/shop/grid-left-sidebar">Shop now</Link>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="header-banner p-0">
                  <img
                    src="/assets/images/banner/menu_banner3.jpg"
                    alt="menu_banner1"
                  />
                  <div className="banner-info">
                    <h6>10% Off</h6>
                    <h4>New Arrival</h4>
                    <Link href="/shop/grid-left-sidebar">Shop now</Link>
                  </div>
                </div>
              </Col>
            </li>
          </ul>
        </li>
        {/* <li>
          <Link href="/" className="nav-link">
            PAGES<IoIosArrowDown />

          </Link>
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/other/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/other/contact-us">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/other/faq">
                F.A.Q
              </Link>
            </li>
            <li>
              <Link href="/other/not-found">
                404 Error Page
              </Link>
            </li>
            <li>
              <Link href="/other/login">
                Login
              </Link>
            </li>
            <li>
              <Link href="/other/register">
                Register
              </Link>
            </li>
            <li>
              <Link href="/other/terms">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="/" className="nav-link">
            BLOG
            <IoIosArrowDown />
          </Link>
          <ul className="sub-menu sub-menu--one-column sub-menu--one-column--has-children sub-menu--one-column--reverse">
            <li>
              <Link href="/blog/grid-four-columns">
                Grids
                <IoIosArrowForward />
              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/grid-three-columns">Three Columns</Link>
                </li>
                <li>
                  <Link href="/blog/grid-four-columns">Four Columns</Link>
                </li>
                <li>
                  <Link href="/blog/grid-left-sidebar">Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog/grid-right-sidebar">Right Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-left-sidebar">
                    Standard Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-right-sidebar">
                    Standard Right Sidebar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog/list-left-sidebar">
                Lists
                <IoIosArrowForward />
              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/list-left-sidebar">Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog/list-right-sidebar">Right Sidebar</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog/post-left-sidebar">
                Single Post
                <IoIosArrowForward />
              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/post-left-sidebar">Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog/post-right-sidebar">Right Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog/post-slider">Slider Post</Link>
                </li>
                <li>
                  <Link href="/blog/post-audio">Audio Post</Link>
                </li>
                <li>
                  <Link href="/blog/post-video">Video Post</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/other/contact-us" className="nav-link">
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
