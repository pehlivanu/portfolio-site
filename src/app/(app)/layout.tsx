import { IDELayout } from '@/components/ide';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <IDELayout>{children}</IDELayout>;
}
