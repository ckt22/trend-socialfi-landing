"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefeaultLayout from "./DefaultLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DefeaultLayout>{children}</DefeaultLayout>
    </QueryClientProvider>
  );
}
