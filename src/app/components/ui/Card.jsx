export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`glass rounded-2xl shadow-xl shadow-black/5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
