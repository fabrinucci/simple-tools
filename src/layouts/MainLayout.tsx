import { ToolsNavigation } from '../components/tools/ToolsNavigation';
import { Header } from '../components/Header';
import { Footer } from '../components';

export const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='min-h-screen flex flex-col bg-linear-to-br from-indigo-950 to-blue-600'>
      <Header />
      <main className='grow px-12 py-16'>
        <h1 className='text-2xl mb-6'>
          Welcome to ToolStack, choose the tool you'd like to use
        </h1>
        <ToolsNavigation />
        {children}
      </main>

      <Footer />
    </div>
  );
};
