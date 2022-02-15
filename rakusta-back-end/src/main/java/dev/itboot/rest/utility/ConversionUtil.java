package dev.itboot.rest.utility;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Base64;

import org.springframework.web.multipart.MultipartFile;

import dev.itboot.rest.exception.NotFoundException;

/**
 * 画像や文字列を変換するクラス
 * @author naramasato
 *
 */
public class ConversionUtil {
	
	/**
	 * スペースで分けた２単語以上の文字列を配列に変換
	 * @param stringCode
	 * @return　配列に変換された文字
	 */
	public static String[] stringConversion(String stringCode) {
		if(stringCode == null) {
			return null;
		}
		
		String keyword = stringCode.replaceAll("　", " ").replaceAll("\\s{2,}", " ").trim();
		String[] keyWords = keyword.split(" ");
		return keyWords;
	}

	/**
	 * 画像をBase64に変換処理するメゾット
	 * @param file
	 * @return バイバリーデータ化した画像ファイル
	 * @throws IOException
	 */
	public static String imageConversion(MultipartFile file) throws IOException {
	
		String fileEntension = null;
		
		try {
			fileEntension = getEntension(file.getOriginalFilename());
		} catch (Exception e) {
			throw new NotFoundException("ファイル名が正しくありません");
		}
		
		String base64FileString = Base64.getEncoder().encodeToString(file.getBytes());
		if("jpg".equals(fileEntension) || "jpeg".equals(fileEntension)) {
			return "data:image/jpeg;base64," + base64FileString;
		} else if("png".equals(fileEntension)) {
			return base64FileString = "data:image/png;base64," + base64FileString;
		} else {
			return null;
		}
	}
	
	private static String getEntension(String fileName) throws Exception {
		if(fileName == null) {
			throw new FileNotFoundException("ファイル名がありません");
		}
		
		int point = fileName.lastIndexOf(".");
		if(point == -1) {
			throw new FileNotFoundException("形式が正しくありません");
		}
		return fileName.substring(point + 1);
	}
}
