import AnimatedNumberCountdown from "@/components/ui/animated-number-countdown";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-[url('/sqhack.png'))] bg-no-repeat bg-cover">
      <div className="absolute z-0 w-full h-full bg-gradient-to-b from-black via-black/50 to-black"></div>
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-20">
        <Image
        alt="LOGO"
        src={"/logo_sm.png"}
        width={800}
        height={800}
        className="h-52 object-cover"
        />
        <AnimatedNumberCountdown
          endDate={new Date("2025-08-23T04:30:00")}
          className="text-pink-700"
        />
      </div>
    </main>
  );
}
