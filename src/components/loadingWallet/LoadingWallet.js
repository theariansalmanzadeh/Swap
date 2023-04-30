import React from "react";
import { createPortal } from "react-dom";
import LoadingModal from "./LoadingModal.js";

function LoadingWallet() {
  const walletLoaderElem = document.getElementById("loadingWallet");
  return createPortal(<LoadingModal />, walletLoaderElem);
}

export default LoadingWallet;
