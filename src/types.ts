export interface IValues {
  name?: string;
  age?: string;
  [key: string]: string | undefined;

}

export interface IRegister {
  required?: string;
}

export interface IUseFormReturn  {
    handleSubmit: (callback: (data:IValues) => void) => (event: React.FormEvent<HTMLFormElement>) => void;
    register: (key: keyof IValues, options?: IRegister) => {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    errors: IValues;
    reset : ()=>void;
};