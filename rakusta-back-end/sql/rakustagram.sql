#usersテーブル
create table users (
  user_id serial not null,
  user_name varchar(50) not null,
  user_full_name varchar(50) not null,
  user_overview text,
  user_mail_address varchar(100) unique not null,
  user_registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  primary key(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

create table passwords (
    user_id BIGINT unsigned not null,
    password varchar(50) not null,
    foreign key fk_user_id(user_id) references users(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

create table user_images (
	user_image_id serial not null,
    user_id BIGINT unsigned not null,
    image_path text not null,
    primary key(user_image_id), 
    foreign key fk_user_id(user_id) references users(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


#articlesテーブル
CREATE TABLE articles (
  article_id serial not null,
  user_id BIGINT UNSIGNED not null,
  content text not null,
  article_post_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary key(article_id),
  FOREIGN KEY fk_user_id(user_id) REFERENCES users(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
#imagesテーブル
CREATE TABLE images (
  image_id serial not null,
  article_id BIGINT UNSIGNED not null,
  image_path text not null,
  primary key(image_id),
  foreign key fk_image_article_id(article_id) REFERENCES articles(article_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
#tagsテーブル
CREATE TABLE tags (
  tag_id serial not null,
  article_id BIGINT UNSIGNED not null,
  tag_name VARCHAR(30) not null,
  primary key(tag_id),
  foreign key fk_tag_article_id(article_id) REFERENCES articles(article_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
#commentsテーブル
CREATE TABLE comments (
  comment_id serial not null,
  user_id BIGINT UNSIGNED not null,
  article_id BIGINT UNSIGNED not null,
  comment text not null,
  comment_post_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary key(comment_id),
  foreign key fk_comment_user_id(user_id) REFERENCES users(user_id),
  foreign key fk_comment_artocle_id(article_id) REFERENCES articles(article_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
#favoritesテーブル
CREATE TABLE favorites (
  favorite_id serial not null,
  user_id BIGINT UNSIGNED not null,
  article_id BIGINT UNSIGNED not null,
  primary key(favorite_id),
  foreign key fk_favorite_user_id(user_id) REFERENCES users(user_id),
  foreign key fk_favorite_article_id(article_id) REFERENCES articles(article_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
#bookmarksテーブル
CREATE TABLE bookmarks (
  bookmark_id serial not null,
  user_id BIGINT UNSIGNED not null,
  article_id BIGINT UNSIGNED not null,
  primary key(bookmark_id),
  foreign key fk_bookmark_user_id(user_id) REFERENCES users(user_id),
  foreign key fk_bookmark_article_id(article_id) REFERENCES articles(article_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
#followsテーブル
CREATE TABLE follows (
  follow_id serial not null,
  following_id BIGINT UNSIGNED not null,
  follower_id BIGINT UNSIGNED not null,
  primary key(follow_id),
  foreign key fk_following_id(following_id) REFERENCES users(user_id),
  foreign key fk_followed_id(follower_id) REFERENCES users(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;