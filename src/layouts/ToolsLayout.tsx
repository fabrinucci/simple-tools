import { ToolsNavigation } from '../components/tools/ToolsNavigation';

export const ToolsLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='py-20 -full flex flex-col items-center justify-center'>
      <h1 className='text-2xl mb-6'>
        Welcome to simple tools, choose the tool you'd like to use
      </h1>
      <ToolsNavigation />
      {children}
    </div>
  );
};
