export default function About() {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">
              <i className="fas fa-info-circle me-3 text-primary"></i>
              About Rick & Morty Explorer
            </h2>
          </div>

          <div className="card shadow">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-4 text-center mb-4">
                  <i className="fas fa-rocket fa-4x text-primary mb-3"></i>
                </div>
                <div className="col-md-8">
                  <h4 className="mb-3">About the App</h4>
                  <p className="lead">
                    This is a beautiful and interactive single-page application that allows users to explore,
                    filter, and view details about characters from the Rick and Morty universe using the
                    public Rick and Morty API.
                  </p>
                  <p>
                    Built with modern React and JavaScript, this app demonstrates advanced concepts including:
                  </p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>React Router for dynamic routing</li>
                    <li><i className="fas fa-check text-success me-2"></i>API integration and data fetching</li>
                    <li><i className="fas fa-check text-success me-2"></i>Search and filtering functionality</li>
                    <li><i className="fas fa-check text-success me-2"></i>Pagination with URL persistence</li>
                    <li><i className="fas fa-check text-success me-2"></i>Form validation and state management</li>
                    <li><i className="fas fa-check text-success me-2"></i>Dark/Light mode toggle</li>
                    <li><i className="fas fa-check text-success me-2"></i>Responsive design with Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow mt-4">
            <div className="card-body p-4">
              <h4 className="mb-4">
                <i className="fas fa-user-graduate me-2"></i>
                Developer Information
              </h4>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                         style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-user fa-2x"></i>
                    </div>
                    <h5 className="fw-bold text-primary">Md. Mehedi Hasan Rafi</h5>
                    <p className="text-muted mb-0">Computer Science & Engineering Student</p>
                    <p className="text-muted">Full Stack Developer & Rick and Morty Enthusiast</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-university text-info me-2"></i>
                      University:
                    </h6>
                    <p className="mb-0">Ahsanullah University of Science and Technology</p>
                  </div>

                  <div className="mb-3">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-graduation-cap text-success me-2"></i>
                      Department:
                    </h6>
                    <p className="mb-0">Computer Science & Engineering (CSE)</p>
                  </div>

                  <div className="mb-3">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-calendar-alt text-warning me-2"></i>
                      Semester:
                    </h6>
                    <p className="mb-0">3rd Year, 1st Semester</p>
                  </div>

                  <div className="mb-3">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-id-card text-danger me-2"></i>
                      Student ID:
                    </h6>
                    <p className="mb-0">20220204029</p>
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="text-center">
                <p className="mb-0">
                  <strong>Course:</strong> CSE-3100 - Modern Web Application Development<br/>
                  <strong>Focus:</strong> React, JavaScript, API Integration, and UX Design
                </p>
              </div>
            </div>
          </div>

          <div className="card shadow mt-4">
            <div className="card-body p-4 text-center">
              <h4 className="mb-3">
                <i className="fas fa-quote-left me-2"></i>
                Favorite Rick & Morty Quote
              </h4>
              <blockquote className="blockquote">
                <p className="mb-3 fst-italic fs-5">
                  "Wubba Lubba Dub Dub!"
                </p>
                <footer className="blockquote-footer">
                  Rick Sanchez in <cite title="Source Title">Rick and Morty</cite>
                </footer>
              </blockquote>
              <small className="text-muted">
                A classic catchphrase that perfectly captures Rick's chaotic energy and the show's irreverent humor.
              </small>
            </div>
          </div>

          <div className="text-center mt-4">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card border-primary">
                  <div className="card-body text-center">
                    <i className="fas fa-users fa-2x text-primary mb-2"></i>
                    <h6>Characters</h6>
                    <small className="text-muted">826+ Characters</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-success">
                  <div className="card-body text-center">
                    <i className="fas fa-tv fa-2x text-success mb-2"></i>
                    <h6>Episodes</h6>
                    <small className="text-muted">51+ Episodes</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-info">
                  <div className="card-body text-center">
                    <i className="fas fa-globe fa-2x text-info mb-2"></i>
                    <h6>Locations</h6>
                    <small className="text-muted">126+ Locations</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
