export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="md:container">{children}</section>;
}
