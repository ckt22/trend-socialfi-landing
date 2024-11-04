/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useWeb3Auth } from "@web3auth/modal-react-hooks";

export default function Header() {
  const { userInfo, connect, logout, isConnected } = useWeb3Auth();

  return (
    <div className="bg-white">
      {/* HEADER */}
      <div className="px-3 py-4 flex items-center justify-between">
        <div className="pl-5">
          <Image src="/brt-logo.jpeg" height={35} width={120} alt="logo" />
        </div>

        {/* NAVIGATIONS */}
        <div className="flex items-center space-between gap-x-5">
          <Link href="/">Questions</Link>
          <Link href="/">Results</Link>
          <Link href="/">Leaderboard</Link>
        </div>

        {/* USER DATA AND PROFILE */}
        <div className="pr-5 flex items-center gap-x-2">
          {isConnected ? (
            <>
              <button
                onClick={() => {
                  logout();
                }}
                className="text-white bg-blue-400 rounded px-3 py-1"
              >
                Hello {userInfo?.name} Logout
              </button>

              <a
                href="/profile"
                className="text-white bg-blue-400 rounded px-3 py-1"
              >
                Profile
              </a>
            </>
          ) : (
            <>
              <button
                onClick={connect}
                className="text-white bg-blue-400 rounded px-3 py-1"
              >
                Web3
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
