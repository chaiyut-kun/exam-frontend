interface StatusIF {
  _id: string;
  content: string;
  createdBy: {
    email: string;
    _id: string;
  }
  like: object[];
  comment: object[];
}



export type { StatusIF };
