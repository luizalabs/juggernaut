import { TailWindExamples } from '@shared/components/examples/TailwindExamples';

export default function Home() {
  return (
    <div
      data-testid='home-root'
      style={{ fontFamily: 'var(--font-pixelify-sans), monospace' }}
    >
      <TailWindExamples />
    </div>
  );
}
