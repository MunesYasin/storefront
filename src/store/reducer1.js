import {initialState} from './products.js'

         


export default  (state = initialState , action)=>{

    let {type , payload} = action
    switch(type){
        case 'GET' : 
        return {...state ,activeCategory : payload };
           
        default :
        return state ;
    }
}