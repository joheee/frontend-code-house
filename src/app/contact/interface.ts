export interface ContactInterface {
  className?: string;
}

export interface ContactTextInterface {
  label: string;
  placeholder: string;
  onChange: (e:string) => void;
}
