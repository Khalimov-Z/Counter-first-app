import React from 'react';


function Menu(props) {
    return (
        <div>
            <ul className='sidebar'>
                <li className='nav-item li-nav1' > Главная </li>
                <li className='nav-item li-nav2'> О нас </li>
                <li className='nav-item li-nav3'> Контакты </li>
            </ul>
        </div>
    );
}

export default Menu;