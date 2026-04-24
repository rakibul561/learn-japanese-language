import "./globals.css";

export const metadata = {
  title: "জাপানিজ ভাষা শিখুন (Japanese-Bangla)",
  description: "সবচেয়ে সহজ উপায়ে জাপানিজ ভোকাবুলারি আয়ত্ত করুন",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
