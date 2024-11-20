import {X} from 'lucide-react';
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {cn} from '~/utils/cn';

type AsideType =
  | 'search'
  | 'cart'
  | 'mobile'
  | 'closed'
  | 'menu-mobile'
  | 'pdp';
type AsideSide = 'left' | 'right'; // Nuevo tipo para determinar el lado
type AsideContextValue = {
  type: AsideType;
  open: (mode: AsideType) => void;
  close: () => void;
};

/**
 * A side bar component with Overlay
 * @example
 * ```jsx
 * <Aside type="search" heading="SEARCH" side="right">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 */
export function Aside({
  children,
  heading,
  className,
  type,
  side = 'right',
}: {
  children?: React.ReactNode;
  type: AsideType;
  heading?: React.ReactNode;
  side?: AsideSide;
  className?: string;
}) {
  const {type: activeType, close} = useAside();
  const expanded = type === activeType;

  useEffect(() => {
    const abortController = new AbortController();

    if (expanded) {
      document.addEventListener(
        'keydown',
        function handler(event: KeyboardEvent) {
          if (event.key === 'Escape') {
            close();
          }
        },
        {signal: abortController.signal},
      );
    }
    return () => abortController.abort();
  }, [close, expanded]);

  return (
    <div
      aria-modal
      className={`fixed inset-0 z-40 transition-opacity ${
        expanded
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
    >
      <button
        className="fixed inset-0 bg-black opacity-50 transition-opacity"
        onClick={close}
        aria-label="Close overlay"
      />
      <aside
        className={cn(
          `fixed top-0 h-full w-80 max-w-full bg-white shadow-lg transition-transform transform`,
          {
            'right-0 translate-x-0': expanded && side === 'right',
            'right-0 translate-x-full': !expanded && side === 'right',
            'left-0 -translate-x-0': expanded && side === 'left',
            'left-0 -translate-x-full': !expanded && side === 'left',
          },
          className,
        )}
      >
        <header
          className={cn(
            'flex items-center p-4',
            heading
              ? 'justify-between border-b border-gray-200'
              : 'justify-end',
          )}
        >
          {heading && <h3 className="text-lg font-semibold">{heading}</h3>}
          <button onClick={close} aria-label="Close panel">
            <X size={15} color="black" />
          </button>
        </header>
        <main className="p-4">{children}</main>
      </aside>
    </div>
  );
}

const AsideContext = createContext<AsideContextValue | null>(null);

Aside.Provider = function AsideProvider({children}: {children: ReactNode}) {
  const [type, setType] = useState<AsideType>('closed');

  return (
    <AsideContext.Provider
      value={{
        type,
        open: setType,
        close: () => setType('closed'),
      }}
    >
      {children}
    </AsideContext.Provider>
  );
};

export function useAside() {
  const aside = useContext(AsideContext);
  if (!aside) {
    throw new Error('useAside must be used within an AsideProvider');
  }
  return aside;
}
