export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="about-hero">
        <h1>About ArcherStore</h1>
        <p>Your trusted modern tech marketplace.</p>
      </div>

      <div className="container about-content">
        {/* INTRO */}
        <section>
          <h2>Who We Are</h2>
          <p>
            ArcherStore is a modern e-commerce platform built to provide
            premium gadgets with a smooth shopping experience. This project
            demonstrates React concepts like Routing, Redux, Hooks and
            State Management.
          </p>
        </section>

        {/* FEATURES */}
        <section className="about-features">
          <div className="feature-box">
            <h3>⚡ Fast Performance</h3>
            <p>Built using modern React architecture.</p>
          </div>

          <div className="feature-box">
            <h3>🔒 Secure System</h3>
            <p>Reliable and safe shopping experience.</p>
          </div>

          <div className="feature-box">
            <h3>🎯 Clean UI</h3>
            <p>Designed with simplicity and usability in mind.</p>
          </div>
        </section>

        {/* MISSION */}
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to build fast, scalable and user-friendly web
            applications while learning real-world full-stack development.
          </p>
        </section>
      </div>
    </>
  );
}