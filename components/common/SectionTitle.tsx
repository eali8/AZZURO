"use client"
import { AttentionSeeker, Zoom } from "react-awesome-reveal";

export default function SectionTitle({
  title,
  subtitle,
  className,
}: {
  title: String;
  subtitle?: String;
  className?: String;
}) {
  return (
    <Zoom triggerOnce={true}>
      <div className={`flex flex-col items-center my-16 ${className ?? ""}`}>
        <h2 className="font-italiana text-2xl lg:text-3xl text-center sm:w-1/2 lg:w-1/3 mb-5" dangerouslySetInnerHTML={{ __html: title }}>
        </h2>
        {subtitle && <p className="text-lg">{subtitle}</p>}
      </div>
    </Zoom>
  );
}
