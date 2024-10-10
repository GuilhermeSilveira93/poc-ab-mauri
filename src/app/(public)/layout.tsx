export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-full flex-1 items-center justify-center bg-primary">
      {children}
    </div>
  )
}
