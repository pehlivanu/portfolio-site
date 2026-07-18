import IDELayout from '@/components/layout/IDELayout';

async function getGitHubProfile() {
  try {
    const res = await fetch('https://api.github.com/users/pehlivanu', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gitHubProfile = await getGitHubProfile();

  return <IDELayout initialGitHubProfile={gitHubProfile}>{children}</IDELayout>;
}
