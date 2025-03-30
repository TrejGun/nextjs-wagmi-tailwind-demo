"use client";
import "@rainbow-me/rainbowkit/styles.css";

import { PropsWithChildren } from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";

import ReactQueryClientProvider from "./ReactQueryClientProvider";
import { config } from "../wagmi.config";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <ReactQueryClientProvider>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </ReactQueryClientProvider>
    </WagmiProvider>
  );
}
