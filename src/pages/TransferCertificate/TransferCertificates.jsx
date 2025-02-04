import Header from "../../components/Header/Header";
import TransferCertificateUtils from "../../utils/transfer_certificates";

function TransferCertificates() {
  return (
    <div>
      <Header title="Transfer Certificates" />
      <div className="overflow-x-scroll my-6 mx-2">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th>SL. No.</th>
              <th className="uppercase">Student Name</th>
              <th className="uppercase">Download Link</th>
            </tr>
          </thead>
          <tbody>
            {TransferCertificateUtils.studentFileNames.map(
              (fileName, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {TransferCertificateUtils.formatFileNameToName(fileName)}
                  </td>
                  <td className="has-text-align-left" data-align="left">
                    <a
                      href={TransferCertificateUtils.generateCertificateURL(
                        fileName
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Click to Download
                    </a>
                  </td>
                </tr>
              )
            )}
            {/* */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransferCertificates;
