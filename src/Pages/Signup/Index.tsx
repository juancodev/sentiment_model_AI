import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Firebase/firebase.config";
import { Alert, AlertIcon, AlertTitle, ChakraProvider } from "@chakra-ui/react";
import { useAuth } from "@/Hooks/useAuth";
import { userRegister, errorHandler } from "@/Types";
import logoImg from "@/Assets/Logo sin fondo JM.png";

const Signup = (): JSX.Element => {
  const [userData, setUserData] = useState<userRegister>({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<errorHandler>({
    status: false,
    message: "",
  });
  const { setUserSession } = useAuth();
  const navigate = useNavigate();

  const handleFieldFullName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      fullName: event.target.value,
    });
  };

  const handlerFieldEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      email: event.target.value,
    });
  };

  const handlerFieldPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      password: event.target.value,
    });
  };

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setError({
        ...error,
        status: false,
        message: "",
      });
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
          const user: User = userCredential.user;
          setUserSession(user);
        })
        .then(() => navigate("/", { replace: true }))
        .catch((err) => {
          setError({
            ...error,
            status: true,
            message: err.message,
          });
        });
    } catch (error) {
      console.log(error);
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
                  Regístrate con tu Cuenta
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleRegister}
                >
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Juan Montilla"
                      required
                      onChange={handleFieldFullName}
                    />
                  </div>
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
                      onChange={handlerFieldEmail}
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
                      onChange={handlerFieldPassword}
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
                    Regístrate
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    ¿Ya tienes una cuenta?{" "}
                    <Link
                      to={"/login"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Inicia Sesión
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

export { Signup };
