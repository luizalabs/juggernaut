import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button, Card, Grid, TailWindExamples } from '../TailwindExamples';

// Mock the cn utility
jest.mock('@shared/utils/cn', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with primary variant', () => {
    render(<Button variant='primary'>Primary Button</Button>);
    const button = screen.getByRole('button', { name: 'Primary Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with secondary variant', () => {
    render(<Button variant='secondary'>Secondary Button</Button>);
    const button = screen.getByRole('button', { name: 'Secondary Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with outline variant', () => {
    render(<Button variant='outline'>Outline Button</Button>);
    const button = screen.getByRole('button', { name: 'Outline Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with ghost variant', () => {
    render(<Button variant='ghost'>Ghost Button</Button>);
    const button = screen.getByRole('button', { name: 'Ghost Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with small size', () => {
    render(<Button size='sm'>Small Button</Button>);
    const button = screen.getByRole('button', { name: 'Small Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with medium size (default)', () => {
    render(<Button size='md'>Medium Button</Button>);
    const button = screen.getByRole('button', { name: 'Medium Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with large size', () => {
    render(<Button size='lg'>Large Button</Button>);
    const button = screen.getByRole('button', { name: 'Large Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Button className='custom-class'>Custom Button</Button>);
    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders disabled button', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: 'Disabled Button' });
    expect(button).toBeDisabled();
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByRole('button', { name: 'Clickable Button' });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with all props combined', () => {
    const handleClick = jest.fn();
    render(
      <Button
        variant='outline'
        size='lg'
        className='test-class'
        disabled={false}
        onClick={handleClick}
      >
        Complex Button
      </Button>
    );
    const button = screen.getByRole('button', { name: 'Complex Button' });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });
});

describe('Card Component', () => {
  it('renders with children only', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(
      <Card title='Test Title'>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    render(
      <Card variant='default'>
        <p>Default card</p>
      </Card>
    );
    expect(screen.getByText('Default card')).toBeInTheDocument();
  });

  it('renders with highlighted variant', () => {
    render(
      <Card variant='highlighted'>
        <p>Highlighted card</p>
      </Card>
    );
    expect(screen.getByText('Highlighted card')).toBeInTheDocument();
  });

  it('renders with interactive prop', () => {
    render(
      <Card interactive>
        <p>Interactive card</p>
      </Card>
    );
    expect(screen.getByText('Interactive card')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(
      <Card className='custom-card'>
        <p>Custom card</p>
      </Card>
    );
    expect(screen.getByText('Custom card')).toBeInTheDocument();
  });

  it('renders with all props combined', () => {
    render(
      <Card
        title='Full Card'
        variant='highlighted'
        interactive={true}
        className='full-card'
      >
        <p>Full featured card</p>
      </Card>
    );
    expect(screen.getByText('Full Card')).toBeInTheDocument();
    expect(screen.getByText('Full featured card')).toBeInTheDocument();
  });
});

describe('Grid Component', () => {
  it('renders with default props', () => {
    render(
      <Grid>
        <div>Grid item 1</div>
        <div>Grid item 2</div>
      </Grid>
    );
    expect(screen.getByText('Grid item 1')).toBeInTheDocument();
    expect(screen.getByText('Grid item 2')).toBeInTheDocument();
  });

  it('renders with 1 column', () => {
    render(
      <Grid cols={1}>
        <div>Single column item</div>
      </Grid>
    );
    expect(screen.getByText('Single column item')).toBeInTheDocument();
  });

  it('renders with 2 columns', () => {
    render(
      <Grid cols={2}>
        <div>Two column item</div>
      </Grid>
    );
    expect(screen.getByText('Two column item')).toBeInTheDocument();
  });

  it('renders with 3 columns (default)', () => {
    render(
      <Grid cols={3}>
        <div>Three column item</div>
      </Grid>
    );
    expect(screen.getByText('Three column item')).toBeInTheDocument();
  });

  it('renders with 4 columns', () => {
    render(
      <Grid cols={4}>
        <div>Four column item</div>
      </Grid>
    );
    expect(screen.getByText('Four column item')).toBeInTheDocument();
  });

  it('renders with 6 columns', () => {
    render(
      <Grid cols={6}>
        <div>Six column item</div>
      </Grid>
    );
    expect(screen.getByText('Six column item')).toBeInTheDocument();
  });

  it('renders with gap 2', () => {
    render(
      <Grid gap={2}>
        <div>Gap 2 item</div>
      </Grid>
    );
    expect(screen.getByText('Gap 2 item')).toBeInTheDocument();
  });

  it('renders with gap 4 (default)', () => {
    render(
      <Grid gap={4}>
        <div>Gap 4 item</div>
      </Grid>
    );
    expect(screen.getByText('Gap 4 item')).toBeInTheDocument();
  });

  it('renders with gap 6', () => {
    render(
      <Grid gap={6}>
        <div>Gap 6 item</div>
      </Grid>
    );
    expect(screen.getByText('Gap 6 item')).toBeInTheDocument();
  });

  it('renders with gap 8', () => {
    render(
      <Grid gap={8}>
        <div>Gap 8 item</div>
      </Grid>
    );
    expect(screen.getByText('Gap 8 item')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(
      <Grid className='custom-grid'>
        <div>Custom grid item</div>
      </Grid>
    );
    expect(screen.getByText('Custom grid item')).toBeInTheDocument();
  });

  it('renders with all props combined', () => {
    render(
      <Grid cols={4} gap={6} className='full-grid'>
        <div>Full grid item</div>
      </Grid>
    );
    expect(screen.getByText('Full grid item')).toBeInTheDocument();
  });
});

describe('TailWindExamples Component', () => {
  it('renders the main component', () => {
    render(<TailWindExamples />);
    expect(
      screen.getByText('Componentes com Tailwind CSS')
    ).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<TailWindExamples />);
    expect(
      screen.getByText('Aqui alguns exemplos de uso do Tailwind')
    ).toBeInTheDocument();
  });

  it('renders button variations section', () => {
    render(<TailWindExamples />);
    expect(screen.getByText('Variações de Botões')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Secondary' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Outline' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ghost' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Small' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Large' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Disabled' })
    ).toBeInTheDocument();
  });

  it('renders card grid section', () => {
    render(<TailWindExamples />);
    expect(screen.getByText('Card Padrão')).toBeInTheDocument();
    expect(
      screen.getByText('Este é um card padrão com estilos básicos.')
    ).toBeInTheDocument();
    expect(screen.getByText('Card Destacado')).toBeInTheDocument();
    expect(
      screen.getByText('Este card está destacado com uma borda azul.')
    ).toBeInTheDocument();
    expect(screen.getByText('Card Interativo')).toBeInTheDocument();
    expect(
      screen.getByText('Este card tem hover effects.')
    ).toBeInTheDocument();
  });

  it('renders responsive grid section', () => {
    render(<TailWindExamples />);
    expect(screen.getByText('Grid Responsivo')).toBeInTheDocument();
    expect(
      screen.getByText(/Este grid se adapta automaticamente/)
    ).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.getByText('Item 4')).toBeInTheDocument();
    expect(screen.getByText('Item 5')).toBeInTheDocument();
    expect(screen.getByText('Item 6')).toBeInTheDocument();
  });

  it('renders typography section', () => {
    render(<TailWindExamples />);
    expect(screen.getByText('Tipografia')).toBeInTheDocument();
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Heading 2')).toBeInTheDocument();
    expect(screen.getByText('Heading 3')).toBeInTheDocument();
    expect(
      screen.getByText(/Este é um parágrafo com texto normal/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Este é um texto menor para legendas/)
    ).toBeInTheDocument();
  });

  it('renders color palette section', () => {
    render(<TailWindExamples />);
    expect(screen.getByText('Paleta de Cores')).toBeInTheDocument();
    // Use getAllByText to handle duplicate texts that appear in both buttons and color palette
    const primaryTexts = screen.getAllByText('Primary');
    expect(primaryTexts.length).toBeGreaterThan(0);
    const secondaryTexts = screen.getAllByText('Secondary');
    expect(secondaryTexts.length).toBeGreaterThan(0);
    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('renders action buttons in cards', () => {
    render(<TailWindExamples />);
    expect(
      screen.getByRole('button', { name: 'Ação Primária' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Ação Secundária' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Ação Discreta' })
    ).toBeInTheDocument();
  });

  it('checks disabled button is disabled', () => {
    render(<TailWindExamples />);
    const disabledButton = screen.getByRole('button', { name: 'Disabled' });
    expect(disabledButton).toBeDisabled();
  });

  it('handles button clicks in examples', () => {
    render(<TailWindExamples />);
    const primaryButton = screen.getByRole('button', { name: 'Primary' });
    fireEvent.click(primaryButton);
    // Button doesn't have onClick handler in the example, so just verify it's clickable
    expect(primaryButton).toBeInTheDocument();
  });
});

// Test coverage for buttonVariants object
describe('Button Variants and Sizes Coverage', () => {
  it('covers all button variants', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost'] as const;
    variants.forEach(variant => {
      render(<Button variant={variant}>Test {variant}</Button>);
      expect(
        screen.getByRole('button', { name: `Test ${variant}` })
      ).toBeInTheDocument();
    });
  });

  it('covers all button sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    sizes.forEach(size => {
      render(<Button size={size}>Test {size}</Button>);
      expect(
        screen.getByRole('button', { name: `Test ${size}` })
      ).toBeInTheDocument();
    });
  });
});

// Test coverage for gridCols and gridGaps objects
describe('Grid Configuration Coverage', () => {
  it('covers all grid column configurations', () => {
    const colOptions = [1, 2, 3, 4, 6] as const;
    colOptions.forEach(cols => {
      render(
        <Grid cols={cols}>
          <div>Test {cols} cols</div>
        </Grid>
      );
      expect(screen.getByText(`Test ${cols} cols`)).toBeInTheDocument();
    });
  });

  it('covers all grid gap configurations', () => {
    const gapOptions = [2, 4, 6, 8] as const;
    gapOptions.forEach(gap => {
      render(
        <Grid gap={gap}>
          <div>Test gap {gap}</div>
        </Grid>
      );
      expect(screen.getByText(`Test gap ${gap}`)).toBeInTheDocument();
    });
  });
});
