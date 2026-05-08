import { useMemo, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";
import Header from "../../components/Header/Header";
import TransferCertificateUtils from "../../utils/transfer_certificates";

function TransferCertificates() {
  const [query, setQuery] = useState("");

  const allRows = useMemo(
    () =>
      TransferCertificateUtils.studentFileNames.map((fileName, index) => ({
        index,
        fileName,
        name: TransferCertificateUtils.formatFileNameToName(fileName),
        url: TransferCertificateUtils.generateCertificateURL(fileName),
      })),
    []
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return allRows;
    const q = query.trim().toLowerCase();
    return allRows.filter((r) => r.name.toLowerCase().includes(q));
  }, [allRows, query]);

  return (
    <div>
      <Header title="Transfer Certificates" />
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-3 mb-6">
          <span className="section-eyebrow">Student Records</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-900 leading-tight">
            Transfer certificate downloads
          </h2>
          <p className="text-ink-500 leading-relaxed max-w-xl">
            Search by student name and download the official transfer
            certificate.
          </p>
        </div>

        <div className="relative mb-6">
          <HiOutlineMagnifyingGlass
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-700"
            size={20}
          />
          <input
            type="search"
            placeholder="Search student name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-2xl border border-brand-100 bg-white shadow-soft focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-700 transition placeholder-ink-400 text-ink-700"
          />
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-soft border border-brand-100 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
                <th className="px-4 py-3 text-left font-semibold uppercase tracking-wider text-xs">
                  SL. No.
                </th>
                <th className="px-4 py-3 text-left font-semibold uppercase tracking-wider text-xs">
                  Student Name
                </th>
                <th className="px-4 py-3 text-right font-semibold uppercase tracking-wider text-xs">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-10 text-center text-ink-400"
                  >
                    No matching records found.
                  </td>
                </tr>
              ) : (
                filtered.map((row, idx) => (
                  <tr
                    key={row.fileName}
                    className={
                      idx % 2 === 0
                        ? "bg-white hover:bg-brand-50"
                        : "bg-brand-50/40 hover:bg-brand-50"
                    }
                  >
                    <td className="px-4 py-3 text-ink-500 align-middle">
                      {row.index + 1}
                    </td>
                    <td className="px-4 py-3 align-middle font-medium text-ink-700 capitalize">
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-right align-middle">
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white text-xs font-semibold shadow-[0_8px_18px_-8px_rgba(8,112,61,0.55)] hover:-translate-y-0.5 transition-transform"
                      >
                        <HiOutlineDownload size={14} />
                        Download
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-ink-400">
          Showing {filtered.length} of {allRows.length} records.
        </p>
      </div>
    </div>
  );
}

export default TransferCertificates;
