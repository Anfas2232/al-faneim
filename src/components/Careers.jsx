// import {
//   ArrowRight,
//   BriefcaseBusiness,
//   MapPin,
//   Users,
//   Heart,
//   Sparkles,
//   GraduationCap,
//   Coffee,
//   Clock3,
//   Send,
//   X,
//   Upload,
// } from "lucide-react";

// import { useState } from "react";

// function Careers() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [showApplyForm, setShowApplyForm] = useState(false);
//   const [selectedJob, setSelectedJob] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [formError, setFormError] = useState("");

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     experience: "",
//     message: "",
//     cv: null,
//   });

//   const jobs = [
//     {
//       title: "IT Executive",
//       category: "IT",
//       location: "Dubai / Al Ain / Abu Dhabi / Fujairah",
//       type: "Full Time",
//       description:
//         "Help keep our stores, systems and everyday technology running smoothly.",
//     },
//     {
//       title: "IT Support Executive",
//       category: "IT",
//       location: "UAE",
//       type: "Full Time",
//       description:
//         "Support our teams with hardware, software, POS and day-to-day technical needs.",
//     },
//     {
//       title: "Sales Executive",
//       category: "Retail",
//       location: "UAE",
//       type: "Full Time",
//       description:
//         "Create a warm shopping experience and help customers discover what they love.",
//     },
//     {
//       title: "Cashier",
//       category: "Retail",
//       location: "UAE",
//       type: "Full Time",
//       description:
//         "Be part of the final step in creating a smooth and friendly customer experience.",
//     },
//     {
//       title: "Store Supervisor",
//       category: "Management",
//       location: "UAE",
//       type: "Full Time",
//       description:
//         "Lead with positivity, support your team and help the store shine every day.",
//     },
//     {
//       title: "Marketing Executive",
//       category: "Marketing",
//       location: "UAE",
//       type: "Full Time",
//       description:
//         "Bring fresh ideas to campaigns, social media and exciting brand experiences.",
//     },
//   ];

//   const categories = [
//     "All",
//     "IT",
//     "Retail",
//     "Management",
//     "Marketing",
//   ];

//   const filteredJobs =
//     selectedCategory === "All"
//       ? jobs
//       : jobs.filter(
//           (job) => job.category === selectedCategory
//         );

//   // =========================================================
//   // SCROLL TO JOBS
//   // =========================================================

//   const scrollToJobs = () => {
//     const section =
//       document.getElementById("career-openings");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   // =========================================================
//   // OPEN APPLICATION
//   // =========================================================

//   const applyForJob = (jobTitle) => {
//     setSelectedJob(jobTitle);
//     setSubmitted(false);
//     setSubmitting(false);
//     setFormError("");

//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       experience: "",
//       message: "",
//       cv: null,
//     });

//     setShowApplyForm(true);

//     document.body.style.overflow = "hidden";
//   };

//   // =========================================================
//   // CLOSE APPLICATION
//   // =========================================================

//   const closeApplyForm = () => {
//     setShowApplyForm(false);
//     setSubmitted(false);
//     setSubmitting(false);
//     setFormError("");

//     document.body.style.overflow = "auto";
//   };

//   // =========================================================
//   // INPUT CHANGE
//   // =========================================================

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (formError) {
//       setFormError("");
//     }
//   };

//   // =========================================================
//   // CV UPLOAD
//   // =========================================================

//   const handleFileChange = (event) => {
//     const file = event.target.files?.[0];

//     if (!file) {
//       return;
//     }

//     // Maximum 5 MB
//     if (file.size > 5 * 1024 * 1024) {
//       setFormError(
//         "CV file must be smaller than 5 MB."
//       );

//       event.target.value = "";

//       setFormData((previous) => ({
//         ...previous,
//         cv: null,
//       }));

//       return;
//     }

//     // Allowed extensions
//     const allowedExtensions = [
//       ".pdf",
//       ".doc",
//       ".docx",
//     ];

//     const fileName = file.name.toLowerCase();

//     const isAllowed = allowedExtensions.some(
//       (extension) => fileName.endsWith(extension)
//     );

//     if (!isAllowed) {
//       setFormError(
//         "Please upload a PDF, DOC or DOCX file."
//       );

//       event.target.value = "";

//       setFormData((previous) => ({
//         ...previous,
//         cv: null,
//       }));

//       return;
//     }

//     setFormError("");

//     setFormData((previous) => ({
//       ...previous,
//       cv: file,
//     }));
//   };

//   // =========================================================
//   // SUBMIT TO NETLIFY
//   // =========================================================

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (submitting) {
//       return;
//     }

//     setSubmitting(true);
//     setFormError("");

//     try {
//       const form = event.currentTarget;

//       // Build FormData from the form
//       const data = new FormData(form);

//       // IMPORTANT FOR NETLIFY
//       data.set(
//         "form-name",
//         "career-application"
//       );

//       // Selected job
//       data.set(
//         "position",
//         selectedJob
//       );

//       // Validate CV
//       const cv = data.get("cv");

//       if (
//         !cv ||
//         !(cv instanceof File) ||
//         cv.size === 0
//       ) {
//         setFormError(
//           "Please upload your CV before submitting."
//         );

//         setSubmitting(false);
//         return;
//       }

//       // Submit multipart form directly to Netlify
//       const response = await fetch(
//         window.location.pathname || "/",
//         {
//           method: "POST",
//           body: data,
//         }
//       );

//       if (!response.ok) {
//         throw new Error(
//           `Netlify returned status ${response.status}`
//         );
//       }

//       // Successful submission
//       setSubmitted(true);

//     } catch (error) {
//       console.error(
//         "Career application submission error:",
//         error
//       );

//       setFormError(
//         "Something went wrong. Please try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {/* =====================================================
//           CAREERS PAGE
//       ===================================================== */}

//       <main
//         id="careers"
//         className="cute-careers-page"
//       >
//         {/* =====================================================
//             HERO
//         ===================================================== */}

//         <section className="cute-careers-hero">
//           <div className="cute-hero-shape cute-shape-one"></div>
//           <div className="cute-hero-shape cute-shape-two"></div>
//           <div className="cute-hero-shape cute-shape-three"></div>

//           <div className="cute-hero-container">
//             <div className="cute-hero-content">
//               <div className="cute-hero-badge">
//                 <Sparkles size={14} />
//                 <span>WE ARE GROWING</span>
//               </div>

//               <h1>
//                 Your Journey.
//                 <br />
//                 <span>Our Family.</span>
//               </h1>

//               <p>
//                 Come grow with a team that believes
//                 great things happen when good people
//                 work together.
//               </p>

//               <div className="cute-hero-actions">
//                 <button
//                   type="button"
//                   className="cute-primary-btn"
//                   onClick={scrollToJobs}
//                 >
//                   <span>
//                     Explore Opportunities
//                   </span>

//                   <ArrowRight size={17} />
//                 </button>

//                 <span className="cute-hero-note">
//                   Made with people in mind
//                   <Heart size={13} />
//                 </span>
//               </div>
//             </div>

//             <div className="cute-hero-visual">
//               <div className="cute-visual-card">
//                 <div className="cute-visual-top">
//                   <span>AL FAN</span>
//                   <span className="cute-visual-dot"></span>
//                 </div>

//                 <div className="cute-visual-center">
//                   <div className="cute-visual-icon">
//                     <Users size={34} />
//                   </div>

//                   <strong>
//                     Better
//                     <br />
//                     Together.
//                   </strong>
//                 </div>

//                 <div className="cute-visual-bottom">
//                   <span>PEOPLE</span>
//                   <span>PASSION</span>
//                   <span>GROWTH</span>
//                 </div>
//               </div>

//               <div className="cute-floating-card cute-card-love">
//                 <Heart size={15} />
//                 <span>People First</span>
//               </div>

//               <div className="cute-floating-card cute-card-growth">
//                 <Sparkles size={15} />
//                 <span>Grow With Us</span>
//               </div>
//             </div>
//           </div>

//           <div className="cute-hero-scroll">
//             <span>SCROLL TO EXPLORE</span>
//             <div></div>
//           </div>
//         </section>

//         {/* =====================================================
//             INTRO
//         ===================================================== */}

//         <section className="cute-careers-intro">
//           <div className="cute-careers-container">
//             <div className="cute-section-heading">
//               <div>
//                 <span className="cute-section-label">
//                   LIFE AT AL FAN EMIRATES
//                 </span>

//                 <h2>
//                   Work hard.
//                   <br />
//                   <span>Grow happily.</span>
//                 </h2>
//               </div>

//               <p>
//                 We are more than a workplace.
//                 We are a growing family of people
//                 who bring energy, creativity and care
//                 into everything we do.
//               </p>
//             </div>

//             <div className="cute-values-grid">
//               <article className="cute-value-card">
//                 <div className="cute-value-icon">
//                   <Users size={22} />
//                 </div>

//                 <span>01</span>

//                 <h3>Good People</h3>

//                 <p>
//                   A friendly environment where
//                   everyone has a chance to contribute.
//                 </p>
//               </article>

//               <article className="cute-value-card">
//                 <div className="cute-value-icon">
//                   <GraduationCap size={22} />
//                 </div>

//                 <span>02</span>

//                 <h3>Keep Learning</h3>

//                 <p>
//                   Discover new skills and keep
//                   moving your career forward.
//                 </p>
//               </article>

//               <article className="cute-value-card">
//                 <div className="cute-value-icon">
//                   <Coffee size={22} />
//                 </div>

//                 <span>03</span>

//                 <h3>Enjoy The Journey</h3>

//                 <p>
//                   We believe work can be meaningful,
//                   productive and enjoyable.
//                 </p>
//               </article>

//               <article className="cute-value-card">
//                 <div className="cute-value-icon">
//                   <Heart size={22} />
//                 </div>

//                 <span>04</span>

//                 <h3>Family Spirit</h3>

//                 <p>
//                   Respect, teamwork and care are
//                   part of who we are.
//                 </p>
//               </article>
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             OPENINGS
//         ===================================================== */}

//         <section
//           className="cute-career-openings"
//           id="career-openings"
//         >
//           <div className="cute-careers-container">
//             <div className="cute-section-heading openings-heading">
//               <div>
//                 <span className="cute-section-label">
//                   FIND YOUR PLACE
//                 </span>

//                 <h2>
//                   Let's Find
//                   <br />
//                   <span>Your Role.</span>
//                 </h2>
//               </div>

//               <p>
//                 Find an opportunity where your skills,
//                 personality and ambitions can make
//                 a real difference.
//               </p>
//             </div>

//             {/* FILTERS */}

//             <div className="cute-career-filters">
//               {categories.map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={
//                     selectedCategory === category
//                       ? "cute-career-filter active"
//                       : "cute-career-filter"
//                   }
//                   onClick={() =>
//                     setSelectedCategory(category)
//                   }
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             {/* JOBS */}

//             <div className="cute-job-list">
//               {filteredJobs.map((job, index) => (
//                 <article
//                   className="cute-job-card"
//                   key={job.title}
//                 >
//                   <div className="cute-job-number">
//                     {String(index + 1).padStart(2, "0")}
//                   </div>

//                   <div className="cute-job-icon">
//                     <BriefcaseBusiness size={21} />
//                   </div>

//                   <div className="cute-job-content">
//                     <span>{job.category}</span>

//                     <h3>{job.title}</h3>

//                     <p>{job.description}</p>

//                     <div className="cute-job-meta">
//                       <span>
//                         <MapPin size={14} />
//                         {job.location}
//                       </span>

//                       <span>
//                         <Clock3 size={14} />
//                         {job.type}
//                       </span>
//                     </div>
//                   </div>

//                   <button
//                     type="button"
//                     className="cute-apply-btn"
//                     onClick={() =>
//                       applyForJob(job.title)
//                     }
//                   >
//                     <span>Apply</span>
//                     <ArrowRight size={17} />
//                   </button>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             STATEMENT
//         ===================================================== */}

//         <section className="cute-careers-statement">
//           <div className="cute-statement-decoration">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>

//           <div className="cute-statement-content">
//             <span className="cute-section-label">
//               ONE TEAM
//             </span>

//             <h2>
//               Different people.
//               <br />
//               <span>
//                 One beautiful journey.
//               </span>
//             </h2>

//             <p>
//               Bring your personality, your ideas
//               and your ambition. There is a place
//               for you here.
//             </p>
//           </div>
//         </section>

//         {/* =====================================================
//             FINAL CTA
//         ===================================================== */}

//         <section className="cute-careers-cta">
//           <div className="cute-cta-circle circle-one"></div>
//           <div className="cute-cta-circle circle-two"></div>

//           <div className="cute-cta-content">
//             <div className="cute-cta-icon">
//               <Send size={23} />
//             </div>

//             <span className="cute-section-label">
//               YOUR NEXT CHAPTER
//             </span>

//             <h2>
//               Don't See Your
//               <br />
//               <span>Perfect Role?</span>
//             </h2>

//             <p>
//               We are always happy to meet talented
//               people. Send us your CV and tell us
//               how you can be part of our journey.
//             </p>

//             <button
//               type="button"
//               className="cute-cta-btn"
//               onClick={() =>
//                 applyForJob("General Application")
//               }
//             >
//               <span>Send Your CV</span>
//               <ArrowRight size={17} />
//             </button>
//           </div>
//         </section>
//       </main>

//       {/* =====================================================
//           APPLICATION MODAL
//       ===================================================== */}

//       {showApplyForm && (
//         <div
//           className="career-apply-overlay"
//           onMouseDown={(event) => {
//             if (
//               event.target === event.currentTarget
//             ) {
//               closeApplyForm();
//             }
//           }}
//         >
//           <div
//             className="career-apply-modal"
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="career-apply-title"
//           >
//             {/* HEADER */}

//             <div className="career-apply-header">
//               <div>
//                 <span className="career-apply-label">
//                   CAREER APPLICATION
//                 </span>

//                 <h2 id="career-apply-title">
//                   Apply for this role
//                 </h2>

//                 <p>{selectedJob}</p>
//               </div>

//               <button
//                 type="button"
//                 className="career-apply-close"
//                 onClick={closeApplyForm}
//                 aria-label="Close application form"
//               >
//                 <X size={22} />
//               </button>
//             </div>

//             {/* SUCCESS */}

//             {submitted ? (
//               <div className="career-apply-success">
//                 <div className="career-success-icon">
//                   <Send size={28} />
//                 </div>

//                 <h3>
//                   Application Submitted!
//                 </h3>

//                 <p>
//                   Thank you for applying to
//                   Al Fan Emirates. Your application
//                   has been submitted successfully.
//                 </p>

//                 <button
//                   type="button"
//                   className="career-success-btn"
//                   onClick={closeApplyForm}
//                 >
//                   Done
//                 </button>
//               </div>
//             ) : (
//               <form
//                 name="career-application"
//                 method="POST"
//                 action="/"
//                 data-netlify="true"
//                 data-netlify-honeypot="bot-field"
//                 encType="multipart/form-data"
//                 className="career-apply-form"
//                 onSubmit={handleSubmit}
//               >
//                 {/* NETLIFY */}

//                 <input
//                   type="hidden"
//                   name="form-name"
//                   value="career-application"
//                 />

//                 {/* HONEYPOT */}

//                 <div
//                   style={{
//                     display: "none",
//                   }}
//                 >
//                   <label>
//                     Don't fill this out:

//                     <input
//                       name="bot-field"
//                       tabIndex="-1"
//                       autoComplete="off"
//                     />
//                   </label>
//                 </div>

//                 {/* NAME */}

//                 <div className="career-form-group">
//                   <label htmlFor="career-name">
//                     Full Name
//                   </label>

//                   <input
//                     id="career-name"
//                     type="text"
//                     name="fullName"
//                     placeholder="Enter your full name"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 {/* EMAIL + PHONE */}

//                 <div className="career-form-row">
//                   <div className="career-form-group">
//                     <label htmlFor="career-email">
//                       Email Address
//                     </label>

//                     <input
//                       id="career-email"
//                       type="email"
//                       name="email"
//                       placeholder="yourname@email.com"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="career-form-group">
//                     <label htmlFor="career-phone">
//                       Phone Number
//                     </label>

//                     <input
//                       id="career-phone"
//                       type="tel"
//                       name="phone"
//                       placeholder="+971 XX XXX XXXX"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* POSITION */}

//                 <div className="career-form-group">
//                   <label htmlFor="career-position">
//                     Position
//                   </label>

//                   <input
//                     id="career-position"
//                     type="text"
//                     name="position"
//                     value={selectedJob}
//                     readOnly
//                   />
//                 </div>

//                 {/* EXPERIENCE */}

//                 <div className="career-form-group">
//                   <label htmlFor="career-experience">
//                     Experience
//                   </label>

//                   <select
//                     id="career-experience"
//                     name="experience"
//                     value={formData.experience}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="">
//                       Select your experience
//                     </option>

//                     <option value="Fresher">
//                       Fresher
//                     </option>

//                     <option value="1-2 Years">
//                       1 - 2 Years
//                     </option>

//                     <option value="3-5 Years">
//                       3 - 5 Years
//                     </option>

//                     <option value="5+ Years">
//                       5+ Years
//                     </option>
//                   </select>
//                 </div>

//                 {/* CV */}

//                 <div className="career-form-group">
//                   <label htmlFor="career-cv">
//                     Upload CV
//                   </label>

//                   <label
//                     htmlFor="career-cv"
//                     className="career-upload-box"
//                   >
//                     <Upload size={20} />

//                     <span>
//                       {formData.cv
//                         ? formData.cv.name
//                         : "Choose your CV"}
//                     </span>

//                     <small>
//                       PDF, DOC or DOCX • Max 5 MB
//                     </small>
//                   </label>

//                   <input
//                     id="career-cv"
//                     type="file"
//                     name="cv"
//                     accept=".pdf,.doc,.docx"
//                     onChange={handleFileChange}
//                     required
//                     hidden
//                   />
//                 </div>

//                 {/* MESSAGE */}

//                 <div className="career-form-group">
//                   <label htmlFor="career-message">
//                     Cover Message
//                   </label>

//                   <textarea
//                     id="career-message"
//                     name="message"
//                     rows="5"
//                     placeholder="Tell us a little about yourself..."
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 {/* ERROR */}

//                 {formError && (
//                   <div
//                     style={{
//                       marginBottom: "15px",
//                       padding: "12px 14px",
//                       borderRadius: "10px",
//                       background: "#fff1f1",
//                       color: "#c0392b",
//                       fontSize: "13px",
//                     }}
//                   >
//                     {formError}
//                   </div>
//                 )}

//                 {/* SUBMIT */}

//                 <button
//                   type="submit"
//                   className="career-submit-btn"
//                   disabled={submitting}
//                 >
//                   <span>
//                     {submitting
//                       ? "Submitting..."
//                       : "Submit Application"}
//                   </span>

//                   <Send size={17} />
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Careers;
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
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [showApplyForm, setShowApplyForm] = useState(false);

  const [selectedJob, setSelectedJob] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const [formError, setFormError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
    cv: null,
  });

  const categories = [
    "All",
    "IT",
    "Retail",
    "Management",
    "Marketing",
  ];

  const jobs = [
    {
      id: 1,
      title: "IT Executive",
      category: "IT",
      location: "Dubai / Al Ain / Abu Dhabi / Fujairah",
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

  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter(
          (job) => job.category === selectedCategory
        );

  const openApplyForm = (jobTitle = "") => {
    setSelectedJob(jobTitle);
    setFormError("");
    setSuccessMessage("");
    setShowApplyForm(true);

    document.body.style.overflow = "hidden";
  };

  const closeApplyForm = () => {
    if (submitting) return;

    setShowApplyForm(false);
    setFormError("");
    setSuccessMessage("");

    document.body.style.overflow = "auto";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFormError("");
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

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

    const fileName = file.name.toLowerCase();

    const isAllowed = allowedExtensions.some((extension) =>
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

    if (file.size > 5 * 1024 * 1024) {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setFormError("");
    setSuccessMessage("");

    const cvInput = form.querySelector(
      'input[name="cv"]'
    );

    const cv = cvInput?.files?.[0];

    if (!cv) {
      setFormError(
        "Please upload your CV before submitting."
      );
      return;
    }

    if (cv.size > 5 * 1024 * 1024) {
      setFormError(
        "CV file must be smaller than 5 MB."
      );
      return;
    }

    const allowedExtensions = [
      ".pdf",
      ".doc",
      ".docx",
    ];

    const fileName = cv.name.toLowerCase();

    const isAllowed = allowedExtensions.some(
      (extension) => fileName.endsWith(extension)
    );

    if (!isAllowed) {
      setFormError(
        "Please upload a PDF, DOC or DOCX file."
      );
      return;
    }

    setSubmitting(true);

    try {
      /*
       * IMPORTANT:
       * Netlify Forms expects the form-name field.
       * FormData is used because the form contains a CV file.
       */
      const formDataToSend = new FormData(form);

      formDataToSend.set(
        "form-name",
        "career-application"
      );

      /*
       * Do NOT manually set Content-Type.
       * Browser automatically creates multipart/form-data
       * boundary because a file is being uploaded.
       */
      const response = await fetch("/", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(
          `Netlify returned status ${response.status}`
        );
      }

      setSuccessMessage(
        "Application submitted successfully! Thank you for applying."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
        cv: null,
      });

      if (cvInput) {
        cvInput.value = "";
      }

      setSubmitting(false);

      setTimeout(() => {
        setShowApplyForm(false);
        setSuccessMessage("");
        document.body.style.overflow = "auto";
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

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="cute-careers-hero">
        <div className="cute-careers-hero-overlay"></div>

        <div className="cute-careers-hero-content">

          <div className="cute-careers-hero-badge">
            <Sparkles size={16} />
            <span>WE ARE GROWING</span>
          </div>

          <h1>
            Your Journey.
            <br />
            <span>Our Family.</span>
          </h1>

          <p>
            Join Al Fan Emirates and become part of a
            growing family where people, ideas and
            opportunities come together.
          </p>

          <button
            className="cute-careers-primary-btn"
            onClick={() =>
              document
                .getElementById("career-openings")
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

      {/* =====================================================
          INTRO
      ===================================================== */}

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
            <span>A Journey.</span>
          </h2>

          <p>
            At Al Fan Emirates, we believe our people
            are at the heart of everything we do. We
            are always looking for passionate,
            hardworking and positive individuals who
            want to learn, grow and make a difference.
          </p>

          <p>
            Whether you are starting your career or
            bringing years of experience, there may
            be a place for you in our growing family.
          </p>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="cute-careers-values">

        <div className="cute-careers-value-card">
          <div className="cute-careers-value-icon">
            <Heart size={26} />
          </div>

          <h3>Good People</h3>

          <p>
            We respect each other, support each other
            and grow together.
          </p>
        </div>

        <div className="cute-careers-value-card">
          <div className="cute-careers-value-icon">
            <GraduationCap size={26} />
          </div>

          <h3>Keep Learning</h3>

          <p>
            Every day is an opportunity to learn
            something new.
          </p>
        </div>

        <div className="cute-careers-value-card">
          <div className="cute-careers-value-icon">
            <Coffee size={26} />
          </div>

          <h3>Enjoy The Journey</h3>

          <p>
            We believe work should be meaningful,
            positive and enjoyable.
          </p>
        </div>

        <div className="cute-careers-value-card">
          <div className="cute-careers-value-icon">
            <Users size={26} />
          </div>

          <h3>Family Spirit</h3>

          <p>
            We work as one team and celebrate our
            shared success.
          </p>
        </div>

      </section>

      {/* =====================================================
          OPENINGS
      ===================================================== */}

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
            <span> Place.</span>
          </h2>

          <p>
            Explore our current opportunities and
            discover where your next chapter could begin.
          </p>

        </div>

        {/* CATEGORY FILTER */}

        <div className="cute-careers-filters">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
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

        {/* JOB CARDS */}

        <div className="cute-careers-jobs-grid">

          {filteredJobs.map((job) => (
            <article
              className="cute-career-job-card"
              key={job.id}
            >

              <div className="cute-career-job-top">

                <div className="cute-career-job-icon">
                  <BriefcaseBusiness size={25} />
                </div>

                <span className="cute-career-job-category">
                  {job.category}
                </span>

              </div>

              <h3>{job.title}</h3>

              <p>{job.description}</p>

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
                  openApplyForm(job.title)
                }
              >
                Apply Now
                <ArrowRight size={17} />
              </button>

            </article>
          ))}

        </div>

        {filteredJobs.length === 0 && (
          <div className="cute-careers-empty">
            <BriefcaseBusiness size={40} />

            <h3>
              No openings found
            </h3>

            <p>
              Please check again later for new
              opportunities.
            </p>
          </div>
        )}

      </section>

      {/* =====================================================
          ONE TEAM
      ===================================================== */}

      <section className="cute-careers-statement">

        <div className="cute-careers-statement-inner">

          <span className="cute-section-label">
            OUR CULTURE
          </span>

          <h2>
            ONE
            <br />
            <span>TEAM.</span>
          </h2>

          <p>
            Different people.
            <br />
            One beautiful journey.
          </p>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cute-careers-cta">

        <div className="cute-careers-cta-content">

          <span className="cute-section-label">
            YOUR NEXT CHAPTER
          </span>

          <h2>
            Don't See Your
            <br />
            <span>Perfect Role?</span>
          </h2>

          <p>
            We are always happy to meet talented,
            motivated people. Send us your CV and
            tell us how you could be part of
            Al Fan Emirates.
          </p>

          <button
            type="button"
            className="cute-careers-primary-btn"
            onClick={() => openApplyForm("")}
          >
            Send Your CV
            <Send size={18} />
          </button>

        </div>

      </section>

      {/* =====================================================
          APPLICATION MODAL
      ===================================================== */}

      {showApplyForm && (
        <div
          className="career-apply-overlay"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget &&
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
                  <span>Journey.</span>
                </h2>
              </div>

              <button
                type="button"
                className="career-apply-close"
                onClick={closeApplyForm}
                disabled={submitting}
                aria-label="Close application form"
              >
                <X size={22} />
              </button>

            </div>

            {/* =================================================
                NETLIFY FORM
            ================================================= */}

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

              {/* REQUIRED NETLIFY FORM NAME */}

              <input
                type="hidden"
                name="form-name"
                value="career-application"
              />

              {/* HONEYPOT */}

              <div
                style={{
                  position: "absolute",
                  overflow: "hidden",
                  clip: "rect(0 0 0 0)",
                  height: "1px",
                  width: "1px",
                  margin: "-1px",
                  padding: 0,
                  border: 0,
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
                  value={formData.fullName}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
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
                  value={selectedJob}
                  onChange={(event) =>
                    setSelectedJob(event.target.value)
                  }
                  required
                >
                  <option value="">
                    Select a position
                  </option>

                  {jobs.map((job) => (
                    <option
                      key={job.id}
                      value={job.title}
                    >
                      {job.title}
                    </option>
                  ))}
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
                  value={formData.experience}
                  onChange={handleChange}
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
                    onChange={handleFileChange}
                    required
                  />

                </div>

                <small>
                  PDF, DOC or DOCX — maximum 5 MB
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
                  value={formData.message}
                  onChange={handleChange}
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