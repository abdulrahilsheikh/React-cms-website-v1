import { lazy, Suspense } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
const Table = lazy(() => import("../../components/table/Table"));

type Props = {};

const Sales = ({}: Props) => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="w-full h-[60vh] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <Table />
      </Suspense>
    </div>
  );
};

export default Sales;
