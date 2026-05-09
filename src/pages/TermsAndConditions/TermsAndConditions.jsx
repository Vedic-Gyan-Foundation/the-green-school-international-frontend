import { useEffect } from "react";
import styles from "./TermsAndConditions.module.css";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions governing the use of The Green School International website."
        path="/terms-and-conditions"
      />
      <Header title="Terms and Conditions" />
      <div className={styles.terms_container}>
        <div className={styles.terms_intro}>
          <span className="section-eyebrow">Legal</span>
          <h1>Terms and Conditions</h1>
          <p className={styles.terms_lastupdated}>
            Last updated: November 08, 2025
          </p>
        </div>

        <div className={styles.terms_body}>
          <section className={styles.terms_section}>
            <h3>Interpretation and Definitions</h3>
            <h4>Interpretation</h4>
            <p>
              The words whose initial letters are capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <h4>Definitions</h4>
            <p>For the purposes of these Terms and Conditions:</p>
            <ul className={styles.terms_list}>
              <li>
                <b>Affiliate</b> means an entity that controls, is controlled
                by, or is under common control with a party, where
                &quot;control&quot; means ownership of 50% or more of the
                shares, equity interest or other securities entitled to vote for
                election of directors or other managing authority.
              </li>
              <li>
                <b>Country</b> refers to: Assam, India
              </li>
              <li>
                <b>Company</b> (referred to as either &quot;the Company&quot;,
                &quot;we&quot;, &quot;us&quot; or &quot;our&quot; in this
                Agreement) refers to The Green School International.
              </li>
              <li>
                <b>Device</b> means any device that can access the Service such
                as a computer, a cell phone or a digital tablet.
              </li>
              <li>
                <b>Service</b> refers to the Website.
              </li>
              <li>
                <b>Terms and Conditions</b> (also referred as &quot;Terms&quot;)
                mean these Terms and Conditions that form the entire agreement
                between you and the Company regarding the use of the Service.
              </li>
              <li>
                <b>Third-party Social Media Service</b> means any services or
                content provided by a third-party that may be displayed,
                included or made available by the Service.
              </li>
              <li>
                <b>Website</b> refers to The Green School International,
                accessible from{" "}
                <a
                  className={styles.terms_link}
                  href="https://greenschoolguwahati.com/"
                >
                  https://greenschoolguwahati.com/
                </a>
              </li>
              <li>
                <b>You</b> means the individual accessing or using the Service.
              </li>
            </ul>
          </section>

          <section className={styles.terms_section}>
            <h3>Acknowledgment</h3>
            <p>
              These are the Terms and Conditions governing the use of this
              Service and the agreement that operates between you and the
              Company.
            </p>
            <p>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms and Conditions.
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these
              Terms and Conditions. If you disagree with any part, you may not
              access the Service.
            </p>
            <p>
              You represent that you are over the age of 18. The Company does
              not permit those under 18 to use the Service.
            </p>
            <p>
              Your access is also conditioned on your compliance with the
              Privacy Policy of the Company. Please read it carefully before
              using our Service.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>Links to Other Websites</h3>
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by the Company.
            </p>
            <p>
              The Company has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any third
              party web sites or services.
            </p>
            <p>
              We strongly advise you to read the terms and conditions and
              privacy policies of any third-party web sites or services that
              you visit.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>Termination</h3>
            <p>
              We may terminate or suspend your access immediately, without prior
              notice or liability, for any reason whatsoever, including without
              limitation if you breach these Terms and Conditions.
            </p>
            <p>Upon termination, your right to use the Service will cease immediately.</p>
          </section>

          <section className={styles.terms_section}>
            <h3>Limitation of Liability</h3>
            <p>
              Notwithstanding any damages that you might incur, the entire
              liability of the Company and any of its suppliers under any
              provision of this Terms and your exclusive remedy for all of the
              foregoing shall be limited to the amount actually paid by you
              through the Service or 100 USD if you haven&apos;t purchased
              anything through the Service.
            </p>
            <p>
              To the maximum extent permitted by applicable law, in no event
              shall the Company or its suppliers be liable for any special,
              incidental, indirect, or consequential damages whatsoever.
            </p>
            <p>
              Some states do not allow the exclusion of implied warranties or
              limitation of liability for incidental or consequential damages,
              which means that some of the above limitations may not apply.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h3>
            <p>
              The Service is provided to you &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; and with all faults and defects without warranty
              of any kind.
            </p>
            <p>
              Without limiting the foregoing, neither the Company nor any of
              the company&apos;s provider makes any representation or warranty
              of any kind, express or implied.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of certain types of
              warranties or limitations on applicable statutory rights of a
              consumer.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>Governing Law</h3>
            <p>
              The laws of the Country, excluding its conflicts of law rules,
              shall govern this Terms and your use of the Service.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>Disputes Resolution</h3>
            <p>
              If you have any concern or dispute about the Service, you agree
              to first try to resolve the dispute informally by contacting the
              Company.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>For European Union (EU) Users</h3>
            <p>
              If you are a European Union consumer, you will benefit from any
              mandatory provisions of the law of the country in which you are
              resident.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>United States Legal Compliance</h3>
            <p>
              You represent and warrant that (i) you are not located in a
              country that is subject to the United States government embargo,
              or that has been designated by the United States government as a
              &quot;terrorist supporting&quot; country, and (ii) you are not
              listed on any United States government list of prohibited or
              restricted parties.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>Severability and Waiver</h3>
            <h4>Severability</h4>
            <p>
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest
              extent possible under applicable law.
            </p>
            <h4>Waiver</h4>
            <p>
              Except as provided herein, the failure to exercise a right or to
              require performance of an obligation under these Terms shall not
              affect a party&apos;s ability to exercise such right or require
              such performance at any time thereafter.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>Translation Interpretation</h3>
            <p>
              These Terms and Conditions may have been translated if we have
              made them available to you on our Service. You agree that the
              original English text shall prevail in the case of a dispute.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>Changes to These Terms and Conditions</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or
              replace these Terms at any time.
            </p>
            <p>
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className={styles.terms_section}>
            <h3>Contact Us</h3>
            <p>If you have any questions about these Terms and Conditions, you can contact us:</p>
            <ul className={styles.terms_list}>
              <li>
                By visiting this page on our website:{" "}
                <a
                  className={styles.terms_link}
                  href="https://greenschoolguwahati.com/contact"
                >
                  https://greenschoolguwahati.com/contact
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
