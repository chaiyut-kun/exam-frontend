interface StatusIF {
  statusId: string;
  content: string;
  createdBy: {
    email: string;
    _id: string;
  }
  likes: object[];
  comments: object[];
}



export type { StatusIF };
