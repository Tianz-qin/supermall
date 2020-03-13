//mutations唯一目的是修改state状态
//这里面的每个方法完成的事件尽量单一
export default {
  addCounter(state, oldProduct){
    oldProduct.count++
  },
  addToCart(state, payload){
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  },
  checkClick(state, payload) {
    const item = state.cartList.filter(item=>item.iid === payload)[0]
    item.checked = !item.checked
  },
  allChange(state, payload) {
    // for (let item of state.cartList){
    //   item.checked = payload
    // }

    state.cartList.forEach(item => item.checked=payload)
  }
}
