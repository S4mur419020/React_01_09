import React, { useState, useEffect, createContext } from 'react';
import myAxios, { getAuthHeaders } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [serverError, setServerError] = useState(null);

  function login(adat) {
    setLoading(true);
    setServerError(null);
    myAxios
      .post("/users/login", adat)
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
        window.location.href = "/";
      })
      .catch(function (error) {
        hibakezeles(error);
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }
  function register(adat) {
    setLoading(true);
    setServerError(null);
    myAxios.post("/users/register", adat)
      .then(function (response) {
        window.location.href = "/login";
      })
      .catch(function (error) {
        hibakezeles(error);
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });

  }
  function loadUser() {
    const savedToken = localStorage.getItem("token");

    if (!savedToken) {
      setLoading(false);
      setUser(null);
      return;
    }

    setToken(savedToken);
    setLoading(true);

    myAxios
      .get("/users/me", {
        headers: getAuthHeaders(),
      })
      .then(function (response) {
        const fetchedUser = response.data;

        if (fetchedUser) {
          setUser(fetchedUser);
        } else {
          setUser(null);
          localStorage.removeItem("token");
        }
      })
      .catch(function (error) {
        setUser(null);
        localStorage.removeItem("token");
      })
      .finally(function () {
        setLoading(false);
      });
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    window.location.reload();
  }
  function hibakezeles(error) {
    const status = error.response?.status;
    if (status === 400) setServerError("Hibás adatok");
    else if (status === 401)
      setServerError(
        "A hitelesítési token érvénytelen vagy lejárt. Menj a login oldalra!"
      );
    else if (status === 403) setServerError("Tiltott művelet");
    else if (status === 404) setServerError("Nem található");
    else if (status === 422) setServerError("Validációs hiba");
    else if (status === 500) setServerError("Szerver hiba");
    else setServerError("Ismeretlen hiba");

  }
  return (
    <AuthContext.Provider value={{ login, register, loading, user, logout, serverError, loadUser, hibakezeles}}>
      {children}
    </AuthContext.Provider>
  )
}