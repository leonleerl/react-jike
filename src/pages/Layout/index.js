// 测试token是否成功注入

import { request } from "@/utils";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    request.get("/user/profile");
  }, []);
  return (
    <>
      <div>This is Layout</div>
    </>
  );
};

export default Layout;
