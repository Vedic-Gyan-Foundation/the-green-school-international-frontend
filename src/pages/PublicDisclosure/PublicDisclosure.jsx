import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./PublicDisclosure.module.css";
import { downloadFile } from "../../utils/download";
import { disclosureFallback } from "../../data/disclosureFallback";

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

// MySQL hands booleans back as 0/1 and JSON carries them through as numbers, so
// both the boolean and the numeric form have to be understood. The string forms
// are covered too because "false" and "0" are truthy in JS.
const isFlagOn = (value) =>
  value !== false && value !== 0 && value !== "false" && value !== "0";

// file_url is typed into the admin panel and stored unvalidated, so a "javascript:"
// value would otherwise become a live script sink on a public page.
const isSafeHref = (url) => {
  if (typeof url !== "string") return false;
  const trimmed = url.trim();
  return /^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith("/");
};

const DisclosureLink = ({ row }) => {
  if (!isSafeHref(row.file_url)) return <span>Link unavailable</span>;

  return row.link_type === "view" ? (
    <ViewLink href={row.file_url} label={row.link_label || undefined} />
  ) : (
    <DownloadLink href={row.file_url} label={row.link_label || undefined} />
  );
};

// Sections B and C are the same shape: a numbered table of documents, plus an
// optional unnumbered table below it for rows that carry no SL No.
const DisclosureTables = ({ rows }) => {
  const numbered = rows.filter((row) => isFlagOn(row.is_numbered));
  const unnumbered = rows.filter((row) => !isFlagOn(row.is_numbered));

  return (
    <>
      {numbered.length > 0 && (
        <table className="my_table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Documents / Information</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {numbered.map((row, index) => (
              <tr key={row.id}>
                {/* SL No. is the position in the rendered list, not the stored
                    order, so deleting a row renumbers the rest by itself */}
                <td>{index + 1}</td>
                <td>{row.title}</td>
                <td>
                  <DisclosureLink row={row} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {unnumbered.length > 0 && (
        <table className={`my_table ${styles.tight_table}`}>
          <tbody>
            {unnumbered.map((row) => (
              <tr key={row.id}>
                <td>{row.title}</td>
                <td>
                  <DisclosureLink row={row} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

const PublicDisclosure = () => {
  const baseApi = "https://api.greenschoolguwahati.com";
  // Seeded with the bundled list so this CBSE-mandated content paints on the
  // first render and survives an API outage; see src/data/disclosureFallback.js.
  const [disclosureList, setDisclosureList] = useState(disclosureFallback);

  useEffect(() => {
    fetch(`${baseApi}/v1/disclosure/readAll`)
      .then((res) => res.json())
      .then((result) => {
        if (
          result.success &&
          Array.isArray(result.data) &&
          result.data.length
        ) {
          setDisclosureList(result.data);
        }
      })
      .catch((err) =>
        console.error("Failed to fetch disclosure documents", err)
      );
  }, []);

  // The API already orders these, but sorting again here is a cheap safety net
  // so the numbering never depends on what the server happens to send back.
  const [sectionB, sectionC] = useMemo(() => {
    const visible = disclosureList
      .filter((row) => isFlagOn(row?.is_visible))
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
    return [
      visible.filter((row) => row.section === "B"),
      visible.filter((row) => row.section === "C"),
    ];
  }, [disclosureList]);

  return (
    <>
      <Header title="Public Disclosure" />
      <div className={styles.publicdisclosure}>
        <div className={styles.intro}>
          <span className="section-eyebrow">Mandatory Public Disclosure</span>
          <h2>
            The Green School International — Compliance &amp; transparency
          </h2>
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
          <DisclosureTables rows={sectionB} />
          <p className={styles.note}>
            <b>NOTE:</b> The schools need to upload self-attested copies of the
            above-listed documents by Chairman/Manager/Secretary and Principal.
            In case it is noticed at a later stage that uploaded documents are
            not genuine, the school shall be liable for action as per norms.
          </p>
        </Section>

        {/* C. Result and Academics */}
        <Section letter="C" title="Result and Academics" id="results-academics">
          <DisclosureTables rows={sectionC} />
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
        <Section letter="G" title="School Infrastructure" id="infrastructure">
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
