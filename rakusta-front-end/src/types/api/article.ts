  export type Article = {
    articleId: number;
    userId: number;
    content: string;
    articlePostDate: number;
    counrId: number;
    user: {
      userId: number;
      userName: string;
      userFullName: string;
      userOverview: string;
      userMailAddress: string;
      userRegistrationDate: number;
      updateDate: number;
      password: {
        passwordId: number;
        password: string;
      };
      image: {
        userImageId: number;
        imagePath: string
      };
      articleCount: number;
      followingCount: number;
      followerCount: number;
      followList: [
        {
          followingId: number;
          followerId: number;
          user: string
        }
      ];
      articleList: [
        string
      ]
    };
    imageList: [
      {
        articleId: number;
        imagePath: string
      }
    ];
    tagList: [
      {
        articleId: number;
        tagName: string
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
          userRegistrationDate: number;
          updateDate: number;
          password: {
            passwordId: number;
            password: string
          };
          image: {
            userImageId: number;
            imagePath: string
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
        commentPostDate: number;
        user: {
          userId: number;
          userName: string;
          userFullName: string;
          userOverview: string;
          userMailAddress: string;
          userRegistrationDate: number;
          updateDate: number;
          password: {
            passwordId: number;
            password: string;
          };
          image: {
            userImageId: number;
            imagePath: string;
          };
          articleCount: number;
          followingCount: number;
          followerCount: number;
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
    ]
  }