export type Article = {
    id: number;
    userId: number;
    content: string;
    articlePostDate: Date;
    user: {
      userId: number;
      userName: string;
      userFullName: string;
      userOverview: string;
      userMailAddress: string;
      userPassword: string;
      userRegistrationDate: Date;
      updateDate: Date;
      userImagePath: string;
      followList: [
        {
          followId: number;
          followingId: number;
          followerId: number;
          user: string;
        }
      ];
      articleList: [
        string
      ]
    };
    imageList: [
      {
        imageId: number;
        articleId: number;
        imagePath: string;
      }
    ];
    tagList: [
      {
        tagId: number;
        articleId: number;
        tagName: string;
      }
    ];
    favoriteList: [
      {
        favoriteId: number;
        userId: number;
        articleId: number;
        user: {
          userId: number;
          userName: string;
          userFullName: string;
          userOverview: string;
          userMailAddress: string;
          userPassword: string;
          userRegistrationDate: Date;
          updateDate: Date;
          userImagePath: string;
          followList: [
            {
              followId: number;
              followingId: number;
              followerId: number;
              user: string;
            }
          ];
          articleList: [
            string
          ]
        }
      }
    ];
    commentList: [
      {
        commentId: number;
        userId: number;
        articleId: number;
        comment: string;
        commentPostDate: Date;
        user: {
          userId: 0;
          userName: string;
          userFullName: string;
          userOverview: string;
          userMailAddress: string;
          userPassword: string;
          userRegistrationDate: Date;
          updateDate: Date;
          userImagePath: string;
          followList: [
            {
              followId: number;
              followingId: number;
              followerId: number;
              user: string
            }
          ];
          articleList: [
            string
          ]
        }
      }
    ]
  }