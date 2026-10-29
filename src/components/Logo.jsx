export default function Logo({ className = '', inverted = false }) {
  return (
    <img
      src={inverted ? '/logo-melhoraai-dark.png' : '/logo-melhoraai.png'}
      alt="MelhoraAi"
      className={`h-11 w-auto max-w-[min(200px,50vw)] object-contain object-left sm:h-[3.25rem] sm:max-w-[240px] ${className}`}
    />
  )
}
