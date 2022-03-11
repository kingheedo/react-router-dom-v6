import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
  return (
    <>
    <div>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
        <p>쿼리스트링: {location.pathname}</p>
        <p>쿼리스트링: {location.search}</p>
    </div>
    <div>
        <p>쿼리스트링: {id}</p>
    </div>
    </>
  )
}

export default About