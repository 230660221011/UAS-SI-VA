import { useState } from 'react';
import { createBorrowing } from '../api/borrowing';

export default function BorrowingForm({ refresh }) {
  const [form, setForm] = useState({
    title: '',
    facility: '',
    borrowDate: '',
    returnDate: ''
  });

  const submit = async e => {
    e.preventDefault();
    const res = await createBorrowing(form);
    alert(res.message);
    setForm({ title: '', facility: '', borrowDate: '', returnDate: '' });
    refresh();
  };

  return (
    <form className="bg-white p-6 rounded shadow" onSubmit={submit}>
      <h2 className="text-lg font-semibold mb-4">
        Ajukan Peminjaman Fasilitas
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Judul"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Fasilitas"
          value={form.facility}
          onChange={e => setForm({ ...form, facility: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={form.borrowDate}
          onChange={e => setForm({ ...form, borrowDate: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={form.returnDate}
          onChange={e => setForm({ ...form, returnDate: e.target.value })}
        />
      </div>

      <button className="mt-4 bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded">
        Simpan
      </button>
    </form>
  );
}
