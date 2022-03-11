<h1>react-router-dom-v6로 변경되면서 실습해본 예제입니다.</h1>

<span>
  
1.React Router v5 → v6
  
2.Switch가 사라짐 =>Routes

3.useHistory => useNavigate

4.useRouteMatch => useRouteMatch대신 상대경로 사용가능

5.Route에 childern이나 component 대신에, element 사용

6.Route는 Routes의 직속 자식이어야함

7.Route에 exact Props 사라짐
서브 경로가 필요한 경우 path에 *사용

8.Optional URL 파라미터 사라짐
필요하면 Route2개 만들자.

9.서브라우트를 구현하는 또 다른 방법 Outlet
Oulte을 통한 공통컴포넌트 구현 가능

10.NavLink에 activeStyle, activeClassName 사라짐 
(NavLink는 현재 페이지가 활성화되어있으면 링크에 또다른 스타일적용

</span>
