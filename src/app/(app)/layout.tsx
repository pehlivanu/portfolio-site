import IDELayout from "@/components/layout/IDELayout";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <IDELayout>{children}</IDELayout>
  );
}
