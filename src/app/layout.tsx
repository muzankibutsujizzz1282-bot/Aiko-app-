export const metadata = {
  title: "Aiko Virtual Human",
  description: "AI Virtual Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#0a0a0a", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
