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
} from "lucide-react";

import { useState } from "react";

const Careers = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [showApplyForm, setShowApplyForm] =
    useState(false);

  const [selectedJob, setSelectedJob] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);

  const [formError, setFormError] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
    cv: null,
  });

  /* =====================================================
     CATEGORIES
  ====================================================== */

  const categories = [
    "All",
    "IT",
    "Retail",
    "Management",
    "Marketing",
  ];

  /* =====================================================
     JOBS
  ====================================================== */

  const jobs = [
    {
      id: 1,
      title: "IT Executive",
      category: "IT",
      location:
        "Dubai / Al Ain / Abu Dhabi / Fujairah",
      type: "Full Time",
      description:
        "Support our stores and head office with IT systems, hardware, software, networking and day-to-day technical support.",
    },

    {
      id: 2,
      title: "IT Support Executive",
      category: "IT",
      location: "UAE",
      type: "Full Time",
      description:
        "Provide reliable technical support for users, computers, applications, network connectivity and IT assets.",
    },

    {
      id: 3,
      title: "Sales Executive",
      category: "Retail",
      location: "UAE",
      type: "Full Time",
      description:
        "Create a great shopping experience while helping customers discover the right products for their needs.",
    },

    {
      id: 4,
      title: "Cashier",
      category: "Retail",
      location: "UAE",
      type: "Full Time",
      description:
        "Handle customer transactions accurately while providing friendly and efficient service.",
    },

    {
      id: 5,
      title: "Store Supervisor",
      category: "Management",
      location: "UAE",
      type: "Full Time",
      description:
        "Lead store operations, support the team and help maintain excellent customer service and store standards.",
    },

    {
      id: 6,
      title: "Marketing Executive",
      category: "Marketing",
      location: "UAE",
      type: "Full Time",
      description:
        "Support campaigns, promotions, digital marketing activities and brand communication across our business.",
    },
  ];

  /* =====================================================
     FILTER
  ====================================================== */

  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter(
          (job) =>
            job.category === selectedCategory
        );

  /* =====================================================
     OPEN FORM
  ====================================================== */

  const openApplyForm = (jobTitle = "") => {
    setSelectedJob(jobTitle);

    setFormError("");

    setSuccessMessage("");

    setShowApplyForm(true);

    document.body.style.overflow = "hidden";
  };

  /* =====================================================
     CLOSE FORM
  ====================================================== */

  const closeApplyForm = () => {
    if (submitting) {
      return;
    }

    setShowApplyForm(false);

    setFormError("");

    setSuccessMessage("");

    document.body.style.overflow = "auto";
  };

  /* =====================================================
     HANDLE INPUT
  ====================================================== */

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFormError("");
  };

  /* =====================================================
     HANDLE CV
  ====================================================== */

  const handleFileChange = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) {
      setFormData((previous) => ({
        ...previous,
        cv: null,
      }));

      return;
    }

    const allowedExtensions = [
      ".pdf",
      ".doc",
      ".docx",
    ];

    const fileName =
      file.name.toLowerCase();

    const isAllowed =
      allowedExtensions.some(
        (extension) =>
          fileName.endsWith(extension)
      );

    if (!isAllowed) {
      setFormError(
        "Please upload a PDF, DOC or DOCX file."
      );

      event.target.value = "";

      setFormData((previous) => ({
        ...previous,
        cv: null,
      }));

      return;
    }

    if (
      file.size >
      5 * 1024 * 1024
    ) {
      setFormError(
        "CV file must be smaller than 5 MB."
      );

      event.target.value = "";

      setFormData((previous) => ({
        ...previous,
        cv: null,
      }));

      return;
    }

    setFormData((previous) => ({
      ...previous,
      cv: file,
    }));

    setFormError("");
  };

  /* =====================================================
     SUBMIT FORM

     NETLIFY FORM SUBMISSION
  ====================================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form =
      event.currentTarget;

    setFormError("");

    setSuccessMessage("");

    /* -----------------------------------------------
       CV
    ------------------------------------------------ */

    const cvInput =
      form.querySelector(
        'input[name="cv"]'
      );

    const cv =
      cvInput?.files?.[0];

    if (!cv) {
      setFormError(
        "Please upload your CV before submitting."
      );

      return;
    }

    /* -----------------------------------------------
       SIZE
    ------------------------------------------------ */

    if (
      cv.size >
      5 * 1024 * 1024
    ) {
      setFormError(
        "CV file must be smaller than 5 MB."
      );

      return;
    }

    /* -----------------------------------------------
       TYPE
    ------------------------------------------------ */

    const allowedExtensions = [
      ".pdf",
      ".doc",
      ".docx",
    ];

    const fileName =
      cv.name.toLowerCase();

    const isAllowed =
      allowedExtensions.some(
        (extension) =>
          fileName.endsWith(extension)
      );

    if (!isAllowed) {
      setFormError(
        "Please upload a PDF, DOC or DOCX file."
      );

      return;
    }

    setSubmitting(true);

    try {
      /* ---------------------------------------------
         CREATE FORMDATA

         IMPORTANT:
         Do not manually set Content-Type.
      ---------------------------------------------- */

      const data =
        new FormData(form);

      /* ---------------------------------------------
         NETLIFY FORM NAME
      ---------------------------------------------- */

      data.set(
        "form-name",
        "career-application"
      );

      /* ---------------------------------------------
         SUBMIT DIRECTLY TO NETLIFY
      ---------------------------------------------- */

      const response =
        await fetch("/", {
          method: "POST",
          body: data,
        });

      /* ---------------------------------------------
         CHECK RESPONSE
      ---------------------------------------------- */

      if (!response.ok) {
        throw new Error(
          `Netlify returned status ${response.status}`
        );
      }

      /* ---------------------------------------------
         SUCCESS
      ---------------------------------------------- */

      setSuccessMessage(
        "Application submitted successfully! Thank you for applying."
      );

      /* ---------------------------------------------
         RESET REACT STATE
      ---------------------------------------------- */

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
        cv: null,
      });

      /* ---------------------------------------------
         RESET FILE
      ---------------------------------------------- */

      if (cvInput) {
        cvInput.value = "";
      }

      setSubmitting(false);

      /* ---------------------------------------------
         CLOSE AFTER SUCCESS
      ---------------------------------------------- */

      setTimeout(() => {
        setShowApplyForm(false);

        setSuccessMessage("");

        document.body.style.overflow =
          "auto";
      }, 2500);

    } catch (error) {

      console.error(
        "Career application submission error:",
        error
      );

      setSubmitting(false);

      setFormError(
        "Unable to submit your application. Please try again."
      );
    }
  };

  return (
    <div className="cute-careers-page">

      {/* =================================================
          HERO
      ================================================== */}

      <section className="cute-careers-hero">

        <div className="cute-careers-hero-overlay"></div>

        <div className="cute-careers-hero-content">

          <div className="cute-careers-hero-badge">
            <Sparkles size={16} />

            <span>
              WE ARE GROWING
            </span>
          </div>

          <h1>
            Your Journey.
            <br />

            <span>
              Our Family.
            </span>
          </h1>

          <p>
            Join Al Fan Emirates and become
            part of a growing family where
            people, ideas and opportunities
            come together.
          </p>

          <button
            type="button"
            className="cute-careers-primary-btn"
            onClick={() =>
              document
                .getElementById(
                  "career-openings"
                )
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Explore Opportunities

            <ArrowRight size={18} />
          </button>

        </div>
      </section>

      {/* =================================================
          INTRO
      ================================================== */}

      <section className="cute-careers-intro">

        <div className="cute-careers-intro-icon">
          <Users size={30} />
        </div>

        <div>

          <span className="cute-section-label">
            COME GROW WITH US
          </span>

          <h2>
            More Than A Job.
            <br />

            <span>
              A Journey.
            </span>
          </h2>

          <p>
            At Al Fan Emirates, we believe
            our people are at the heart of
            everything we do. We are always
            looking for passionate,
            hardworking and positive
            individuals who want to learn,
            grow and make a difference.
          </p>

          <p>
            Whether you are starting your
            career or bringing years of
            experience, there may be a place
            for you in our growing family.
          </p>

        </div>

      </section>

      {/* =================================================
          VALUES
      ================================================== */}

      <section className="cute-careers-values">

        <div className="cute-careers-value-card">

          <div className="cute-careers-value-icon">
            <Heart size={26} />
          </div>

          <h3>
            Good People
          </h3>

          <p>
            We respect each other,
            support each other and
            grow together.
          </p>

        </div>

        <div className="cute-careers-value-card">

          <div className="cute-careers-value-icon">
            <GraduationCap size={26} />
          </div>

          <h3>
            Keep Learning
          </h3>

          <p>
            Every day is an opportunity
            to learn something new.
          </p>

        </div>

        <div className="cute-careers-value-card">

          <div className="cute-careers-value-icon">
            <Coffee size={26} />
          </div>

          <h3>
            Enjoy The Journey
          </h3>

          <p>
            We believe work should be
            meaningful, positive and
            enjoyable.
          </p>

        </div>

        <div className="cute-careers-value-card">

          <div className="cute-careers-value-icon">
            <Users size={26} />
          </div>

          <h3>
            Family Spirit
          </h3>

          <p>
            We work as one team and
            celebrate our shared success.
          </p>

        </div>

      </section>

      {/* =================================================
          JOB OPENINGS
      ================================================== */}

      <section
        className="cute-career-openings"
        id="career-openings"
      >

        <div className="cute-careers-heading">

          <span className="cute-section-label">
            OPPORTUNITIES
          </span>

          <h2>
            Find Your
            <span>
              {" "}Place.
            </span>
          </h2>

          <p>
            Explore our current opportunities
            and discover where your next
            chapter could begin.
          </p>

        </div>

        {/* FILTERS */}

        <div className="cute-careers-filters">

          {categories.map(
            (category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory ===
                  category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
              >
                {category}
              </button>
            )
          )}

        </div>

        {/* JOBS */}

        <div className="cute-careers-jobs-grid">

          {filteredJobs.map(
            (job) => (
              <article
                className="cute-career-job-card"
                key={job.id}
              >

                <div className="cute-career-job-top">

                  <div className="cute-career-job-icon">
                    <BriefcaseBusiness
                      size={25}
                    />
                  </div>

                  <span className="cute-career-job-category">
                    {job.category}
                  </span>

                </div>

                <h3>
                  {job.title}
                </h3>

                <p>
                  {job.description}
                </p>

                <div className="cute-career-job-meta">

                  <span>
                    <MapPin size={15} />
                    {job.location}
                  </span>

                  <span>
                    <Clock3 size={15} />
                    {job.type}
                  </span>

                </div>

                <button
                  type="button"
                  className="cute-career-apply-btn"
                  onClick={() =>
                    openApplyForm(
                      job.title
                    )
                  }
                >
                  Apply Now

                  <ArrowRight
                    size={17}
                  />
                </button>

              </article>
            )
          )}

        </div>

        {filteredJobs.length === 0 && (
          <div className="cute-careers-empty">

            <BriefcaseBusiness
              size={40}
            />

            <h3>
              No openings found
            </h3>

            <p>
              Please check again later
              for new opportunities.
            </p>

          </div>
        )}

      </section>

      {/* =================================================
          ONE TEAM
      ================================================== */}

      <section className="cute-careers-statement">

        <div className="cute-careers-statement-inner">

          <span className="cute-section-label">
            OUR CULTURE
          </span>

          <h2>
            ONE
            <br />

            <span>
              TEAM.
            </span>
          </h2>

          <p>
            Different people.
            <br />
            One beautiful journey.
          </p>

        </div>

      </section>

      {/* =================================================
          CTA
      ================================================== */}

      <section className="cute-careers-cta">

        <div className="cute-careers-cta-content">

          <span className="cute-section-label">
            YOUR NEXT CHAPTER
          </span>

          <h2>
            Don't See Your
            <br />

            <span>
              Perfect Role?
            </span>
          </h2>

          <p>
            We are always happy to meet
            talented, motivated people.
            Send us your CV and tell us
            how you could be part of
            Al Fan Emirates.
          </p>

          <button
            type="button"
            className="cute-careers-primary-btn"
            onClick={() =>
              openApplyForm("")
            }
          >
            Send Your CV

            <Send size={18} />
          </button>

        </div>

      </section>

      {/* =================================================
          APPLICATION MODAL
      ================================================== */}

      {showApplyForm && (
        <div
          className="career-apply-overlay"
          onMouseDown={(event) => {

            if (
              event.target ===
                event.currentTarget &&
              !submitting
            ) {
              closeApplyForm();
            }

          }}
        >

          <div className="career-apply-modal">

            {/* HEADER */}

            <div className="career-apply-header">

              <div>

                <span className="cute-section-label">
                  JOIN OUR TEAM
                </span>

                <h2>
                  Start Your
                  <br />

                  <span>
                    Journey.
                  </span>
                </h2>

              </div>

              <button
                type="button"
                className="career-apply-close"
                onClick={
                  closeApplyForm
                }
                disabled={submitting}
                aria-label="Close application form"
              >
                <X size={22} />
              </button>

            </div>

            {/* =================================================
                NETLIFY FORM
            ================================================== */}

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

              {/* REQUIRED */}

              <input
                type="hidden"
                name="form-name"
                value="career-application"
              />

              {/* HONEYPOT */}

              <div
                style={{
                  position:
                    "absolute",
                  overflow:
                    "hidden",
                  clip:
                    "rect(0 0 0 0)",
                  height:
                    "1px",
                  width:
                    "1px",
                  margin:
                    "-1px",
                  padding:
                    0,
                  border:
                    0,
                }}
              >
                <label>
                  Don't fill this out:

                  <input
                    name="bot-field"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>
              </div>

              {/* FULL NAME */}

              <div className="career-form-field">

                <label htmlFor="fullName">
                  Full Name *
                </label>

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={
                    formData.fullName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your full name"
                  required
                />

              </div>

              {/* EMAIL */}

              <div className="career-form-field">

                <label htmlFor="email">
                  Email Address *
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your email address"
                  required
                />

              </div>

              {/* PHONE */}

              <div className="career-form-field">

                <label htmlFor="phone">
                  Phone Number *
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="+971 XX XXX XXXX"
                  required
                />

              </div>

              {/* POSITION */}

              <div className="career-form-field">

                <label htmlFor="position">
                  Applying For *
                </label>

                <select
                  id="position"
                  name="position"
                  value={
                    selectedJob
                  }
                  onChange={(event) =>
                    setSelectedJob(
                      event.target.value
                    )
                  }
                  required
                >

                  <option value="">
                    Select a position
                  </option>

                  {jobs.map(
                    (job) => (
                      <option
                        key={job.id}
                        value={
                          job.title
                        }
                      >
                        {job.title}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* EXPERIENCE */}

              <div className="career-form-field">

                <label htmlFor="experience">
                  Years of Experience *
                </label>

                <select
                  id="experience"
                  name="experience"
                  value={
                    formData.experience
                  }
                  onChange={
                    handleChange
                  }
                  required
                >

                  <option value="">
                    Select experience
                  </option>

                  <option value="Fresher">
                    Fresher
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

              <div className="career-form-field">

                <label htmlFor="cv">
                  Upload CV *
                </label>

                <div className="career-file-input">

                  <Upload size={20} />

                  <input
                    id="cv"
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={
                      handleFileChange
                    }
                    required
                  />

                </div>

                <small>
                  PDF, DOC or DOCX —
                  maximum 5 MB
                </small>

                {formData.cv && (
                  <div className="career-selected-file">

                    <Upload size={15} />

                    <span>
                      {formData.cv.name}
                    </span>

                  </div>
                )}

              </div>

              {/* MESSAGE */}

              <div className="career-form-field">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={
                    formData.message
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Tell us a little about yourself..."
                  rows="5"
                />

              </div>

              {/* ERROR */}

              {formError && (
                <div className="career-form-error">
                  {formError}
                </div>
              )}

              {/* SUCCESS */}

              {successMessage && (
                <div className="career-form-success">
                  {successMessage}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                className="career-submit-btn"
                disabled={submitting}
              >

                {submitting ? (
                  <>
                    <span className="career-spinner"></span>

                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application

                    <Send size={18} />
                  </>
                )}

              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};

export default Careers;