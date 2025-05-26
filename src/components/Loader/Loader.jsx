import { FadeLoader } from "react-spinners";

import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loader}>
      <FadeLoader color="#4FC3F7" />
    </div>
  );
};
