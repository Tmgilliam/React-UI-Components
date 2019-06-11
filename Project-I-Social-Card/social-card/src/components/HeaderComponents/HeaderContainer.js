import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent  from './HeaderContent'
import HeaderTitle from '.HeaderTitle';




const HeaderContainer= () =>{
    return (
       <div>
        <h3> Header Container</h3>
        <ImageThumbnail/>
        <HeaderContent/>
        <HeaderTitle/>
        </div>
    )
}
export default HeaderContainer