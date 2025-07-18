import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Writo.io</h1>
      <p className="mt-4 text-lg">Your go-to platform for writing and sharing content.</p>
      <Image
        src="/images/logo.png"
        alt="Writo.io Logo"
        width={150}
        height={150}
        className="mt-8 rounded-full"
      />
    </main>
  );
}
