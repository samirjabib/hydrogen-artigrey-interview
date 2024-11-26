import { Menu } from 'lucide-react';
import { useMobileMenuStore } from './mobileMenuStore';
import { Button } from '~/components/ui/Button';

export function MobileMenuToggle() {
  const toggle = useMobileMenuStore((state) => state.toggle);

  return (
    <Button
      variant="ghost"
      className="md:hidden"
      onClick={toggle}
      aria-label="Toggle mobile menu"
    >
      <Menu className="h-4 w-4" />
    </Button>
  );
}
