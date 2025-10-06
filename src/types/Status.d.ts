interface StatusIF {
  _id: string;
  content: string;
  createdBy: {
    email: string;
    _id: string;
  };
  like: { 
    _id: string
    email: string
  }[];
  comment: object[];
}

export type { StatusIF };
