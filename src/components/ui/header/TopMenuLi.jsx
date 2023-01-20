import React from 'react';

function TopMenuLi({key, item, idx}) {
  const [isLogin, setState] = React.useState(true); // 로그인 상태 확인

  console.log(key, item, idx); // key는 undefined 나옴
  return (
    <>
      {
        // 로그인 되었고 item.id가 1일 경우 표시 X, 나머지 경우에 <li> 표시
        isLogin && item.id === 1 ? "" : (<li key={item.id} className="util_nav01"><a href={item.link}>{item.name}</a></li>)
      }
    </>
  );
}

export default TopMenuLi;