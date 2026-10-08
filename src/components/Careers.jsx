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

const jobs = [
  {
    title: "IT Executive",
    category: "IT",
    location: "Dubai / Al Ain / Abu Dhabi / Fujairah",
    type: "Full Time",
    description:
      "Support our stores and office teams with day-to-day IT operations, troubleshooting, systems and network support.",
  },
  {
    title: "IT Support Executive",
    category: "IT",
    location: "UAE",
    type: "Full Time",
    description:
      "Provide first-line technical support for hardware, software, users, networks and business applications.",
  },
  {
    title: "Sales Executive",
    category: "Retail",
    location: "UAE",
    type: "Full Time",
    description:
      "Create an excellent shopping experience while supporting customers and achieving store sales goals.",
  },
  {
    title: "Cashier",
    category: "Retail",
    location: "UAE",
    type: "Full Time",
    description:
      "Handle customer transactions accurately while delivering friendly and professional service.",
  },
  {
    title: "Store Supervisor",
    category: "Management",
    location: "UAE",
    type: "Full Time",
    description:
      "Lead store operations, support team members and ensure a smooth customer experience.",
  },
  {
    title: "Marketing Executive",
    category: "Marketing",
    location: "UAE",
    type: "Full Time",
    description:
      "Support marketing campaigns, digital activities, promotions and brand communication.",
  },
];

const categories = [
  "All",
  "IT",
  "Retail",
  "Management",
  "Marketing",
];

const values = [
  {
    icon: Users,
    title: "Good People",
    text: "We believe great teams are built by people who care, support each other and bring positive energy.",
  },
  {
    icon: GraduationCap,
    title: "Keep Learning",
    text: "We encourage curiosity, development and continuous learning at every stage of your career.",
  },
  {
    icon: Coffee,
    title: "Enjoy The Journey",
    text: "Work should be meaningful, energetic and enjoyable. We celebrate progress along the way.",
  },
  {
    icon: Heart,
    title: "Family Spirit",
    text: "We work together as one family, respecting different backgrounds, ideas and experiences.",
  },
];

export default function Careers() {
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

  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter(
          (job) => job.category === selectedCategory
        );

  const openApplication = (jobTitle = "") => {
    setSelectedJob(jobTitle);

    setFormError("");

    setSuccessMessage("");

    setShowApplyForm(true);

    document.body.style.overflow = "hidden";
  };

  const closeApplication = () => {
    if (submitting) return;

    setShowApplyForm(false);

    setFormError("");

    setSuccessMessage("");

    document.body.style.overflow = "auto";
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "cv") {
      setFormData((previous) => ({
        ...previous,
        cv: files?.[0] || null,
      }));

      setFormError("");

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
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

    if (!formData.fullName.trim()) {
      setFormError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setFormError("Please enter your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setFormError("Please enter your phone number.");
      return;
    }

    if (!selectedJob) {
      setFormError("Please select a position.");
      return;
    }

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
       * Do not manually set Content-Type here.
       * FormData automatically creates the correct
       * multipart/form-data boundary for the CV upload.
       */

      const formDataToSend = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(
          `Netlify returned status ${response.status}`
        );
      }

      setSubmitting(false);

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
    <main className="cute-careers-page">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="cute-careers-hero">
        <div className="cute-careers-hero-overlay"></div>

        <div className="cute-careers-hero-content">
          <div className="cute-careers-badge">
            <Sparkles size={16} />
            <span>WE ARE GROWING</span>
          </div>

          <h1>
            Your Journey.
            <br />
            <span>Our Family.</span>
          </h1>

          <p>
            Join AL FAN EMIRATES and be part of a growing
            team creating better shopping experiences
            for families across the UAE.
          </p>

          <button
            type="button"
            className="cute-careers-primary-btn"
            onClick={() => {
              document
                .getElementById("career-openings")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Explore Opportunities
            <ArrowRight size={19} />
          </button>
        </div>

        <div className="cute-careers-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="cute-careers-scroll-line"></div>
        </div>
      </section>

      {/* =====================================================
          INTRO
          ===================================================== */}

      <section className="cute-careers-intro">
        <div className="cute-careers-intro-inner">
          <div className="cute-careers-intro-label">
            <BriefcaseBusiness size={18} />
            <span>CAREERS AT AL FAN EMIRATES</span>
          </div>

          <h2>
            Build something
            <br />
            <span>meaningful with us.</span>
          </h2>

          <p>
            We are always looking for talented, motivated
            and positive people who want to grow with us.
            Whether you are starting your career or bringing
            years of experience, there may be a place for
            you at AL FAN EMIRATES.
          </p>
        </div>
      </section>

      {/* =====================================================
          VALUES
          ===================================================== */}

      <section className="cute-careers-values">
        <div className="cute-careers-section-heading">
          <span>WHAT WE BELIEVE</span>

          <h2>
            More than a job.
            <br />
            <em>A journey.</em>
          </h2>
        </div>

        <div className="cute-careers-values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                className="cute-careers-value-card"
                key={value.title}
              >
                <div className="cute-careers-value-icon">
                  <Icon size={24} />
                </div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          ONE TEAM
          ===================================================== */}

      <section className="cute-careers-statement">
        <div className="cute-careers-statement-content">
          <div className="cute-careers-statement-small">
            OUR CULTURE
          </div>

          <h2>
            ONE
            <br />
            <span>TEAM</span>
          </h2>

          <p>
            Different people. One beautiful journey.
          </p>
        </div>
      </section>

      {/* =====================================================
          JOB OPENINGS
          ===================================================== */}

      <section
        id="career-openings"
        className="cute-career-openings"
      >
        <div className="cute-careers-openings-header">
          <div>
            <div className="cute-careers-section-label">
              <BriefcaseBusiness size={17} />
              <span>OPEN POSITIONS</span>
            </div>

            <h2>
              Find your
              <br />
              <span>next opportunity.</span>
            </h2>
          </div>

          <p>
            Explore our current opportunities and find
            the role that fits your skills and ambitions.
          </p>
        </div>

        {/* Category filters */}

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

        {/* Job cards */}

        <div className="cute-careers-job-grid">
          {filteredJobs.map((job) => (
            <article
              className="cute-careers-job-card"
              key={job.title}
            >
              <div className="cute-careers-job-top">
                <span className="cute-careers-job-category">
                  {job.category}
                </span>

                <div className="cute-careers-job-icon">
                  <BriefcaseBusiness size={20} />
                </div>
              </div>

              <h3>{job.title}</h3>

              <p>{job.description}</p>

              <div className="cute-careers-job-meta">
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
                className="cute-careers-apply-btn"
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
          <div className="cute-careers-empty">
            <BriefcaseBusiness size={35} />

            <h3>No current openings</h3>

            <p>
              We do not currently have an opening in
              this category. Please check again soon.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="cute-careers-cta">
        <div className="cute-careers-cta-inner">
          <div className="cute-careers-cta-icon">
            <Sparkles size={25} />
          </div>

          <span>YOUR NEXT CHAPTER</span>

          <h2>
            Don't See Your
            <br />
            <em>Perfect Role?</em>
          </h2>

          <p>
            We are always interested in meeting talented
            people. Send us your CV and tell us how you
            can become part of our growing family.
          </p>

          <button
            type="button"
            className="cute-careers-cta-btn"
            onClick={() => openApplication("")}
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
              closeApplication();
            }
          }}
        >
          <div className="career-apply-modal">
            {/* Modal header */}

            <div className="career-apply-header">
              <div>
                <span>CAREER APPLICATION</span>

                <h2>
                  Join our
                  <br />
                  <em>team.</em>
                </h2>
              </div>

              <button
                type="button"
                className="career-apply-close"
                onClick={closeApplication}
                disabled={submitting}
                aria-label="Close application form"
              >
                <X size={22} />
              </button>
            </div>

            {/* Selected position */}

            {selectedJob && (
              <div className="career-selected-position">
                <BriefcaseBusiness size={18} />

                <div>
                  <small>APPLYING FOR</small>

                  <strong>{selectedJob}</strong>
                </div>
              </div>
            )}

            {/* =================================================
                NETLIFY REACT FORM
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
              {/* Required Netlify form name */}

              <input
                type="hidden"
                name="form-name"
                value="career-application"
              />

              {/* Honeypot */}

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

              {/* Full Name */}

              <div className="career-form-group">
                <label htmlFor="career-fullName">
                  Full Name *
                </label>

                <input
                  id="career-fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              {/* Email + Phone */}

              <div className="career-form-row">
                <div className="career-form-group">
                  <label htmlFor="career-email">
                    Email Address *
                  </label>

                  <input
                    id="career-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="career-form-group">
                  <label htmlFor="career-phone">
                    Phone Number *
                  </label>

                  <input
                    id="career-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971 XX XXX XXXX"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              {/* Position */}

              <div className="career-form-group">
                <label htmlFor="career-position">
                  Position *
                </label>

                <select
                  id="career-position"
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
                      key={job.title}
                      value={job.title}
                    >
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience */}

              <div className="career-form-group">
                <label htmlFor="career-experience">
                  Experience
                </label>

                <input
                  id="career-experience"
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="e.g. 2 years"
                />
              </div>

              {/* CV upload */}

              <div className="career-form-group">
                <label htmlFor="career-cv">
                  Upload CV *
                </label>

                <label
                  htmlFor="career-cv"
                  className="career-upload-box"
                >
                  <Upload size={24} />

                  <span>
                    {formData.cv
                      ? formData.cv.name
                      : "Choose your CV"}
                  </span>

                  <small>
                    PDF, DOC or DOCX — max 5 MB
                  </small>
                </label>

                <input
                  id="career-cv"
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleInputChange}
                  required
                  style={{ display: "none" }}
                />
              </div>

              {/* Message */}

              <div className="career-form-group">
                <label htmlFor="career-message">
                  Message
                </label>

                <textarea
                  id="career-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us a little about yourself..."
                  rows="5"
                />
              </div>

              {/* Error */}

              {formError && (
                <div className="career-form-error">
                  {formError}
                </div>
              )}

              {/* Success */}

              {successMessage && (
                <div className="career-form-success">
                  {successMessage}
                </div>
              )}

              {/* Submit */}

              <button
                type="submit"
                className="career-form-submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="career-submit-spinner"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="career-form-note">
                By submitting this application, you agree
                that AL FAN EMIRATES may review your
                application for suitable opportunities.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}