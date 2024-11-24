"use client";
import "@rainbow-me/rainbowkit/styles.css";

import { PropsWithChildren } from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";

import ReactQueryClientProvider from "@/app/components/ReactQueryClientProvider";
import { config } from "@/app/wagmi.config";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <ReactQueryClientProvider>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </ReactQueryClientProvider>
    </WagmiProvider>
  );
}
