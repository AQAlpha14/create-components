import MasonryGrid from "@/components/MasonryGrid";
import HeroSection from "@/section/HeroSection";

export default function Home() {

  return (
    <>
      <HeroSection />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Our Work Speaks For Itself</h1>
        <MasonryGrid />
      </main>
      <div>Home Page</div>

    </>
  );
}
