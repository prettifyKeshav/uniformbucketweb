// app/uniform-bucket-admin/layout.tsx
'use client';
import "../../(admin)/global.css";
import { usePathname } from 'next/navigation';
import Header from "../../../backendcomponents/Header";
import SideNav from "../../../backendcomponents/SideNav";
import NextTopLoader from "nextjs-toploader";
import '../../../public/admin-assets/fonts/font.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = ['/uniform-bucket-admin/login']; // Correct list of paths to hide layout
  const shouldHideLayout = hideLayout.includes(pathname);

  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#243b56" showSpinner={false} />
        {!shouldHideLayout && (
          <>
            <Header />
            <SideNav />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
