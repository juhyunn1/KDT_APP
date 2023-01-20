  import React from 'react';
  import topMenuDatas from '../../../datas/topMenuDatas';
  import Logo from './Logo';
  import TopMenuLi from './TopMenuLi';

  function TopWrap() {
    // javascript 코드 사용 가능
    console.log(topMenuDatas); // 데이터 console로 확인
    // let isLogin = false;

    return ( 
      <div id="mstopWrap">
        <div id="gnb">
          <div className="sub_gnb_wrap">
            <div className="sub_gnb_wrap_inner">
              {/* <h1 className="logo"><a href="/" title="스타벅스 메인페이지" >스타벅스 코리아</a></h1> */}
              <Logo />
              <nav className="util_nav">
                <ul>                
                  { // return 안에서 {}하면 그 안에 자바스크립트 사용 가능
                    topMenuDatas && topMenuDatas.map( item => ( // topMenuDatas가 있으면 각 요소를 item으로 mapping, 정석은 (item, key) >> 데이터에 id가 있으니깐 여기에 key 생략 가능
                      <TopMenuLi key={item.id} item={item} keys={item.id}/> // key는 반복을 위해 사용, 기본 속성이므로 넘어가지 않는다
                    )) // 안쪽 괄호 {}는 return 필요/()는 return 불필요
                  }
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