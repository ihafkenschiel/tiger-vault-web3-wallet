import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@walletconnect/react-native-compat";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from "@web3modal/wagmi-react-native";
import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "eb8227497ee1c71f4b99dcf36597ced3";

// 2. Create config
const metadata = {
  name: "Web3WalletExample",
  description: "Web3WalletExample using WalletConnect",
  url: "https://tigerbytestudio.com",
  icons: ["https://www.tigerbytestudio.com/images/logo.svg"],
  redirect: {
    native: "tiger-vault://",
    universal: "https://tigerbytestudio.com",
  },
};

const chains = [mainnet, polygon, arbitrum] as const;

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  wagmiConfig,
  defaultChain: mainnet, // Optional
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  customWallets: [
    {
      id: "mockWallet",
      name: "Mock Test Wallet",
      homepage: "https://example.com",
      image_url: "https://example.com/mock-wallet-icon.png",
      mobile_link: "mock-wallet://",
      webapp_link: "https://example.com/mock-wallet-web",
    },
  ],
  featuredWalletIds: [
    "mockWallet", // ID of our custom mock wallet
    // Add other wallet IDs as needed
  ],
  includeWalletIds: [
    "mockWallet", // ID of our custom mock wallet
    // Add other test wallet IDs as needed
  ],
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Web3Modal />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
