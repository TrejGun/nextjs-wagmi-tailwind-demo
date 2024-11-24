export async function GET() {
  return Response.json({
    data: [
      {
        address: "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73",
        name: "Account 1",
      },
      {
        address: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
        name: "Account 2",
      },
      {
        address: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
        name: "Account 3",
      },
    ],
  });
}
