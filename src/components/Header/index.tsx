"use client";

import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

// import {
//   CHAIN_NAMESPACES,
//   IAdapter,
//   IProvider,
//   WEB3AUTH_NETWORK,
// } from "@web3auth/base";
// import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
// import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
// import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";

// const privateKeyProvider = new EthereumPrivateKeyProvider({
//   config: { chainConfig },
// });

// const web3AuthOptions: Web3AuthOptions = {
//   clientId,
//   web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
//   privateKeyProvider,
// };
// const web3auth = new Web3Auth(web3AuthOptions);

export default function Header() {
  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const adapters = await getDefaultExternalAdapters({
  //         options: web3AuthOptions,
  //       });
  //       adapters.forEach((adapter: IAdapter<unknown>) => {
  //         web3auth.configureAdapter(adapter);
  //       });
  //       await web3auth.initModal();
  //       setProvider(web3auth.provider);

  //       if (web3auth.connected) {
  //         setLoggedIn(true);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   init();
  // }, []);

  return (
    <div className="bg-white">
      {/* HEADER */}
      <div className="px-3 py-4 flex items-center justify-between">
        <div className="pl-5">
          <Image src="/brt-logo.jpeg" height={35} width={120} alt="logo" />
        </div>

        <div className="flex items-center space-between gap-x-5">
          <Link href="/">Questions</Link>
          <Link href="/">Questions</Link>
          <Link href="/">Leaderboard</Link>
        </div>
        <div className="pr-5 flex items-center gap-x-2">
          <button className="text-white bg-blue-400 rounded px-3 py-1">
            Web3
          </button>
          <button>Profile</button>
        </div>
      </div>
    </div>
  );
}
