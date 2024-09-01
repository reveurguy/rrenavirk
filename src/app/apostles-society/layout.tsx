interface ApostlesSocietyLayoutProps {
  children: React.ReactNode;
}

export default function ApostlesSocietyLayout({
  children,
}: ApostlesSocietyLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
