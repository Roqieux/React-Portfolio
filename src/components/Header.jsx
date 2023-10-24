import Navigation from './Navigation';
export default function Header({ currentPage, handlePageChange }) {
    return (
      <div className='p-2 pt-3'>
        <h1 className="h1 ms-4">Julien Larroque</h1>
        <div className='ms-3 fs-4'>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </div>
    );
  }