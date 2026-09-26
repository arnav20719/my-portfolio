// app/components/ui/Badge.tsx
import { cn } from '@/app/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'gray';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    gray: 'bg-gray-200 text-gray-700'
  };
  
  return (
    <span className={cn(
      'inline-block px-3 py-1 text-sm font-medium rounded-full',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
} 
