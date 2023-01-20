import React from 'react';

function TopWrap() {
  return ( 
    <div id="mstopWrap">
      <div id="gnb">
        
        <div className="sub_gnb_wrap">
          <div className="sub_gnb_wrap_inner">
            <h1 className="logo"><a href="/" title="스타벅스 메인페이지" >스타벅스 코리아</a></h1>
            <nav className="util_nav">
              <ul>
                <li className="util_nav01 sign_out" style={{display:"block"}}><a href="#">Sign out</a></li>
                <li className="util_nav01 sign_in"><a href="#">Sign In</a></li>
                <li className="util_nav02"><a href="/my/index.do" required="login">My Starbucks</a></li>
                <li className="util_nav03"><a href="/util/index.do">Customer Service & Ideas</a></li>
                <li className="util_nav04"><a href="/store/store_map.do">Find a Store</a></li>
              </ul>
            </nav>
            <p className="btn_search">
              <a href="#"><img alt="통합검색" src="//image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"/></a>
            </p>
            <a href="#" className="rCup3_wrap" role="button" title="마이 리워드 레이어 열기"></a>
          </div>
          <nav className="sub_gnb_nav">
            <div className="sub_gnb_nav_inner">
            </div>
          </nav>
        </div>
        
      </div>
    </div>		
  );
}

export default TopWrap;