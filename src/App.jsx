import { SolanaAdapter } from "@walletconnect/solana-adapter";

function App() {
  const adapter = new SolanaAdapter({ network: "mainnet" });

  const connectWallet = async () => {
    try {
      const session = await adapter.connect();
      console.log("Wallet connected:", session);
      alert("Wallet connected!");
    } catch (err) {
      console.error("Failed to connect:", err);
      alert("Connection failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={connectWallet}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
      >
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
