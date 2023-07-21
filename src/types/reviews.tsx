type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TReviews = {
      id: string;
      date: string;
      user: User;
      comment: string;
      rating: number;
};
