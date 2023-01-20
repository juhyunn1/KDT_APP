import React from 'react';
import FooterMenu from './FooterMenu';
import footerMenuDatas from '../../../datas/footerMenuDatas';

function FooterWrap() {
  console.log(footerMenuDatas); // 잘 넘어왔는지 확인

  return ( 
    <div className='footer_wrap'>
      <div className='footer_menus'>
        {
          // map을 활용하여 footerMenuDatas 안의 요소만큼 반복
          footerMenuDatas.map( item => (<FooterMenu key={item.id} item={item} />))
        }
      </div>
    </div>
  );
}

export default FooterWrap;