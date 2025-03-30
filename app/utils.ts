export interface IAddressResponse {
  data: Array<IAddressItem>;
}

export interface IAddressItem {
  address: string;
  name: string;
}

export async function getAddresses() {
  const response = await fetch(`${process.env.URL}/api/address`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { data }: IAddressResponse = await response.json();

  return data;
}
