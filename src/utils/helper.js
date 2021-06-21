import NProgress from "nprogress";
import "nprogress/nprogress.css";

const progressFns = () => {
  let progressTimeout = null;
  let count = 0;

  const start = () => {
    count++;
    progressTimeout = setTimeout(() => {
      NProgress.start();
    }, 200);
  };

  const stop = () => {
    count = Math.max(0, count - 1);
    if (count > 0) return;

    NProgress.done();
    clearTimeout(progressTimeout);
  };

  return { start, stop };
};

export default progressFns;

// export default {};
