import React, { useState } from 'react';
import '../styles/signup.css';
import { Link } from 'react-router-dom';

function Signup(props) {
  let [authMode, setAuthMode] = useState('signin');

  const changeAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  if (authMode === 'signin') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar Sesion</h3>
            <div className="text-center">
              No esta registrado aun?
              <span className="link-primary" onClick={changeAuthMode}>
                Registro
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/profile">
                <button className="btn">Ingresar</button>
              </Link>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registro</h3>
          <div className="text-center">
            Ya esta registrado?{' '}
            <span className="link-primary" onClick={changeAuthMode}>
              Inicar sesion
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Nombre</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.j Pocheche"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn">
              Registrarse
            </button>
          </div>
          <p className="text-center mt-2">
            Olvido su <a href="#">Contraseña?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
