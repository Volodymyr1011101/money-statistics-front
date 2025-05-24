import { RingLoader } from "react-spinners";

import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loader}>
      <RingLoader color="#0B6016" />
    </div>
  );
};
