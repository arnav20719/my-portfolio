// app/components/ui/Section.tsx
import { cn } from '@/app/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export function Section({ children, title, subtitle, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 px-4 max-w-6xl mx-auto', className)}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-4 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      {children}
    </section>
  );
} 
