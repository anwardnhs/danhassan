import { Lottie } from 'lottie-react';
interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  onComplete?: () => void;
}
export default function LottieAnimation({ animationData, loop = true, autoplay = true, className = '', onComplete }: LottieAnimationProps) {
  return <Lottie className={className} src={animationData} loop={loop} autoplay={autoplay} subscriptions={onComplete ? { complete: onComplete } : undefined} />;
}
