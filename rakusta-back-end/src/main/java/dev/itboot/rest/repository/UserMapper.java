package dev.itboot.rest.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dev.itboot.rest.form.LoginForm;
import dev.itboot.rest.model.User;

@Mapper
public interface UserMapper {

	
	/**
	 * ユーザー情報を検索
	 * @param userId
	 * @return 検索したユーザー情報
	 */
	public User findById(@Param("userId") Long userId);
	
	/**
	 * ログイン認証
	 * @param form
	 * @return　メールとパスワードからuserの情報を取得
	 */
	public User loginAuth(LoginForm form);
	
	/**
	 * ユーザーの情報を全件検索
	 * @return
	 */
	public List<User> findAllUsers();
	
	/**
	 * ユーザーを１件登録
	 * @param user
	 * @return 自動採番されたuserIdがUserモデルにセットされる
	 */
	public Integer insert(User user);
	
	/**
	 * ユーザー情報を更新します
	 * @param user
	 */
	public void saveUser(User user);
	
	/**
	 * フォローしていないユーザーを出力
	 * @param followingUserIdList
	 * @param userId
	 * @return フォローしていないユーザー情報が返されます
	 */
	public List<User> notFollowingUsers(
			@Param("followingUserIdList") List<Long> followingUserIdList, 
			@Param("userId") Long userId);
	
	/**
	 * 投稿・フォロー・フォロワー数を出力
	 * @param userId
	 * @return　投稿・フォロー・フォロワー数
	 */
	public User countCheck(Long userId);
	
	/**
	 * idとパスワードからユーザーがいるか確認
	 * @param userId password
	 * @return
	 */
	public User findByUserIdAndPassword(@Param("userId") Long userId, @Param("password") String password);
	
}
