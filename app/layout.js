import { Toaster } from "react-hot-toast";
import favicon from "@/public/favicon.ico";
import Head from 'next/head';
import "./styles/style.scss";
import "./styles/fontmanager.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: "Withdrawal Receipt - Easy way to generate withdrawal receipt",
  description: "Easy way to generate withdrawal receipt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Head>
      <body suppressHydrationWarning={true}>
        <div className="app-master-wrapper">
          <Toaster position="top-center" />
          {children}
        </div>
      </body>
    </html>
  );
}
