import { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import { playLottie } from '../lib/animations';

interface LottieAnimationProps {
  animationData: any; // JSON data for Lottie animation
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  onComplete?: () => void;
}

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
  onComplete,
}: LottieAnimationProps) {
  const lottieRef = useRef<unknown>(null);

  useEffect(() => {
    if (autoplay) {
      playLottie(lottieRef as React.RefObject<any>, loop);
    }
  }, [autoplay, loop]);

  return (
    <div className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        onComplete={onComplete}
      />
    </div>
  );
}
