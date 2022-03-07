import _ from 'lodash'
export function paginate(itemArray,pageNo,pageSize){
    //calculate the start index to display items from in current page
    let startIndex=(pageNo-1)*pageSize
    return _(itemArray).slice(startIndex).take(pageSize).value();
}
export function getStudentsByUniversity(itemArray,universityNamne){
    if(universityNamne=='All Universities') return itemArray
   return itemArray.filter(item=>item.university_name==universityNamne)
}