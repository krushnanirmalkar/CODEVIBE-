import React, { useRef, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom"; // React Router v6+

// Default certificate background
const defaultBackgroundUrl = "src/assets/completion certificate.png";
// Pink badge component
const PinkBadge = () => (
  <div style={{
    position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)",
    display: "flex", alignItems: "center", justifyContent: "center"
  }}>
    <div style={{
      width: "110px", height: "110px", borderRadius: "50%",
      background: "linear-gradient(135deg, #ec4899, #d946ef)",
      boxShadow: "0 0 60px rgba(236,72,153,0.6)"
    }} />
  </div>
);

export default function Certificate({ backgroundUrl = defaultBackgroundUrl }) {
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState(null);
  const [progress, setProgress] = useState(null);
  const certRef = useRef(null);
  const navigate = useNavigate(); // React Router v6+
  const poweredBy = "CODEVIBE!!! & BEWITHMEit";

  // Fetch certificate/progress from API
  const fetchData = async () => {
    if (!email) {
      setError("Please enter an email to verify progress.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const certRes = await axios.post("http://localhost:5002/api/certificate", {
        email,
        courseName,
      });
      const cert = certRes.data;
      const displayName =
        studentName?.trim() || cert.studentName || "Student";
      setInfo({ ...cert, studentName: displayName });

      const progRes = await axios.get(
        `http://localhost:5002/api/progress/${email}`
      );
      setProgress(progRes.data);
    } catch (e) {
      setError(
        e?.response?.data?.message || e.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  // Export certificate as PDF
  const downloadPDF = async () => {
    if (!certRef.current) return;
    const canvas = await html2canvas(certRef.current, {
      scale: 2,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(
      `${info?.studentName || "certificate"}-${courseName || "course"}.pdf`
    );
  };

  // Helpers
  const avgScore =
    progress?.scores && Object.values(progress.scores).length > 0
      ? Math.round(
          Object.values(progress.scores).reduce((a, b) => a + b, 0) /
            Object.values(progress.scores).length
        )
      : 0;

  const completedLessons =
    progress?.completedLessons && Array.isArray(progress.completedLessons)
      ? progress.completedLessons.length
      : 0;

  // Navigation for report
  const goToReport = () => {
    if (email && courseName) {
      navigate(`/report/${encodeURIComponent(email)}?course=${encodeURIComponent(courseName)}`);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", width: "100%", color: "white", padding: "40px 16px",
      fontFamily: "'Segoe UI', 'Arial', sans-serif",
      background: "linear-gradient(to bottom, #111, #2a2a3b)",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Input Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "16px",
          marginBottom: "24px",
        }}>
          <input
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student Name"
            style={{
              background: "rgba(39, 39, 54, 0.82)",
              border: "1px solid #ec489969",
              borderRadius: "16px",
              padding: "12px",
              outline: "none",
              fontSize: "18px",
            }}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Student Email"
            style={{
              background: "rgba(39, 39, 54, 0.82)",
              border: "1px solid #ec489969",
              borderRadius: "16px",
              padding: "12px",
              outline: "none",
              fontSize: "18px",
            }}
          />
          <select
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            style={{
              background: "rgba(39, 39, 54, 0.82)",
              border: "1px solid #ec489969",
              borderRadius: "16px",
              padding: "12px",
              outline: "none",
              fontSize: "18px",
            }}
          >
            <option value="">Select Course</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="OOP">OOP</option>
            <option value="DSA">DSA</option>
            <option value="DBMS">DBMS</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Node.js">Node.js</option>
            <option value="Express.js">Express.js</option>
            <option value="React.js">React.js</option>
          </select>
          <button
            onClick={fetchData}
            disabled={loading || !courseName}
            style={{
              borderRadius: "16px",
              background: "linear-gradient(90deg, #ec4899, #d946ef)",
              opacity: loading ? 0.5 : 1,
              fontWeight: 600,
              color: "#fff",
              padding: "12px",
              fontSize: "18px",
              cursor: loading || !courseName ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Generating..." : "Generate Certificate"}
          </button>
        </div>
        {/* Error Box */}
        {error && (
          <div style={{
            marginBottom: "20px",
            color: "#ff5670",
            background: "rgba(182, 33, 62, 0.17)",
            border: "1px solid #c01a37",
            borderRadius: "12px",
            padding: "10px",
            fontSize: "15px",
          }}>
            {error}
          </div>
        )}
        {/* Certificate Preview */}
        <div ref={certRef} style={{
          position: "relative",
          borderRadius: "20px",
          boxShadow: "0 0 30px rgba(236,72,153,0.22)",
          overflow: "hidden",
          border: "2px solid #ec489997",
          marginBottom: "24px",
          background: "#252542",
          minHeight: "680px",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${backgroundUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.97,
          }}/>
          <div style={{
            position: "relative",
            padding: "32px",
            minHeight: "680px",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              position: "relative",
              flex: 1,
              borderRadius: "20px",
              border: "2px solid #f472b6d2",
              padding: "40px 32px",
              background: "rgba(0,0,0,0.44)",
            }}>
              <PinkBadge />
              {/* Heading */}
              <div style={{ textAlign: "center", marginTop: "52px" }}>
                <h1 style={{
                  fontSize: "2.8rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textShadow: "0 2px 12px #ec489970"
                }}>
                  Certificate of <span style={{ color: "#ec4899" }}>Completion</span>
                </h1>
                <div style={{ marginTop: "8px", opacity: 0.72, fontSize: "18px" }}>
                  This certifies that
                </div>
              </div>
              {/* Student Info */}
              <div style={{ marginTop: "32px", textAlign: "center" }}>
                <div style={{
                  fontSize: "2.0rem",
                  fontWeight: 700,
                  color: "#eab5ee",
                  textShadow: "0 1px 8px #d946ef",
                  textDecoration: "underline"
                }}>
                  {info?.studentName || studentName || "Student Name"}
                </div>
                <div style={{ marginTop: "10px", opacity: 0.8 }}>
                  has successfully completed
                </div>
                <div style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  marginTop: "6px",
                  color: "#ec4899",
                  textDecoration: "underline"
                }}>
                  {courseName || "Course Name"}
                </div>
              </div>
              {/* Progress Stats */}
              <div style={{
                marginTop: "46px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "18px",
                fontSize: "16px",
              }}>
                <div style={{
                  background: "rgba(34,34,45,0.72)",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid #ec489960",
                }}>
                  <div style={{
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#d946ef"
                  }}>
                    Completed Lessons
                  </div>
                  <div style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
                    {completedLessons}
                  </div>
                </div>
                <div style={{
                  background: "rgba(34,34,45,0.72)",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid #ec489960",
                }}>
                  <div style={{
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#d946ef"
                  }}>
                    Average Score
                  </div>
                  <div style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
                    {avgScore}%
                  </div>
                </div>
                <div style={{
                  background: "rgba(34,34,45,0.72)",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid #ec489960",
                }}>
                  <div style={{
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#d946ef"
                  }}>
                    Course
                  </div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                    {courseName || "—"}
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div style={{
                marginTop: "38px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                alignItems: "end",
                gap: "18px"
              }}>
                <div style={{
                  background: "rgba(0,0,0,0.52)",
                  borderRadius: "12px",
                  padding: "12px 18px",
                  border: "1px solid #ec489960",
                  minHeight: "86px",
                }}>
                  <div style={{ fontWeight: 600, marginBottom: "6px", color: "#ec4899" }}>
                    Feedback
                  </div>
                  <div style={{
                    fontSize: "15px",
                    opacity: 0.91,
                    lineHeight: 1.4
                  }}>
                    {info?.feedbackMessage ||
                      "Your personalized feedback will appear here after generating the certificate."}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.69,
                  }}>
                    Powered by
                  </div>
                  <div style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#c026d3"
                  }}>
                    {poweredBy}
                  </div>
                  <button
                    onClick={goToReport}
                    style={{
                      color: "#ec4899",
                      textDecoration: "underline",
                      marginTop: "7px",
                      display: "inline-block",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "16px"
                    }}
                    disabled={!email || !courseName}
                  >
                    View Report
                  </button>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}>
                    <div style={{ height: "16px" }} />
                    <div style={{
                      width: "120px",
                      height: "2px",
                      background: "#ec4899",
                    }} />
                    <div style={{
                      marginTop: "6px",
                      fontSize: "14px",
                      color: "#eab5ee",
                    }}>
                      Jiya (Signature)
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                marginTop: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "13px",
                opacity: 0.65,
              }}>
                <div>Issue Date: {new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div style={{ marginTop: "16px", display: "flex", gap: "16px" }}>
          <button
            onClick={() => window.print()}
            style={{
              borderRadius: "12px",
              background: "linear-gradient(90deg,#ec4899,#d946ef)",
              color: "#fff",
              padding: "12px 22px",
              fontWeight: "600",
              fontSize: "17px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Print
          </button>
          <button
            onClick={downloadPDF}
            style={{
              borderRadius: "12px",
              background: "linear-gradient(90deg,#ec4899,#d946ef)",
              color: "#fff",
              padding: "12px 22px",
              fontWeight: "600",
              fontSize: "17px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
