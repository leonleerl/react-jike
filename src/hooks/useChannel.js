import { getChannelAPI } from "@/apis/article";
import { useEffect, useState } from "react";

// 封装获取频道列表的逻辑
function useChannel() {
  // 1. 获取频道列表所有的逻辑
  // 获取频道列表
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    // 封装函数，在函数体内调用接口
    const getChannelList = async () => {
      const res = await getChannelAPI();
      setChannelList(res.data.channels);
    };
    getChannelList();
  }, []);
  // 2. 把组件中要用到的数据return出去
  return { channelList };
}

export { useChannel };
