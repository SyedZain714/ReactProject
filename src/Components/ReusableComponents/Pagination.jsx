import React, { Component } from 'react';
import _ from 'lodash'
// A reusable Pagination Component
function Pagination(props) {
    let {PageCount,ItemCount,onItemClick,pageClicked}=props //Object Destructuring
    let Count=Math.ceil(ItemCount/PageCount)
    if(Count===1)
        return null
    var arr = [];
    for (var i = 1; i <= Count; i++) {
        arr.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                {arr.map((index)=>{
                        return(
                            <li className={index==pageClicked?"page-item active":"page-item"}><a onClick={()=>onItemClick(index)} class="page-link" >{index}</a></li>
                        )
                })}
            </ul>
        </nav>
    );
}
export default Pagination;