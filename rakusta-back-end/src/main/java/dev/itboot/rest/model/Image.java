package dev.itboot.rest.model;

/**
 * imageドメイン
 * @author naramasato
 *
 */
public class Image {

	private Integer imageId;
	private Integer articleId;
	private String 	imagePath;
	
	//getter and setter
	public Integer getImageId() {
		return imageId;
	}
	public void setImageId(Integer imageId) {
		this.imageId = imageId;
	}
	public Integer getArticleId() {
		return articleId;
	}
	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	@Override
	public String toString() {
		return "Image [imageId=" + imageId + ", articleId=" + articleId + ", imagePath=" + imagePath + "]";
	}
	
	
}

