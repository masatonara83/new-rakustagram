package dev.itboot.rest.model;

/**
 * Tagドメイン
 * @author naramasato
 *
 */
public class Tag {

	private Long articleId;
	private String 	tagName;
	
	//getter and setter
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
		return "Tag [" +  ", articleId=" + articleId + ", tagName=" + tagName + "]";
	}
	
	
}

