import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type HeaderType = {
    isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
    const router = useRouter();
    const arrayPaths = ['/']; 
    const [onTop, setOnTop] = useState(( !arrayPaths.includes("/router.pathname")|| isErrorPage ) ? false : true);
    const [pageLogin] = useState(( router.pathname == "/login" ) ? true : false);
    
    const headerClass = () => {
        if(window.pageYOffset === 0) {
          setOnTop(true);
        } else {
          setOnTop(false);
        }
    }


    useEffect(() => {
        if(!arrayPaths.includes(router.pathname) || isErrorPage) {
            return;
        }
    
        headerClass();
        window.onscroll = function() {
          headerClass();
        };
    }, []);

    return(
        <section className={`full-width-header-navigation  ${!onTop ? 'site-header--fixed' : ''}`}>
            <header className={`header d-flex align-items-center justify-content-center flex-column h-100 `}>
                <div className="d-flex justify-content-between align-items-center container">
                    <div className="d-flex align-items-center gap-4">
                        <Link href="http://localhost:3001/">
                            <a>
                            <img className="fictional-company-logo"
                                alt="fictional-company-logo"
                                src="/images/logo1.svg"
                                />
                                </a>
                        </Link>

                        <div className="navigation d-flex gap-4 align-items-center">
                                <div className="navigation-button">
                                    <Link href="http://localhost:3001/#order-section1">
                                        <a className="text fw-bolder">Đặt hàng</a>
                                    </Link>
                                </div>
                                <div className="navigation-button">
                                    <Link href="http://localhost:3001/#contact-section">   
                                        <a className="text fw-bolder">Dành cho Đối tác</a>
                                    </Link>
                                </div>
                                <div className="navigation-button">
                                    <Link href="http://localhost:3001/#send-message-button">
                                        <a className="text fw-bolder">Tải App</a>
                                    </Link>
                                </div>
                                <div className="navigation-button">
                                    <Link href="http://localhost:3001/#footer-section">
                                        <a className="text fw-bolder">Liên hệ</a>
                                    </Link>
                                </div>
                        </div>
                    </div>

                    <div className="navigation-actions-wrapper d-flex gap-3">
                       
                        {!pageLogin &&
                            <div className="navigation-actions d-flex align-items-center">
                                <Link href="/login">
                                    <a className="login-button">
                                        <span className="font-weight-600">Đăng nhập</span>
                                    </a>
                                </Link>
                            </div>
                        }   
                        {!pageLogin &&
                            <div className="nav-item-button d-flex">
                            <Link href="#footer-section">
                                <a className="text fw-bolder">
                                    <img className="small-icon"
                                        alt="small-icon"
                                        src="/images/shoppingbag03.svg"
                                    />
                                </a>
                            </Link>
                            </div>
                        }
                        <div className="language-button d-flex align-items-center gap-1">
                            <div className="language-text">VIE</div>
                            <Link href="#footer-section">
                                <a className="text fw-bolder">
                                    <img className="small-icon"
                                        alt=""
                                        src="/images/vn.svg"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
};


export default Header;
