import '../../styles/Resume.css'

export default function Resume() {
  return (
    <div className='p-5 col-12 resume-container'>
      <h3>Download my resume</h3>
      <p  className="mt-5 pt-5">
        <a href="/Larroque Resume.pdf" download="Larroque Resume">
          Click
        </a>
      </p>
    </div>
  );
}