import "./Register.css";
import axios from "axios";

function Register() {
  const submitHandler = function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log("submit form");
    console.log(e.target);

    axios
      .post("http://localhost:3030/register", {
        data: formData,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card">
          <div className="card-header">Register</div>
          <div className="card-body px-4">
            <form method="post" id="form" onSubmit={submitHandler}>
              <div className="row px-5">
                <div className="col-12">
                  <h2>Create your account</h2>
                  <p className="fs-6">
                    Start Kyoo for free. Already have an account?
                    <a href="#test">Login Here</a>
                  </p>
                </div>

                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">
                          FIRST NAME
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          id="first_name"
                          placeholder="ex. John"
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="mb-3">
                        <label htmlFor="last_name" className="form-label">
                          LAST NAME
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          id="last_name"
                          placeholder="ex. Doe"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="ex. johndoe@kyoo.com"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          SET PASSWORD
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="set your password"
                        />
                        <small
                          id="passwordHelp"
                          className="form-text text-muted"
                        >
                          Password should be at least 6 characters.
                        </small>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button className="btn btn-secondary w-100 py-3">
                        Sign-up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer border-top-0 mt-5">
            <div className="row text-center">
              <small>
                By proceeding, you agree to our&nbsp;
                <a href="#terms_and_condition">Terms of Service</a>
                &nbsp;and&nbsp;
                <a href="#privacy_policy">Privacy Policy</a>
                <br />
                2022 Kyoo All Rights Reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
