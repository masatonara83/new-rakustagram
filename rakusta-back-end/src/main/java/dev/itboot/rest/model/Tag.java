package dev.itboot.rest.model;

/**
 * Tagドメイン
 * @author naramasato
 *
 */
public class Tag {

	private Integer tagId;
	private Integer articleId;
	private String 	tagName;
	
	//getter and setter
	public Integer getTagId() {
		return tagId;
	}
	public void setTagId(Integer tagId) {
		this.tagId = tagId;
	}
	public Integer getArticleId() {
		return articleId;
	}
	public void setArticleId(Integer articleId) {
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

