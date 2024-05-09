import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Firebase/firebase.config";
import { Alert, AlertIcon, AlertTitle, ChakraProvider } from "@chakra-ui/react";
import { useAuth } from "@/Hooks/useAuth";
import logoImg from "@/Assets/Logo sin fondo JM.png";
import { userLogin, errorHandler } from "@/Types";

const Login = (): JSX.Element => {
  const [userData, setUserData] = useState<userLogin>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<errorHandler>({
    status: false,
    message: "",
  });
  const { setUserSession } = useAuth();
  const navigate = useNavigate();

  const handleFieldEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setUserData({
        ...userData,
        email: event.target.value,
      });
    }
  };

  const handleFieldPassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setUserData({
        ...userData,
        password: event.target.value,
      });
    }
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setError({
        ...error,
        status: false,
        message: "",
      });
      signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((response) => {
          setUserSession(response.user);
        })
        .then(() => navigate("/", { replace: true }))
        .catch((err) => {
          setError({
            ...error,
            status: true,
            message: err.message,
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <ChakraProvider>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="w-20 h-20 mr-2" src={logoImg} alt="logo" />
              Technical Test Genios
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Inicia Sesión con tu Cuenta
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="example@mail.com"
                      required
                      onChange={handleFieldEmail}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={handleFieldPassword}
                    />
                  </div>
                  <div>
                    {error.status && (
                      <>
                        <Alert status="error">
                          <AlertIcon />
                          <AlertTitle>{error.message.slice(9)}</AlertTitle>
                        </Alert>
                      </>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Inicia Sesión
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    ¿No tienes una cuenta todavía?{" "}
                    <Link
                      to={"/signup"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Regístrate
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ChakraProvider>
    </>
  );
};

export { Login };
