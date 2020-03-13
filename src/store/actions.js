import {ADD_COUNTER, ADD_TO_CART} from "./mutation-types";

export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject)=>{
      //浅拷贝，查找购物车里是否有相同的商品，没有则添加
      let oldProduct = null
      oldProduct = context.state.cartList.find(item=>item.iid === payload.iid)
      if(oldProduct){
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的商品数量+1')
      }else {
        context.commit(ADD_TO_CART, payload)
        resolve('添加购物车成功')
      }
    })
  }
}
