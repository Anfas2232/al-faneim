import React, { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Users,
  Heart,
  Sparkles,
  GraduationCap,
  Coffee,
  Clock3,
  Send,
  X,
  Upload,
  CheckCircle2,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "IT Executive",
    category: "IT",
    location: "Dubai / Al Ain / Abu Dhabi / Fujairah",
    type: "Full-time",
    description:
      "Support IT infrastructure, users, systems, hardware, software, networking and day-to-day technical operations.",
    requirements: [
      "IT support experience",
      "Windows and Microsoft 365",
      "Basic networking knowledge",
      "Hardware and software troubleshooting",
    ],
  },
  {
    id: 2,
    title: "IT Support Executive",
    category: "IT",
    location: "UAE",
    type: "Full-time",
    description:
      "Provide L1/L2 technical support, troubleshoot user issues and maintain reliable IT operations across the business.",
    requirements: [
      "L1/L2 technical support",
      "Windows troubleshooting",
      "Microsoft 365 / Outlook",
      "Networking fundamentals",
    ],
  },
  {
    id: 3,
    title: "Sales Executive",
    category: "Retail",
    location: "UAE",
    type: "Full-time",
    description:
      "Create an excellent customer experience while supporting sales, product presentation and store performance.",
    requirements: [
      "Customer service skills",
      "Good communication",
      "Retail or sales experience",
      "Positive and professional attitude",
    ],
  },
  {
    id: 4,
    title: "Cashier",
    category: "Retail",
    location: "UAE",
    type: "Full-time",
    description:
      "Handle customer transactions accurately while providing friendly and efficient service at the store.",
    requirements: [
      "Cash handling",
      "Customer service",
      "Basic computer skills",
      "Attention to detail",
    ],
  },
  {
    id: 5,
    title: "Store Supervisor",
    category: "Management",
    location: "UAE",
    type: "Full-time",
    description:
      "Support daily store operations, team coordination, customer experience and achievement of store targets.",
    requirements: [
      "Retail management experience",
      "Team leadership",
      "Customer service",
      "Strong communication skills",
    ],
  },
  {
    id: 6,
    title: "Marketing Executive",
    category: "Marketing",
    location: "UAE",
    type: "Full-time",
    description:
      "Support marketing campaigns, digital activities, promotions and brand communication across Al Fan Emirates.",
    requirements: [
      "Marketing experience",
      "Digital marketing knowledge",
      "Social media awareness",
      "Creative communication skills",
    ],
  },
];

const categories = [
  "All",
  "IT",
  "Retail",
  "Management",
  "Marketing",
];

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  experience: "",
  message: "",
  cv: null,
};

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  const openApplication = (jobTitle = "") => {
    setSelectedJob(jobTitle);
    setSubmitted(false);
    setFormError("");
    setFormData(initialFormData);
    setShowApplyForm(true);
  };

  const closeApplication = () => {
    if (submitting) return;

    setShowApplyForm(false);
    setSubmitted(false);
    setFormError("");
    setFormData(initialFormData);
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "cv") {
      setFormData((previous) => ({
        ...previous,
        cv: files?.[0] || null,
      }));
      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setFormError("");

    try {
      const form = event.currentTarget;

      const data = new FormData(form);

      // Required by Netlify Forms
      data.set("form-name", "career-application");

      // Always send the selected position
      data.set("position", selectedJob);

      const cv = data.get("cv");

      // CV validation
      if (!(cv instanceof File) || cv.size === 0) {
        setFormError("Please upload your CV before submitting.");
        setSubmitting(false);
        return;
      }

      // Maximum 5 MB
      if (cv.size > 5 * 1024 * 1024) {
        setFormError("CV must be smaller than 5 MB.");
        setSubmitting(false);
        return;
      }

      // Allowed file extensions
      const fileName = cv.name.toLowerCase();

      const allowedExtensions = [
        ".pdf",
        ".doc",
        ".docx",
      ];

      const validExtension = allowedExtensions.some((extension) =>
        fileName.endsWith(extension)
      );

      if (!validExtension) {
        setFormError(
          "Please upload your CV as PDF, DOC, or DOCX."
        );
        setSubmitting(false);
        return;
      }

      /*
        Netlify Forms AJAX submission.

        IMPORTANT:
        Do not use window.location.pathname here.
        Submit directly to "/" so the Netlify form handler
        can process the multipart FormData.
      */
      const response = await fetch("/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(
          `Netlify returned status ${response.status}`
        );
      }

      setSubmitted(true);

      setFormData(initialFormData);
    } catch (error) {
      console.error(
        "Career application submission error:",
        error
      );

      setFormError(
        "Something went wrong while submitting your application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="careers-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="careers-hero">
        <div className="careers-hero-overlay" />

        <div className="careers-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="careers-hero-content">
          <div className="careers-badge">
            <Sparkles size={16} />
            <span>JOIN OUR TEAM</span>
          </div>

          <h1>
            Build Your Future
            <span>With Al Fan Emirates</span>
          </h1>

          <p>
            Be part of a growing team creating exceptional
            shopping experiences for families across the UAE.
          </p>

          <button
            className="careers-primary-button"
            onClick={() => openApplication("")}
          >
            Explore Opportunities
            <ArrowRight size={19} />
          </button>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="careers-values">
        <div className="careers-section-heading">
          <span>WHY AL FAN EMIRATES</span>

          <h2>
            More Than Just
            <strong>A Job</strong>
          </h2>

          <p>
            We believe great people build great businesses.
            Join a workplace where your ideas, skills and
            growth matter.
          </p>
        </div>

        <div className="careers-values-grid">
          <div className="career-value-card">
            <div className="career-value-icon">
              <Users size={25} />
            </div>

            <h3>Great People</h3>

            <p>
              Work alongside talented and supportive people
              who share a passion for excellence.
            </p>
          </div>

          <div className="career-value-card">
            <div className="career-value-icon">
              <GraduationCap size={25} />
            </div>

            <h3>Grow With Us</h3>

            <p>
              Develop your skills and build a meaningful
              career with continuous learning opportunities.
            </p>
          </div>

          <div className="career-value-card">
            <div className="career-value-icon">
              <Heart size={25} />
            </div>

            <h3>People First</h3>

            <p>
              We value respect, teamwork and a positive
              working environment.
            </p>
          </div>

          <div className="career-value-card">
            <div className="career-value-icon">
              <Coffee size={25} />
            </div>

            <h3>Better Together</h3>

            <p>
              Collaborate, share ideas and make a difference
              as one team.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          JOBS
      ====================================================== */}

      <section className="careers-jobs" id="career-opportunities">
        <div className="careers-section-heading">
          <span>CAREER OPPORTUNITIES</span>

          <h2>
            Find Your
            <strong>Next Opportunity</strong>
          </h2>

          <p>
            Explore our current vacancies and find a role
            that matches your skills and ambitions.
          </p>
        </div>

        {/* Categories */}

        <div className="career-category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Job Cards */}

        <div className="careers-jobs-grid">
          {filteredJobs.map((job) => (
            <article
              className="career-job-card"
              key={job.id}
            >
              <div className="career-job-top">
                <div className="career-job-icon">
                  <BriefcaseBusiness size={24} />
                </div>

                <span className="career-job-category">
                  {job.category}
                </span>
              </div>

              <h3>{job.title}</h3>

              <div className="career-job-meta">
                <span>
                  <MapPin size={16} />
                  {job.location}
                </span>

                <span>
                  <Clock3 size={16} />
                  {job.type}
                </span>
              </div>

              <p>{job.description}</p>

              <div className="career-requirements">
                {job.requirements.map((requirement) => (
                  <span key={requirement}>
                    {requirement}
                  </span>
                ))}
              </div>

              <button
                className="career-apply-button"
                onClick={() =>
                  openApplication(job.title)
                }
              >
                Apply Now
                <ArrowRight size={17} />
              </button>
            </article>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="career-empty">
            <BriefcaseBusiness size={38} />

            <h3>No openings found</h3>

            <p>
              Please check another category or submit your
              CV for future opportunities.
            </p>

            <button
              onClick={() => openApplication("")}
            >
              Submit Your CV
            </button>
          </div>
        )}
      </section>

      {/* =====================================================
          GENERAL APPLICATION CTA
      ====================================================== */}

      <section className="careers-cta">
        <div className="careers-cta-content">
          <div className="careers-cta-icon">
            <Send size={25} />
          </div>

          <div>
            <span>DON'T SEE THE RIGHT ROLE?</span>

            <h2>
              We Are Always Looking
              <strong>For Great Talent</strong>
            </h2>

            <p>
              Send us your CV and we will keep your profile
              in mind for future opportunities.
            </p>
          </div>

          <button
            className="careers-cta-button"
            onClick={() => openApplication("")}
          >
            Send Your CV
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* =====================================================
          APPLICATION MODAL
      ====================================================== */}

      {showApplyForm && (
        <div
          className="career-modal-backdrop"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget &&
              !submitting
            ) {
              closeApplication();
            }
          }}
        >
          <div className="career-modal">
            {/* Modal Header */}

            <div className="career-modal-header">
              <div>
                <span>CAREER APPLICATION</span>

                <h2>
                  {submitted
                    ? "Application Submitted"
                    : "Join Our Team"}
                </h2>
              </div>

              <button
                className="career-modal-close"
                onClick={closeApplication}
                disabled={submitting}
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            {/* Success */}

            {submitted ? (
              <div className="career-success">
                <div className="career-success-icon">
                  <CheckCircle2 size={52} />
                </div>

                <h3>
                  Thank You For Applying!
                </h3>

                <p>
                  Your application has been successfully
                  submitted to Al Fan Emirates.
                </p>

                <p>
                  Our team will review your application and
                  contact you if your profile matches a
                  suitable opportunity.
                </p>

                <button
                  className="careers-primary-button"
                  onClick={closeApplication}
                >
                  Done
                  <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <form
                name="career-application"
                method="POST"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="multipart/form-data"
                className="career-apply-form"
                onSubmit={handleSubmit}
              >
                {/* Required by Netlify */}

                <input
                  type="hidden"
                  name="form-name"
                  value="career-application"
                />

                {/* Honeypot */}

                <input
                  type="hidden"
                  name="bot-field"
                  value=""
                />

                {/* Position */}

                <input
                  type="hidden"
                  name="position"
                  value={selectedJob}
                />

                <div className="career-form-grid">
                  {/* Full Name */}

                  <div className="career-form-group">
                    <label htmlFor="fullName">
                      Full Name *
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}

                  <div className="career-form-group">
                    <label htmlFor="email">
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone */}

                  <div className="career-form-group">
                    <label htmlFor="phone">
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Position */}

                  <div className="career-form-group">
                    <label htmlFor="position-display">
                      Position
                    </label>

                    <input
                      id="position-display"
                      type="text"
                      value={
                        selectedJob ||
                        "General Application"
                      }
                      readOnly
                    />
                  </div>

                  {/* Experience */}

                  <div className="career-form-group">
                    <label htmlFor="experience">
                      Years of Experience *
                    </label>

                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select experience
                      </option>

                      <option value="Fresh Graduate">
                        Fresh Graduate
                      </option>

                      <option value="Less than 1 year">
                        Less than 1 year
                      </option>

                      <option value="1-2 years">
                        1-2 years
                      </option>

                      <option value="2-4 years">
                        2-4 years
                      </option>

                      <option value="4-6 years">
                        4-6 years
                      </option>

                      <option value="6+ years">
                        6+ years
                      </option>
                    </select>
                  </div>

                  {/* CV */}

                  <div className="career-form-group career-cv-group">
                    <label htmlFor="cv">
                      Upload CV *
                    </label>

                    <label
                      htmlFor="cv"
                      className="career-file-upload"
                    >
                      <Upload size={22} />

                      <span>
                        {formData.cv
                          ? formData.cv.name
                          : "Choose your CV"}
                      </span>

                      <small>
                        PDF, DOC or DOCX • Max 5 MB
                      </small>
                    </label>

                    <input
                      id="cv"
                      name="cv"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Message */}

                  <div className="career-form-group career-message-group">
                    <label htmlFor="message">
                      Cover Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us a little about yourself and why you would like to join Al Fan Emirates..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Error */}

                {formError && (
                  <div className="career-form-error">
                    {formError}
                  </div>
                )}

                {/* Submit */}

                <div className="career-form-footer">
                  <p>
                    By submitting this application, you
                    confirm that the information provided is
                    accurate.
                  </p>

                  <button
                    type="submit"
                    className="career-submit-button"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="career-spinner" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send size={17} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          PAGE STYLES
      ====================================================== */}

      <style>{`
        .careers-page {
          background:
            radial-gradient(
              circle at 20% 0%,
              rgba(188, 145, 74, 0.08),
              transparent 35%
            ),
            #0c0906;
          color: #fff;
          overflow: hidden;
        }

        .careers-hero {
          position: relative;
          min-height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 100px 24px;
          background:
            linear-gradient(
              rgba(12, 9, 6, 0.35),
              rgba(12, 9, 6, 0.92)
            ),
            url("/images/careers-bg.jpg") center/cover no-repeat;
        }

        .careers-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at center,
              rgba(190, 151, 81, 0.18),
              transparent 45%
            );
          pointer-events: none;
        }

        .careers-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              transparent 55%,
              #0c0906 100%
            );
        }

        .careers-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          animation: careersFadeUp 0.9s ease;
        }

        .careers-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border: 1px solid rgba(212, 174, 101, 0.45);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          color: #d9b66d;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 28px;
        }

        .careers-hero h1 {
          margin: 0;
          font-size: clamp(44px, 7vw, 88px);
          line-height: 0.98;
          font-weight: 800;
          letter-spacing: -3px;
        }

        .careers-hero h1 span {
          display: block;
          margin-top: 12px;
          color: #d8b36a;
        }

        .careers-hero p {
          max-width: 650px;
          margin: 30px auto;
          color: #cfc6ba;
          font-size: 18px;
          line-height: 1.7;
        }

        .careers-primary-button,
        .career-apply-button,
        .career-submit-button,
        .careers-cta-button {
          border: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 12px;
          font-weight: 700;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .careers-primary-button {
          padding: 15px 22px;
          color: #17110a;
          background: linear-gradient(
            135deg,
            #f1d18b,
            #b98a3d
          );
          box-shadow:
            0 10px 35px rgba(191, 147, 69, 0.2);
        }

        .careers-primary-button:hover,
        .career-submit-button:hover,
        .careers-cta-button:hover {
          transform: translateY(-2px);
          box-shadow:
            0 14px 38px rgba(191, 147, 69, 0.28);
        }

        .careers-particles span {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #d8b36a;
          opacity: 0.35;
          animation: careerFloat 5s infinite ease-in-out;
        }

        .careers-particles span:nth-child(1) {
          left: 12%;
          top: 25%;
        }

        .careers-particles span:nth-child(2) {
          left: 25%;
          top: 70%;
          animation-delay: 1s;
        }

        .careers-particles span:nth-child(3) {
          right: 20%;
          top: 30%;
          animation-delay: 2s;
        }

        .careers-particles span:nth-child(4) {
          right: 12%;
          top: 65%;
          animation-delay: 1.5s;
        }

        .careers-particles span:nth-child(5) {
          left: 50%;
          top: 20%;
          animation-delay: 0.5s;
        }

        .careers-particles span:nth-child(6) {
          left: 75%;
          top: 78%;
          animation-delay: 2.5s;
        }

        .careers-values,
        .careers-jobs {
          max-width: 1250px;
          margin: auto;
          padding: 110px 24px;
        }

        .careers-section-heading {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 55px;
        }

        .careers-section-heading > span {
          color: #c49a50;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .careers-section-heading h2 {
          margin: 14px 0;
          font-size: clamp(35px, 5vw, 58px);
          line-height: 1.05;
        }

        .careers-section-heading h2 strong {
          display: block;
          color: #d8b36a;
        }

        .careers-section-heading p {
          color: #a99f92;
          line-height: 1.7;
          font-size: 16px;
        }

        .careers-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .career-value-card {
          padding: 30px 25px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.045),
              rgba(255, 255, 255, 0.015)
            );
          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .career-value-card:hover {
          transform: translateY(-7px);
          border-color: rgba(212, 174, 101, 0.4);
        }

        .career-value-icon,
        .career-job-icon,
        .career-cta-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          color: #d8b36a;
          background: rgba(216, 179, 106, 0.1);
          margin-bottom: 22px;
        }

        .career-value-card h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .career-value-card p {
          color: #a99f92;
          line-height: 1.65;
          font-size: 14px;
        }

        .careers-jobs {
          padding-top: 60px;
        }

        .career-category-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 45px;
        }

        .career-category-tabs button {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.035);
          color: #a99f92;
          padding: 10px 19px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .career-category-tabs button:hover,
        .career-category-tabs button.active {
          color: #17110a;
          background: #d8b36a;
          border-color: #d8b36a;
        }

        .careers-jobs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .career-job-card {
          display: flex;
          flex-direction: column;
          min-height: 430px;
          padding: 27px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.045),
              rgba(255, 255, 255, 0.012)
            );
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .career-job-card:hover {
          transform: translateY(-7px);
          border-color: rgba(216, 179, 106, 0.38);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.28);
        }

        .career-job-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .career-job-icon {
          margin-bottom: 0;
        }

        .career-job-category {
          color: #d8b36a;
          border: 1px solid rgba(216, 179, 106, 0.25);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
        }

        .career-job-card h3 {
          margin: 25px 0 14px;
          font-size: 24px;
        }

        .career-job-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #8f877d;
          font-size: 13px;
        }

        .career-job-meta span {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .career-job-meta svg {
          color: #c49a50;
        }

        .career-job-card > p {
          color: #a99f92;
          font-size: 14px;
          line-height: 1.65;
          margin: 20px 0;
        }

        .career-requirements {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 25px;
        }

        .career-requirements span {
          color: #b8afa4;
          font-size: 11px;
          padding: 6px 8px;
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.045);
        }

        .career-apply-button {
          margin-top: auto;
          width: 100%;
          padding: 13px;
          color: #d8b36a;
          background: rgba(216, 179, 106, 0.08);
          border: 1px solid rgba(216, 179, 106, 0.2);
        }

        .career-apply-button:hover {
          color: #17110a;
          background: #d8b36a;
        }

        .career-empty {
          text-align: center;
          padding: 70px 20px;
          color: #9d9488;
        }

        .career-empty svg {
          color: #d8b36a;
        }

        .career-empty h3 {
          color: #fff;
          margin: 15px 0 8px;
        }

        .career-empty button {
          margin-top: 15px;
          border: 0;
          background: #d8b36a;
          color: #17110a;
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .careers-cta {
          max-width: 1200px;
          margin: 0 auto 100px;
          padding: 0 24px;
        }

        .careers-cta-content {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 25px;
          align-items: center;
          padding: 38px;
          border-radius: 25px;
          border: 1px solid rgba(216, 179, 106, 0.2);
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(216, 179, 106, 0.12),
              transparent 35%
            ),
            rgba(255, 255, 255, 0.025);
        }

        .careers-cta-icon {
          margin: 0;
        }

        .careers-cta-content > div:nth-child(2) > span {
          color: #c49a50;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .careers-cta-content h2 {
          margin: 8px 0;
          font-size: 30px;
        }

        .careers-cta-content h2 strong {
          color: #d8b36a;
          margin-left: 7px;
        }

        .careers-cta-content p {
          margin: 0;
          color: #9e958a;
          font-size: 14px;
          line-height: 1.6;
        }

        .careers-cta-button {
          padding: 14px 19px;
          background: #d8b36a;
          color: #17110a;
          white-space: nowrap;
        }

        /* =====================================================
           MODAL
        ====================================================== */

        .career-modal-backdrop {
          position: fixed;
          z-index: 9999;
          inset: 0;
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(10px);
          overflow-y: auto;
        }

        .career-modal {
          width: min(850px, 100%);
          max-height: 94vh;
          overflow-y: auto;
          border: 1px solid rgba(216, 179, 106, 0.22);
          border-radius: 25px;
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(216, 179, 106, 0.08),
              transparent 35%
            ),
            #15100c;
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.65);
          animation: careerModalIn 0.25s ease;
        }

        .career-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 28px 30px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .career-modal-header span {
          color: #c49a50;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .career-modal-header h2 {
          margin: 7px 0 0;
          font-size: 30px;
        }

        .career-modal-close {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: #b8afa4;
          background: rgba(255, 255, 255, 0.035);
          cursor: pointer;
        }

        .career-modal-close:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        .career-apply-form {
          padding: 30px;
        }

        .career-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 19px;
        }

        .career-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .career-form-group label {
          color: #ddd4c8;
          font-size: 13px;
          font-weight: 600;
        }

        .career-form-group input,
        .career-form-group select,
        .career-form-group textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.1);
          outline: none;
          border-radius: 11px;
          padding: 13px 14px;
          color: #fff;
          background: rgba(255, 255, 255, 0.045);
          font: inherit;
          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .career-form-group input:focus,
        .career-form-group select:focus,
        .career-form-group textarea:focus {
          border-color: rgba(216, 179, 106, 0.65);
          background: rgba(216, 179, 106, 0.045);
        }

        .career-form-group select option {
          color: #111;
          background: #fff;
        }

        .career-form-group textarea {
          resize: vertical;
          min-height: 125px;
        }

        .career-message-group {
          grid-column: 1 / -1;
        }

        .career-cv-group {
          min-width: 0;
        }

        .career-cv-group > input[type="file"] {
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }

        .career-file-upload {
          min-height: 76px;
          display: flex !important;
          align-items: center;
          gap: 13px;
          padding: 14px;
          border: 1px dashed rgba(216, 179, 106, 0.4) !important;
          border-radius: 11px;
          color: #d8b36a !important;
          background: rgba(216, 179, 106, 0.04) !important;
          cursor: pointer;
        }

        .career-file-upload span {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #ddd4c8;
          font-size: 13px;
        }

        .career-file-upload small {
          margin-left: auto;
          color: #857c72;
          font-size: 10px;
          white-space: nowrap;
        }

        .career-form-error {
          margin-top: 20px;
          padding: 12px 14px;
          border: 1px solid rgba(240, 100, 100, 0.25);
          border-radius: 10px;
          color: #ffb0b0;
          background: rgba(240, 80, 80, 0.07);
          font-size: 13px;
        }

        .career-form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 25px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .career-form-footer p {
          margin: 0;
          max-width: 430px;
          color: #80786e;
          font-size: 11px;
          line-height: 1.5;
        }

        .career-submit-button {
          min-width: 190px;
          padding: 14px 19px;
          color: #17110a;
          background: linear-gradient(
            135deg,
            #f0cf87,
            #b98a3d
          );
        }

        .career-submit-button:disabled {
          cursor: not-allowed;
          opacity: 0.65;
          transform: none;
        }

        .career-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0, 0, 0, 0.25);
          border-top-color: #17110a;
          border-radius: 50%;
          animation: careerSpin 0.7s linear infinite;
        }

        .career-success {
          padding: 60px 30px;
          text-align: center;
        }

        .career-success-icon {
          width: 90px;
          height: 90px;
          margin: 0 auto 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #d8b36a;
          background: rgba(216, 179, 106, 0.1);
          border: 1px solid rgba(216, 179, 106, 0.25);
        }

        .career-success h3 {
          font-size: 30px;
          margin: 0 0 12px;
        }

        .career-success p {
          max-width: 560px;
          margin: 8px auto;
          color: #a99f92;
          line-height: 1.65;
        }

        .career-success .careers-primary-button {
          margin-top: 25px;
        }

        @keyframes careersFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes careerFloat {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.25;
          }

          50% {
            transform: translateY(-25px);
            opacity: 0.8;
          }
        }

        @keyframes careerModalIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes careerSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 1000px) {
          .careers-values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .careers-jobs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .careers-hero {
            min-height: 600px;
            padding: 80px 20px;
          }

          .careers-hero h1 {
            letter-spacing: -2px;
          }

          .careers-values,
          .careers-jobs {
            padding: 80px 18px;
          }

          .careers-values-grid,
          .careers-jobs-grid {
            grid-template-columns: 1fr;
          }

          .careers-cta-content {
            grid-template-columns: 1fr;
            padding: 28px;
          }

          .careers-cta-icon {
            margin-bottom: 0;
          }

          .careers-cta-button {
            width: 100%;
          }

          .career-form-grid {
            grid-template-columns: 1fr;
          }

          .career-message-group {
            grid-column: auto;
          }

          .career-form-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .career-submit-button {
            width: 100%;
          }

          .career-file-upload {
            flex-wrap: wrap;
          }

          .career-file-upload small {
            width: 100%;
            margin-left: 35px;
          }

          .career-modal-backdrop {
            padding: 12px;
          }

          .career-modal-header,
          .career-apply-form {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (max-width: 450px) {
          .careers-hero p {
            font-size: 15px;
          }

          .careers-section-heading h2 {
            font-size: 35px;
          }

          .career-modal-header h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
