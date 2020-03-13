export default {
  cartLength(state){
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  },
  deChecked(state){
    return state.cartList.filter(item=>item.checked === true).length === 0
  },
  allChecked(state){
    if(state.cartList.length !== 0){
      return  state.cartList.filter(item=>item.checked === true).length === state.cartList.length
    }else {
      return false
    }
  }
}
