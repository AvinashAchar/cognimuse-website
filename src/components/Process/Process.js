import "./Process.css";

const steps = [
  { no: "01", title: "Client Engagement" },
  { no: "02", title: "Feasibility and Simulation" },
  { no: "03", title: "Detailed Design and Build" },
  { no: "04", title: "Deployment and Launch" },
  { no: "05", title: "Performance and Lifecycle Support" },
];

function Process() {
  return (
    <section className="process" id="process">
      {/* TOP CONTENT */}
      <div className="process-top">
        <h2>
          How We Turn <br /> Ideas into Results
        </h2>

        <p className="process-desc">
          At CogniMuse, we believe in a clear, transparent process that delivers
          real outcomes — no guesswork. Our approach ensures you’re supported at
          every step of the journey, from concept to commissioning.
        </p>
      </div>

      {/* PROCESS STEPS */}
      <div className="process-steps-row"  >
        {steps.map((step, index) => (
          <div 
            key={step.no}
            className={`process-card step-${index + 1}`}
          >
            <span className="step-no">{step.no}</span>
            <h4>{step.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
