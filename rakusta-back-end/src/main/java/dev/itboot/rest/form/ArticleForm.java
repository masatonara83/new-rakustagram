package dev.itboot.rest.form;

public class ArticleForm {
	
	private Long userId;

	private String content;
	
	private String tag;

	public Long getId() {
		return userId;
	}

	public void setId(Long userId) {
		this.userId = userId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	@Override
	public String toString() {
		return "ArticleForm [userId=" + userId + ", content=" + content + ", tag=" + tag + "]";
	}
	
	
}
