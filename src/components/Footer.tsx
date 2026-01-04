export const Footer = () => {
  return (
    <footer className='text-blue-900 font-semibold bg-linear-to-br from-indigo-200 to-indigo-400'>
      <div className='flex py-6 justify-around border-b-2 border-blue-900'>
        <div className='hidden md:block'>
          <h3>ToolStack</h3>
          <p>Simple tools for simple tasks</p>
        </div>

        <div className='footer-section'>
          <h4>Categorías</h4>
          <ul>
            <li>Matemáticas</li>
            <li>Finanzas</li>
            <li>Texto</li>
            <li>Utilidades</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>Enlaces</h4>
          <ul>
            <li>Inicio</li>
            <li>Herramientas Populares</li>
            <li>Sobre el proyecto</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>

      <div className='py-4 text-center font-bold'>
        <p>© {new Date().getFullYear()} ToolStack. All the tools are free.</p>
      </div>
    </footer>
  );
};
