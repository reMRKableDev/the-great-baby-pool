/* INTERFACE */
export interface LayoutProps {
  children: React.ReactNode;
}

export interface EmojiProps {
  label?: string;
  symbol: string;
}

export interface HomeProps {
  fieldsData: Array<any>;
  total: Array<number>;
  percentage: Array<number>;
}

export interface Record {
  id: string;
  createdTime: string;
  fields: Baby;
}

export interface Baby {
  "Baby Date Of Birth": string;
  "Baby Gender": "Boy" | "Girl";
  Name: string;
}

/* TYPE */
export type Props = {
  data: Array<Baby>;
};

export type Column = {
  title: string;
  data: Array<Baby>;
};
