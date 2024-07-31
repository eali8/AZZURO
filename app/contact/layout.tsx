export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="md:container">{children}</section>;
}
