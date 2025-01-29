import Header from "../../components/Header/Header";

function TransferCertificates() {
  return (
    <div>
      <Header title="Transfer Certificates" />
      <div className="overflow-x-scroll my-6 mx-2">
        <table>
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Student Name</th>
              <th>Download Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>NAME OF THE SCHOOL</td>
              <td className="has-text-align-left" data-align="left">
                THE GREEN SCHOOL INTERNATIONAL, GUWAHATI
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>AFFILIATION NO.(IF APPLICABLE)</td>
              <td className="has-text-align-left" data-align="left">
                230317
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>SCHOOL CODE (IF APPLICABLE)</td>
              <td className="has-text-align-left" data-align="left">
                35575
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>COMPLETE ADDRESS WITH PIN CODE</td>
              <td className="has-text-align-left" data-align="left">
                MAHAPURUSH MADHABDEV PATH, NEAR ITI, NALAPARA, SARUSAJAI,
                <br />
                GUWAHATI 781040, 31, ASSAM – 781040
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>PRINCIPAL NAME</td>
              <td className="has-text-align-left" data-align="left">
                Mrs. MOUSUMI GANGULY
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>PRINCIPAL QUALIFICATION</td>
              <td className="has-text-align-left" data-align="left">
                MA (Sociology and Economics) B.Ed
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>SCHOOL EMAIL ID</td>
              <td className="has-text-align-left" data-align="left">
                vedicgyanfoundation@gmail.com
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
              <td className="has-text-align-left" data-align="left">
                9856199105
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransferCertificates;
