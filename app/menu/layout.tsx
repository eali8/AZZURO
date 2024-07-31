export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="container">{children}</main>;
}
