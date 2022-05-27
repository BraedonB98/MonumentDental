import React from "react";
import { FiDownload } from "react-icons/fi";

const NewPatient = () => {
  return (
    <React.Fragment>
      <h1>New Patients</h1>
      <h2>What to expect at your first visit...</h2>
      <p>
        Dr. Bellamy and staff look forward to meeting you and determining your
        individual needs. Upon arrival, most new patients should expect the
        following:
      </p>
      <ul>
        <li>Meet Dr. Bellamy and the team</li>
        <li>
          A complete series of dental x-rays is recommended for new patients.
          The full series is usually good for 3 - 5 years. This will allow us to
          check all your teeth for decay, bone loss, tumors, cysts or any other
          anomalies
        </li>
        <li>
          A review of your health history including any surgeries, medications,
          or allergies
        </li>
        <li>
          A periodontal evaluation will be performed to assess for gum disease
        </li>
        <li>Oral cancer screening</li>
        <li>Evaluation of restorations</li>
        <li>
          Evaluation of tooth decay through x-rays, visual exam, and use of
          Diagnodent
        </li>
        <li>Discussion of your needs and concerns as well as the dentist's</li>
        <li>Insurance & Payment Options</li>
      </ul>

      <h4>
        <a href={"MD-NewPatientForm.pdf"} target="_blank">
          New Patient Forms <FiDownload />
        </a>
      </h4>
      <p>
        We recommend you download our new patient forms and complete them prior
        to your first visit. If you have any questions regarding the information
        requested please feel free to contact us during normal business hours
        with your questions.
      </p>
    </React.Fragment>
  );
};

export default NewPatient;
