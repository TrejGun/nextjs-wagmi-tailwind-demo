"use client";

import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { zeroAddress } from "viem";
import { useWriteContract } from "wagmi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAddresses } from "../utils";
import { Loader } from "./Loader";
import contract from "../contracts/ERC20Ownable.json";

export const TransferSchema = z.object({
  address: z.string(),
  amount: z.number(),
});

export const TestComponent = () => {
  const { handleSubmit, control } = useForm<typeof TransferSchema._type>({
    resolver: zodResolver(TransferSchema),
    mode: "onChange",
    defaultValues: {
      address: zeroAddress,
      amount: 0,
    },
  });

  const { data, isPending } = useQuery({
    queryKey: ["addresses"],
    queryFn: getAddresses,
  });

  const { writeContract } = useWriteContract();

  async function onSubmit(data: typeof TransferSchema._type) {
    writeContract({
      abi: contract.abi,
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7", // usdt
      functionName: "transfer",
      args: [data.address, data.amount],
    });
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="address"
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <select value={value} name={name} onChange={onChange} className="border border-slate-300">
            {data?.map(item => (
              <option key={item.address} value={item.address}>
                {item.name}
              </option>
            ))}
          </select>
        )}
      />
      <Controller
        control={control}
        name="amount"
        render={({ field: { onChange, value, name } }) => (
          <input type="number" value={value} name={name} onChange={onChange} className="border border-slate-300" />
        )}
      />

      <button type="submit" disabled={isPending} className="border border-slate-300">
        Submit
      </button>
    </form>
  );
};
