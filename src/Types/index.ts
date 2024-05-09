import { User } from "firebase/auth"
import { responseDataFetch } from "@/Interface/Index"

export type firebaseConfigInitialize = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export type childrenProps = {
  children: JSX.Element | JSX.Element[];
}

export type authValuesProps = {
  userSession: User | null;
  logout: () => void;
  setUserSession: React.Dispatch<React.SetStateAction<User | null>>;
}

export type userRegister = {
  fullName: string;
  email: string;
  password: string;
}

export type userLogin = {
  email: string;
  password: string;
}

export type contentProps = {
  records: string[];
}

export type tableProps = {
  records?: string[];
  selectedOption: string
  responseData?: [
    {
      label: string;
      score: number;
    }
  ];
}

export type tablePropsData = {
  records?: string[];
  selectedOption: string
  responseData?: responseDataFetch[]
}

export type errorHandler = {
  status: boolean,
  message: string
}