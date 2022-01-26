package dev.itboot.rest.model;

/**
 * imageドメイン
 * @author naramasato
 *
 */
public class Image {

	private Long imageId;
	private Long articleId;
	private String 	imagePath;
	
	//getter and setter
	public Long getImageId() {
		return imageId;
	}
	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}
	public Long getArticleId() {
		return articleId;
	}
	public void setArticleId(Long articleId) {
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

