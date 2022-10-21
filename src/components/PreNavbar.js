import React from 'react'
import "../styles/PreNavbar.css"

const cartIcon=<svg xmlns="http://www.w3.org/2000/svg" height="18" width="23"><path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V8.8q0-.65.425-1.075Q6.15 7.3 6.8 7.3h1.85v-.65q0-1.4.975-2.375Q10.6 3.3 12 3.3t2.375.975q.975.975.975 2.375v.65h1.85q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM9 11q.15 0 .25-.1t.1-.25V8h-.7v2.65q0 .15.1.25T9 11Zm.35-3.7h5.3v-.65q0-1.125-.763-1.888Q13.125 4 12 4t-1.887.762q-.763.763-.763 1.888ZM15 11q.15 0 .25-.1t.1-.25V8h-.7v2.65q0 .15.1.25t.25.1Z"/></svg>


const PreNavbar = () => {
  return (
    <div className="preNav">
        <div>
            <a href='https://www.mi.com/in/'>MI INDIA</a><span>|</span>
            <a href='https://in.event.mi.com/in/install-mi-store'>GET MI STORE APP</a><span>|</span>
            <a href='https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1'>ONLINE HELP</a><span>|</span>
            <a href='https://www.mi.com/in/service/authorized_stores/'>RETAIL STORE</a>
        </div>
        <div>
            <a href='https://store.mi.com/in/site/login'>SIGN IN</a><span>|</span>
            <a href='https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN'>SIGN UP</a><span>|</span>
            <a href='https://store.mi.com/in/cart'>{cartIcon}CART (0)</a>
        </div>


    </div>
  )
}

export default PreNavbar