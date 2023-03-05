import type { NextPage } from "next";
import SiteHeader from "./siteHeader";
import SiteFooter from "./siteFooter";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <SiteHeader />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 pb-2 text-center gap-4">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
