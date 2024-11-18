import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReduxProvider from "@/redux/StoreProivder";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./css/bootstrap.min.css";
// import "./css/font-awesome.min.css";
// import "./css/swiper-bundle.min.css";
import "./css/animate.min.css";
import "./css/validnavs.css";
import "./css/helper.css";
import "./css/unit-test.css";
import "./css/style.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Vivek Kumar | Portfoilio",
  description: "Vivek Kumar Portfoilio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Vivek Kumar Portfolio",
      "description": "Explore the portfolio of Vivek Kumar, an experienced MERN Stack Developer and mentor with expertise in web development, coding tutorials, and scalable app creation. Discover projects, skills, and accomplishments that highlight a commitment to crafting user-friendly, responsive, and modern digital solutions."
    }
  `,
  }}
></script>

        
      </Head>
      <body>
        <main>
          <ReduxProvider>
            <Toaster />
            <Header />

            {children}
            {/* <Footer /> */}
          </ReduxProvider>
        </main>
      </body>
    </html>
  );
}
