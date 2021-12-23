
         
let initialState = []

export default  (state = initialState , action)=>{

    let {type , payload} = action
    switch(type){
        case 'increment' : 
        
        return [...state ,payload] ;
           
        default :
        return state ;
    }
}