import React from 'react';
import s from './PagesNavigation.module.css';

const PagesNavigation = (props) => {
   
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount ; i++) {
        pages.push(i);
    }
    let curPage=props.pageNumber;
    let curPageFirst=((curPage-5)<0) ? 0 : curPage-5;
    let curPageLast=curPage+4;
    let slicedPages=pages.slice(curPageFirst, curPageLast)
    return (
        <div>
            {slicedPages.map ( p => {
                return <span key={p} onClick={() => { props.onPageChange(p)}} className={p===props.pageNumber ? s.selectedPage : s.ordinaryPage}> {p} </span>
            })}
        </div>)
}
export default PagesNavigation;