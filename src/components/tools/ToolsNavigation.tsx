import { Link } from 'wouter';

export const ToolsNavigation = () => {
  return (
    <nav className='font-semibold flex gap-4 mb-12'>
      <Link href='/calculator'>Calculator</Link>
      <Link href='percent'>Percent</Link>
    </nav>
  );
};
