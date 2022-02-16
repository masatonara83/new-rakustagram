export type User = {
  userId: number;
  userName: string;
  userFullName: string;
  userOverview: string;
  userMailAddress: string;
  userRegistrationDate: number;
  updateDate: number;
  password: {
    user_id: number;
    password: string;
  };
  image: {
    imagePath: string;
    userId: number
  };
  articleCount: number;
  followingCount: number;
  followerCount: number;
  followList: [
    {
      followId: number;
      followingId: number;
      followerId: number;
      user: string
    }
  ];
  articleList: [
    {
      articleId: number;
      userId: number;
      content: string;
      articlePostDate: number;
      counrId: number;
      user: string;
      imageList: [
        {
          imageId: number;
          articleId: number;
          imagePath: string
        }
      ];
      tagList: [
        {
          tagId: number;
          articleId: number;
          tagName: string
        }
      ];
      favoriteList: [
        {
          favoriteId: number;
          userId: number;
          articleId: number;
          user: string
        }
      ];
      commentList: [
        {
          commentId: number;
          userId: number;
          articleId: number;
          comment: string;
          commentPostDate: number;
          user: string
        }
      ]
    }
  ]
}