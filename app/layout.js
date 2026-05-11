const siteUrl = "https://strapon.tech";

import "./globals.css";

export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "strapon.tech | wild dev work",
  description: "Daring developer portfolio with proofs, projects, and no corporate cosplay.",
  openGraph: {
    title: "strapon.tech | wild dev work",
    description: "Daring developer portfolio with proofs, projects, and no corporate cosplay.",
    url: siteUrl,
    siteName: "strapon.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "strapon.tech | wild dev work",
    description: "Daring developer portfolio with proofs, projects, and no corporate cosplay.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
