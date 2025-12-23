import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BorrowingForm from '../components/borrowingForm';
import { getBorrowings, deleteBorrowing } from '../api/borrowing';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const load = async () => {
    try {
      setLoading(true);
      const res = await getBorrowings();
      setData(res.data || []);
    } catch (error) {
      console.error('Error loading data:', error);
      if (error.response?.status === 401) {
        alert('Sesi habis, silakan login kembali');
        localStorage.removeItem('token');
        navigate('/');
      }
    } finally {
      setLoading(false);
    }
  };

  const remove = async id => {
    if (!confirm('Yakin ingin menghapus?')) return;
    
    try {
      const res = await deleteBorrowing(id);
      alert(res.message || 'Berhasil dihapus');
      load();
    } catch (error) {
      alert(error.response?.data?.message || 'Gagal menghapus');
    }
  };

  useEffect(() => {
    // Cek token
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }
    
    load();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <BorrowingForm refresh={load} />

        <div className="bg-white rounded shadow mt-6 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Judul</th>
                <th className="p-3 text-left">Fasilitas</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id} className="border-t">
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.facility}</td>
                  <td className="p-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${item.status === 'approved'
                          ? 'bg-green-100 text-green-700'
                          : item.status === 'rejected'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => remove(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}

              {data.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-500">
                    Belum ada data peminjaman
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}