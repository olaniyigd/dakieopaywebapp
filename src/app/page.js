import SlidingContent from "@/components/Banner";
import ServiceProvider from "@/components/Provider";
import ServiceComponent from "@/components/Service";
import ImageTextComponent from "@/components/Step";

export default function Home() {
  return (
    <main>
     <SlidingContent />
     <ServiceProvider />
     <ServiceComponent />
     <ImageTextComponent />
    </main>
  );
}
