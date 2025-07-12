import Link from 'next/link';

// import { TailWindExamples } from '@shared/components/examples/TailwindExamples';
import pkg from '../../../package.json';

export default function Home() {
  return (
    <div
      data-testid='home-root'
      style={{ fontFamily: 'var(--font-pixelify-sans), monospace' }}
    >
      <div className='font-pixelify min-h-screen overflow-x-hidden bg-black text-green-400'>
        {/* Retro Terminal Background */}
        <div className='absolute inset-0 opacity-10'>
          <div className='h-full w-full bg-gradient-to-b from-green-900/20 to-black'></div>
          <div className='absolute inset-0 bg-black opacity-20'></div>
        </div>

        {/* Scanlines Effect */}
        <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:100%_4px]'></div>

        {/* Header Terminal Style */}
        <header className='relative z-10 border-b-2 border-green-400 bg-black/90 backdrop-blur-sm'>
          <div className='container mx-auto px-6 py-4'>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 animate-pulse rounded-full bg-green-400'></div>
              <span className='text-sm'>
                NOAHJS_TEMPLATE v{pkg.version} - READY
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className='relative z-10 container mx-auto px-6 py-12'>
          {/* Terminal Window */}
          <div className='mb-8 rounded-lg border-2 border-green-400 bg-black shadow-2xl shadow-green-400/20'>
            {/* Terminal Header */}
            <div className='rounded-t-md bg-green-400 px-4 py-2 text-black'>
              <div className='flex items-center gap-2'>
                <div className='flex gap-2'>
                  <div className='h-3 w-3 rounded-full bg-red-500'></div>
                  <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                  <div className='h-3 w-3 rounded-full bg-green-600'></div>
                </div>
                <span className='ml-4 text-sm font-bold'>
                  noah@terminal:~/noahjs-template$
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className='p-8'>
              {/* Banner Image */}
              <div className='mb-8 text-center'>
                <div className='inline-block rounded-lg border-2 border-green-400 bg-green-400/10 p-4'>
                  <img
                    src='/images/banner.png'
                    alt='Noah Template Banner'
                    width={400}
                    height={200}
                    className='mx-auto filter'
                  />
                </div>
              </div>

              {/* ASCII Art Title */}
              <div className='mb-8 text-center'>
                <h1 className='font-pixelify mb-2 text-5xl tracking-widest text-green-400 drop-shadow-[0_2px_0_rgba(0,255,0,0.7)] md:text-7xl'>
                  NOAH.JS TEMPLATE
                </h1>
              </div>

              {/* Description */}
              <div className='mb-8'>
                <div className='rounded-lg border border-green-400/30 bg-green-400/5 p-6'>
                  <h2 className='mb-4 text-xl text-green-300'>
                    $ cat README.md
                  </h2>
                  <p className='mb-4 leading-relaxed text-green-200'>
                    🚀 <strong>Your Next project starter</strong> - The ultimate
                    starter kit for building scalable applications.
                  </p>
                  <p className='mb-4 leading-relaxed text-green-200'>
                    Built with <strong>TypeScript</strong>,{' '}
                    <strong>Tailwind CSS</strong>, and{' '}
                    <strong>Feature-Based Architecture</strong>. Includes
                    testing setup, and production-ready configurations.
                  </p>
                  <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div>
                      <h3 className='mb-2 font-bold text-green-300'>
                        📦 Features
                      </h3>
                      <ul className='space-y-1 text-sm text-green-200'>
                        <li>✅ Next.js 22 + App Router</li>
                        <li>✅ TypeScript Configuration</li>
                        <li>✅ Tailwind CSS + Dark Mode</li>
                        <li>✅ ESLint + Prettier</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className='mb-2 font-bold text-green-300'>
                        🎯 Architecture
                      </h3>
                      <ul className='space-y-1 text-sm text-green-200'>
                        <li>✅ Feature-Based Structure</li>
                        <li>✅ Jest + Testing Library</li>
                        <li>✅ Docker Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className='mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <Link
                  href='https://github.com/luizalabs/noahjs'
                  target='_blank'
                  className='group rounded-lg border border-green-400 bg-green-400/10 p-4 transition-all duration-300 hover:bg-green-400/20 hover:shadow-lg hover:shadow-green-400/20'
                >
                  <div className='mb-2 text-lg text-green-300'>
                    📂 Repository
                  </div>
                  <div className='text-sm text-green-200'>View source code</div>
                  <div className='mt-2 text-xs text-green-400 group-hover:text-green-300'>
                    github.com/luizalabs/noahjs →
                  </div>
                </Link>

                <Link
                  href='https://github.com/luizalabs/noahjs/blob/master/README.md'
                  target='_blank'
                  className='group rounded-lg border border-green-400 bg-green-400/10 p-4 transition-all duration-300 hover:bg-green-400/20 hover:shadow-lg hover:shadow-green-400/20'
                >
                  <div className='mb-2 text-lg text-green-300'>
                    📚 Documentation
                  </div>
                  <div className='text-sm text-green-200'>Read the docs</div>
                  <div className='mt-2 text-xs text-green-400 group-hover:text-green-300'>
                    README.md →
                  </div>
                </Link>

                <Link
                  href='https://github.com/luizalabs/noahjs/blob/master/CONTRIBUTING.md'
                  target='_blank'
                  className='group rounded-lg border border-green-400 bg-green-400/10 p-4 transition-all duration-300 hover:bg-green-400/20 hover:shadow-lg hover:shadow-green-400/20'
                >
                  <div className='mb-2 text-lg text-green-300'>
                    🤝 Contributing
                  </div>
                  <div className='text-sm text-green-200'>
                    How to contribute
                  </div>
                  <div className='mt-2 text-xs text-green-400 group-hover:text-green-300'>
                    CONTRIBUTING.md →
                  </div>
                </Link>

                <Link
                  href='https://github.com/luizalabs/noahjs/blob/master/LICENSE'
                  target='_blank'
                  className='group rounded-lg border border-green-400 bg-green-400/10 p-4 transition-all duration-300 hover:bg-green-400/20 hover:shadow-lg hover:shadow-green-400/20'
                >
                  <div className='mb-2 text-lg text-green-300'>📄 License</div>
                  <div className='text-sm text-green-200'>MIT License</div>
                  <div className='mt-2 text-xs text-green-400 group-hover:text-green-300'>
                    LICENSE →
                  </div>
                </Link>
              </div>

              {/* Quick Start */}
              <div className='rounded-lg border border-green-400/30 bg-green-400/5 p-6'>
                <h3 className='mb-4 text-lg text-green-300'>⚡ Quick Start</h3>
                <div className='rounded border border-green-400/50 bg-black p-4 font-mono text-sm'>
                  <div className='mb-2 text-green-400'>
                    $ git clone https://github.com/luizalabs/noahjs.git
                  </div>
                  <div className='mb-2 text-green-400'>$ cd noahjs</div>
                  <div className='mb-2 text-green-400'>$ npm install</div>
                  <div className='mb-2 text-green-400'>$ npm run dev</div>
                  <div className='mt-4 text-xs text-green-200'>
                    🌐 Server running at http://localhost:3000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className='relative z-10 border-t-2 border-green-400 bg-black/90 backdrop-blur-sm'>
          <div className='container mx-auto px-6 py-4'>
            <div className='flex items-center justify-between text-sm'>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 rounded-full bg-green-400'></div>
                <Link
                  href='https://github.com/luizalabs'
                  target='_blank'
                  className='text-green-300 underline'
                >
                  Made with ❤️ by Luizalabs
                </Link>
              </div>
              <div className='text-green-300'>MIT License © 2025</div>
            </div>
          </div>
        </footer>
      </div>

      {/* <TailWindExamples /> */}
    </div>
  );
}
