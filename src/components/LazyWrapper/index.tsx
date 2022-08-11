import { FC, lazy, Suspense } from "react";
import Loading from "../Loading";
interface LazyWrapperProps {
  /** 组件路径： 在 src/views 目录下的页面路径，eg: /home => src/views/home/index.tsx */
  path: string;
}
/**
 * 懒加载组件包装器
 */
const LazyWrapper: FC<LazyWrapperProps> = ({ path }) => {
  const LazyComponent = lazy(() => import(`/src/views${path}`));

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};
export default LazyWrapper;
