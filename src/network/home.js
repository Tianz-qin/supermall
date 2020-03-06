import {request, request2} from "./request";

//请求数据
//进行一层封装，防止home页面数据耦合
export function getHomeMultiData() {
  return request2({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

