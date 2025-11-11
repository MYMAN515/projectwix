type SparklesIconProps = React.SVGProps<SVGSVGElement>;

export function SparklesIcon(props: SparklesIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3.5L13.78 8.22L18.5 10L13.78 11.78L12 16.5L10.22 11.78L5.5 10L10.22 8.22L12 3.5Z"
        className="fill-current"
      />
      <path
        d="M4 14.5L4.76 16.74L7 17.5L4.76 18.26L4 20.5L3.24 18.26L1 17.5L3.24 16.74L4 14.5Z"
        className="fill-current opacity-60"
      />
      <path
        d="M20 6.5L20.52 8.02L22 8.5L20.52 8.98L20 10.5L19.48 8.98L18 8.5L19.48 8.02L20 6.5Z"
        className="fill-current opacity-40"
      />
    </svg>
  );
}
