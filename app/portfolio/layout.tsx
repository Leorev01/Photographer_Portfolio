import PortfolioNavbar from "@/components/PortfolioNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-black">
        <PortfolioNavbar />
        {children}
      </div>
  );
}
