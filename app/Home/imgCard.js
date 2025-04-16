import confetti from "canvas-confetti";
import Image from "next/image";

const ImgCard = () => {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 85,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 1,
        angle: 120,
        spread: 80,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <button 
        onClick={handleClick} 
        className="w-full relative aspect-square"
        type="button"
        aria-label="Trigger confetti animation"
      >
        <Image 
          className="rounded-lg object-cover object-center transform hover:scale-105 transition-transform duration-300" 
          src="/img/profile/rams8bit.png" 
          alt="Ammar 8bits"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 700px"
          priority
        />
      </button>
    </div>
  );
};

export default ImgCard;
