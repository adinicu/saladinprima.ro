import "./globals.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

export const metadata = {
  title: "SalaDinPrima.ro",
  description: "SEO description",
  keywords: "SEO keywords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-gray-200">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
