import Header from "../../components/Header/Header";
import styles from "./PublicDisclosure.module.css";
import { downloadFile } from "../../utils/download";

const Section = ({ id, title, letter, children }) => (
  <section className={styles.section} id={id}>
    <div className={styles.section_header}>
      <span className={styles.section_letter}>{letter}</span>
      <h3>{title}</h3>
    </div>
    <div className={styles.table_wrap}>{children}</div>
  </section>
);

const DownloadLink = ({ href, label = "Click to Download" }) => (
  <button
    type="button"
    onClick={() => downloadFile(href)}
    className={styles.download_link}
  >
    {label}
  </button>
);

// External link (e.g. YouTube) — opens in a new tab instead of downloading
const ViewLink = ({ href, label = "Click to View" }) => (
  <a
    href={href}
    rel="noreferrer"
    target="_blank"
    className={styles.download_link}
  >
    {label}
  </a>
);

const PublicDisclosure = () => {
  return (
    <>
      <Header title="Public Disclosure" />
      <div className={styles.publicdisclosure}>
        <div className={styles.intro}>
          <span className="section-eyebrow">Mandatory Public Disclosure</span>
          <h2>The Green School International — Compliance &amp; transparency</h2>
          <p>
            All school documentation, results, staff details and infrastructure
            data, accessible in one place — as mandated by CBSE.
          </p>
        </div>

        {/* A. General Info */}
        <Section letter="A" title="General Info" id="general-info">
          <table className="my_table">
            <thead>
              <tr>
                <th>SL. No</th>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Name of the School</td>
                <td>THE GREEN SCHOOL INTERNATIONAL, GUWAHATI</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Affiliation No. (if applicable)</td>
                <td>230317</td>
              </tr>
              <tr>
                <td>3</td>
                <td>School Code (if applicable)</td>
                <td>35575</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Complete Address with PIN code</td>
                <td>
                  Mahapurush Madhabdev Path, Near ITI, Nalapara, Sarusajai,
                  <br />
                  Guwahati 781040, 31, Assam – 781040
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Principal Name</td>
                <td>Mrs. Mousumi Ganguly</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Principal Qualification</td>
                <td>MA (Sociology and Economics) B.Ed</td>
              </tr>
              <tr>
                <td>7</td>
                <td>School Email ID</td>
                <td>
                  <a
                    href="mailto:thegreenschoolinternational@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.inline_link}
                  >
                    thegreenschoolinternational@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Contact Details (Landline / Mobile)</td>
                <td>
                  <a
                    href="tel:+919856199105"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.inline_link}
                  >
                    +91-9856199105
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        {/* B. Documents and Information */}
        <Section letter="B" title="Documents and Information" id="documents">
          <table className="my_table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Documents / Information</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Copies of affiliation/upgradation letter and recent extension
                  of affiliation, if any
                </td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/UPGRADATION_OF_AFFILIATION.pdf" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Copies of societies/trust/company registration/renewal
                  certificate, as applicable
                </td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/VEDIC_GYAN_FOUNDATION_TRUST_DEED.pdf" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Copy of No Objection Certificate (NOC) issued, if applicable,
                  by the State Govt./UT
                </td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/COPIES_OF_NOC.pdf" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Copies of the recognition certificate under the RTE Act, 2009,
                  and its renewal if applicable
                </td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/RECOGNITION_CERTIFICATE.pdf" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Copy of valid building safety certificate as per the National
                  Building Code
                </td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/BUILDING_SAFETY_CERTIFICATE.pdf" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  Copy of valid fire safety certificate issued by the competent
                  authority
                </td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/FIRE_NOC.pdf" />
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Copy of the self certification submitted by the school for
                  affiliation/upgradation/extension of affiliation
                </td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/SELF_CERTIFICATION.pdf" />
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Self certification for section increase</td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/SELF_CERTIFICATION_FOR_SECTION_INCRESE.pdf" />
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  Copies of valid water, health and sanitation certificates
                </td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/HEALTH_AND_HYGENE.pdf" />
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Land Certificate</td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/LAND_CERTIFICATE.pdf" />
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Mandatory Disclosure</td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/MANDATORY_DISCLOSURE.pdf" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className={`my_table ${styles.tight_table}`}>
            <tbody>
              <tr>
                <td>Link of YouTube video of the inspection of school</td>
                <td>
                  <ViewLink
                    href="https://youtu.be/xflXKP24fjY"
                    label="Click to View"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <p className={styles.note}>
            <b>NOTE:</b> The schools need to upload self-attested copies of the
            above-listed documents by Chairman/Manager/Secretary and Principal.
            In case it is noticed at a later stage that uploaded documents are
            not genuine, the school shall be liable for action as per norms.
          </p>
        </Section>

        {/* C. Result and Academics */}
        <Section letter="C" title="Result and Academics" id="results-academics">
          <table className="my_table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Documents / Information</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fee Structure of the School</td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/FEE_STRUCTURE_2025_26.pdf" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Annual Academic Calendar</td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/ANNUAL_ACADEMIC_CALENDAR_2026_27.pdf" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>List of School Management Committee (SMC)</td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/SCHOOL_MANAGEMENT_COMMITTEE_2025_26.pdf" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>List of Parents Teachers Association (PTA) Members</td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/PARENTS_TEACHERS_ASSOCIATION_MEMBER_LIST_2025_26.pdf" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Last three-year result of the board examination as per
                  applicability
                </td>
                <td>
                  <DownloadLink href="https://api.greenschoolguwahati.com/public_disclosure/LAST_THREE_YEARS_RESULT.pdf" />
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        {/* D. Staff (Teaching) */}
        <Section letter="D" title="Staff (Teaching)" id="staff">
          <table className="my_table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Principal</td>
                <td>Mousumi Ganguly</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Vice Principal</td>
                <td>N. Sweety Singh</td>
              </tr>
              <tr>
                <td rowSpan="6">3</td>
                <td>Total no. of teachers</td>
                <td>118</td>
              </tr>
              <tr>
                <td>PGT</td>
                <td>16</td>
              </tr>
              <tr>
                <td>TGT</td>
                <td>28</td>
              </tr>
              <tr>
                <td>PRT</td>
                <td>55</td>
              </tr>
              <tr>
                <td>NTT</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Librarian</td>
                <td>1</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Teachers section ratio</td>
                <td>1:1.85</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Details of special educator</td>
                <td>1</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Details of counsellor and wellness teacher</td>
                <td>1</td>
              </tr>
              <tr>
                <td>7</td>
                <td>PET</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </Section>

        {/* E. Result Class X */}
        <Section letter="E" title="Result · Class X" id="class-x">
          <table className="my_table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Year</th>
                <th>Registered Students</th>
                <th>Students Passed</th>
                <th>Pass Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>2023</td>
                <td>15</td>
                <td>15</td>
                <td>100</td>
              </tr>
              <tr>
                <td>3</td>
                <td>2024</td>
                <td>32</td>
                <td>32</td>
                <td>100</td>
              </tr>
              <tr>
                <td>4</td>
                <td>2025</td>
                <td>39</td>
                <td>39</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </Section>

        {/* F. Result Class XII */}
        <Section letter="F" title="Result · Class XII" id="class-xii">
          <table className="my_table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Year</th>
                <th>Registered Students</th>
                <th>Students Passed</th>
                <th>Pass Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2025</td>
                <td>15</td>
                <td>15</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </Section>

        {/* G. School Infrastructure */}
        <Section
          letter="G"
          title="School Infrastructure"
          id="infrastructure"
        >
          <table className="my_table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Total campus area of the school (in sq. m)</td>
                <td>12096</td>
              </tr>
              <tr>
                <td>2</td>
                <td>No. and size of the classrooms (in sq. m)</td>
                <td>77 &amp; 50</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  No. and size of laboratories including computer labs (in sq.
                  m)
                </td>
                <td>9 &amp; 79</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Internet facility</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>5</td>
                <td>No. of girls toilets</td>
                <td>18</td>
              </tr>
              <tr>
                <td>6</td>
                <td>No. of boys toilets</td>
                <td>18</td>
              </tr>
            </tbody>
          </table>
        </Section>
      </div>
    </>
  );
};

export default PublicDisclosure;
