import "@/public/css/bootstrap.min.css";
import "@/public/css/style.css";
// import "@/public/assets/css/style.css";
// import "@/public/assets/css/responsive.css";
import Navbar from "./component/navbar";
import Providers from "@/redux/providers";
import Footer from "./component/footer";


export const metadata = {
  title: "Phuong Coffee",
  description: "Web bán đồ uống",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>

        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

        <script src="https://kit.fontawesome.com/1c72e4dfe2.js" crossOrigin="anonymous"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>

      </body>
    </html>
  );
}
