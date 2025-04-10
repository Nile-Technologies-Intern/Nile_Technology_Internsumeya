const JobListing = ({ job }) => {
  return (
    <div className="job-listing">
      <h2>{job.title}</h2>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Type:</strong> {job.type}
      </p>
      <p>{job.description}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobListing;
