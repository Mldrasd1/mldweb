export default function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`glass-card p-6 ${hover ? "hover-lift" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
