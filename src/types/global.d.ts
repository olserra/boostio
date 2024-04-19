declare interface IUser {
  name: string;
  email: string;
  image: string;
}

// Define the state interface
declare interface IState {
  user: IUser;
}

declare interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}
