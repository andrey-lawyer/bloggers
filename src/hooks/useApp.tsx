import { Router } from "next/router";
import NProgress from "nprogress";
import { useEffect, useState } from "react";

export function useApp() {
  const [loading, setLoading] = useState(false);
  NProgress.configure({ showSpinner: false });
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setLoading(true);
      NProgress.start();
    });
    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
      NProgress.done(false);
    });
    Router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, [Router]);
  return { loading };
}
