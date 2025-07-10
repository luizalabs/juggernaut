import { cn } from '@shared/utils/cn';

// Exemplo de componente Button seguindo boas práticas
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const buttonVariants = {
  primary:
    'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 shadow-sm',
  secondary:
    'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500 shadow-sm',
  outline:
    'border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500 dark:hover:bg-blue-950',
  ghost:
    'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center',
        'rounded-md font-medium',
        'transition-colors duration-200',
        'focus:ring-2 focus:ring-offset-2 focus:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Variant styles
        buttonVariants[variant],
        // Size styles
        buttonSizes[size],
        // Custom className
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Exemplo de componente Card
interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlighted';
  interactive?: boolean;
}

export function Card({
  title,
  children,
  className,
  variant = 'default',
  interactive = false,
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles
        'rounded-lg shadow-md transition-all duration-200',
        // Background and borders
        'bg-white dark:bg-gray-800',
        'border border-gray-200 dark:border-gray-700',
        // Spacing
        'p-6',
        // Variants
        {
          'border-blue-200 ring-2 ring-blue-500 dark:border-blue-800':
            variant === 'highlighted',
          'cursor-pointer hover:shadow-lg': interactive,
        },
        className
      )}
    >
      {title && (
        <h3 className='mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100'>
          {title}
        </h3>
      )}
      <div className='text-gray-700 dark:text-gray-300'>{children}</div>
    </div>
  );
}

// Exemplo de Grid responsivo
interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 2 | 4 | 6 | 8;
  className?: string;
}

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
};

const gridGaps = {
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
};

export function Grid({ children, cols = 3, gap = 4, className }: GridProps) {
  return (
    <div className={cn('grid', gridCols[cols], gridGaps[gap], className)}>
      {children}
    </div>
  );
}

// Exemplo de uso dos componentes
export function TailWindExamples() {
  return (
    <div className='min-h-screen bg-gray-50 p-8 dark:bg-gray-900'>
      <div className='mx-auto max-w-6xl space-y-8'>
        <h1 className='font-work-sans text-3xl font-bold text-gray-900 dark:text-gray-100'>
          Componentes com Tailwind CSS
        </h1>
        <h3>Aqui alguns exemplos de uso do Tailwind</h3>

        {/* Seção de Botões */}
        <Card title='Variações de Botões'>
          <div className='flex flex-wrap gap-4'>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button size='sm'>Small</Button>
            <Button size='lg'>Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>

        {/* Grid de Cards */}
        <Grid cols={3} gap={6}>
          <Card title='Card Padrão'>
            <p>Este é um card padrão com estilos básicos.</p>
            <Button className='mt-4'>Ação Primária</Button>
          </Card>

          <Card title='Card Destacado' variant='highlighted'>
            <p>Este card está destacado com uma borda azul.</p>
            <Button variant='outline' className='mt-4'>
              Ação Secundária
            </Button>
          </Card>

          <Card title='Card Interativo' interactive>
            <p>Este card tem hover effects.</p>
            <Button variant='ghost' size='sm' className='mt-4'>
              Ação Discreta
            </Button>
          </Card>
        </Grid>

        {/* Grid responsivo demonstrativo */}
        <Card title='Grid Responsivo'>
          <p className='mb-4 text-gray-600 dark:text-gray-400'>
            Este grid se adapta automaticamente: 1 coluna em mobile, 2 em
            tablet, 3 em desktop
          </p>
          <Grid cols={3} gap={4}>
            <div className='rounded bg-blue-100 p-4 text-center dark:bg-blue-900'>
              Item 1
            </div>
            <div className='rounded bg-green-100 p-4 text-center dark:bg-green-900'>
              Item 2
            </div>
            <div className='rounded bg-purple-100 p-4 text-center dark:bg-purple-900'>
              Item 3
            </div>
            <div className='rounded bg-yellow-100 p-4 text-center dark:bg-yellow-900'>
              Item 4
            </div>
            <div className='rounded bg-red-100 p-4 text-center dark:bg-red-900'>
              Item 5
            </div>
            <div className='rounded bg-indigo-100 p-4 text-center dark:bg-indigo-900'>
              Item 6
            </div>
          </Grid>
        </Card>

        {/* Demonstração de tipografia */}
        <Card title='Tipografia'>
          <div className='space-y-2'>
            <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>
              Heading 1
            </h1>
            <h2 className='text-3xl font-semibold text-gray-800 dark:text-gray-200'>
              Heading 2
            </h2>
            <h3 className='text-2xl font-medium text-gray-700 dark:text-gray-300'>
              Heading 3
            </h3>
            <p className='text-base text-gray-600 dark:text-gray-400'>
              Este é um parágrafo com texto normal. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-500'>
              Este é um texto menor para legendas ou notas.
            </p>
          </div>
        </Card>

        {/* Demonstração de cores */}
        <Card title='Paleta de Cores'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            <div className='space-y-2'>
              <div className='h-16 rounded bg-blue-500'></div>
              <p className='text-center text-sm'>Primary</p>
            </div>
            <div className='space-y-2'>
              <div className='h-16 rounded bg-gray-500'></div>
              <p className='text-center text-sm'>Secondary</p>
            </div>
            <div className='space-y-2'>
              <div className='h-16 rounded bg-green-500'></div>
              <p className='text-center text-sm'>Success</p>
            </div>
            <div className='space-y-2'>
              <div className='h-16 rounded bg-red-500'></div>
              <p className='text-center text-sm'>Error</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
