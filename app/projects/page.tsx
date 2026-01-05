import { Suspense } from "react";
import WorkClient from "./WorkClient";

const Page = () => {
  return (
    <Suspense fallback={<div />}>
      <WorkClient />
    </Suspense>
  );
};

export default Page;