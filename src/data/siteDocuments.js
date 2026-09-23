// Every school document the site links to is served from the API so staff can
// replace a PDF from the admin panel without a redeploy. This bundled copy
// mirrors the exact grouped shape `GET /v1/documents/site` returns and is what
// the site renders until (and unless) that fetch succeeds with a non-empty list
// for a given location.
//
// DO NOT DELETE IT. Public Disclosure is content CBSE legally requires the
// school to publish and the fee menu is what parents are sent to; if the API is
// down, slow, or returns nothing, the alternative is an empty compliance table
// and a fee menu with no PDFs in it. Keep it in sync when the live list changes
// substantially.
//
// One document can appear in more than one location (the fee structure is both
// "Fee Structure of the School" in Public Disclosure section C and
// "Fee Structure 2026-27" in the top menu), which is why `document_id` is
// separate from the placement's own `id`: same document_id = same file, so
// replacing it once updates both places.

const disclosureUrl = "https://api.greenschoolguwahati.com/public_disclosure";
const feeUrl = "https://api.greenschoolguwahati.com/fee_structure";

const FEE_STRUCTURE_DOCUMENT_ID = 13;
const FEE_STRUCTURE_URL = `${feeUrl}/Fee_Structure_2026_27.pdf`;

export const siteDocuments = {
  // Public Disclosure -> Section B - Documents and Information
  disclosure_b: [
    {
      id: 1,
      document_id: 1,
      name: "Copies of affiliation/upgradation letter and recent extension of affiliation, if any",
      file_url: `${disclosureUrl}/UPGRADATION_OF_AFFILIATION.pdf`,
      kind: "file",
      label:
        "Copies of affiliation/upgradation letter and recent extension of affiliation, if any",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 1,
    },
    {
      id: 2,
      document_id: 2,
      name: "Copies of societies/trust/company registration/renewal certificate, as applicable",
      file_url: `${disclosureUrl}/VEDIC_GYAN_FOUNDATION_TRUST_DEED.pdf`,
      kind: "file",
      label:
        "Copies of societies/trust/company registration/renewal certificate, as applicable",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 2,
    },
    {
      id: 3,
      document_id: 3,
      name: "Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt./UT",
      file_url: `${disclosureUrl}/COPIES_OF_NOC.pdf`,
      kind: "file",
      label:
        "Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt./UT",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 3,
    },
    {
      id: 4,
      document_id: 4,
      name: "Copies of the recognition certificate under the RTE Act, 2009, and its renewal if applicable",
      file_url: `${disclosureUrl}/RECOGNITION_CERTIFICATE.pdf`,
      kind: "file",
      label:
        "Copies of the recognition certificate under the RTE Act, 2009, and its renewal if applicable",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 4,
    },
    {
      id: 5,
      document_id: 5,
      name: "Copy of valid building safety certificate as per the National Building Code",
      file_url: `${disclosureUrl}/BUILDING_SAFETY_CERTIFICATE.pdf`,
      kind: "file",
      label:
        "Copy of valid building safety certificate as per the National Building Code",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 5,
    },
    {
      id: 6,
      document_id: 6,
      name: "Copy of valid fire safety certificate issued by the competent authority",
      file_url: `${disclosureUrl}/FIRE_NOC.pdf`,
      kind: "file",
      label:
        "Copy of valid fire safety certificate issued by the competent authority",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 6,
    },
    {
      id: 7,
      document_id: 7,
      name: "Copy of the self certification submitted by the school for affiliation/upgradation/extension of affiliation",
      file_url: `${disclosureUrl}/SELF_CERTIFICATION.pdf`,
      kind: "file",
      label:
        "Copy of the self certification submitted by the school for affiliation/upgradation/extension of affiliation",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 7,
    },
    {
      id: 8,
      document_id: 8,
      name: "Self certification for section increase",
      file_url: `${disclosureUrl}/SELF_CERTIFICATION_FOR_SECTION_INCRESE.pdf`,
      kind: "file",
      label: "Self certification for section increase",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 8,
    },
    {
      id: 9,
      document_id: 9,
      name: "Copies of valid water, health and sanitation certificates",
      file_url: `${disclosureUrl}/HEALTH_AND_HYGENE.pdf`,
      kind: "file",
      label: "Copies of valid water, health and sanitation certificates",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 9,
    },
    {
      id: 10,
      document_id: 10,
      name: "Land Certificate",
      file_url: `${disclosureUrl}/LAND_CERTIFICATE.pdf`,
      kind: "file",
      label: "Land Certificate",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 10,
    },
    {
      id: 11,
      document_id: 11,
      name: "Mandatory Disclosure",
      file_url: `${disclosureUrl}/MANDATORY_DISCLOSURE.pdf`,
      kind: "file",
      label: "Mandatory Disclosure",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 11,
    },
    {
      id: 12,
      document_id: 12,
      name: "Link of YouTube video of the inspection of school",
      file_url: "https://youtu.be/xflXKP24fjY",
      kind: "link",
      label: "Link of YouTube video of the inspection of school",
      sublabel: null,
      icon: null,
      link_label: "Click to View",
      is_numbered: false,
      display_order: 12,
    },
  ],

  // Public Disclosure -> Section C - Result and Academics
  disclosure_c: [
    {
      id: 13,
      // Shared with the top menu's "Fee Structure 2026-27" entry below. The two
      // captions differ because the regulator-facing table has its own wording,
      // but they must always resolve to the same file.
      document_id: FEE_STRUCTURE_DOCUMENT_ID,
      name: "Fee Structure 2026-27",
      file_url: FEE_STRUCTURE_URL,
      kind: "file",
      label: "Fee Structure of the School",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 1,
    },
    {
      id: 14,
      document_id: 14,
      name: "Annual Academic Calendar",
      file_url: `${disclosureUrl}/ANNUAL_ACADEMIC_CALENDAR_2026_27.pdf`,
      kind: "file",
      label: "Annual Academic Calendar",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 2,
    },
    {
      id: 15,
      document_id: 15,
      name: "List of School Management Committee (SMC)",
      file_url: `${disclosureUrl}/SCHOOL_MANAGEMENT_COMMITTEE_2025_26.pdf`,
      kind: "file",
      label: "List of School Management Committee (SMC)",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 3,
    },
    {
      id: 16,
      document_id: 16,
      name: "List of Parents Teachers Association (PTA) Members",
      file_url: `${disclosureUrl}/PARENTS_TEACHERS_ASSOCIATION_MEMBER_LIST_2025_26.pdf`,
      kind: "file",
      label: "List of Parents Teachers Association (PTA) Members",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 4,
    },
    {
      id: 17,
      document_id: 17,
      name: "Last three-year result of the board examination as per applicability",
      file_url: `${disclosureUrl}/LAST_THREE_YEARS_RESULT.pdf`,
      kind: "file",
      label:
        "Last three-year result of the board examination as per applicability",
      sublabel: null,
      icon: null,
      link_label: "Click to Download",
      is_numbered: true,
      display_order: 5,
    },
  ],

  // Top menu -> Fee Structure -> Download PDFs
  navbar_fee: [
    {
      id: 18,
      // Same document as Public Disclosure section C row 1 — see above.
      document_id: FEE_STRUCTURE_DOCUMENT_ID,
      name: "Fee Structure 2026-27",
      file_url: FEE_STRUCTURE_URL,
      kind: "file",
      label: "Fee Structure 2026-27",
      sublabel: "PDF · Current academic session",
      icon: "document",
      link_label: null,
      is_numbered: true,
      display_order: 1,
    },
    {
      id: 19,
      document_id: 18,
      name: "FRC Fee approval 2026-2027",
      file_url: `${feeUrl}/Fee_Fixation_Order_The_GreenSchool_International.pdf`,
      kind: "file",
      label: "FRC Fee approval 2026-2027",
      sublabel: "PDF · Official fee fixation order",
      icon: "sparkles",
      link_label: null,
      is_numbered: true,
      display_order: 2,
    },
    {
      id: 20,
      document_id: 19,
      name: "Cancellation Policy",
      file_url: `${feeUrl}/Cancellation_Policy.pdf`,
      kind: "file",
      label: "Cancellation Policy",
      sublabel: "PDF · Refunds & cancellations",
      icon: "shield",
      link_label: null,
      is_numbered: true,
      display_order: 3,
    },
  ],

  // Admissions page -> Download Admission Form button
  admission_form: [
    {
      id: 21,
      document_id: 20,
      name: "Admission Form",
      file_url: `${disclosureUrl}/green-school-admission-form.pdf`,
      kind: "file",
      label: "Download Admission Form",
      sublabel: null,
      icon: null,
      link_label: null,
      is_numbered: false,
      display_order: 1,
    },
  ],
};

export default siteDocuments;
