import { lazy, Suspense } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
const Table2 = lazy(() => import("../../components/table/Table2"));

type Props = {};

const Comapny = ({}: Props) => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="w-full h-[60vh] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <Table2 />
      </Suspense>
    </div>
  );
};

export default Comapny;
