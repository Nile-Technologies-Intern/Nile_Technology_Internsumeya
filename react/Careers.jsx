import { useState, useEffect } from "react";
import JobListing from "../components/JobListing";
import axios from "axios";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="careers-page">
      <h1>Join Our Team</h1>
      {loading ? (
        <p>Loading job listings....</p>
      ) : (
        <div className="job-listings">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Careers;
