// 封装和文章相关的接口函数
import { request } from "@/utils";

// 获取频道列表请求
export function getChannelAPI() {
  return request({
    url: "/channels",
    method: "GET",
  });
}

// 提交文章表单
export function createArticleAPI(data) {
  return request({
    url: "mp/articles?draft=false",
    method: "POST",
    data,
  });
}

//获取文章列表
export function getArticleListAPI(params) {
  return request({
    url: "/mp/articles",
    method: "GET",
    params,
  });
}
