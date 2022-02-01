package dev.itboot.rest.model;

/**
 * Tagドメイン
 * @author naramasato
 *
 */
public class Tag {

	private Long tagId;
	private Long articleId;
	private String 	tagName;
	
	//getter and setter
	public Long getTagId() {
		return tagId;
	}
	public void setTagId(Long tagId) {
		this.tagId = tagId;
	}
	public Long getArticleId() {
		return articleId;
	}
	public void setArticleId(Long articleId) {
		this.articleId = articleId;
	}
	public String getTagName() {
		return tagName;
	}
	public void setTagName(String tagName) {
		this.tagName = tagName;
	}
	@Override
	public String toString() {
		return "Tag [tagId=" + tagId + ", articleId=" + articleId + ", tagName=" + tagName + "]";
	}
	
	
}

