export default function Navbar() {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="flex justify-between items-center bg-blue-900 text-white px-6 py-4 shadow">
      <h1 className="text-lg font-semibold">
        Sistem Peminjaman Ruang & Fasilitas Kampus
      </h1>
      <button
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
