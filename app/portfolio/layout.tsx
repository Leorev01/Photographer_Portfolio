import PortfolioNavbar from "@/components/PortfolioNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <PortfolioNavbar />
        {children}
      </>
  );
}
